---
title: 'GitHub-Style Alerts in Markdown'
date: '2025-05-20'
tags: ['markdown', 'guide']
summary: 'Use the five GitHub alert types to call out notes, tips, warnings, and more.'
authors: ['default']
layout: PostSimple
---

GitHub popularised a set of blockquote-based callouts, and
`remark-github-blockquote-alert` brings them to this blog. They are written
as a blockquote whose first line is a bracketed keyword.

## Note

> [!NOTE]
> Useful information that users should know, even when skimming.

## Tip

> [!TIP]
> Helpful advice for doing things better or more easily.

## Important

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

## Warning

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

## Caution

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

## How it works

The plugin rewrites each alert into a styled element with an icon, so you get
consistent presentation without hand-writing HTML. A regular blockquote, by
contrast, stays plain:

> This is an ordinary quote with no alert type attached.

Mix them freely — they are just Markdown, so they survive editing in any
plain-text editor.
