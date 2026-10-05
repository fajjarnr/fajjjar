---
title: 'The Markdown Guide I Wish I Had'
date: '2025-02-10'
tags: ['markdown', 'guide']
summary: 'A practical tour of the Markdown features this blog supports, from emphasis to tables.'
authors: ['default']
layout: PostSimple
---

Markdown is the lingua franca of static sites. This post doubles as a
reference for everything the renderer here supports.

## Emphasis

You can write *italic text*, **bold text**, or ***both at once***. For code
spans, use backticks like `const answer = 42`.

## Lists

Unordered lists keep things scannable:

- First item
- Second item
  - Nested item
  - Another nested item
- Third item

Ordered lists work the same way:

1. Install dependencies
2. Run the dev server
3. Ship the build

## Links and images

A [link to the Astro docs](https://docs.astro.build) renders inline. Images
are similar but start with a bang:

![Neo-brutalist logo](/static/images/logo.svg)

## Blockquotes

> The best code is the code you never had to write.
> — Someone, probably

## Tables

| Feature    | Supported | Notes                        |
| ---------- | --------- | ---------------------------- |
| Headings   | Yes       | Levels 1 through 6           |
| Tables     | Yes       | GitHub-flavoured Markdown    |
| Alerts     | Yes       | See the GitHub alerts post   |
| Math       | Yes       | Powered by KaTeX             |

## Code

Inline code uses single backticks, while fenced blocks get syntax
highlighting:

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

That covers the essentials. Everything else is a variation on these building
blocks.
