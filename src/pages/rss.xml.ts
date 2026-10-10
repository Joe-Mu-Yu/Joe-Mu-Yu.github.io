import type { APIRoute } from 'astro';

interface PostModule {
  frontmatter: {
    title: string;
    description?: string;
    date: string | Date;
    tags?: string[];
  };
  url: string;
}

const escapeXml = (value: string): string =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
    };
    return entities[character];
  });

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://joe-mu-yu.github.io');
  const home = new URL('/', origin).toString();
  const posts = Object.values(
    import.meta.glob<PostModule>('./posts/*.md', { eager: true }),
  ).sort(
    (a, b) =>
      new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf(),
  );

  const items = posts.map((post) => {
    const link = new URL(post.url, origin).toString();
    const title = escapeXml(post.frontmatter.title);
    const description = escapeXml(post.frontmatter.description ?? '');
    const pubDate = new Date(post.frontmatter.date).toUTCString();
    const categories = (post.frontmatter.tags ?? [])
      .map((tag) => `<category>${escapeXml(tag)}</category>`)
      .join('');

    return `<item><title>${title}</title><link>${link}</link><guid isPermaLink="true">${link}</guid><description>${description}</description><pubDate>${pubDate}</pubDate>${categories}</item>`;
  });

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Morgan 的文章</title><link>${home}</link><description>Morgan 的技术文章与学习笔记。</description><language>zh-CN</language>${items.join('')}</channel></rss>`,
    { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } },
  );
};
