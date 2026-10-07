# AGENTS.md

## Project

Blog pribadi berbasis Astro + Tailwind CSS, di-deploy ke Cloudflare Pages. Design: neo-brutalism.

## Commands

```bash
rtk npm install          # install dependencies
rtk npm run dev          # dev server (localhost:4321)
rtk npm run build        # production build ke dist/
rtk npm run preview      # preview build locally
rtk npm run og           # regenerate the Open Graph image (builds, then captures)
```

## Stack

- **Astro 5** — static site generator, content collections, MDX
- **Tailwind CSS 3** — styling, dark mode via `dark:` variant
- **Cloudflare Pages** — deployment via `@astrojs/cloudflare` adapter
- **Shiki** — syntax highlighting (via rehype-prism-plus)
- **KaTeX** — math typesetting
- **remark-github-blockquote-alert** — GitHub-style alerts

## Structure

```
src/
├── components/     # Astro components (Header, Footer, Card, dll)
├── content/        # Content collections
│   ├── blog/       # Blog posts (.md/.mdx)
│   ├── authors/    # Author profiles
│   └── projects/   # Project data (JSON)
├── data/           # Site config (siteMetadata, headerNavLinks)
├── layouts/        # Base layout templates
├── pages/          # Route pages
├── styles/         # Global CSS
└── utils/          # Helpers (readingTime, TOC, dll)
public/             # Static assets
```

## Conventions

- **Content**: Blog posts di `src/content/blog/`, frontmatter wajib: `title`, `date`, `tags`, `authors`, `layout`
- **Layouts**: `PostLayout` (2-column), `PostSimple`, `PostBanner`
- **Styling**: Neo-brutalism — border-2 border-black, shadow offset, warna kontras, tanpa border-radius
- **Dark mode**: Toggle via ThemeSwitch, simpan di localStorage
- **Images**: Taruh di `public/static/images/`
- **SEO**: Setiap page wajib set title, description, canonical URL

## Content Schema

Blog post frontmatter:
```yaml
title: string (required)
date: date (required)
tags: string[]
authors: string[] (default: ['default'])
layout: PostLayout | PostSimple | PostBanner
summary: string
images: string[]
draft: boolean
lastmod: date
canonicalUrl: string
series: string          # posts sharing this value form a reading path at /series/
seriesPart: number      # order within the series; falls back to date order
```

### Reader features

- **Series**: set `series` (and optionally `seriesPart`) in frontmatter. The post
  gets a "Part N of M" badge and its prev/next follow the series instead of the
  archive. `/series/` lists every series. Logic lives in `src/utils/series.ts`.
- **Related posts**: ranked by tag overlap (weighted 3x) then shared title words,
  in `src/utils/series.ts`. Posts sharing nothing are dropped, not padded in.
- **Code copy + heading anchors**: `src/components/ProseEnhancements.astro`,
  progressive enhancement over the rendered prose.
- **Newsletter**: Buttondown embed form, enabled by `PUBLIC_BUTTONDOWN_USER`.
  Without it the component renders a labelled placeholder instead of a dead form.

## Deployment

Cloudflare Pages via GitHub Actions (`.github/workflows/deploy.yml`).
Build command: `npm run build`, output: `dist/`.
