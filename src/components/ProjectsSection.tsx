import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollFadeIn from './ScrollFadeIn';
import ScrollFadeSection from './ScrollFadeSection';
import ProjectModal, { type ProjectItem } from './ProjectModal';

const projects: ProjectItem[] = [
  {
    titleCn: 'VNCcar - 智能车视觉循迹系统',
    titleEn: 'VNCcar - Smart Car Vision Tracking System',
    descCn: '基于Python和OpenCV开发的智能车视觉循迹系统，实现了赛道线检测、PID闭环控制和直角弯道处理。通过版本迭代优化算法性能，成功完成智能车循迹任务。',
    descEn: 'Smart car vision tracking system based on Python and OpenCV, implementing lane detection, PID closed-loop control, and right-angle turn handling. Successfully completed tracking tasks through iterative optimization.',
    tags: ['Python', 'OpenCV', 'PID Control', 'Image Processing', 'Embedded'],
  },
  {
    titleCn: '群体智能 - PSO粒子群优化算法',
    titleEn: 'Swarm Intelligence - PSO Algorithm',
    descCn: '基于MATLAB实现的粒子群优化算法研究项目，包含完整的算法实现、测试框架和学术论文。算法具有良好的鲁棒性和可扩展性，可应用于工程优化和参数调优。',
    descEn: 'PSO algorithm research project in MATLAB with complete implementation, testing framework, and academic paper. Features robust design applicable to engineering optimization and parameter tuning.',
    tags: ['MATLAB', 'PSO', 'Optimization', 'Algorithm'],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((proj, i) => (
            <ScrollFadeIn key={i} delay={i * 0.1} scale>
              <div
                className="glass glass-hover rounded-2xl p-6 h-full flex flex-col cursor-pointer transition-all"
                onClick={() => setSelected(proj)}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(proj.titleCn, proj.titleEn)}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {t(proj.descCn, proj.descEn)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map(tag => (
                    <span key={tag} className="tag text-xs">{tag}</span>
                  ))}
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
