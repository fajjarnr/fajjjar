---
title: 'Nested Routes and File Structure'
date: '2025-06-11'
lastmod: '2025-07-01'
tags: ['astro', 'guide']
summary: 'How Astro maps files to routes, and how to keep a growing project navigable.'
authors: ['sparrowhawk']
layout: PostBanner
---

Astro's routing is file-based, which means the directory tree under
`src/pages/` *is* the URL structure. This post walks through the conventions
and some patterns for keeping things tidy as a site grows.

## The basics

### Static routes

A file named `about.astro` becomes `/about`. There is no router configuration
to maintain and no central route table to keep in sync.

### Dynamic routes

Square brackets mark dynamic segments. A file at
`src/pages/blog/[slug].astro` matches `/blog/anything` and receives `slug`
through `Astro.params`.

## Organising pages

### Grouping without affecting URLs

Wrap directories in parentheses to group files without adding a path segment.
`src/pages/(marketing)/pricing.astro` still resolves to `/pricing`.

### Shared layouts

Layouts live outside `src/pages/` precisely so they never become routes. A
layout is just a component that renders a `<slot />`.

## Content collections

### Why collections

Collections validate frontmatter at build time and give you typed access to
entries. A schema mismatch is a build error, not a runtime surprise.

### Relating entries

Because blog posts reference authors by slug, a post can pull in the matching
author profile and render a byline without duplicating data.

## Dynamic route generation

### `getStaticPaths`

For static builds, dynamic routes must declare their paths up front through
`getStaticPaths`, which returns an array of `{ params, props }` objects.

### Pagination

The same mechanism drives tag pages and paginated archives — generate one
path per page and pass the slice of posts as props.

## Keeping it navigable

### Naming conventions

Use kebab-case for file names so URLs stay readable. Keep one concept per
file and let the directory express hierarchy.

### Co-location

Components, styles, and tests that belong to a single page can live beside it
in a private folder, keeping the global component directory uncluttered.

## Summary

File-based routing rewards a well-organised tree. When the directory layout
mirrors the site's information architecture, navigation becomes obvious and
the build stays predictable.
