---
title: 'Typesetting Math with KaTeX'
date: '2025-03-14'
tags: ['math', 'katex']
summary: 'How to write inline and display math in Markdown using remark-math and rehype-katex.'
authors: ['default']
layout: PostLayout
---

Math is a first-class citizen on this blog. Thanks to `remark-math` and
`rehype-katex`, you can write LaTeX directly in Markdown and get properly
typeset output.

## Inline math

Wrap an expression in single dollar signs to render it inline, like
$E = mc^2$ or the quadratic formula $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.

## Display math

For a standalone equation, put `$$` on its own line:

$$
\int_{a}^{b} f(x)\,dx = F(b) - F(a)
$$

The definition of the Gaussian integral is another classic:

$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}
$$

## Matrices and summations

KaTeX handles more advanced notation too. Here is a matrix:

$$
A = \begin{pmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{pmatrix}
$$

And a summation with limits:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

## A note on escaping

Because `$` is the delimiter, avoid using a lone dollar sign in prose unless
you mean to open math. If you need a literal one, escape it as `\$`.

Math rendering happens at build time, so there is no client-side JavaScript
cost — the HTML ships with the equations already typeset.
