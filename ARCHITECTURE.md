# Architecture — astrowind (Steffi Haberstock public website)

This is the deep structural map of the `astrowind` codebase. It is meant to be read
on demand when you need to understand _how_ the site is wired. For the short
orientation and the always-apply rules, see `CLAUDE.md` and `PROJECT_RULES.md`; for
cross-project (astrowind ↔ sanity) context, see the umbrella `../CLAUDE.md`.

> **Scope:** this document covers the Astro website only. The Sanity Studio and its
> schemas live in the sibling `../sanity/` package and are described in the umbrella
> file.

---

## 1. Overview

- **Framework:** Astro 5 (`^5.0.3`), `output: 'server'` — full **SSR**, not static.
- **Adapter:** `@astrojs/vercel/serverless` (deployed to Vercel serverless).
- **Styling:** Tailwind via `@astrojs/tailwind` with `applyBaseStyles: false`.
- **Content:** Sanity CMS, read over GROQ **at request time** (`useCdn: false`), so
  Studio edits appear on the next request.
- **Package:** `@onwidget/astrowind` (forked from the AstroWind template).
- **Node:** `^18.17.1 || ^20.3.0 || >= 21.0.0`.

The single most important idea: **every page is an SSR route that pulls a content
document from Sanity through a hand-written GROQ projection, then maps it onto widget
components.** Understand that pipeline (§3) and most of the codebase follows.

---

## 2. Request → render flow

```
src/pages/**/<route>.astro          (route, chooses a language)
        │  calls
        ▼
src/lib/sanity.ts : get<Page>Content(language)
        │  runs a GROQ query with a HARD-CODED field projection
        ▼
Sanity (project j1zdlt7i / production, useCdn:false)
        │  returns one document object
        ▼
<Widget> components in src/components/widgets/   (Hero, Features, Steps, …)
```

**⚠ The #1 silent-bug source:** a field can exist in the Sanity schema
(`../sanity/schemaTypes/`) and be filled in the Studio, but if it is **not listed in
the GROQ projection** in `src/lib/sanity.ts`, it never reaches the page. Any schema
change in `../sanity/` needs a matching projection change here. See `PROJECT_RULES.md`.

---

## 3. Sanity data layer (`src/lib/sanity.ts`)

**Client config** (`createClient` from `@sanity/client`):

| Setting      | Value                                                              |
| ------------ | ------------------------------------------------------------------ |
| `projectId`  | `process.env.SANITY_PROJECT_ID \|\| 'j1zdlt7i'`                    |
| `dataset`    | `process.env.SANITY_DATASET \|\| 'production'`                     |
| `apiVersion` | `process.env.SANITY_API_VERSION \|\| '2024-01-01'`                 |
| `useCdn`     | `false` (live API — freshness for SSR)                             |
| `token`      | `process.env.SANITY_TOKEN` (write token; **not** needed for reads) |

Reads work without a token thanks to the baked-in fallbacks.

**Page helpers** — each takes `language: string`, binds it as the GROQ `$language`
param, and returns a single document (`[0]`):

| Helper                         | Document `_type` | Projected top-level fields                                                        |
| ------------------------------ | ---------------- | --------------------------------------------------------------------------------- |
| `getHomepageContent(language)` | `homepage`       | metadata, hero, note, features, content, steps, faqs, stats, testimonials, cta    |
| `getAboutContent(language)`    | `aboutPage`      | metadata, heroWidget, steps2Sections, cta                                         |
| `getServicesContent(language)` | `servicesPage`   | metadata, heroWidget, features2, contentSections, cta                             |
| `getContactContent(language)`  | `contactPage`    | metadata, heroText, contactUs, contactFeatures2                                   |
| `getPricingContent(language)`  | `pricingPage`    | metadata, pricingHeroText, pricingWidget, features3, stepsWidget, faqsWidget, cta |

**Legacy / compatibility shims** (kept for the pre-Sanity content-collection API):

- `getPageContent(pageType, language)` — a `switch` dispatching to the 5 helpers
  above; its `default` branch queries `*[_type == "page" ...]`. **That fallback
  returns nothing** because no `page` document type is registered in
  `../sanity/schemaTypes/index.ts`. Live pages use the specific helpers.
- `getAllPages(language)` — queries `*[_type == "page" ...]` (same dead path).
- `getEntry(collection, id)` — shims the old Astro Content Collections API; splits an
  id like `'en/home'` into `[language, pageType]`, maps `home → homepage`, and wraps
  the result as `{ data, id, collection }`.

Language is **not** derived from `Astro.currentLocale` in the helpers — each locale's
page file passes an explicit string (`'en'`/`'de'`/`'es'`). See §5.

---

## 4. Routing & pages (`src/pages/`)

