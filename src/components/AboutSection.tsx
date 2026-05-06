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
      '掌握从数学建模到工程落地的完整 AI 技术链路，具备 LLM 微调、RAG 构建及模型推理服务部署的实战经验，能在算法研究与系统工程之间高效切换，以量化结果驱动方案迭代。',
    descEn:
      'End-to-end AI mastery from math modeling to production. Hands-on with LLM fine-tuning, RAG pipelines, and inference services—efficiently switching between algorithm research and systems engineering.',
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
      '系统掌握主流大模型的能力边界与成本结构，能依据任务特性、推理预算与时延要求做出有据可查的选型决策；熟练运用 Claude Code、Codex 等 AI 编程 CLI 放大交付效能；在 OpenClaw、AstrBot 等私有化平台上积累了丰富的部署与调优经验。',
    descEn:
      'Deep understanding of leading LLMs—capabilities, costs, and latency tradeoffs. Proficient with Claude Code, Codex, and AI coding CLIs to amplify delivery. Extensive deployment and tuning on OpenClaw and AstrBot platforms.',
    tagsCn: ['Agent 工作流', 'Claude Code', 'AstrBot'],
    tagsEn: ['Agent Workflow', 'Claude Code', 'AstrBot'],
    colSpan: 'lg:col-span-2',
  },
];

const AboutSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[#F5F1EB]">
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
