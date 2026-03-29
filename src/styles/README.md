# 全局样式 (Styles)

本目录包含全局 CSS 样式和 CSS 变量定义。

## 📁 文件结构

```
styles/
└── global.css    # 全局样式和 CSS 变量
```

---

## 🎨 设计系统

### 白色透明毛玻璃风格

采用现代极简设计，参考 Google Material Design 3.0 和 Apple 的人机界面指南。

**核心特点：**
- 白色背景 + 微妙的灰色层次
- 毛玻璃效果（`backdrop-filter: blur(20px)`）
- 透明度和阴影营造空间感
- 平滑的动画过渡

---

## 🎯 CSS 变量系统

### 颜色变量

#### 亮色模式 (Light Mode)

```css
:root {
  --color-bg: #ffffff;              /* 主背景色 */
  --color-bg-secondary: #f8f9fa;    /* 次要背景 */
  --color-bg-tertiary: #f1f3f4;     /* 第三级背景 */
  
  --color-text: #1a1a1a;            /* 主文字颜色 */
  --color-text-secondary: #5f6368;  /* 次要文字 */
  --color-text-tertiary: #80868b;   /* 第三级文字 */
  
  --color-primary: #1a73e8;         /* 主色调（Google Blue） */
  --color-primary-hover: #1557b0;   /* 主色调悬停 */
  --color-primary-light: rgba(26, 115, 232, 0.08);  /* 主色调浅色 */
  
  --color-accent: #ea4335;          /* 强调色（Google Red） */
  
  --color-border: rgba(0, 0, 0, 0.08);      /* 边框颜色 */
  --color-border-light: rgba(0, 0, 0, 0.04); /* 浅边框 */
}
```

#### 暗色模式 (Dark Mode)

```css
[data-theme='dark'] {
  --color-bg: #0f0f0f;              /* 深黑背景 */
  --color-bg-secondary: #1a1a1a;    /* 次要背景 */
  --color-bg-tertiary: #242526;     /* 第三级背景 */
  
  --color-text: #f1f3f4;            /* 主文字 */
  --color-text-secondary: #babcbe;  /* 次要文字 */
  --color-text-tertiary: #80868b;   /* 第三级文字 */
  
  --color-primary: #8ab4f8;         /* 主色调（浅蓝） */
  --color-primary-hover: #aecbfa;   /* 主色调悬停 */
  --color-primary-light: rgba(138, 180, 248, 0.12);
  
  --color-accent: #f28b82;          /* 强调色（浅红） */
  
  --color-border: rgba(255, 255, 255, 0.08);
  --color-border-light: rgba(255, 255, 255, 0.04);
}
```

---

### 玻璃态变量

用于创建毛玻璃效果：

```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.7);        /* 基础玻璃背景 */
  --glass-bg-light: rgba(255, 255, 255, 0.5);  /* 轻量玻璃 */
  --glass-bg-strong: rgba(255, 255, 255, 0.85); /* 强化玻璃 */
  --glass-border: rgba(255, 255, 255, 0.18);   /* 玻璃边框 */
}
```

**使用示例：**
```css
.card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
}
```

---

### 阴影系统

五个层级的阴影，营造深度感：

```css
:root {
  /* 轻微阴影 */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  
  /* 中等阴影 */
  --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.06), 
               0 1px 2px rgba(0, 0, 0, 0.03);
  
  /* 大阴影 */
  --shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.08), 
               0 4px 12px rgba(0, 0, 0, 0.04);
  
  /* 超大阴影 */
  --shadow-xl: 0 12px 48px rgba(0, 0, 0, 0.1), 
               0 6px 24px rgba(0, 0, 0, 0.06);
  
  /* 玻璃态阴影 */
  --shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.06), 
                  0 2px 8px rgba(0, 0, 0, 0.03);
  
  /* 悬停阴影 */
  --shadow-hover: 0 12px 40px rgba(0, 0, 0, 0.1), 
                  0 6px 20px rgba(0, 0, 0, 0.06);
}
```

**使用场景：**
- `--shadow-sm`: 按钮、小元素
- `--shadow-md`: 卡片、输入框
- `--shadow-lg`: 头像、大卡片
- `--shadow-xl`: 模态框、下拉菜单
- `--shadow-glass`: 毛玻璃组件
- `--shadow-hover`: 悬停状态

---

### 模糊效果

```css
:root {
  --backdrop-blur: blur(20px);        /* 标准模糊 */
  --backdrop-blur-strong: blur(40px); /* 强化模糊 */
}
```

---

### 布局变量

