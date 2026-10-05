/**
 * Convert a heading string into a GitHub-compatible anchor slug.
 *
 * Lowercases, strips punctuation (keeping word chars and hyphens), and turns
 * runs of whitespace into single hyphens. Matches the slugs emitted by
 * `github-slugger` for the common case.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
