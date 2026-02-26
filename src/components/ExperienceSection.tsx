import { useLanguage } from '@/contexts/LanguageContext';
import ScrollFadeIn from './ScrollFadeIn';

const experiences = [
  {
    titleCn: 'AI 算法实习生',
    titleEn: 'AI Algorithm Intern',
    companyCn: '某科技公司',
    companyEn: 'Tech Corp',
    periodCn: '2024.06 - 2024.09',
    periodEn: 'Jun 2024 - Sep 2024',
    descCn: '参与大语言模型微调与部署，优化推理性能，搭建 RAG 系统。',
    descEn: 'Fine-tuned and deployed LLMs, optimized inference performance, and built RAG systems.',
    tags: ['LLM', 'RAG', 'Python', 'Docker'],
  },
  {
    titleCn: '机器人开发实习生',
    titleEn: 'Robotics Dev Intern',
    companyCn: '机器人实验室',
    companyEn: 'Robotics Lab',
    periodCn: '2023.07 - 2023.12',
    periodEn: 'Jul 2023 - Dec 2023',
    descCn: '开发基于 ROS2 的自主导航系统，实现 SLAM 与路径规划功能。',
    descEn: 'Developed autonomous navigation using ROS2, implementing SLAM and path planning.',
    tags: ['ROS2', 'SLAM', 'C++', 'Gazebo'],
  },
];

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="section-title text-center mb-16">
            {t('工作经历', 'Experience')}
          </h2>
        </ScrollFadeIn>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <ScrollFadeIn key={i} delay={i * 0.15}>
              <div className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline line */}
                {i < experiences.length - 1 && (
                  <div className="absolute left-[11px] top-3 bottom-0 w-px bg-border" />
                )}
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[23px] h-[23px] rounded-full glass-strong border-2 border-primary/30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>

                <div className="glass glass-hover rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {t(exp.titleCn, exp.titleEn)}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {t(exp.periodCn, exp.periodEn)}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-3">
                    {t(exp.companyCn, exp.companyEn)}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t(exp.descCn, exp.descEn)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="tag text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
