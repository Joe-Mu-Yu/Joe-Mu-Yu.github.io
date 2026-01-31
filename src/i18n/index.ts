// 国际化配置
export const translations = {
    zh: {
        // 导航
        nav: {
            home: '首页',
            posts: '文章',
            projects: '项目',
            life: '生活',
            about: '关于',
        },
        // 首页
        home: {
            greeting: 'Hi, Morgan',
            bio: '编程爱好者 / AI爱好者 / 探索生活的美好',
            articles: '文章',
            projectsTitle: '项目',
            viewAll: '查看全部',
            viewAllPosts: '查看所有文章',
            viewAllProjects: '查看所有项目',
        },
        // 分类
        categories: {
            frontend: '前端',
            project: '项目',
            tools: '工具',
            life: '生活',
        },
        // 关于页面
        about: {
            title: '关于我',
            content: '欢迎来到我的个人博客！',
        },
        // 生活页面
        life: {
            title: '生活',
            description: '分享生活中的点滴瞬间和感悟',
            placeholder: '生活相关的文章将显示在这里...',
        },
        // 项目页面
        projects: {
            title: '项目',
            description: '我的开源项目和个人作品',
        },
        // 文章页面
        posts: {
            title: '文章',
            description: '技术分享、学习笔记和思考',
        },
        // 页脚
        footer: {
            rights: '版权所有',
        },
    },
    en: {
        // Navigation
        nav: {
            home: 'Home',
            posts: 'Posts',
            projects: 'Projects',
            life: 'Life',
            about: 'About',
        },
        // Home page
        home: {
            greeting: 'Hi, Morgan',
            bio: 'Programming Enthusiast / AI Lover / Exploring the Beauty of Life',
            articles: 'Articles',
            projectsTitle: 'Projects',
            viewAll: 'View All',
            viewAllPosts: 'View All Posts',
            viewAllProjects: 'View All Projects',
        },
        // Categories
        categories: {
            frontend: 'Frontend',
            project: 'Project',
            tools: 'Tools',
            life: 'Life',
        },
        // About page
        about: {
            title: 'About Me',
            content: 'Welcome to my personal blog!',
        },
        // Life page
        life: {
            title: 'Life',
            description: 'Sharing moments and insights from life',
            placeholder: 'Life-related articles will be displayed here...',
        },
        // Projects page
        projects: {
            title: 'Projects',
            description: 'My open-source projects and personal works',
        },
        // Posts page
        posts: {
            title: 'Posts',
            description: 'Tech sharing, learning notes and thoughts',
        },
        // Footer
        footer: {
            rights: 'All rights reserved',
        },
    },
};

export type Language = 'zh' | 'en';

// 获取翻译文本的工具函数
export function t(key: string, lang: Language = 'zh'): string {
    const keys = key.split('.');
    let value: any = translations[lang];

    for (const k of keys) {
        if (value && typeof value === 'object') {
            value = value[k];
        } else {
            return key; // 如果找不到，返回 key 本身
        }
    }

    return typeof value === 'string' ? value : key;
}

// 获取当前语言（在浏览器端）
export function getCurrentLanguage(): Language {
    if (typeof window !== 'undefined') {
        return (localStorage.getItem('language') as Language) || 'zh';
    }
    return 'zh';
}
