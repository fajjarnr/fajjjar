import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkGithubBlockquoteAlert from 'remark-github-blockquote-alert';

export default defineConfig({
  site: 'https://fajjjar.my.id',
  output: 'static',
  // Top-level markdown config applies to .md AND .mdx content.
  markdown: {
    // Astro's built-in Shiki highlighter consumes ```code blocks before
    // rehype plugins run, so rehype-prism-plus would never see them.
    syntaxHighlight: false,
    remarkPlugins: [remarkMath, remarkGithubBlockquoteAlert],
    rehypePlugins: [rehypeKatex, [rehypePrismPlus, { showLineNumbers: true }]],
  },
  integrations: [mdx(), sitemap()],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
