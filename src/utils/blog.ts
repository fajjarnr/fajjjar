/** Shared helpers for blog pages: URL-safe tag slugs, reading time, date format. */

export const slugTag = (tag: string) => tag.toLowerCase().replace(/\s+/g, '-');

// 200 wpm plain word count — fine for a blog. Swap for real typography-aware
// counting only if reading time ever needs to be exact.
export const readingTime = (body: string) => Math.max(1, Math.ceil(body.split(/\s+/).length / 200));

export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

export const formatDateLong = (date: Date) =>
  date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });