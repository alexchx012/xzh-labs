import { useLanguage } from '@/contexts/LanguageContext';
import ScrollFadeIn from './ScrollFadeIn';

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="section-title text-center mb-16">
            {t('实习经历', 'Experience')}
          </h2>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto glass glass-hover rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-foreground">
                {t('AI 算法实习生', 'AI Algorithm Intern')}
              </h3>
              <span className="text-sm text-muted-foreground">
                {t('2024.06 - 2024.09', 'Jun 2024 - Sep 2024')}
              </span>
            </div>
            <p className="text-sm font-medium text-primary mb-3">
              {t('某科技公司', 'Tech Corp')}
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              {t('参与大语言模型微调与部署，优化推理性能，搭建 RAG 系统。', 'Fine-tuned and deployed LLMs, optimized inference performance, and built RAG systems.')}
            </p>
            <div className="flex flex-wrap gap-2">
              {['LLM', 'RAG', 'Python', 'Docker'].map(tag => (
                <span key={tag} className="tag text-xs">{tag}</span>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default ExperienceSection;
