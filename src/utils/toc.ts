import { slugify } from './slugify';

export interface TocEntry {
  depth: number;
  slug: string;
  text: string;
}

/**
 * Extract a table of contents from markdown, keeping headings level 2–4.
 * Fenced code blocks (``` and ~~~) are stripped first so their `#` lines do
 * not leak into the TOC.
 */
export function extractToc(markdown: string): TocEntry[] {
  const stripped = markdown
    .replace(/```[\s\S]*?```/g, '')
    .replace(/~~~[\s\S]*?~~~/g, '');

  const toc: TocEntry[] = [];
  const heading = /^(#{2,4})\s+(.+)$/gm;
  let match: RegExpExecArray | null;

  while ((match = heading.exec(stripped)) !== null) {
    const text = match[2].replace(/#+\s*$/, '').trim();
    toc.push({ depth: match[1].length, slug: slugify(text), text });
  }

  return toc;
}
