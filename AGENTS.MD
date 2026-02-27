# AGENTS.MD - AI 协作开发指南

## 项目概述

这是一个基于 Vite + React + TypeScript 的个人作品集网站，使用 shadcn/ui 和 Tailwind CSS 构建现代化 UI。

**技术栈：**
- Vite 5.4 (构建工具)
- React 18.3 + TypeScript 5.8
- shadcn/ui (UI 组件库，基于 Radix UI)
- Tailwind CSS 3.4 (样式框架)
- Framer Motion 12 (动画库)
- React Router 6 (路由管理)
- TanStack Query 5 (数据状态管理)

---

## 项目结构

```
src/
├── components/          # 业务组件
│   ├── ui/             # shadcn UI 基础组件 (不要手动修改)
│   ├── BackgroundParticles.tsx  # 粒子背景动画
│   ├── HeroSection.tsx          # 首屏英雄区
│   ├── SkillsSection.tsx        # 技能展示
│   ├── ExperienceSection.tsx    # 工作经历
│   ├── ProjectsSection.tsx      # 项目展示
│   ├── PortfolioSection.tsx     # 作品集
│   ├── ContactSection.tsx       # 联系方式
│   ├── Navbar.tsx               # 顶部导航栏
│   └── SideNav.tsx              # 侧边��航
├── contexts/           # React Context (语言切换)
├── hooks/              # 自定义 hooks
├── pages/              # 页面组件
│   ├── Index.tsx       # 主页
│   └── NotFound.tsx    # 404 页面
├── lib/                # 工具函数
└── test/               # 测试文件
```

---

## 开发规范

### 1. 代码风格

- **组件命名：** 使用 PascalCase (如 `HeroSection.tsx`)
- **文件组织：** 每个区块一个独立组件文件
- **样式方案：** 优先使用 Tailwind CSS 类名，避免内联样式
- **类型安全：** 所有组件必须有明确的 TypeScript 类型定义
- **导入路径：** 使用 `@/` 别名引用 src 目录

### 2. UI 组件使用

- **shadcn/ui 组件：** 位于 `src/components/ui/`，由 shadcn CLI 生成，不要手动修改
- **添加新组件：** 使用命令 `npx shadcn@latest add <component-name>`
- **自定义组件：** 基于 shadcn 组件二次封装，放在 `src/components/` 根目录

### 3. 动画规范

- **动画库：** 使用 Framer Motion 实现复杂动画
- **CSS 动画：** 简单动画使用 Tailwind 的 `animate-*` 类
- **自定义动画：** 在 `tailwind.config.ts` 的 `keyframes` 和 `animation` 中定义
- **性能优化：** 避免过度使用动画，注意移动端性能

### 4. 国际化

- **语言切换：** 使用 `LanguageContext` 提供的 `useLanguage` hook
- **翻译函数：** `t(中文文本, 英文文本)` 返回当前语言的文本
- **默认语言：** 中文 (cn)

示例：
```tsx
import { useLanguage } from '@/contexts/LanguageContext';

const MyComponent = () => {
  const { t } = useLanguage();
  return <h1>{t('你好', 'Hello')}</h1>;
};
```

### 5. 响应式设计

- **断点：** 遵循 Tailwind 默认断点 (sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px)
- **移动优先：** 默认样式为移动端，使用 `md:` `lg:` 等前缀适配大屏
- **测试设备：** 确保在手机、平板、桌面端都能正常显示

---

## AI 协作指南

### 执行任务前的检查清单（必须遵守）

**每次接到任务时，按以下顺序执行：**

1. **检索可用 Skill：** 使用 Glob 工具扫描 skill 目录，查看是否有可复用的技能
   ```bash
   # 检查 skill 目录结构
   find C:\Users\SNight\.claude/skills -type f -name "*.md" 2>/dev/null || echo "No skills directory"
   ```

