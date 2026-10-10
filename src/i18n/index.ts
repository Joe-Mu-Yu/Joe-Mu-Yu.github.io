// Bilingual interface copy. Articles and GitHub repository descriptions keep
// their source language and are marked with lang in their components.
//
// Keys are nested per surface so a component can look up its own strings with
// t('home.greeting'). Anything reachable from data-i18n / data-i18n-attr must
// exist in both languages, otherwise the element keeps its rendered fallback.

export type Language = 'zh' | 'en';

export const translations = {
    zh: {
        meta: {
            homeTitle: 'Morgan — 个人博客',
            homeDescription: 'Morgan 的个人博客：代码、AI 与生活记录。',
            postsTitle: '文章 - Morgan',
            postsDescription: 'Morgan 的技术文章与学习笔记。',
            projectsTitle: '项目 - Morgan',
            projectsDescription: 'Morgan 的开源仓库和个人作品。',
            lifeTitle: '生活 - Morgan',
            lifeDescription: 'Morgan 的生活篇段。',
            aboutTitle: '关于 - Morgan',
            aboutDescription: '关于 Morgan：编程、AI 与生活。',
            notFoundTitle: '404 - Morgan',
        },
        nav: {
            home: '首页',
            posts: '文章',
            projects: '项目',
            life: '生活',
            about: '关于',
            menu: '菜单',
            close: '关闭',
            skipToContent: '跳到主要内容',
            theme: '切换主题',
            language: '切换语言：中文',
            primaryLabel: '主导航',
            mobileLabel: '移动导航',
            footerLabel: '页脚导航',
        },
        home: {
            eyebrow: '个人博客 / 2019—至今',
            greeting: '你好，我是 Morgan',
            bio: '写代码、跟模型较劲，也记录一些没被写进文档的东西。这里的文章大多来自真实踩坑：踩过、查过、写下结论。',
            primaryCta: '看文章',
            secondaryCta: 'GitHub',
            collageAlt: '复古版画风格的人物插画',
            collageCaption: '拼贴 / 丝网印刷',
            collageStamp: '2026',
            collageNote: 'token 成本 · 提示词工程 · 聊天记录',
            posts: '文章',
            postsIndex: '01 / 文章',
            projects: '项目',
            projectsIndex: '02 / 项目',
            life: '生活',
            lifeIndex: '03 / 生活',
            viewAllPosts: '全部文章',
            viewAllProjects: '全部项目',
            viewAllLife: '进入生活',
            projectsFallback: 'GitHub 接口暂不可用，以下为本地记录的项目。',
        },
        posts: {
            title: '文章',
            lede: '技术分享、学习笔记和思考。',
            count: '共 {n} 篇',
        },
        projects: {
            title: '项目',
            lede: '开源仓库和个人作品。',
            count: '共 {n} 个',
            updated: '更新于',
            openRepo: 'GitHub 仓库',
            source: '数据来源',
            localSource: '本地记录',
            fallbackNote: 'GitHub 接口暂不可用，以下为本地记录的项目。',
        },
        life: {
            title: '生活',
            lede: '计划记录生活中的片段。这里目前还没有内容，所以呈现的是一个明确的空状态，而不是占位图。',
            emptyTitle: '这里还没有文章',
            emptyBody: '生活栏目还没有发布任何内容。等第一篇写完，它会出现在这个位置。',
            count: '共 {n} 篇',
        },
        about: {
            index: '04 / 关于',
            title: '关于',
            lede: 'Morgan，编程与 AI 爱好者。',
            introTitle: '谁是 Morgan',
            intro:
                '写代码、写文章，也折腾一些自己的小工具。站点这里是一个个人博客：记下踩过的坑、查过的结论，和些还没形成结论的东西。',
            skills: '在用的东西',
            contact: '联系',
            mapTitle: '去过的地方',
            mapBadge: '中国地图',
            mapCount: '已标记 {n} 座城市',
            mapLegendCity: '城市',
            mapLegendRoute: '旅行路线',
            mapNote: '地图按中国轮廓简化绘制，标记的是城市的大致位置，不是精确坐标。',
            mapHint: '用方向键或 Tab 在地点之间移动，聚焦后查看说明。',
            mapSelected: '当前选中',
            skillsAI: '模型调用 · 提示词工程 · 代码评测',
            places: { beijing: '北京', shijiazhuang: '石家庄', taiyuan: '太原', xian: '西安', jinan: '济南', qingdao: '青岛' },
            placeNotes: {
                beijing: '北京，标记的是大致位置。', shijiazhuang: '石家庄，标记的是大致位置。',
                taiyuan: '太原，标记的是大致位置。', xian: '西安，标记的是大致位置。',
                jinan: '济南，标记的是大致位置。', qingdao: '青岛，标记的是大致位置。',
            },
        },
        footer: {
            builtWith: '用 Astro 构建',
            running: '已运行 {n} 天',
            rss: 'RSS',
        },
        post: {
            originalLanguage: '本文为中文原文',
            navigationLabel: '文章导航',
            backToTop: '返回顶部',
            prev: '上一篇',
            next: '下一篇',
            allPosts: '全部文章',
        },
        notFound: {
            title: '404',
            body: '页面未找到，或者它从未存在过。',
            cta: '回到首页',
            posts: '看看文章',
        },
    },
    en: {
        meta: {
            homeTitle: 'Morgan — Personal blog',
            homeDescription: 'Morgan’s personal blog about code, AI and life.',
            postsTitle: 'Posts - Morgan',
            postsDescription: 'Technical posts and learning notes by Morgan.',
            projectsTitle: 'Projects - Morgan',
            projectsDescription: 'Open-source repositories and personal projects by Morgan.',
            lifeTitle: 'Life - Morgan',
            lifeDescription: 'Notes on life from Morgan.',
            aboutTitle: 'About - Morgan',
            aboutDescription: 'About Morgan, code, AI and life.',
            notFoundTitle: '404 - Morgan',
        },
        nav: {
            home: 'Home',
            posts: 'Posts',
            projects: 'Projects',
            life: 'Life',
            about: 'About',
            menu: 'Menu',
            close: 'Close',
            skipToContent: 'Skip to main content',
            theme: 'Toggle theme',
            language: 'Switch language: EN',
            primaryLabel: 'Main navigation',
            mobileLabel: 'Mobile navigation',
            footerLabel: 'Footer navigation',
        },
        home: {
            eyebrow: 'Personal blog / 2019—present',
            greeting: "Hi, I'm Morgan",
            bio: 'I write code, argue with models, and keep notes on the things that never make it into the docs. Most posts here come from real detours: hit the problem, dig through it, write down the conclusion.',
            primaryCta: 'Read the posts',
            secondaryCta: 'GitHub',
            collageAlt: 'Vintage screen-print illustration of a person',
            collageCaption: 'Collage / screen print',
            collageStamp: '2026',
            collageNote: 'token cost · prompt engineering · chat logs',
            posts: 'Posts',
            postsIndex: '01 / Posts',
            projects: 'Projects',
            projectsIndex: '02 / Projects',
            life: 'Life',
            lifeIndex: '03 / Life',
            viewAllPosts: 'All posts',
            viewAllProjects: 'All projects',
            viewAllLife: 'Enter Life',
            projectsFallback: 'The GitHub API is unavailable right now; these are the locally recorded projects.',
        },
        posts: {
            title: 'Posts',
            lede: 'Tech sharing, learning notes and thoughts.',
            count: '{n} total',
        },
        projects: {
            title: 'Projects',
            lede: 'Open-source repositories and personal work.',
            count: '{n} total',
            updated: 'Updated',
            openRepo: 'GitHub repo',
            source: 'Source',
            localSource: 'Local records',
            fallbackNote: 'The GitHub API is unavailable right now; these are the locally recorded projects.',
        },
        life: {
            title: 'Life',
            lede: 'A place for the parts that do not fit in a repo. Nothing is published here yet, and this is that empty state stated plainly.',
            emptyTitle: 'Nothing here yet',
            emptyBody: 'No Life posts have been published. The first one will land in this spot.',
            count: '{n} total',
        },
        about: {
            index: '04 / About',
            title: 'About',
            lede: 'Morgan, into code and AI.',
            introTitle: 'Who is Morgan',
            intro:
                'I write code and posts, and I tinker with my own small tools. This is a personal blog: the problems I hit, the conclusions I dug out, and the things that have not settled yet.',
            skills: 'What I work with',
            contact: 'Contact',
            mapTitle: 'Places',
            mapBadge: 'China map',
            mapCount: '{n} cities marked',
            mapLegendCity: 'City',
            mapLegendRoute: 'Travel route',
            mapNote: 'A simplified outline of China. Pins mark rough city positions, not precise coordinates.',
            mapHint: 'Use the arrow keys or Tab to move between places and read their notes on focus.',
            mapSelected: 'Currently selected',
            skillsAI: 'Model APIs · Prompt engineering · Code evaluation',
            places: { beijing: 'Beijing', shijiazhuang: 'Shijiazhuang', taiyuan: 'Taiyuan', xian: 'Xi’an', jinan: 'Jinan', qingdao: 'Qingdao' },
            placeNotes: {
                beijing: 'Beijing, roughly placed.', shijiazhuang: 'Shijiazhuang, roughly placed.',
                taiyuan: 'Taiyuan, roughly placed.', xian: 'Xi’an, roughly placed.',
                jinan: 'Jinan, roughly placed.', qingdao: 'Qingdao, roughly placed.',
            },
        },
        footer: {
            builtWith: 'Built with Astro',
            running: 'Running {n} days',
            rss: 'RSS',
        },
        post: {
            originalLanguage: 'Original article in Chinese',
            navigationLabel: 'Post navigation',
            backToTop: 'Back to top',
            prev: 'Previous',
            next: 'Next',
            allPosts: 'All posts',
        },
        notFound: {
            title: '404',
            body: 'This page is missing, or it never existed.',
            cta: 'Back home',
            posts: 'Browse the posts',
        },
    },
} as const;

