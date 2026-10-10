export interface Project {
    title: string;
    description: string;
    href: string;
    icon: string;
    language?: string;
    stars: number;
    forks: number;
    updatedAt?: string;
}

export interface ProjectResult {
    projects: Project[];
    /** True when the GitHub API failed and only local records are shown. */
    usedFallback: boolean;
}

export const GITHUB_USERNAME = 'Joe-Mu-Yu';
const GITHUB_API = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50`;

// Kept locally so both the home and projects pages still render real content
// when the GitHub API is unreachable at build time.
export const localProjects: Project[] = [
    {
        title: 'Joe-Mu-Yu.github.io',
        description:
            '个人博客网站，采用 Astro 构建，纸质拼贴风格的设计语言。',
        href: 'https://github.com/Joe-Mu-Yu/Joe-Mu-Yu.github.io',
        icon: '🌐',
        language: 'TypeScript',
        stars: 0,
        forks: 0,
    },
];

const ICONS: Record<string, string> = {
    openisle: '🌖️',
    weekly: '📐',
    pythermalcomfort: '🌡️',
    learn_prompting: '📚',
    blog: '📝',
    website: '🌐',
    app: '📱',
    tool: '🔧',
    ai: '🤖',
    web: '🧸',
};

export function repoIcon(name: string): string {
    const key = name.toLowerCase();
    for (const [needle, icon] of Object.entries(ICONS)) {
        if (key.includes(needle)) return icon;
    }
    return '🚀';
}

export async function fetchProjects(): Promise<ProjectResult> {
    try {
        const response = await fetch(GITHUB_API, {
            headers: { Accept: 'application/vnd.github+json' },
        });
        if (!response.ok) throw new Error(`GitHub responded with ${response.status}`);

        const repos = (await response.json()) as any[];
        const fromGitHub: Project[] = repos
            .filter((repo) => !repo.fork)
            .map((repo) => ({
                title: repo.name,
                description: repo.description || '暂无描述',
                href: repo.html_url,
                language: repo.language ?? undefined,
                stars: repo.stargazers_count ?? 0,
                forks: repo.forks_count ?? 0,
                updatedAt: new Date(repo.updated_at).toLocaleDateString('zh-CN'),
                icon: repoIcon(repo.name),
            }));

        const existing = new Set(fromGitHub.map((p) => p.title));
        return {
            projects: [
                ...fromGitHub,
                ...localProjects.filter((p) => !existing.has(p.title)),
            ],
            usedFallback: false,
        };
    } catch (error) {
        // Surfaced in the UI as an explicit local-fallback state, never hidden.
        console.error('[projects] GitHub fetch failed, using local fallback:', error);
        return { projects: localProjects, usedFallback: true };
    }
}
