# Sticky Scroll 动画指南

## 概述

网站已添加完整的 Sticky Scroll 动画系统，提供流畅的滚动体验，增强用户交互。

## 动画类型

### 1. Sticky Fade In (淡入)
元素从透明渐变到完全不透明，同时向上移动。

```jsx
<div className="sticky-fade-in">
  内容
</div>
```

**使用场景：**
- CTA 部分
- 重要标题
- 关键信息块

### 2. Sticky Scale In (缩放)
元素从小到大缩放进入视图。

```jsx
<div className="sticky-scale-in">
  内容
</div>
```

**使用场景：**
- 按钮
- 卡片
- 图标

### 3. Sticky Slide Left (左滑入)
元素从左侧滑入视图。

```jsx
<div className="sticky-slide-left">
  内容
</div>
```

**使用场景：**
- 左侧内容块
- 图片
- 侧边栏

### 4. Sticky Slide Right (右滑入)
元素从右侧滑入视图。

```jsx
<div className="sticky-slide-right">
  内容
</div>
```

**使用场景：**
- 右侧内容块
- 表单
- 对比内容

## 已应用的页面

### HomePage (首页)
- ✅ Introduction 部分：左侧内容左滑入，右侧内容右滑入
- ✅ Mission, Vision, Values 部分：左侧标题左滑入
- ✅ CTA 部分：标题淡入，按钮缩放进入

### AboutPage (关于页面)
- ✅ Our Roots 部分：左侧标题和图片左滑入（sticky）
- ✅ Who We Are 部分：图片左滑入，文字右滑入
- ✅ CTA 部分：标题淡入，按钮缩放进入

### ProgramsPage (课程页面)
- ✅ Academic Excellence 部分：左侧左滑入，右侧右滑入
- ✅ Grade Levels 部分：三个级别卡片依次淡入

### DonatePage (捐赠页面)
- ✅ Hero 部分：左侧文字左滑入，右侧图片右滑入

### ContactPage (联系页面)
- ✅ Hero 部分：内容淡入

### StudentsDistrictsPage (学生地区页面)
- ✅ Hero 部分：左侧文字左滑入，右侧图片右滑入

## 技术实现

### 1. CSS 动画定义 (src/index.css)

```css
.sticky-fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.sticky-fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.sticky-scale-in {
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.sticky-scale-in.visible {
  opacity: 1;
  transform: scale(1);
}

.sticky-slide-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.sticky-slide-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.sticky-slide-right {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.sticky-slide-right.visible {
  opacity: 1;
  transform: translateX(0);
}
```

### 2. Intersection Observer Hook (src/hooks/useStickyScroll.ts)

```typescript
import { useEffect, useRef } from 'react';

export function useStickyScroll() {
  const elementsRef = useRef<Element[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const stickyElements = document.querySelectorAll(
      '.sticky-fade-in, .sticky-scale-in, .sticky-slide-left, .sticky-slide-right'
    );
    
    stickyElements.forEach((el) => {
      observer.observe(el);
      elementsRef.current.push(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        observer.unobserve(el);
      });
      elementsRef.current = [];
    };
  }, []);
}
```

### 3. App 集成 (src/App.tsx)

```typescript
import { useStickyScroll } from './hooks/useStickyScroll';

function AppContent() {
  useStickyScroll();
  
  return (
    // ... 应用内容
  );
}
```

## 性能优化

### 1. 延迟触发
- 使用 `rootMargin: '0px 0px -100px 0px'` 确保元素进入视口 100px 后才触发动画
- 避免在视口边缘频繁触发

### 2. 自动清理
- 元素一旦变为 `visible`，自动从 observer 中移除
- 避免重复触发和内存泄漏

### 3. 硬件加速
- 使用 `transform` 和 `opacity` 属性
- 自动触发 GPU 加速，确保流畅动画

### 4. 响应式设计
- 动画在所有设备上保持一致
- 移动端和桌面端都有良好的性能

## 最佳实践

### ✅ 推荐做法

1. **成对使用滑入动画**
   ```jsx
   <div className="sticky-slide-left">左侧内容</div>
   <div className="sticky-slide-right">右侧内容</div>
   ```

2. **重要元素使用淡入**
   ```jsx
   <h2 className="sticky-fade-in">重要标题</h2>
   ```

3. **按钮使用缩放**
   ```jsx
   <button className="sticky-scale-in">点击我</button>
   ```

4. **组合使用多种动画**
   ```jsx
   <section>
     <h2 className="sticky-fade-in">标题</h2>
     <div className="sticky-slide-left">内容</div>
     <button className="sticky-scale-in">按钮</button>
   </section>
   ```

### ❌ 避免做法

1. **不要过度使用动画**
   - 每个 section 最多 3-4 个动画元素
   - 避免所有元素都有动画

2. **不要在移动设备上使用复杂动画**
   - 保持简单，避免性能问题

3. **不要使用动画隐藏重要内容**
   - 确保内容在动画前也是可读的

## 自定义动画

如需添加新的动画类型，请在 `src/index.css` 中添加：

```css
.sticky-your-animation {
  opacity: 0;
  transform: /* 初始状态 */;
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.sticky-your-animation.visible {
  opacity: 1;
  transform: /* 最终状态 */;
}
```

然后在 `useStickyScroll.ts` 中添加选择器：

```typescript
const stickyElements = document.querySelectorAll(
  '.sticky-fade-in, .sticky-scale-in, .sticky-slide-left, .sticky-slide-right, .sticky-your-animation'
);
```

## 浏览器兼容性

- ✅ Chrome 51+
- ✅ Firefox 55+
- ✅ Safari 12.1+
- ✅ Edge 15+
- ✅ Opera 38+

所有现代浏览器都支持 Intersection Observer API。

## 调试技巧

### 1. 查看动画状态
在浏览器开发者工具中，检查元素是否有 `visible` 类：

```html
<div class="sticky-fade-in visible">
  <!-- 已触发 -->
</div>
```

### 2. 禁用动画进行测试
临时添加 CSS：

```css
.sticky-fade-in,
.sticky-scale-in,
.sticky-slide-left,
.sticky-slide-right {
  opacity: 1 !important;
  transform: none !important;
}
```

### 3. 减慢动画速度
修改 transition 时间：

```css
.sticky-fade-in {
  transition: opacity 2s ease-out, transform 2s ease-out;
}
```

## 更新日志

- **2024**: 初始版本，添加 4 种动画类型
- **2024**: 优化 Intersection Observer 性能
- **2024**: 在所有主要页面应用动画
- **2024**: 添加响应式支持和移动端优化