2. **评估 Skill 适用性：** 思考当前任务是否匹配某个 skill 的功能
   - 如果任务涉及 **PDF 操作**（读取/合并/分割/加水印/OCR）→ 使用 `pdf` skill
   - 如果任务涉及 **Word 文档**（创建/编辑 .docx 文件）→ 使用 `docx` skill
   - 如果任务涉及 **Excel 表格**（处理 .xlsx/.csv/.tsv 文件）→ 使用 `xlsx` skill
   - 如果任务涉及 **PPT 演示**（创建/编辑幻灯片）→ 使用 `pptx` skill
   - 如果任务涉及 **前端设计**（构建网页/组件/UI 界面）→ 使用 `frontend-design` skill
   - 如果任务涉及 **复杂 Web Artifact**（多组件/状态管理/路由）→ 使用 `web-artifacts-builder` skill
   - 如果任务涉及 **算法艺术**（p5.js 生成艺术/粒子系统）→ 使用 `algorithmic-art` skill
   - 如果任务涉及 **视觉设计**（海报/艺术作品 .png/.pdf）→ 使用 `canvas-design` skill
   - 如果任务涉及 **Web 应用测试**（Playwright 测试/截图）→ 使用 `webapp-testing` skill
   - 如果任务涉及 **MCP 服务器开发**（集成外部 API）→ 使用 `mcp-builder` skill
   - 如果任务涉及 **文档协作**（技术文档/提案/规范）→ 使用 `doc-coauthoring` skill
   - 如果任务涉及 **内部沟通**（状态报告/更新/FAQ）→ 使用 `internal-comms` skill
   - 如果任务涉及 **品牌设计**（应用 Anthropic 品牌风格）→ 使用 `brand-guidelines` skill
   - 如果任务涉及 **主题样式**（为 artifact 应用主题）→ 使用 `theme-factory` skill
   - 如果任务涉及 **Slack GIF**（创建动画 GIF）→ 使用 `slack-gif-creator` skill
   - 如果任务涉及 **外部服务集成**（Gmail/Slack/GitHub/Notion）→ 使用 `connect` skill
   - 如果任务涉及 **开发成��分析**（分析聊天历史/学习建议）→ 使用 `developer-growth-analysis` skill
   - 如果任务涉及 **创建/优化 Skill**（新建或改进 skill）→ 使用 `skill-creator` skill

3. **优先使用 Skill：** 如果找到匹配的 skill，必须先使用 Skill 工具调用，而不是自己手动实现

4. **记录使用情况：** 在任务完成后，说明是否使用了 skill 以及原因

### 当你需要添加新功能时

1. **检查 Skill 目录：** 先检索是否有相关 skill 可用
2. **阅读现有代码：** 用 Read 工具查看相关组件，了解现有模式
3. **保持一致性：** 新代码风格应与现有代码保持一致
4. **最小化修改：** 只修改必要的部分，避免重构无关代码
5. **测试验证：** 修改后运行 `npm run dev` 验证效果

### 当你需要修改样式时

1. **优先使用 Tailwind：** 不要写自定义 CSS，使用 Tailwind 类名
2. **检查主题配置：** 颜色、间距等应使用 `tailwind.config.ts` 中定义的变量
3. **保持设计一致：** 参考其他区块的设计风格

### 当你需要添加 UI 组件时

