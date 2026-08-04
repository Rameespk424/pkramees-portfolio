# pkramees.in

Portfolio for Ramees P.K. — Full-Stack Developer, Dubai.

Built with Next.js 14 (App Router) and plain CSS. No UI framework, no CSS-in-JS,
no build-time font fetching. Static export, so it deploys anywhere.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static output in ./out
```

`npm run build` produces a fully static site in `out/`. There is no server
runtime — upload `out/` to any host, or point Vercel/Netlify at the repo.

## Deploying

**Vercel or Netlify** — connect the repo. Both detect Next.js automatically.
Because `output: 'export'` is set, they publish `out/`.

**Shared hosting (cPanel, Hostinger)** — run `npm run build` locally, then
upload the contents of `out/` to `public_html`. Nothing else required.

**GitHub Pages** — push `out/` to a `gh-pages` branch.

## Editing content

All content lives in `data/`. You should not need to touch the components.

| File | Holds |
| --- | --- |
| `data/site.ts` | Name, contact details, the six stack layers, nav |
| `data/projects.ts` | Every project — add one by appending to the array |
| `data/experience.ts` | Roles, skills, education, certifications, languages |

### Adding a project

Append an object to `projects` in `data/projects.ts`. The route, the work index
entry, and the sitemap entry are all generated from it.

`owned` is the list of stack layers you personally delivered on that project.
It drives the traversal diagram — filled markers for layers you owned, hollow
for the rest. Valid values: `schema`, `procedure`, `repository`, `service`,
`controller`, `interface`.

Set `featured: true` to surface it on the home page.

### Replacing the résumé

Drop the PDF at `public/Ramees_PK_Resume.pdf`, keeping the filename, or change
`site.resume` in `data/site.ts`.

## Design notes

- **Type** — Newsreader (display), IBM Plex Sans (body), IBM Plex Mono (labels
  and metadata). Loaded via `<link>` in `app/layout.tsx`, not `next/font`, so
  builds never need network access.
- **Colour** — tokens live at the top of `app/globals.css`. Paper `#fbfbf9`,
  ink `#16181d`, accent `#0b5350`. Change them there and the whole site follows.
- **The traversal** — the one deliberately distinctive element. Everything else
  stays quiet on purpose.

## SEO

- Per-page metadata and canonical URLs
- `sitemap.xml` and `robots.txt` generated at build
- JSON-LD `Person` schema in the root layout
- Fully server-rendered HTML — crawlers see real content, which a client-side
  SPA does not give you

Update `site.url` in `data/site.ts` if the domain ever changes.
