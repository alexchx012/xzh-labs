

## 配色方案重设计：Dropbox 风格

参照 Dropbox 官网截图，提取以下配色并应用到现有站点。

### 颜色变更

| 元素 | 当前 | 目标 |
|------|------|------|
| 主色 (primary) | 紫色 `hsl(255, 45%, 58%)` | Dropbox 蓝 `hsl(215, 100%, 50%)` — `#0061FF` |
| 强调色 (accent) | 粉紫 `hsl(320, 35%, 60%)` | 同蓝色或略深蓝 |
| 标题文字 | 渐变紫 | 纯黑 `#1a1a1a` |
| 正文文字 | `hsl(0,0%,29%)` | 深灰 `#4a4a4a` |
| Hero 背景 | 粉紫渐变 | Dropbox 米色 `#F5F1EB` |
| body 背景 | 粉紫渐变 | 纯白 `#FFFFFF` |
| section-tinted | 半透明白 | 纯白 `#FFFFFF` |

### 修改文件清单

1. **`src/index.css`**
   - `:root` 变量：`--primary` 改为蓝色，`--accent` 改为蓝色，`--foreground` 改为 `#1a1a1a`，`--muted-foreground` 改为 `#4a4a4a`
   - `body` 背景：移除粉紫渐变，改为纯白 `#FFFFFF`
   - `.section-tinted`：改为纯白背景
   - `.section-title`：移除渐变，改为纯色深蓝或黑色
   - `.gradient-text`：改为蓝色渐变或纯蓝
   - `.tag`：颜色从紫色改为蓝色系
   - `.glass-hover:hover` 的 box-shadow 从紫色改为蓝色

2. **`src/components/HeroSection.tsx`**
   - 给 hero `<section>` 添加米色背景 `bg-[#F5F1EB]`

3. **`src/components/PortfolioSection.tsx`**
   - 图片占位区渐变从 `primary/accent` 改为蓝色调（会自动跟随 CSS 变量）

无需修改其他组件文件，因为它们通过 CSS 变量（`text-primary`、`text-foreground`、`tag` 等）引用颜色，变量更新后自动生效。

