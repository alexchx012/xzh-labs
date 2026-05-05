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
    titleCn: '智能 OnCall Agent 系统',
    titleEn: 'Intelligent OnCall Agent System',
    summaryCn: '基于 LangChain / LangGraph 构建的多 Agent OnCall 平台，融合 RAG 知识库、ReAct 对话与 Plan-Execute 智能运维，将告警响应从小时级压缩至分钟级。',
    summaryEn: 'A multi-agent OnCall platform built on LangChain / LangGraph, integrating RAG knowledge base, ReAct conversation and Plan-Execute AIOps, reducing incident response from hours to minutes.',
    detailCn: '智能 OnCall 系统通过 AI Agent 解决团队真实痛点，整合知识库、对话、运维三大核心能力，实现问题自动应答与故障智能排查的一体化服务，显著降低 OnCall 人力成本。\n\n我的主要职责与贡献：\n1. AI Agent 架构设计：基于 LangChain 框架设计并实现多个 Agent，包括 Chat ReAct Agent 与 Plan-Execute-Replan Agent，通过 LangGraph 图编排实现模块化工作流。\n2. RAG 知识库系统：设计完整的文档向量化存储与检索方案，针对分块大小与 TopK 进行参数调优实验，最终知识检索准确率达到 85%+。\n3. 对话功能开发：基于 ReAct 模式实现多轮上下文记忆与容错处理；通过 SSE 实现流式输出，缓解大模型响应延迟带来的卡顿。\n4. AIOps 功能开发：基于 Plan-Execute 模式构建智能运维 Agent，串联"告警→检索知识库→规划步骤→工具调用→分析结果→生成建议"的完整闭环，将运维响应时间从小时级降至分钟级。\n\n项目亮点：\n· 通过 MCP 协议集成日志查询、Prometheus 告警、MySQL 数据操作、联网检索等通用工具集，使 Agent 可灵活调用外部能力完成复杂任务。\n· 多场景无缝切换：业务咨询、告警自救、工单预处理一次开发覆盖研发 / 运维 / 业务多角色需求。\n· 自动化故障排查：根据内部文档自动查询监控与日志信息，结合历史工单生成运维建议方案。',
    detailEn: 'The Intelligent OnCall system addresses real team pain points through AI agents, integrating knowledge base, conversation, and operations into a unified service that automates Q&A and fault diagnosis, significantly reducing OnCall labor costs.\n\nKey responsibilities:\n1. AI Agent architecture: Designed and implemented multiple agents on LangChain — Chat ReAct Agent and Plan-Execute-Replan Agent — orchestrated via LangGraph for modular workflows.\n2. RAG knowledge base: Built end-to-end document vectorization and retrieval; tuned chunk size and TopK through systematic experimentation, achieving 85%+ retrieval accuracy.\n3. Conversation features: Implemented multi-turn context memory and fault tolerance with ReAct; streamed outputs over SSE to mitigate LLM latency.\n4. AIOps features: Built a Plan-Execute agent chaining "alert → KB retrieval → plan → tool call → analysis → recommendation", cutting incident response from hours to minutes.\n\nHighlights:\n· Integrated log query, Prometheus alerts, MySQL ops, and web search as a general tool set via the MCP protocol, enabling flexible external capability invocation.\n· Single development covers consultation, self-healing alerts, and ticket preprocessing across R&D / Ops / business roles.\n· Automated diagnosis: auto-queries monitoring and logs from internal docs, combining historical tickets to generate ops recommendations.',
    tags: ['Python', 'LangChain', 'LangGraph', 'RAG', 'Multi-Agent', 'MCP', 'ReAct'],
    images: [
      { src: '/images/projects/oncall/1.png', fit: 'contain', coverFit: 'cover' },
      { src: '/images/projects/oncall/2.png', fit: 'cover' },
      { src: '/images/projects/oncall/3.png', fit: 'cover' },
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
                    const fit = typeof first === 'string'
                      ? 'cover'
                      : (first.coverFit ?? first.fit ?? 'cover');
                    return (
                      <div className={`relative aspect-video w-full shrink-0 overflow-hidden ${fit === 'contain' ? 'bg-white' : ''}`}>
                        <img src={src} alt={t(proj.titleCn, proj.titleEn)}
                          className={`absolute inset-0 w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover object-left-top'}`}
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