export function lookup(tree: unknown, key: string): string | undefined {
    let value: unknown = tree;

    for (const segment of key.split('.')) {
        if (value === null || typeof value !== 'object') return undefined;
        value = (value as Record<string, unknown>)[segment];
    }

    return typeof value === 'string' ? value : undefined;
}

export function t(
    key: string,
    lang: Language = 'zh',
    vars: Record<string, string | number> = {},
): string {
    const raw = lookup(translations[lang], key) ?? key;
    return raw.replace(/\{(\w+)\}/g, (match, name) =>
        name in vars ? String(vars[name]) : match,
    );
}

export function getCurrentLanguage(): Language {
    if (typeof window === 'undefined') return 'zh';
    try {
        return localStorage.getItem('language') === 'en' ? 'en' : 'zh';
    } catch {
        return 'zh';
    }
}

// Applies translations to the current document. Runs on every page so new
// markup only needs data-i18n attributes, not a per-page script block.
export function applyTranslations(doc: Document = document): void {
    const lang = getCurrentLanguage();

    doc.querySelectorAll<HTMLElement>('[data-interface-lang]').forEach((el) => {
        el.lang = lang === 'zh' ? 'zh-CN' : 'en';
    });

    const titleKey = doc.body?.dataset.i18nTitle;
    const descriptionKey = doc.body?.dataset.i18nDescription;
    if (titleKey) {
        const title = lookup(translations[lang], titleKey);
        if (title) doc.title = title;
    }
    if (descriptionKey) {
        const description = lookup(translations[lang], descriptionKey);
        const meta = doc.querySelector<HTMLMetaElement>('meta[name="description"]');
        if (description && meta) meta.content = description;
    }

    doc.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        if (!key) return;
        const value = lookup(translations[lang], key);
        if (!value) return;
        // Runtime counters (e.g. the footer's "running N days") pass their
        // number through data-i18n-n so the {n} placeholder survives a
        // language switch instead of rendering a literal "{n}".
        const n = el.dataset.i18nN;
        el.textContent = n ? value.replace('{n}', n) : value;
    });

    doc.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((el) => {
        const spec = el.dataset.i18nAttr;
        if (!spec) return;

        for (const pair of spec.split(',')) {
            const [attr, key] = pair.split(':').map((part) => part?.trim());
            if (!attr || !key) continue;
            const value = lookup(translations[lang], key);
            if (value) el.setAttribute(attr, value);
        }
    });

    doc.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
}
