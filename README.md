# Portfolio

A retro desktop-OS themed personal portfolio built with **Next.js 16**, **React 19**, and
**Tailwind CSS v4** — graph-paper wallpaper, olive/cream/orange palette, and content framed
in faux-OS "windows" with `C:\NAME\section` title bars.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Make it yours

**All content lives in one file:** [`src/content/portfolio.ts`](src/content/portfolio.ts).

Edit the values there — name, headline, projects, experience, skills, socials — and
every page, the sitemap, the OG image, and the favicon update automatically. No
component changes required.

- **Add project images:** put a file in `public/` (e.g. `public/projects/halo.png`)
  and set `cover: "/projects/halo.png"` on that project. Projects without a `cover`
  get an automatic gradient placeholder.
- **Add your photo:** drop it in `public/` and swap the placeholder in
  `src/components/sections/about.tsx`.
- **Recolor the theme:** edit the palette tokens at the top of `src/app/globals.css`
  (`--desktop`, `--window`, `--olive`, `--orange`, `--ink`, `--yellow`, …) — they're
  defined once for light and once for dark.
- **Set your real domain:** update `seo.url` in `src/content/portfolio.ts` so canonical
  URLs, the sitemap, and social share tags are correct.

## What's included

- Responsive single-page layout: hero, about, skills ("TOOLS"), work, experience, contact
- Retro desktop UI: graph-paper wallpaper, folder shortcuts, app-icon tiles, taskbar + clock
- Light / dark theme with system default, persisted, and no flash on load
- Per-project detail pages at `/projects/<slug>` (statically generated)
- Scroll-reveal animations that respect `prefers-reduced-motion`
- SEO: metadata, generated OpenGraph image, favicon, `sitemap.xml`, `robots.txt`
- Accessible: semantic landmarks, skip link, keyboard-friendly, works without JS

## Scripts

```bash
npm run dev     # start the dev server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Structure

```
src/
├─ app/                 # routes, layout, metadata, sitemap/robots, OG image
├─ components/          # header, footer, theme toggle, cards, icons
│  └─ sections/         # hero, about, skills, projects, experience, contact
├─ content/
│  └─ portfolio.ts      # ← edit this: all of your content
└─ lib/                 # small helpers
```
