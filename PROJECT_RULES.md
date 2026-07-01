# Project rules — astrowind

Short, always-apply working rules for this repo. `CLAUDE.md` imports this file, so
these load every session. For structure/how-it-works, read `ARCHITECTURE.md` (on
demand). For ecosystem context, read the umbrella `../CLAUDE.md`.

## Content & Sanity

- **Schema change ⇒ projection change.** Any field added in `../sanity/schemaTypes/`
  must be added to the matching GROQ projection in `src/lib/sanity.ts`, or it never
  renders. This is the #1 silent bug here.
- **Content is SSR, fetched at request time** (`output: 'server'`, `useCdn: false`).
  Never assume static output or build-time content.
- **Don't edit `src/content/pages/*.json`** expecting site changes — it's archival
  pre-Sanity JSON, not the source of truth (and is now gitignored).

## i18n

- Three locales: `en` (root), `de` (`/de`), `es` (`/es`), `prefixDefaultLocale: false`.
- Adding a section to one locale means populating the Sanity document for **all three**
  locales, or the page renders blank for the other two.
- Nav/UI labels live in code — `src/navigation.ts` `navigationLabels` — **not** Sanity.

## Code & workflow

- Run `npm run check` (astro check + eslint + prettier) before committing; use
  `npm run fix` to auto-format.
- Match the surrounding code's style, naming, and idioms; reuse existing widgets in
  `src/components/widgets/` and helpers in `src/utils/` rather than adding new ones.
- Use the `~` import alias for `src` (configured in `astro.config.ts`).

## Git & deploy

- **`main` auto-deploys to Vercel on push.** Branch for changes; don't push work in
  progress to `main`.
- Keep build output (`dist/`), `.vercel/`, `backups/`, and `src/content/` untracked
  (already in `.gitignore`).

## Flag, don't silently fix

The pre-launch blockers in `ARCHITECTURE.md` §11 and the umbrella `../CLAUDE.md`
"Open threads" (template `config.yaml` defaults, unpopulated blog + missing
content-collection config, leftover `homes/`/`landing/` pages, raw `mailto:` contact,
null analytics) are known. Surface them to the user rather than working around them.
