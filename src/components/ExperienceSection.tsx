import { useLanguage } from '@/contexts/LanguageContext';
import ScrollFadeIn from './ScrollFadeIn';
import ScrollFadeSection from './ScrollFadeSection';

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24">
      <ScrollFadeSection className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="section-title text-center mb-16">
            {t('实习经历', 'Experience')}
          </h2>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto glass glass-hover rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {t('信弘智维（北京）科技有限公司', 'Xinhong Zhiwei (Beijing) Technology Co., Ltd.')}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {t('产品经理助理', 'Product Manager Assistant')}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                {t('2025.07 - 2025.11', 'Jul 2025 - Nov 2025')}
              </span>
            </div>
            <ul className="text-muted-foreground text-sm mb-4 space-y-2 list-decimal list-inside">
              <li>{t('负责各类项目台账的制作、整理与维护，确保数据准确性和及时更新', 'Maintained project ledgers to ensure data accuracy and timely updates')}</li>
              <li>{t('设计并制作系统大屏拓扑图，优化视觉呈现效果，提升用户体验', 'Designed system topology dashboards to optimize visual presentation and UX')}</li>
              <li>{t('协助产品经理进行产品原型设计，参与需求分析和功能规划', 'Assisted product managers in prototyping, requirements analysis, and feature planning')}</li>
              <li>{t('定期汇报工作进展，提出改进建议，推动项目高效进行', 'Reported progress regularly with improvement suggestions to drive project efficiency')}</li>
              <li>{t('与相关部门保持良好沟通，确保项目顺利实施', 'Maintained cross-department communication to ensure smooth project execution')}</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {['Python', '墨刀', 'SaaS', 'CAD'].map(tag => (
                <span key={tag} className="tag text-xs">{tag}</span>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </ScrollFadeSection>
    </section>
  );
};

export default ExperienceSection;
