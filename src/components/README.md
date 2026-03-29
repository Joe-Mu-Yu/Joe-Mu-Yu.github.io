# 组件库 (Components)

本目录包含所有可复用的 Astro 组件，采用白色透明毛玻璃设计风格。

## 📦 组件列表

### 布局组件

#### `BaseLayout.astro`
基础布局组件，所有页面的根容器。
- 包含 HTML 头部元信息
- 集成 Header 和 Footer
- 管理主题切换逻辑
- 支持 SEO 优化配置

```astro
<BaseLayout title="页面标题" description="页面描述">
  <slot />
</BaseLayout>
```

### UI 组件

#### `Button.astro`
按钮组件，支持三种变体。

**属性：**
- `href?: string` - 链接地址（可选，提供时渲染为 `<a>` 标签）
- `variant?: 'primary' | 'secondary' | 'outline'` - 按钮样式（默认：primary）
- `class?: string` - 自定义类名

**示例：**
```astro
<Button variant="primary">主要按钮</Button>
<Button href="/link" variant="secondary">次要按钮</Button>
<Button variant="outline">边框按钮</Button>
```

**样式说明：**
- **Primary**: 实心蓝色背景，用于主要操作
- **Secondary**: 浅灰背景，用于次要操作
- **Outline**: 透明边框，用于取消、返回等操作

---

#### `ArticleCard.astro`
文章卡片组件，展示博客文章摘要。

**属性：**
- `title: string` - 文章标题
- `description: string` - 文章描述
- `date: Date` - 发布日期
- `tags?: string[]` - 标签数组
- `href: string` - 文章链接

**示例：**
```astro
<ArticleCard
  title="我的第一篇文章"
  description="这是文章描述..."
  date={new Date('2025-01-01')}
  tags={['Astro', '博客']}
  href="/posts/my-first-post"
/>
```

**设计特点：**
- 毛玻璃背景效果
- 悬停时上浮动画
- 标签悬停时变色
- 响应式布局

---

#### `ProjectCard.astro`
项目展示卡片，集成 GitHub 仓库信息。

**属性：**
- `title: string` - 项目名称
- `description: string` - 项目描述
- `href: string` - 项目链接
- `icon?: string` - 项目图标（emoji）
- `language?: string` - 编程语言
- `stars?: number` - GitHub Stars 数量
- `forks?: number` - GitHub Forks 数量
- `updatedAt?: string` - 最后更新时间

**示例：**
```astro
<ProjectCard
  title="OpenIsle"
  description="完全开源的社区平台"
  href="https://github.com/Joe-Mu-Yu/OpenIsle"
  icon="🏝️"
  language="TypeScript"
  stars={100}
  forks={20}
  updatedAt="2025-01-15"
/>
```

**功能：**
- 自动从 GitHub API 获取数据
- 显示编程语言、Stars、Forks 统计
- 智能图标匹配
- 顶部彩色条装饰（悬停显示）

---

#### `CategoryTag.astro`
分类标签组件，用于文章分类和标签展示。

**属性：**
- `tag: string` - 标签名称
- `count?: number` - 文章数量（可选）
- `href?: string` - 标签链接（可选）

**示例：**
```astro
<CategoryTag tag="前端" count={10} />
<CategoryTag tag="Astro" href="/tags/astro" />
```

---

#### `Header.astro`
导航栏组件，固定在页面顶部。

**特性：**
- 毛玻璃背景效果
- 响应式布局（移动端折叠）
- 集成语言和主题切换
- 支持国际化导航

**样式：**
- 圆角 28px 胶囊状设计
- 20px 背景模糊
- 悬停时背景变实

---

#### `Footer.astro`
页脚组件，显示版权信息。

**内容：**
- 版权年份和作者
- RSS 订阅链接
- 网站运行时间

**设计：**
- 极简风格
- 浅色文字
- 悬停高亮链接

---

### 功能组件

#### `ThemeToggle.astro`
主题切换按钮，在亮色/暗色模式间切换。

**功能：**
- 圆形按钮设计（40x40px）
- 太阳/月亮图标切换
- 悬停旋转动画
- 本地存储主题偏好

**使用：**
```astro
<ThemeToggle />
```

---

#### `LanguageToggle.astro`
语言切换按钮，在中英文间切换。

**功能：**
- 显示当前语言
- 点击切换到另一种语言
- 触发全局语言更新事件

---

#### `InteractiveMap.astro`
交互式地图组件（如果启用）。

**依赖：**
- Mapbox GL
- 需要配置 Mapbox Token

---

## 🎨 设计规范

### 颜色系统

所有组件使用全局 CSS 变量：
- `--color-primary`: 主色调（#1a73e8）
- `--color-bg`: 背景色
- `--color-text`: 文字颜色
- `--glass-bg`: 玻璃态背景透明度

### 阴影层次

- `--shadow-sm`: 轻微阴影
- `--shadow-md`: 中等阴影
- `--shadow-lg`: 大阴影
- `--shadow-glass`: 玻璃态阴影

### 动画规范

- **缓动函数**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **持续时间**: 0.2s - 0.3s
- **悬停效果**: `translateY(-1px)` 到 `translateY(-4px)`

---

## 📝 使用指南

### 导入组件

```astro
---
import Button from '../components/Button.astro';
import ArticleCard from '../components/ArticleCard.astro';
---
```

### 组合使用

```astro
<article>
  <ArticleCard
    title="标题"
    description="描述"
    date={new Date()}
    href="/post"
  />
  <div class="actions">
    <Button variant="primary">阅读更多</Button>
    <Button variant="outline">分享</Button>
  </div>
</article>
```

---

## 🔧 自定义组件

### 创建新组件

1. 在 `src/components/` 目录创建 `.astro` 文件
2. 定义组件接口（Props）
3. 编写模板和样式
4. 导出组件

**示例模板：**
```astro
---
interface Props {
  title: string;
}

const { title } = Astro.props;
---

<div class="my-component">
  <h2>{title}</h2>
</div>

<style>
  .my-component {
    /* 样式 */
  }
</style>
```

---

## 📚 相关文档

- [全局样式](../styles/README.md)
- [页面组件](../pages/README.md)
- [国际化](../i18n/README.md)
