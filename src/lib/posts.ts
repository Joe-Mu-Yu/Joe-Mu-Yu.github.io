export interface MarkdownPost {
    frontmatter: {
        title: string;
        description?: string;
        date: string | Date;
        tags?: string[];
    };
    url: string;
}

// Lazy imports avoid a layout/import cycle: Markdown pages themselves use
// PostLayout, which also needs this list for previous/next navigation.
const postLoaders = import.meta.glob<MarkdownPost>('../pages/posts/*.md');

export async function getSortedPosts(): Promise<MarkdownPost[]> {
    const posts = await Promise.all(Object.values(postLoaders).map((load) => load()));
    return posts.sort(
        (a, b) =>
            new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf(),
    );
}
