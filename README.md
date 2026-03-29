# Joe-Mu-Yu 个人博客

[![GitHub stars](https://img.shields.io/github/stars/Joe-Mu-Yu/Joe-Mu-Yu.github.io?style=flat-square)](https://github.com/Joe-Mu-Yu/Joe-Mu-Yu.github.io/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Joe-Mu-Yu/Joe-Mu-Yu.github.io?style=flat-square)](https://github.com/Joe-Mu-Yu/Joe-Mu-Yu.github.io/network)
[![GitHub license](https://img.shields.io/github/license/Joe-Mu-Yu/Joe-Mu-Yu.github.io?style=flat-square)](https://github.com/Joe-Mu-Yu/Joe-Mu-Yu.github.io/blob/main/LICENSE)
[![Astro](https://img.shields.io/badge/Powered%20by-Astro-blue?style=flat-square&logo=astro)](https://astro.build/)

🌐 **在线访问**: [https://joe-mu-yu.github.io](https://joe-mu-yu.github.io)

一个基于 Astro 构建的现代化个人博客，采用白色透明毛玻璃设计风格，支持中英双语和明暗主题切换。

## ✨ 特性

- 🎨 **现代设计** - 白色透明毛玻璃风格，参考 Google Material Design 3.0
- 🌗 **主题切换** - 支持亮色/暗色模式，自动跟随系统偏好
- 🌍 **多语言支持** - 中英文国际化，可实时切换
- 📱 **响应式布局** - 完美适配移动端、平板和桌面端
- 🚀 **性能优化** - Astro 静态站点生成，极速加载
- 🔍 **SEO 友好** - 内置 sitemap，搜索引擎优化
- 📝 **Markdown 支持** - 使用 MDX 编写技术文章
- 🎯 **GitHub 集成** - 自动同步 GitHub 仓库到项目页面
- ♿ **无障碍访问** - 符合 WAI-ARIA 标准

## 🛠️ 技术栈

- **框架**: [Astro 5.0](https://astro.build/)
- **语言**: TypeScript
- **样式**: CSS Variables + 毛玻璃效果
- **部署**: GitHub Pages
- **内容**: MDX (Markdown + JSX)

## 🚀 快速开始

### 前置要求

- Node.js 18+ 
- npm 或 pnpm

### 本地开发

```bash
# 克隆项目
git clone https://github.com/Joe-Mu-Yu/Joe-Mu-Yu.github.io.git

# 进入项目目录
cd Joe-Mu-Yu.github.io

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 `http://localhost:4321/` 查看效果

### 构建部署

```bash
# 构建静态站点
npm run build

# 预览构建结果
npm run preview
```

## 📁 项目结构

```
Joe-Mu-Yu.github.io/
├── src/
│   ├── components/          # Astro 组件
│   │   ├── ArticleCard.astro    # 文章卡片
│   │   ├── ProjectCard.astro    # 项目卡片
│   │   ├── Button.astro         # 按钮组件
│   │   ├── Header.astro         # 导航栏
│   │   ├── Footer.astro         # 页脚
│   │   ├── ThemeToggle.astro    # 主题切换
│   │   └── LanguageToggle.astro # 语言切换
│   ├── layouts/             # 布局组件
│   │   └── BaseLayout.astro     # 基础布局
│   ├── pages/               # 页面
│   │   ├── index.astro          # 首页
│   │   ├── posts.astro          # 文章列表
│   │   ├── projects.astro       # 项目展示
│   │   ├── life.astro           # 生活
│   │   ├── about.astro          # 关于
│   │   └── posts/               # 博客文章目录
│   ├── styles/              # 全局样式
│   │   └── global.css           # CSS 变量和基础样式
│   └── i18n/                # 国际化
│       └── index.ts             # 翻译配置
├── public/                  # 静态资源
├── astro.config.mjs         # Astro 配置
└── package.json             # 项目依赖
```

## 📝 内容创作

### 创建新文章

在 `src/pages/posts/` 目录下创建 `.md` 文件：

```markdown
---
title: '文章标题'
description: '文章描述'
date: 2025-01-01
tags: ['标签 1', '标签 2']
---

# 文章内容

开始写作...
```

### 配置国际化

在 `src/i18n/index.ts` 中添加翻译：

```typescript
export const translations = {
  zh: {
    nav: {
      home: '首页',
      posts: '文章',
      projects: '项目'
    }
  },
  en: {
    nav: {
      home: 'Home',
      posts: 'Posts',
      projects: 'Projects'
    }
  }
};
```

## 🎨 自定义配置

### 修改主题颜色

编辑 `src/styles/global.css`：

```css
:root {
  --color-primary: #1a73e8;      /* 主色调 */
  --color-bg: #ffffff;           /* 背景色 */
  --color-text: #1a1a1a;         /* 文字颜色 */
}
```

### 添加项目展示

项目页面会自动从 GitHub API 获取您的仓库，也可以手动添加：

```typescript
const manualProjects = [
  {
    title: '项目名称',
    description: '项目描述',
    href: 'https://github.com/your-username/repo',
    icon: '🚀',
    language: 'TypeScript',
    stars: 0,
    forks: 0
  }
];
```

## 📊 GitHub 项目集成

项目页面会自动同步您的 GitHub 仓库：

- ✅ 自动获取仓库信息（名称、描述、语言、Stars、Forks）
- ✅ 过滤 Fork 项目，仅显示原创
- ✅ 智能匹配项目图标
- ✅ 显示最后更新时间

## 🌟 设计亮点

### 白色透明毛玻璃风格

- **玻璃态组件**: 使用 `backdrop-filter: blur(20px)` 创建毛玻璃效果
- **透明层次**: 70% / 50% / 85% 三种透明度层级
- **微妙阴影**: 精确计算的阴影值，营造空间感
- **渐变背景**: 径向渐变光晕，增加视觉深度

### 交互体验

- **流畅动画**: `cubic-bezier(0.4, 0, 0.2, 1)` 缓动函数
- **悬停反馈**: 卡片上浮、阴影加深、边框变化
- **主题切换**: 平滑过渡，无闪烁
- **响应式设计**: 移动端优化，触摸友好

## 🔧 开发命令

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# Astro CLI
npm run astro add [package]
```

## 📄 许可证

[MIT License](LICENSE)

## 👤 关于作者

**Morgan**

- GitHub: [@Joe-Mu-Yu](https://github.com/Joe-Mu-Yu)
- Email: joerocker516@gmail.com
- Blog: [https://joe-mu-yu.github.io](https://joe-mu-yu.github.io)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📮 联系方式

- 📧 Email: joerocker516@gmail.com
- 💬 GitHub Issues: [提问](https://github.com/Joe-Mu-Yu/Joe-Mu-Yu.github.io/issues)

## 🙏 致谢

- [Astro](https://astro.build/) - 现代化的静态站点框架
- [Inter Font](https://rsms.me/inter/) - 优雅的字体
- [Google Material Design](https://material.io/) - 设计灵感来源

---

Made with ❤️ by Morgan | Powered by Astro
