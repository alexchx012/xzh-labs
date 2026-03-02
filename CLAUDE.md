# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev          # 开发服务器 (http://localhost:8080)
npm run build        # 生产构建
npm run build:dev    # 开发模式构建
npm run lint         # ESLint 检查
npm run test         # 运行测试（单次）
npm run test:watch   # 测试监听模式
npm run preview      # 预览生产构建
```

## Tech Stack

- **构建工具**: Vite 5.4 + React 18.3 + TypeScript 5.8
- **UI 框架**: shadcn/ui (Radix UI) + Tailwind CSS 3.4 + tailwindcss-animate
- **动画**: Framer Motion 12.34
- **路由**: React Router 6.30
- **状态管理**: TanStack Query 5.83
- **表单**: React Hook Form 7.61 + Zod 3.25 + @hookform/resolvers
- **图标**: Lucide React 0.462
- **其他**: Sonner (Toast)、Recharts (图表)、date-fns、embla-carousel
- **测试**: Vitest 3.2 + Testing Library + jsdom

## Project Structure

```
src/
├── components/           # 业务组件
│   ├── ui/              # shadcn 组件 (不要手动修改)
│   ├── BackgroundParticles.tsx  # 背景粒子动画
│   ├── ContactSection.tsx       # 联系方式区块
│   ├── ExperienceSection.tsx    # 工作经验区块
│   ├── HeroSection.tsx          # 首屏英雄区块
│   ├── Navbar.tsx / NavLink.tsx # 导航栏组件
│   ├── SideNav.tsx              # 侧边导航
│   ├── PortfolioSection.tsx / PortfolioModal.tsx  # 作品集
│   ├── ProjectsSection.tsx / ProjectModal.tsx     # 项目展示
│   ├── SkillsSection.tsx        # 技能展示
│   └── ScrollFadeIn.tsx / ScrollFadeSection.tsx   # 滚动动画
├── contexts/            # React Context
│   └── LanguageContext.tsx  # 中英文切换 (cn/en)
├── hooks/               # 自定义 hooks
│   ├── use-mobile.tsx   # 移动端检测
│   └── use-toast.ts     # Toast 通知
├── lib/utils.ts         # 工具函数 (cn() 等)
├── pages/               # 路由页面
│   ├── Index.tsx        # 首页
│   └── NotFound.tsx     # 404 页面
└── test/                # 测试文件
    ├── setup.ts         # 测试环境配置
    └── example.test.ts  # 示例测试
```

## Key Patterns

**路径别名**: `@/` → `./src/`

**双语支持**:

```tsx
import { useLanguage } from '@/contexts/LanguageContext';

const { lang, toggle, t } = useLanguage();
// lang: 'cn' | 'en'
// toggle: () => void  切换语言
// t: (cn: string, en: string) => string  翻译函数

<h1>{t('中文标题', 'English Title')}</h1>  // 默认中文
```

**组件动画**:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  内容
</motion.div>
```

**滚动淡入效果**:

```tsx
import ScrollFadeIn from '@/components/ScrollFadeIn';

<ScrollFadeIn>
  <YourComponent />
</ScrollFadeIn>
```

**添加 shadcn 组件**: `npx shadcn@latest add <component-name>`

**样式规范**:
- 使用 Tailwind 类名，避免内联样式
- 颜色使用 HSL CSS 变量 (如 `hsl(var(--primary))`)
- 自定义动画在 `tailwind.config.ts` 中定义
- 响应式断点：`sm:` (640px) `md:` (768px) `lg:` (1024px) `xl:` (1280px)

**新路由**: 在 [App.tsx](src/App.tsx) 的 `<Routes>` 中添加，必须在 `"*"` 路由之前

**状态管理**:

```tsx
import { useQuery, useMutation } from '@tanstack/react-query';

const { data, isLoading } = useQuery({
  queryKey: ['key'],
  queryFn: fetchData
});
```

## File Modification Rules

**禁止修改**:

- `src/components/ui/*` - shadcn 生成，通过 CLI 管理
- `bun.lockb` / `package-lock.json`

**谨慎修改**:

- `tailwind.config.ts` - 影响全局样式
- `vite.config.ts` / `tsconfig.json`

## Task Execution Discipline

**规则 1 - 先确认信息充分**:

- 开始前问：我掌握的信息是否充分？缺少什么？
- 不充分就说"我缺少 XXX"，不要编造故事填补空白

**规则 2 - 不走捷径**:

- 应用框架前先排除更简单的解释
- 只做被要求的事，可以建议但不要擅自执行
- 避免 AI 腔：禁止排比修辞、反问句开头、段落末总结

**规则 3 - 修复后验证**:

- 改了代码必须运行构建/测试，通过才能说"已修复"
- 改了 A，grep 所有对 A 的引用并审查相关代码
- 调试流程：理解为什么错 → 定位问题 → 最小化修复 → 验证

**规则 4 - 区分事实和猜测**:

- 标注：[事实] [推断+证据] [假设] [不知道]
- 如果输出中没有"不知道"，回去重新评估

**规则 5 - 追溯根本原因**:

- 被纠正时回答：哪个假设错了？还有哪些结论受影响？下次如何拦截？

## TDD Red-Green-Refactor

**Red**: 先写失败测试，确认因正确原因失败（功能未实现）

**Green**: 最简实现让测试通过，不添加额外功能

**Refactor**: 保持测试通过的前提下优化代码

**适用场景**: 复杂业务逻辑、数据处理、工具函数、关键交互流程

**不必强制**: 简单展示组件、样式调整、原型验证、第三方库封装

## Skill Usage Checklist

执行任务前检查是否有匹配的 skill：

| 任务类型          | Skill                     |
| ----------------- | ------------------------- |
| PDF 操作          | `pdf`                   |
| Word 文档         | `docx`                  |
| Excel 表格        | `xlsx`                  |
| PPT 演示          | `pptx`                  |
| 前端设计/UI       | `frontend-design`       |
| 复杂 Web Artifact | `web-artifacts-builder` |
| 算法艺术/p5.js    | `algorithmic-art`       |
| 视觉设计/海报     | `canvas-design`         |
| Web 应用测试      | `webapp-testing`        |
| MCP 服务器        | `mcp-builder`           |
| 文档协作          | `doc-coauthoring`       |
| 外部服务集成      | `connect`               |
| 创建/优化 Skill   | `skill-creator`         |

找到匹配 skill 时，优先使用 Skill 工具调用。

## Notes

- 开发服务器端口 8080，支持 IPv6
- TypeScript 配置宽松 (noImplicitAny: false, strictNullChecks: false)
- 使用 lovable-tagger 插件在开发模式标记组件
- 响应式设计遵循 Tailwind 断点，移动优先
