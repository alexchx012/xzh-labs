

## 计划：基于视口位置的滚动渐显/渐隐效果

### 需求理解

将视口水平分为三个区域：
- **下 1/3**：内容不可见（opacity 0）
- **下 1/3 线 → 中线**：opacity 从 0 渐变到 1
- **中线以上**：完全可见
- 滚动回退时反向渐隐（双向，非一次性）
- 滚动停止时有阻尼缓冲效果

### 技术方案

**1. 新建 `src/components/ScrollFadeSection.tsx`**

使用 framer-motion 的 `useScroll` + `useTransform` + `useSpring` 实现：
- `useScroll({ target: ref, offset: ['start 1', 'start 0.5'] })` 追踪元素从视口底部到中线的滚动进度
- `useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1])` 映射透明度：底部 1/3 时为 0，到中线时为 1（offset `[0, 0.5]` 对应底部到下 1/3 线为不可见，`[0.5, 1]` 对应下 1/3 线到中线为渐入）
- `useSpring(opacity, { stiffness: 100, damping: 30 })` 添加阻尼弹性，使滚动停止时有柔和的缓冲
- 同时添加 `translateY` 微位移（约 20px）配合透明度变化

**2. 修改 `src/components/ScrollFadeIn.tsx`**

将 `viewport.once` 从 `true` 改为 `false`，使动画可逆（双向触发）。

**3. 用 `ScrollFadeSection` 包裹各 section**

修改以下文件，在每个 section 的内容外层包裹 `ScrollFadeSection`：
- `src/components/SkillsSection.tsx`
- `src/components/ExperienceSection.tsx`
- `src/components/ProjectsSection.tsx`
- `src/components/PortfolioSection.tsx`
- `src/components/ContactSection.tsx`

每个 section 的 `<section>` 标签保持不变（保留 id 和 padding），内部 `<div className="container ...">` 包裹在 `ScrollFadeSection` 中。

