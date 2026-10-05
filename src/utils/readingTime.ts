/**
 * Estimate reading time from raw text.
 *
 * Words are counted by splitting on whitespace; minutes assume 200 words per
 * minute and never drop below 1.
 */
export function readingTime(text: string): { minutes: number; words: number } {
  const trimmed = text.trim();
  const words = trimmed === '' ? 0 : trimmed.split(/\s+/).length;
  return { minutes: Math.max(1, Math.ceil(words / 200)), words };
}
