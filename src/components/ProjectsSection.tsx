import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollFadeIn from './ScrollFadeIn';
import ScrollFadeSection from './ScrollFadeSection';
import ProjectModal, { type ProjectItem } from './ProjectModal';
import { type CarouselImage } from './ImageCarousel';

const projects: ProjectItem[] = [
  {
    titleCn: '"假如名画会说话" - 基于语言模型微调的交互式艺术体验系统',
    titleEn: '"If Paintings Could Talk" - Interactive Art Experience System Based on LLM Fine-tuning',
    summaryCn: '融合AI与经典艺术鉴赏的学术研究项目，通过对Qwen2.5-14B-Instruct进行LoRA微调，使模型理解用户个性化指令并生成独特风格的艺术文本，结合FastAPI部署与Gradio前端实现交互式体验。',
    summaryEn: 'An academic research project merging AI with classical art appreciation. Fine-tuned Qwen2.5-14B-Instruct via LoRA to interpret personalized instructions and generate artistic text, with FastAPI backend and Gradio frontend for interactive experience.',
    detailCn: '本项目旨在融合前沿人工智能技术与经典艺术鉴赏，通过对大型语言模型进行指令微调，使其能够深度理解用户对特定艺术作品的个性化指令，并生成具有独特风格（如幽默、创意或符合特定历史情境）的文本描述与对话。\n\n我的主要职责与贡献：\n1. 参与制定项目执行方案，明确研究目标、技术路线、时间节点与资源分配，确保项目有序推进。\n2. 主导数据集构建工作，通过网络爬虫从豆瓣等网站采集205幅世界名画背景信息，并利用专用工具提取和清洗《奇趣美术馆》字幕数据，构建高质量初始风格数据集。针对数据量不足的挑战，创新性地搭建了基于Coze平台的自动化工作流，30秒内即可高效生成120条匹配指令的对话数据，最终将训练集扩充至6000条。同时建立严格的数据筛选流程，通过人工与自动化结合剔除低质量数据。\n3. 负责核心模型的训练与微调。基于Transformer架构，选用Qwen2.5-14B-Instruct作为基座模型，在云计算平台上进行LoRA微调。通过定量与定性结合的方式对模型性能进行全面评估，在与DeepSeek的盲测对比中，我们的模型获得了44%的用户偏好度，验证了微调的有效性。\n4. 使用FastAPI框架搭建符合OpenAI规范的API接口，实现模型推理服务的稳定部署，支持流式响应与LoRA适配器的集成。利用Gradio快速搭建前端交互界面，实现了画作信息展示、用户自定义指令输入和生成结果输出等核心功能。',
    detailEn: 'This project merges cutting-edge AI with classical art appreciation by fine-tuning a large language model to understand personalized instructions about artworks and generate text with unique styles (humorous, creative, or historically contextual).\n\nKey responsibilities:\n1. Participated in planning the project execution, defining research goals, technical roadmap, timeline, and resource allocation.\n2. Led dataset construction: crawled background information on 205 world-famous paintings from Douban and other sites, extracted and cleaned subtitle data from "Museum of Curiosity" to build an initial high-quality style dataset. Innovatively built a Coze-platform automation workflow that generates 120 matched dialogue entries in 30 seconds, expanding the training set to 6,000 entries. Established rigorous data filtering combining manual and automated screening.\n3. Handled core model training and fine-tuning using LoRA on Qwen2.5-14B-Instruct (Transformer architecture) on a cloud platform. Conducted comprehensive quantitative and qualitative evaluation; achieved 44% user preference rate in blind tests against DeepSeek.\n4. Built an OpenAI-compatible API with FastAPI for stable model inference deployment with streaming responses and LoRA adapter integration. Used Gradio to build a frontend interface for artwork display, custom instruction input, and generation output.',
    tags: ['Python', 'PyTorch', 'LoRA', 'FastAPI', 'Gradio', 'Qwen2.5'],
    images: [
      { src: '/images/projects/paintings/1.png', fit: 'contain' },
      { src: '/images/projects/paintings/2.png', fit: 'contain' },
      { src: '/images/projects/paintings/3.png', fit: 'contain' },
    ],
  },
  {
    titleCn: '群体智能 - PSO粒子群优化算法',
    titleEn: 'Swarm Intelligence - PSO Algorithm',
    summaryCn: '基于MATLAB实现的标准PSO算法研究，在Sphere和Rastrigin基准函数上验证了算法的收敛性能与早熟收敛缺陷。',
    summaryEn: 'MATLAB-based standard PSO algorithm research, validating convergence performance and premature convergence defects on Sphere and Rastrigin benchmarks.',
    detailCn: '基于MATLAB实现的标准PSO算法研究项目，完成了速度-位置更新、边界处理、收敛追踪等核心模块。在30维、50粒子、1000次迭代的配置下进行了对比实验：单峰Sphere函数上收敛精度达到5.68e-11，验证了PSO信息共享机制的高效性；但在多峰Rastrigin函数上陷入局部最优（134.5 vs 理论最优0），暴露了标准PSO因种群多样性快速丧失而导致的早熟收敛问题。通过理论分析探讨了惯性权重ω和学习因子c1/c2对探索-开发平衡的影响，并提出了自适应参数调整和混合遗传变异算子等改进方向。',
    detailEn: 'MATLAB-based standard PSO algorithm research project implementing velocity-position update, boundary handling, and convergence tracking. Conducted comparative experiments with 30 dimensions, 50 particles, and 1000 iterations: achieved high-precision convergence (5.68e-11) on the unimodal Sphere function, validating PSO\'s information-sharing efficiency; however, the algorithm became trapped in local optima on the multimodal Rastrigin function (134.5 vs. theoretical optimum 0), exposing premature convergence caused by rapid loss of population diversity. Analyzed the impact of inertia weight ω and learning factors c1/c2 on exploration-exploitation balance, and proposed improvement directions including adaptive parameter tuning and hybrid genetic mutation operators.',
    tags: ['MATLAB', 'PSO', 'Optimization', 'Algorithm'],
    images: [
      { src: '/images/projects/pso/图片1.png', fit: 'contain' },
      { src: '/images/projects/pso/图片2.png', fit: 'contain' },
      { src: '/images/projects/pso/图片3.png', fit: 'contain' },
      { src: '/images/projects/pso/图片4.png', fit: 'contain' },
      { src: '/images/projects/pso/图片5.png', fit: 'contain' },
    ],
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 section-tinted">
      <ScrollFadeSection className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="section-title text-center mb-16">
            {t('项目经验', 'Projects')}
          </h2>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj, i) => (
            <ScrollFadeIn key={i} delay={i * 0.1} scale>
              <div
                className="glass glass-hover rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer transition-all"
                onClick={() => setSelected(proj)}
              >
                {(() => {
                  if (proj.images && proj.images.length > 0) {
                    const first = proj.images[0];
                    const src = typeof first === 'string' ? first : first.src;
                    const fit = typeof first === 'string' ? 'cover' : (first.fit ?? 'cover');
                    return (
                      <div className={`aspect-video w-full shrink-0 ${fit === 'contain' ? 'bg-white' : ''}`}>
                        <img src={src} alt={t(proj.titleCn, proj.titleEn)}
                          className={`w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
                          loading="lazy" draggable={false} />
                      </div>
                    );
                  }
                  return (
                    <div className="aspect-video w-full shrink-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <span className="text-4xl opacity-50">📷</span>
                    </div>
                  );
                })()}
                <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(proj.titleCn, proj.titleEn)}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {t(proj.summaryCn, proj.summaryEn)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map(tag => (
                    <span key={tag} className="tag text-xs">{tag}</span>
                  ))}
                </div>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </ScrollFadeSection>

      <ProjectModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default ProjectsSection;
