import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'blog'>;

export interface SeriesGroup {
  name: string;
  posts: Post[];
}

// Words too common to say anything about what a post is about.
const TITLE_STOPWORDS: Record<string, true> = {
  the: true, a: true, an: true, and: true, or: true, for: true, to: true,
  of: true, in: true, on: true, with: true, your: true, you: true, is: true,
  it: true, at: true, by: true, from: true, how: true, why: true, what: true,
};

/**
 * Significant words in a title, for ranking related posts. Tags alone rank every
 * post sharing one tag equally; these words break those ties.
 */
function titleWords(title: string): Set<string> {
  const found = new Set<string>();
  for (const word of title.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/)) {
    if (word.length > 2 && !TITLE_STOPWORDS[word]) found.add(word);
  }
  return found;
}

/**
 * Group posts into series. Order is `seriesPart` when set, then date — so a
 * series can be ordered explicitly without every post declaring a part number,
 * and unordered posts still read oldest-first.
 */
export function getSeries(posts: Post[]): SeriesGroup[] {
  const groups = new Map<string, Post[]>();

  for (const post of posts) {
    const name = post.data.series;
    if (!name) continue;
    const bucket = groups.get(name) ?? [];
    bucket.push(post);
    groups.set(name, bucket);
  }

  return [...groups.entries()]
    .map(([name, group]) => ({
      name,
      posts: group.sort(
        (a, b) =>
          (a.data.seriesPart ?? 0) - (b.data.seriesPart ?? 0) ||
          a.data.date.valueOf() - b.data.date.valueOf()
      ),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/** The series a post belongs to, with its position — or null when standalone. */
export function seriesFor(post: Post, posts: Post[]) {
  if (!post.data.series) return null;
  const group = getSeries(posts).find((g) => g.name === post.data.series);
  if (!group) return null;
  const index = group.posts.findIndex((p) => p.slug === post.slug);
  return {
    name: group.name,
    total: group.posts.length,
    position: index + 1,
    previous: index > 0 ? group.posts[index - 1] : null,
    next: index >= 0 && index < group.posts.length - 1 ? group.posts[index + 1] : null,
  };
}

/**
 * Rank related posts by tag overlap (weighted 3x) plus shared title words.
 * Posts sharing nothing are dropped rather than padded in by date.
 */
export function relatedPosts(current: Post, posts: Post[], limit = 3): Post[] {
  const currentTags = new Set(current.data.tags);
  const currentWords = titleWords(current.data.title);

  return posts
    .filter((p) => p.slug !== current.slug)
    .map((post) => ({
      post,
      score:
        post.data.tags.filter((t) => currentTags.has(t)).length * 3 +
        [...titleWords(post.data.title)].filter((w) => currentWords.has(w)).length,
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.post.data.date.valueOf() - a.post.data.date.valueOf())
    .slice(0, limit)
    .map((entry) => entry.post);
}
