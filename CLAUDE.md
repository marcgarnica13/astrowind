# CLAUDE.md — astrowind (public website)

> Read the umbrella `../CLAUDE.md` first — it carries the cross-cutting context
> (brand, Sanity project IDs, i18n rules, deployment state, open threads). This
> file is the astrowind-specific reference. Where they ever disagree, the umbrella
> file wins.

## What this is

The public **Steffi Haberstock** website. Astro 5 + Tailwind, **SSR** on Vercel,
with all page content fetched from Sanity **at request time**.

- Framework: Astro 5 (`output: 'server'`, adapter `@astrojs/vercel/serverless`)
- Styling: Tailwind (`@astrojs/tailwind`, `applyBaseStyles: false`)
- Content: Sanity CMS via GROQ (see `src/lib/sanity.ts`)
- Deploy: Vercel, auto-deploy on push to `main` (independent git repo — this
  directory has its own `.git`, unrelated to `../sanity`)
- Node: `^18.17.1 || ^20.3.0 || >= 21.0.0`

## Reference docs

- @PROJECT_RULES.md — the always-apply working rules (imported, loads every session).
- `ARCHITECTURE.md` — the deep codebase map (routing, Sanity data flow, i18n,
  components, config, blog, build). Read it on demand; it's intentionally **not**
  imported so it doesn't bloat context.
- `../CLAUDE.md` — the umbrella file with cross-cutting ecosystem context.

## Commands

```bash
npm run dev            # dev server at http://localhost:4321
npm run build          # production build
npm run preview        # preview the build locally
npm run check          # astro check + eslint + prettier (run before committing)
npm run fix            # eslint --fix + prettier -w
```

## How content flows (the thing to internalize)

1. A route in `src/pages/**` calls a helper from `src/lib/sanity.ts`
   (`getHomepageContent`, `getAboutContent`, `getServicesContent`,
   `getContactContent`, `getPricingContent`), passing a `language`.
2. That helper runs a GROQ query with a **hard-coded field projection**.
3. The `.astro` page maps the returned object onto widget components in
   `src/components/widgets/`.

**The #1 silent-bug source:** a field can exist in the Sanity schema
(`../sanity/schemaTypes/`) and be filled in the Studio, but if it isn't listed in
the GROQ projection in `src/lib/sanity.ts`, it never reaches the page. Any schema
change needs a matching query change here.

Sanity is read with `useCdn: false`, so Studio edits appear on the next request.

## i18n

Three locales, `prefixDefaultLocale: false`:

| Locale | URL prefix | Routes                 |
| ------ | ---------- | ---------------------- |
| `en`   | none       | `src/pages/*.astro`    |
| `de`   | `/de`      | `src/pages/de/*.astro` |
| `es`   | `/es`      | `src/pages/es/*.astro` |

Each localized route calls the same helper with a different `language`. Add a
section to one locale → populate the matching Sanity document in all three, or the
page renders blank for the other two. Nav labels live in code
(`src/navigation.ts`, `navigationLabels`), **not** in Sanity.

## Layout of `src/` (quick map — full detail in `ARCHITECTURE.md`)

```
src/
├── lib/sanity.ts        # Sanity client + all GROQ queries (source of truth for what renders)
├── pages/               # routes; en at root, de/ and es/ subdirs, [...blog] dynamic blog
├── components/widgets/  # page sections (Hero, Features, Steps, Pricing, FAQ, CTA, Footer…)
├── components/{ui,common,blog}/
├── layouts/             # Layout → PageLayout → {Markdown,Landing}Layout
├── navigation.ts        # header/footer nav + per-locale labels (code, not CMS)
├── config.yaml          # site metadata, SEO defaults, blog config  (see caveats)
├── utils/               # blog, permalinks, image optimisation, frontmatter plugins
└── data/post/           # blog posts (MDX) — still AstroWind template content
```

## Environment

`.env` (and mirror in Vercel): `SANITY_PROJECT_ID`, `SANITY_DATASET`,
`SANITY_API_VERSION`, `SANITY_TOKEN` (write token, only for scripts/migrations),
`SANITY_READ_TOKEN`. Defaults are baked into `src/lib/sanity.ts` so reads work
without a token; the client falls back to project `j1zdlt7i` / `production`.

## Known cruft & launch blockers (flag, don't silently fix)

- **`src/config.yaml` still ships AstroWind template defaults**: `site:
'https://steffi.vercel.app'` (a subdomain this project does NOT own — a third
  party serves an age-gate there), `metadata.title: AstroWind`, the rocket-emoji
  description, `twitter.handle: '@onwidget'`, and `googleAnalytics.id: null`.
  These are real pre-launch fixes. The live preview URL is
  `https://astrowind-kappa-ten.vercel.app`; the production domain isn't chosen yet.
- **Blog is live but unpopulated** — `src/data/post/` holds 6 AstroWind template
  posts. Nav link, footer link, RSS (`rss.xml.ts`) and sitemap all advertise it.
  Either curate or remove before launch.
- **Template pages still shipped**: `src/pages/homes/*` and `src/pages/landing/*`
  are AstroWind demo pages, unrelated to Steffi. Safe to delete.
- **Contact is a raw `mailto:`** to `haberstock.stefanie@gmail.com` — no form, no
  spam handling.
- **`getPageContent`/`getAllPages` legacy fallback** in `src/lib/sanity.ts` query
  `_type == "page"`, but the `page` document schema is NOT registered in
  `../sanity/schemaTypes/index.ts` — so that path returns nothing. Live pages use
  the page-specific helpers instead.
- **Missing content-collection config** — `src/utils/blog.ts` calls
  `getCollection('post')`, but there is no `src/content.config.ts` in the tree (it was
  deleted in commit `979fc75`; the only copy is in `backups/`). The prerendered blog
  won't build correctly until it's restored or the blog surface is removed.
- One-off migration artifacts (`scripts/migrate-*.ts`, `sanity-content-export.*`,
  `SANITY_MIGRATION_SUMMARY.md`, `corrected-*.json/.txt`) and the archival
  `src/content/` JSON have been moved into `backups/`, which is now gitignored along
  with `dist/` and `.vercel/`. `backups/` also holds the only copy of the content
  config above — keep it.
- `ONBOARDED` in this directory is a July-2025 doc describing the old GitHub
  Pages / static setup — outdated, superseded by this file.
