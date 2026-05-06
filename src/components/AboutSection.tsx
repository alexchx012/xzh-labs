import { useLanguage } from '@/contexts/LanguageContext';
import ScrollFadeIn from './ScrollFadeIn';
import { Cpu, TrendingUp, Target, Bot } from 'lucide-react';

type CardDef = {
  id: string;
  Icon: React.ElementType;
  accentBorder: string;
  iconBg: string;
  iconColor: string;
  tagClass: string;
  titleCn: string;
  titleEn: string;
  descCn: string;
  descEn: string;
  tagsCn: string[];
  tagsEn: string[];
  stat?: string;
  statLabelCn?: string;
  statLabelEn?: string;
  colSpan: string;
};

const cards: CardDef[] = [
  {
    id: 'chain',
    Icon: Cpu,
    accentBorder: 'border-l-blue-400',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
    tagClass: 'bg-blue-50 text-blue-700 border border-blue-200',
    titleCn: 'AI 全链路工程',
    titleEn: 'Full-Stack AI Engineering',
    descCn:
      '在 LLM 微调方向，曾对 Qwen2.5-14B-Instruct 实施 LoRA 微调，主导数据管道建设——通过 Coze 工作流实现 30 秒内自动生成 120 条对话数据，将训练集扩充至 6000 条，并经定量盲测将训练收益落地为可量化指标。在 RAG 方向，系统设计文档向量化存储与检索方案，针对分块策略与 TopK 参数进行系统性调优，知识检索准确率达 85%+。在推理服务部署方向，搭建符合 OpenAI 规范的 FastAPI 接口，实现流式响应与 LoRA 适配器集成。结合 LangChain / LangGraph 构建多 Agent 编排工作流，告警响应时间从小时级压缩至分钟级。',
    descEn:
      'For LLM fine-tuning, implemented LoRA on Qwen2.5-14B-Instruct with a self-built data pipeline—automating dialogue generation via a Coze workflow (120 entries in 30 s) to scale the training set to 6,000 entries, with outcomes quantified through blind-test evaluation. For RAG, designed end-to-end document vectorization and retrieval, tuning chunk strategy and TopK to achieve 85%+ retrieval accuracy. For inference, built an OpenAI-compatible FastAPI service with streaming responses and LoRA adapter integration. Orchestrated multi-agent workflows with LangChain / LangGraph, cutting incident response times from hours to minutes.',
    tagsCn: ['LLM 微调', 'RAG 构建', '推理部署'],
    tagsEn: ['LLM Fine-tuning', 'RAG', 'Inference Deploy'],
    colSpan: 'lg:col-span-2',
  },
  {
    id: 'metrics',
    Icon: TrendingUp,
    accentBorder: 'border-l-emerald-400',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
    tagClass: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    titleCn: '量化闭环思维',
    titleEn: 'Metrics-Driven Mindset',
    descCn:
      '以「理论推导—算法实现—效果量化」闭环推进项目，系统把控训练数据质量、Prompt 工程与评测体系，精准定位 RAG 场景下检索与幻觉痛点并落地优化方案。',
    descEn:
      'Theory→Algorithm→Quantification closed-loop. Controls data quality, prompt engineering, and eval frameworks. Pinpoints retrieval and hallucination pain points in RAG pipelines.',
    tagsCn: ['Prompt 工程', '评测体系', '幻觉优化'],
    tagsEn: ['Prompt Engineering', 'Eval System', 'Hallucination Fix'],
    stat: '44%',
    statLabelCn: '盲测用户偏好 vs DeepSeek',
    statLabelEn: 'Blind-test preference vs DeepSeek',
    colSpan: 'lg:col-span-1',
  },
  {
    id: 'crossdomain',
    Icon: Target,
    accentBorder: 'border-l-amber-400',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-500',
    tagClass: 'bg-amber-50 text-amber-700 border border-amber-200',
    titleCn: '跨域执行力',
    titleEn: 'Cross-Domain Execution',
    descCn:
      '两年部队经历赋予强执行力与高自驱性；扎实数理基础（线性代数、概率统计、优化理论）支撑跨域快速上手——从 ROS 机器人 SLAM 到 MATLAB 信号处理，均在课程周期内完成系统级实现与测试验证。',
    descEn:
      '2-year military service built exceptional execution and self-drive. Solid math (linear algebra, probability, optimization) enables rapid cross-domain entry—from ROS SLAM to MATLAB signal processing.',
    tagsCn: ['ROS / SLAM', 'MATLAB', '数学建模'],
    tagsEn: ['ROS / SLAM', 'MATLAB', 'Math Modeling'],
    colSpan: 'lg:col-span-1',
  },
  {
    id: 'ecosystem',
    Icon: Bot,
    accentBorder: 'border-l-violet-400',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-500',
    tagClass: 'bg-violet-50 text-violet-700 border border-violet-200',
    titleCn: 'AI 工具生态',
    titleEn: 'AI Tooling Ecosystem',
    descCn:
      '系统掌握 GPT-4o、Claude、DeepSeek、Qwen 等主流模型的能力边界与成本结构，能依据任务特性、推理预算与时延要求做出有据可查的选型决策。熟练运用 Claude Code、Codex、Cursor、Trae 等 AI 编程 CLI，在完整项目开发中覆盖架构设计、代码评审与调试迭代全流程。对 Agent 工作流工程化落地有独立认知，熟悉 LangChain / LangGraph 编排及 Coze、Dify 低代码平台，并通过 MCP 协议集成日志查询、监控告警、数据库操作等通用工具集。在 OpenClaw、AstrBot 等私有化平台上积累了丰富的模型接入、RAG 配置与 Prompt 工程经验，能将通用模型裁剪为特定场景的专属助手。',
    descEn:
      'Informed model selection across GPT-4o, Claude, DeepSeek, and Qwen—evaluating capability boundaries, cost structures, and latency tradeoffs for RAG, agent, and code generation scenarios. Uses Claude Code, Codex, Cursor, and Trae daily across the full dev cycle: architecture design, code review, and debugging iteration. Has independent expertise in operationalizing agent workflows via LangChain / LangGraph and Coze / Dify low-code platforms, with MCP-based tool integration (log query, Prometheus alerts, database ops). Extensive OpenClaw and AstrBot experience covering model integration, RAG configuration, and prompt engineering to tailor general-purpose models into purpose-built assistants.',
    tagsCn: ['Agent 工作流', 'Claude Code', 'AstrBot'],
    tagsEn: ['Agent Workflow', 'Claude Code', 'AstrBot'],
    colSpan: 'lg:col-span-2',
  },
];

const AboutSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="section-title text-center mb-4">
            {t('个人简介', 'About Me')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t(
              '从算法研究到系统工程，以量化结果闭环每一次迭代。',
              'From algorithm research to systems engineering, closing every iteration with measurable results.'
            )}
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.Icon;
            return (
              <ScrollFadeIn key={card.id} delay={index * 0.1} className={card.colSpan}>
                <div className={`glass glass-hover rounded-2xl p-6 h-full border-l-4 ${card.accentBorder}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {t(card.titleCn, card.titleEn)}
                    </h3>
                  </div>

                  {card.stat && (
                    <div className="mb-3">
                      <span className="gradient-text text-4xl font-bold leading-none">
                        {card.stat}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">
                        {t(card.statLabelCn!, card.statLabelEn!)}
                      </p>
                    </div>
                  )}

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(card.descCn, card.descEn)}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {(lang === 'cn' ? card.tagsCn : card.tagsEn).map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${card.tagClass}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
