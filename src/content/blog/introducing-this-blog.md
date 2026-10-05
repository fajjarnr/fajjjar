---
title: 'Introducing This Blog'
date: '2025-01-15'
lastmod: '2025-02-01'
tags: ['astro', 'meta']
summary: 'Why I rebuilt my blog with Astro, Tailwind CSS, and a deliberately loud neo-brutalist design.'
authors: ['default']
layout: PostLayout
---

Welcome to the new blog. After years of fighting with one framework or
another, I finally settled on **Astro** for the content layer and **Tailwind
CSS** for the styling. The result is a site that builds fast, ships almost no
JavaScript, and looks exactly the way I want it to.

## Why Astro

Astro's content collections give you typed frontmatter, which means a typo in
a date field fails the build instead of silently shipping a broken post. That
alone was worth the migration.

The other selling point is the islands architecture. Interactive widgets are
opt-in, and everything else is static HTML by default.

```astro
---
import { getCollection } from 'astro:content';

const posts = (await getCollection('blog'))
  .filter((post) => !post.data.draft)
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
---

<ul>
  {posts.map((post) => (
    <li>
      <a href={`/blog/${post.slug}/`}>{post.data.title}</a>
    </li>
  ))}
</ul>
```

## Why Tailwind

Utility classes keep the styling close to the markup, and the design tokens
live in a single config file. When I want to change the accent colour across
the whole site, I change it in one place.

```ts
// tailwind.config.js
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};
```

## What to expect

I will be writing about Astro, content collections, Markdown tooling, and the
occasional deep dive into things like KaTeX and syntax highlighting. If you
find a mistake, the repository link is in the footer — pull requests are
welcome.

Thanks for reading.
