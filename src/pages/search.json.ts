import { getCollection } from 'astro:content';

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return new Response(
    JSON.stringify(
      posts.map((post) => ({
        title: post.data.title,
        summary: post.data.summary ?? '',
        tags: post.data.tags,
        url: `/blog/${post.slug}/`,
        date: post.data.date.toISOString(),
      })),
      null,
      2
    ),
    {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }
  );
}