1. **检查 shadcn/ui：** 先查看是否已有可用组件 (https://ui.shadcn.com/)
2. **使用 CLI 安装：** `npx shadcn@latest add <component-name>`
3. **二次封装：** 如需自定义，基于 shadcn 组件封装新组件

### 当你需要添加动画时

1. **简单动画：** 使用 Tailwind 的 `transition-*` 和 `animate-*` 类
2. **复杂动画：** 使用 Framer Motion 的 `motion` 组件
3. **参考现有：** 查看 `BackgroundParticles.tsx` 和 `ScrollFadeIn.tsx` 的实现

### 当你需要添加新页面时

1. **创建页面组件：** 在 `src/pages/` 目录下创建新文件
2. **注册路由：** 在 `src/App.tsx` 的 `<Routes>` 中添加路由
3. **更新导航：** 在 `Navbar.tsx` 和 `SideNav.tsx` 中添加导航链接

---

## 常用命令

```bash
# 开发服务器 (端口 8080)
npm run dev

# 生产构建
npm run build

# 开发模式构建
npm run build:dev

# 代码检查
npm run lint

# 运行测试
npm run test

# 测试监听模式
npm run test:watch

# 预览生产构建
npm run preview
```

---

## 注意事项

### ⚠️ 不要修改的文件

- `src/components/ui/*` - shadcn 生成的组件，通过 CLI 管理
- `bun.lockb` / `package-lock.json` - 依赖锁定文件
- `.gitignore` - Git 忽略配置

### ⚠️ 谨慎修改的文件

- `tailwind.config.ts` - 主题配置，修改会影响全局样式
- `vite.config.ts` - 构建配置
- `tsconfig.json` - TypeScript 配置

### ⚠️ Git 提交规范

- 提交前运行 `npm run lint` 检查代码
- 使用清晰的提交信息 (如 "Add hero section animation")
- 避免提交 `node_modules/` 和构建产物

---

## 任务执行纪律

### 先思考你不知道什么（规则 1）

* 开始之前，问自己：我掌握的信息是否充分？缺少什么？
* 如果不充分，说”我缺少 XXX”。不要编造一个自洽的故事来填补空白。
* 不要用数据做心理归因；行为可能有你看不到的现实原因。

### 不要走捷径（规则 2）

* 应用框架之前，先排除更简单的解释。
* 不要使用”AI 腔”措辞（禁止：排比/修辞性华丽、以反问句开头、段落末尾总结；如果删除某内容不影响整体，就删掉它）。
* 不要奉承：如果是别人做同样的事，你会说同样的话吗？如果你无法给出对比样本，就不要夸赞。
* 只做被要求的事；你可以建议相关工作，但不要擅自去做。

### 修复后验证（规则 3）

* 如果你改了代码，运行构建/测试；只有通过了才能说”已修复”。
* 如果你改了 A，grep 所有对 A 的引用并审查所有相关代码。
* 调试：先理解为什么错 → 定位问题 → 最小化修复 → 验证。

### 区分事实和猜测（规则 4）

* 在输出中明确标注：[事实] [推断+证据] [假设] [不知道]
* 如果你的输出中没有”不知道”，回去重新评估。

### 追溯修正到根本原因（规则 5）

* 被纠正时，回答三件事：哪个假设错了？还有哪些结论受影响？下次如何拦截？

---

## TDD 红绿循环规则

### 红色阶段（Red）- 编写失败的测试

* **先写测试，后写代码：** 在实现功能之前，先编写一个会失败的测试用例
* **测试要具体：** 测试应该明确描述期望的行为，而不是模糊的需求
* **确保测试失败：** 运行测试，确认它因为正确的原因失败（功能未实现，而非测试写错）
* **一次只测一个行为：** 每个测试应该只验证一个具体的功能点

示例：
```tsx
// ❌ 先运行这个测试，它应该失败
describe(‘HeroSection’, () => {
  it(‘should display user name when provided’, () => {
    render(<HeroSection name=”张三” />);
    expect(screen.getByText(‘张三’)).toBeInTheDocument();
  });
});
```

### 绿色阶段（Green）- 让测试通过

* **最简实现：** 用最简单的方式让测试通过，不要过度设计
* **不要添加额外功能：** 只实现测试所需的最小代码
* **快速迭代：** 尽快让测试变绿，重构留到下一步
* **验证通过：** 运行 `npm run test` 确认所有测试通过

示例：
```tsx
// ✅ 最简实现让测试通过
const HeroSection = ({ name }: { name: string }) => {
  return <h1>{name}</h1>;
};
```

### 重构阶段（Refactor）- 优化代码

* **保持测试通过：** 重构过程中持续运行测试，确保功能不被破坏
* **消除重复：** 提取公共逻辑，遵循 DRY 原则
* **改善设计：** 优化代码结构、命名、可读性
* **小步前进：** 每次只做一个小的重构，频繁运行测试

示例：
```tsx
// ♻️ 重构：添加样式和类型定义，测试仍然通过
interface HeroSectionProps {
  name: string;
}

const HeroSection = ({ name }: HeroSectionProps) => {
  return (
    <h1 className=”text-4xl font-bold text-center”>
      {name}
    </h1>
  );
};
```

### TDD 最佳实践

* **测试文件位置：** 测试文件放在 `src/test/` 目录或与组件同级的 `__tests__/` 目录
* **测试命名：** 使用 `ComponentName.test.tsx` 命名规范
* **测试覆盖率：** 关键业务逻辑必须有测试覆盖，UI 组件可选
* **Mock 外部依赖：** 使用 Vitest 的 `vi.mock()` 模拟 API 调用、路由等
* **测试隔离：** 每个测试应该独立运行，不依赖其他测试的状态

### 何时使用 TDD

✅ **适合使用 TDD 的场景：**
- 复杂的业务逻辑函数
- 数据处理和转换逻辑
- 工具函数和 hooks
- 关键的用户交互流程

❌ **不必强制 TDD 的场景：**
- 简单的展示型组件
- 样式调整和布局修改
- 原型验证和快速迭代阶段
- 第三方库的简单封装

---

## 参考资源

- [Vite 文档](https://vitejs.dev/)
- [React 文档](https://react.dev/)
- [shadcn/ui 组件库](https://ui.shadcn.com/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [Framer Motion 文档](https://www.framer.com/motion/)
