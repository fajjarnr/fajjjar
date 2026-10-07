---
title: 'Working with Images in Posts'
date: '2025-08-19'
tags: ['astro', 'images']
summary: 'Reference images from Markdown and from frontmatter, and keep asset paths consistent.'
authors: ['default']
layout: PostLayout
images: ['/static/images/og-default.png', '/static/images/logo.svg']
---

Images are part of the story a post tells. This blog keeps its assets under
`public/static/images/` so they are served as-is and can be referenced from
both Markdown and frontmatter.

## Images in Markdown

The standard syntax works exactly as you would expect:

![The blog logo](/static/images/logo.svg)

Because the file lives in `public/`, the path is absolute and stable — no
import statements, no bundler hashing.

## Images in frontmatter

The `images` field is an array of paths used for social previews and card
layouts:

```yaml
images:
  - /static/images/og-default.png
  - /static/images/logo.svg
```

The first entry is typically the one a layout will hand to Open Graph and
Twitter card tags.

## A word on formats

Prefer SVG for logos and diagrams, and raster formats for anything a crawler
has to read: social platforms will not render an SVG, so the Open Graph image
is a PNG while the logo stays a vector.

![Social card](/static/images/og-default.png)

## Keeping paths tidy

Decide on one asset directory and stick to it. Scattering images across
per-post folders makes them hard to reuse and easy to break during a
refactor.
