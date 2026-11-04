# 响应式断点指南

## 断点定义

| 断点 | 宽度 | 设备类型 | 主要特点 |
|------|------|----------|----------|
| `xs` | 320px+ | 小手机 | 最小边距，紧凑布局 |
| `sm` | 640px+ | 大手机 | 标准移动端布局 |
| `md` | 768px+ | 平板 | 双列布局开始 |
| `lg` | 1024px+ | 小笔记本 | 多列网格布局 |
| `xl` | 1440px+ | 桌面 | 完整桌面布局 |
| `2xl` | 1920px+ | 大桌面 | 最大宽度限制 |

## 主要组件响应式策略

### 1. TopBar (顶部栏)
- **< 768px (md)**: 完全隐藏
- **≥ 768px**: 显示邮箱和社交媒体图标

### 2. Navbar (导航栏)
- **< 1024px (lg)**: 显示汉堡菜单，Logo 紧凑
- **≥ 1024px**: 显示完整导航链接

### 3. Breadcrumb (面包屑)
- **320px**: 高度 96px，padding 12px
- **640px**: 高度 112px，padding 16px
- **768px**: 高度 144px，padding 24px
- **1024px**: 高度 192px，padding 40px

### 4. Footer (页脚)
- **< 320px**: 单列，padding 32px 12px
- **≥ 320px**: 双列，padding 48px 16px
- **≥ 1024px**: 四列，padding 64px 40px

### 5. StudentsDistrictsPage (学生地区页面)
- **移动端 (< 640px)**: 
  - 几乎贴边显示 (px-2)
  - 手风琴标题紧凑 (p-3)
  - 内容单列堆叠
- **平板 (≥ 768px)**:
  - 标准边距 (px-6)
  - 手风琴标题宽松 (p-6)
- **桌面 (≥ 1024px)**:
  - 最大边距 (px-10)
  - 内容双列布局

## 字体大小响应式

### 标题 (font-display)
```
移动端: text-3xl (30px)
平板:   text-4xl (36px)
笔记本: text-5xl (48px)
桌面:   text-6xl (60px)
```

### 正文
```
移动端: text-sm (14px)
平板:   text-base (16px)
笔记本: text-lg (18px)
```

## 间距系统

### Padding
```
xs (320px): px-3 (12px)
sm (640px): px-4 (16px)
md (768px): px-6 (24px)
lg (1024px): px-10 (40px)
```

### Gap
```
移动端: gap-2 (8px)
平板:   gap-4 (16px)
笔记本: gap-6 (24px)
桌面:   gap-8 (32px)
```

## 图片尺寸

### Hero 区域
```
移动端: aspect-[16/10]
平板:   aspect-[16/9]
桌面:   aspect-[16/8]
```

### 卡片图片
```
移动端: aspect-[4/3]
平板:   aspect-[3/2]
桌面:   aspect-[16/9]
```

## 网格布局

### 2列布局
```html
<!-- 移动端单列，平板及以上双列 -->
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
```

### 3列布局
```html
<!-- 移动端单列，平板双列，桌面三列 -->
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

### 4列布局
```html
<!-- 移动端单列，平板双列，笔记本三列，桌面四列 -->
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
```

## 最佳实践

### 1. 移动优先
始终从移动端样式开始，然后使用 `sm:`, `md:`, `lg:`, `xl:` 前缀添加更大屏幕的样式。

```jsx
// ✅ 正确：移动优先
<div className="text-sm md:text-base lg:text-lg">

// ❌ 错误：桌面优先
<div className="text-lg md:text-base sm:text-sm">
```

### 2. 使用容器查询
对于复杂组件，考虑使用容器查询而不是媒体查询。

### 3. 测试所有断点
在每个断点测试页面：
- 320px (iPhone SE)
- 375px (iPhone 12/13/14)
- 768px (iPad)
- 1024px (iPad Pro / 小笔记本)
- 1440px (标准桌面)
- 1920px (全高清桌面)

### 4. 触摸目标
确保所有可点击元素至少 44x44px：
```jsx
<button className="min-h-[44px] min-w-[44px] p-3">
```

### 5. 图片优化
使用响应式图片：
```jsx
<img 
  srcSet="image-320w.jpg 320w, image-768w.jpg 768w, image-1440w.jpg 1440w"
  sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw"
/>
```

## 常见问题

### Q: 为什么 320px 断点很重要？
A: 320px 是最小常见移动设备宽度（如 iPhone SE），确保在这个宽度下内容可读且可交互。

### Q: 如何处理横向滚动？
A: 使用 `overflow-x-hidden` 在 body 上，并确保所有元素不超过视口宽度。

### Q: 什么时候使用 `xs:` 前缀？
A: 当需要在 320px-639px 之间应用特殊样式时使用，通常用于极小屏幕的紧凑布局。

## 更新日志

- **2024**: 添加自定义断点配置
- **2024**: 优化移动端 StudentsDistrictsPage 贴边显示
- **2024**: 调整 Navbar 和 Footer 在小屏幕上的布局