**Sanity-backed pages** (5 page types × 3 locales):

| Page     | English (default, root) | German              | Spanish             | Helper               |
| -------- | ----------------------- | ------------------- | ------------------- | -------------------- |
| Home     | `index.astro`           | `de/index.astro`    | `es/index.astro`    | `getHomepageContent` |
| About    | `about.astro`           | `de/about.astro`    | `es/about.astro`    | `getAboutContent`    |
| Services | `services.astro`        | `de/services.astro` | `es/services.astro` | `getServicesContent` |
| Pricing  | `pricing.astro`         | `de/pricing.astro`  | `es/pricing.astro`  | `getPricingContent`  |
| Contact  | `contact.astro`         | `de/contact.astro`  | `es/contact.astro`  | `getContactContent`  |

Each localized file is a near-duplicate of the English one that passes a different
language string. There is **no** `de/`/`es/` blog.

**Blog (dynamic, prerendered — AstroWind template leftover):**

- `[...blog]/index.astro` — single post (`getStaticPathsBlogPost`), `prerender = true`
- `[...blog]/[...page].astro` — paginated list (`getStaticPathsBlogList`)
- `[...blog]/[category]/[...page].astro` — category listing
- `[...blog]/[tag]/[...page].astro` — tag listing

**Endpoints & static:**

- `api/test-sanity.ts` — `GET` debug endpoint (dumps env + a sample query). Not for
  production.
- `rss.xml.ts` — RSS feed from `fetchPosts()`.
- `404.astro`; `policies.md`, `privacy.md`, `terms.md` (template legal pages).

**Leftover AstroWind demo pages (unrelated to Steffi, not in nav):**
`homes/{mobile-app,personal,saas,startup}.astro`,
`landing/{click-through,lead-generation,pre-launch,product,sales,subscription}.astro`.

---

## 5. i18n mechanics

- Astro **native i18n** (configured in `astro.config.ts`): `defaultLocale: 'en'`,
  `locales: ['en','de','es']`, `routing.prefixDefaultLocale: false` → English at root
  (`/about`), German/Spanish under `/de/...` and `/es/...`.
- **No runtime translation layer.** Despite `astro-i18next` being installed, it is not
  used. Translations happen two ways:
  1. **Per-locale page files** each hardcode the language string passed to the Sanity
     helper (content translation lives in Sanity documents).
  2. **`navigationLabels`** in `src/navigation.ts` (nav/UI chrome translation, in code).
- `PageLayout.astro` reads `Astro.currentLocale` to pick header/footer labels via
  `getHeaderData(locale)` / `getFooterData(locale)`.
- `src/components/common/LanguageSwitcher.astro` builds switch URLs itself: strips any
  `/(en|de|es)` prefix from `Astro.url.pathname`, then re-prefixes for non-English,
  preserving the current page. Re-initialises on `astro:page-load` (view transitions).

---

## 6. Components (`src/components/`)

- **`widgets/`** — page-section building blocks. Used by Steffi pages: `Hero2`
  (homepage hero), `Features` / `Features2` / `Features3`, `Steps` / `Steps2`,
  `Pricing` (imported as `Prices`), `FAQs`, `Stats`, `Testimonials`, `CallToAction`,
  `Content`, `BigNote`, `Contact` (as `ContactUs`), plus site chrome `Header` and
  `Footer`, and blog widgets `BlogLatestPosts` / `BlogHighlightedPosts`.
- **`ui/`** — low-level primitives: `Background`, `Button`, `DListItem`, `Form`,
  `Headline`, `ItemGrid`, `ItemGrid2`, `Timeline`, `WidgetWrapper`.
- **`common/`** — head/meta/scripts: `Analytics`, `ApplyColorMode`, `BasicScripts`,
  `CommonMeta`, `Image`, `LanguageSwitcher`, `Metadata`, `SiteVerification`,
  `SocialShare`, `SplitbeeAnalytics`, `ToggleMenu`, `ToggleTheme`.
- **`blog/`** — `Grid`, `GridItem`, `Headline`, `List`, `ListItem`, `Pagination`,
  `RelatedPosts`, `SinglePost`, `Tags`, `ToBlogLink`.
- **Top-level:** `CustomStyles.astro`, `Favicons.astro`, `Logo.astro`.

---

## 7. Layouts (`src/layouts/`)

Nesting: `Layout → PageLayout → {MarkdownLayout, LandingLayout}`.

- `Layout.astro` — base `<html>` shell; imports Tailwind, `I18N` from
  `astrowind:config`, meta/analytics/scripts components, and `ClientRouter` (view
  transitions). Sets `<html lang={language} dir={textDirection}>`.
- `PageLayout.astro` — wraps `Layout`; resolves `currentLocale` and injects the
  locale-aware `Header` (with language switcher) and `Footer`.