```css
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 
               "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  
  --max-width: 1120px;        /* 最大内容宽度 */
  --max-width-narrow: 720px;  /* 窄版宽度 */
  
  --border-radius: 20px;      /* 大圆角 */
  --border-radius-sm: 12px;   /* 小圆角 */
  --border-radius-lg: 28px;   /* 超大圆角 */
}
```

---

## 🎭 主题切换

### 切换逻辑

通过 `data-theme` 属性控制主题：

```html
<!-- 亮色模式 -->
<html lang="zh-CN">

<!-- 暗色模式 -->
<html lang="zh-CN" data-theme="dark">
```

### JavaScript 实现

```javascript
// 切换主题
const toggle = document.getElementById('theme-toggle');
toggle?.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
```

### 自动检测系统偏好

```javascript
// 页面加载时检测
const theme = localStorage.getItem('theme') || 
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', theme);
```

---

## 📐 基础样式

### 全局重置

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

### 背景样式

```css
body {
  background-color: var(--color-bg);
  background-image: 
    radial-gradient(circle at 20% 50%, var(--color-primary-light) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, var(--color-primary-light) 0%, transparent 40%);
  background-attachment: fixed;
  color: var(--color-text);
  font-family: var(--font-sans);
  line-height: 1.6;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**效果说明：**
- 白色背景
- 两个径向渐变光晕（左上角和右上角）
- 背景固定，滚动时视差效果
- 字体抗锯齿优化

---

### 链接样式

```css
a {
  color: inherit;
  text-decoration: none;
}
```

### 列表样式

```css
ul {
  list-style: none;
}
```

### 容器类

```css
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1rem;
}
```

---

## 🎬 动画规范

### 缓动函数

使用标准的 Material Design 缓动曲线：

```css
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
```

### 常见动画

#### 卡片悬停上浮

```css
.card {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}
```

#### 按钮悬停

```css
.btn {
  transition: all 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
```

#### 缩放动画

```css
.avatar {
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.03);
}
```

---

## 🎨 颜色使用指南

### 主色调使用

```css
/* 主要按钮 */
.btn-primary {
  background: var(--color-primary);
  color: white;
}

/* 悬停状态 */
.btn-primary:hover {
  background: var(--color-primary-hover);
}

/* 浅色背景 */
.tag {
  background: var(--color-primary-light);
  color: var(--color-primary);
}
```

### 文字层次

```css
/* 主标题 */
h1, h2, h3 {
  color: var(--color-text);
}

/* 正文和次要信息 */
p, span {
  color: var(--color-text-secondary);
}

/* 辅助文字 */
.meta, time {
  color: var(--color-text-tertiary);
}
```

---

## 📱 响应式设计

### 断点

```css
/* 移动端 */
@media (max-width: 768px) {
  h1 { font-size: 2.25rem; }
  
  .hero-content {
    flex-direction: column;
  }
}

/* 平板端 */
@media (min-width: 769px) and (max-width: 1024px) {
  /* 平板样式 */
}

/* 桌面端 */
@media (min-width: 1025px) {
  /* 桌面样式 */
}
```

---

## 🔧 自定义主题

### 修改主色调

编辑 `global.css` 的 `:root`：

```css
:root {
  --color-primary: #your-color;
  --color-primary-hover: #your-darker-color;
  --color-primary-light: rgba(your-color-rgb, 0.08);
}
```

### 添加新的阴影层级

```css
:root {
  --shadow-custom: 0 4px 16px rgba(0, 0, 0, 0.05);
}
```

---

## 📚 最佳实践

### 1. 使用 CSS 变量

```css
/* ✅ 推荐 */
.card {
  background: var(--color-bg);
  box-shadow: var(--shadow-md);
}

/* ❌ 不推荐 */
.card {
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
```

### 2. 保持阴影一致性

```css
/* ✅ 推荐 - 使用预定义阴影 */
.card {
  box-shadow: var(--shadow-glass);
}

/* ❌ 不推荐 - 自定义阴影值 */
.card {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07);
}
```

### 3. 使用缓动函数

```css
/* ✅ 推荐 */
.element {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ❌ 不推荐 */
.element {
  transition: transform 0.3s ease;
}
```

---

## 📊 性能优化

### 1. 使用 CSS 变量减少重复

所有颜色和阴影使用变量，减少 CSS 文件大小。

### 2. 硬件加速

```css
.card {
  will-change: transform;
}
```

### 3. 避免过度使用 backdrop-filter

毛玻璃效果性能消耗较大，仅在关键组件使用。

---

## 📚 相关文档

- [组件库](../components/README.md)
- [页面目录](../pages/README.md)
- [国际化](../i18n/README.md)
