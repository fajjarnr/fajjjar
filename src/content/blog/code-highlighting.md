---
title: 'Syntax Highlighting Across Languages'
date: '2025-04-02'
tags: ['code', 'guide']
summary: 'A showcase of the languages the highlighter supports, from JavaScript to Rust.'
authors: ['default']
layout: PostBanner
---

Code blocks are highlighted at build time with `rehype-prism-plus`, so the
output is plain HTML and CSS with no runtime cost. This post exercises a few
of the languages I use most.

## JavaScript

```js
const posts = await getCollection('blog');

export function sortByDate(entries) {
  return [...entries].sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
}
```

## TypeScript

```ts
interface Post {
  slug: string;
  title: string;
  tags: string[];
}

export function byTag(posts: Post[], tag: string): Post[] {
  return posts.filter((post) => post.tags.includes(tag));
}
```

## Python

```python
from dataclasses import dataclass


@dataclass
class Post:
    slug: str
    title: str


def slugs(posts: list[Post]) -> list[str]:
    return [post.slug for post in posts]
```

## Bash

```bash
#!/usr/bin/env bash
set -euo pipefail

npm ci
npm run build
echo "Build finished at $(date -u +%FT%TZ)"
```

## Rust

```rust
fn fib(n: u64) -> u64 {
    match n {
        0 => 0,
        1 => 1,
        _ => fib(n - 1) + fib(n - 2),
    }
}

fn main() {
    println!("{}", fib(10));
}
```

## JSON

```json
{
  "title": "Syntax Highlighting Across Languages",
  "tags": ["code", "guide"],
  "layout": "PostBanner"
}
```

## Why build-time highlighting

Doing the work once at build time means the browser downloads a small CSS
stylesheet instead of a full highlighting engine. For a content-heavy site,
that trade is almost always worth it.