- `MarkdownLayout.astro` — wraps `PageLayout` for `.md` pages (policies/privacy/terms).
- `LandingLayout.astro` — wraps `PageLayout` for the template `landing/` pages.

---

## 8. Configuration

- **`astro.config.ts`:** `output: 'server'`; `adapter: vercel()`; i18n block (§5);
  integrations `tailwind({applyBaseStyles:false})`, `sitemap()`, `mdx()`,
  `icon({tabler, flat-color-icons})`, conditional `partytown` (currently disabled),
  `compress()` (CSS/HTML/JS on, Image/SVG off), and the custom
  `astrowind({config:'./src/config.yaml'})` integration from `./vendor/integration`.
  Markdown remark/rehype plugins come from `src/utils/frontmatter.ts`. Vite alias
  `~` → `./src`.
- **`src/config.yaml`:** site name/URL, base, trailing-slash, Google verification,
  metadata defaults, blog config (`postsPerPage: 6`, permalink `/%slug%`, base paths
  `blog`/`category`/`tag`), analytics id, forced light theme (`ui.theme: 'light:only'`).
  Consumed via the `astrowind:config` virtual module (`SITE`, `METADATA`, `I18N`,
  `APP_BLOG`) exposed by `vendor/integration/`. **⚠ Still ships template defaults** —
  see §11.
- **`vercel.json`:** `cleanUrls: true`, `trailingSlash: false`, immutable 1-year cache
  for `/_astro/(.*)`.
- **`src/navigation.ts`:** `navigationLabels` (en/de/es), `getHeaderData(locale)` /
  `getFooterData(locale)` builders (locale-prefixed links, `mailto:` contact action,
  social links), plus default `headerData`/`footerData` exports.

---

## 9. Blog

- **Source:** Markdown/MDX in `src/data/post/` — 6 unmodified AstroWind template posts.
- **Data layer:** `src/utils/blog.ts` via `getCollection('post')` + Astro `render`.
  Exports `fetchPosts`, `findPostsBySlugs/ByIds`, `findLatestPosts`,
  `getStaticPathsBlog{List,Post,Category,Tag}`, `getRelatedPosts`, and blog flags
  derived from `APP_BLOG` (`isBlogEnabled`, `blogPostsPerPage`, …).
- Blog routes set `prerender = true` (statically generated even though the site is SSR).
- `rss.xml.ts` emits the feed.

- **Collection config:** `src/content.config.ts` defines the `post` collection via a
  `glob` loader over `src/data/post`. It lives at `src/` root (not inside the
  gitignored `src/content/` dir) and was restored from the backup after being dropped
  in commit `979fc75`; `npm run build` prerenders all posts successfully.

---

## 10. Utilities, vendor & build

- **`src/utils/`:** `permalinks.ts` (slug/permalink helpers), `blog.ts` (§9),
  `images.ts` + `images-optimization.ts` (Astro Assets / Unpic), `frontmatter.ts`
  (remark/rehype plugins), `utils.ts` (`getFormattedDate`, `trim`, …),
  `directories.ts`.
- **`vendor/integration/`:** the custom `astrowind` Astro integration that loads
  `config.yaml` and exposes the `astrowind:config` virtual module.
- **Scripts:** `package.json` — `dev`/`start`, `build`, `preview`, `check`
  (astro check + eslint + prettier), `fix` (eslint --fix + prettier). The old
  `migrate:sanity` script and `scripts/migrate-*.ts` were archived to `backups/`.
- **Deploy:** Vercel serverless SSR; auto-deploys on push to `main`.

---

## 11. Known gaps & risks (flag — pre-existing, don't silently fix)

- **`src/config.yaml` still has AstroWind template defaults** — `site:
'https://steffi.vercel.app'` (a subdomain the project does **not** own),
  `metadata.title: AstroWind`, `twitter.handle: '@onwidget'`, `googleAnalytics.id: null`.
  Production domain not chosen; live preview is `https://astrowind-kappa-ten.vercel.app`.
- **Blog is live but unpopulated** — template posts; nav/footer/RSS/sitemap all
  advertise it. Curate or remove before launch.
- **Leftover template surface** — `homes/`, `landing/`, `api/test-sanity.ts`, template
  legal `.md` pages. Safe to remove.
- **Contact is a raw `mailto:`** to `haberstock.stefanie@gmail.com` — no form, no spam
  handling.
- **Dead legacy Sanity path** — `getPageContent`/`getAllPages` fallback queries
  `_type == "page"`, which has no registered schema (§3).
- **`astro-i18next` installed but unused** at runtime (§5).

These are also tracked in the umbrella `../CLAUDE.md` "Open threads" list.
