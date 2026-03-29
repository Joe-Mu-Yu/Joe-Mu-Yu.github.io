# 页面 (Pages)

本目录包含所有页面组件，使用 Astro 构建。

## 📄 页面列表

### 主要页面

#### `index.astro` - 首页
博客的首页，展示个人简介和最新内容。

**内容模块：**
- Hero 区域（个人简介 + 头像）
- 最新文章列表（3 篇）
- 项目展示
- 分类标签

**特点：**
- 大标题和渐变文字效果
- 头像圆形设计，悬停缩放
- 响应式布局（移动端垂直排列）

**文件位置:** `src/pages/index.astro`

---

#### `posts.astro` - 文章列表页
展示所有博客文章的列表页面。

**功能：**
- 按时间倒序排列所有文章
- 使用 ArticleCard 组件展示
- 支持无限滚动（未来功能）

**数据来源：**
- 自动读取 `src/pages/posts/*.md` 文件

**文件位置:** `src/pages/posts.astro`

---

#### `projects.astro` - 项目展示页
展示 GitHub 仓库和个人项目。

**功能：**
- 自动从 GitHub API 获取仓库信息
- 显示项目名称、描述、语言、Stars、Forks
- 智能图标匹配
- 过滤 Fork 项目，仅显示原创

**API 配置：**
```typescript
const GITHUB_USERNAME = 'Joe-Mu-Yu';
const GITHUB_API = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50`;
```

**文件位置:** `src/pages/projects.astro`

---

#### `life.astro` - 生活页面
分享生活点滴和感悟。

**用途：**
- 生活相关的文章
- 非技术类内容
- 个人成长记录

**文件位置:** `src/pages/life.astro`

---

#### `about.astro` - 关于页面
个人介绍和联系方式。

**内容：**
- 个人简介
- 技能列表
- 联系方式
- 交互式地图（可选）

**文件位置:** `src/pages/about.astro`

---

#### `404.astro` - 404 错误页
页面未找到时的错误提示页。

**设计：**
- 大号 "404" 文字
- 友好的提示信息
- 返回首页按钮

**文件位置:** `src/pages/404.astro`

---

### 文章目录

#### `posts/` - 博客文章
存放所有 Markdown 格式的博客文章。

**文章格式：**
```markdown
---
title: '文章标题'
description: '文章描述（用于 SEO 和卡片展示）'
date: 2025-01-01
tags: ['标签 1', '标签 2']
---

# 文章正文

开始写作...
```

**Frontmatter 字段说明：**
- `title`: 文章标题（必填）
- `description`: 文章描述（必填，建议 150-160 字符）
- `date`: 发布日期（必填，ISO 8601 格式）
- `tags`: 标签数组（可选）
- `draft`: 是否为草稿（可选，默认 false）

**示例文章:**
- `prompt-engineering-notes.md` - 提示词工程笔记

---

## 🎨 页面设计特点

### 统一布局

所有页面使用 `BaseLayout` 组件，确保：
- 一致的导航栏
- 统一的页脚
- 相同的主题切换逻辑
- 统一的 SEO 配置

### 响应式设计

- **桌面端**: 最大宽度 1120px
- **平板端**: 自适应布局
- **移动端**: 垂直排列，优化触摸体验

### 视觉层次

1. **Hero 区域**: 大标题，渐变背景
2. **内容区域**: 卡片网格布局
3. **次要信息**: 浅色文字，小字号

---

## 📝 创建新页面

### 步骤

1. 在 `src/pages/` 目录创建 `.astro` 文件
2. 导入 `BaseLayout` 组件
3. 编写页面内容
4. 添加样式

### 示例模板

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="页面标题">
  <div class="container section">
    <h1>页面标题</h1>
    <div class="content">
      <!-- 页面内容 -->
    </div>
  </div>
</BaseLayout>

<style>
  .section {
    padding: 5rem 1rem 4rem;
    max-width: var(--max-width);
    margin: 0 auto;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
    color: var(--color-text);
    text-align: center;
    font-weight: 600;
  }
  
  .content {
    /* 内容样式 */
  }
</style>
```

---

## 📊 页面路由

Astro 基于文件系统的路由：

| 文件路径 | URL 路径 | 说明 |
|---------|----------|------|
| `index.astro` | `/` | 首页 |
| `posts.astro` | `/posts` | 文章列表 |
| `projects.astro` | `/projects` | 项目展示 |
| `life.astro` | `/life` | 生活 |
| `about.astro` | `/about` | 关于 |
| `404.astro` | `*` | 404 错误页 |
| `posts/[slug].md` | `/posts/[slug]` | 文章详情 |

---

## 🔧 页面优化

### SEO 优化

每个页面包含：
- `<title>` 标签
- `<meta name="description">` 描述
- Open Graph 元标签（未来）
- Twitter Card 元标签（未来）

### 性能优化

- 图片懒加载
- 代码分割
- 静态生成
- CSS 变量减少重复

### 无障碍访问

- 语义化 HTML 标签
- ARIA 属性
- 键盘导航支持
- 颜色对比度符合 WCAG 标准

---

## 🌐 国际化

页面支持多语言，通过 `data-i18n` 属性实现：

```astro
<h1 data-i18n="home.greeting">你好</h1>
```

语言切换时自动更新文本内容。

**支持语言：**
- 中文 (zh)
- 英文 (en)

---

## 📚 相关文档

- [组件库](../components/README.md)
- [全局样式](../styles/README.md)
- [国际化](../i18n/README.md)
