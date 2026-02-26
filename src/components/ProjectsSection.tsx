import { useLanguage } from '@/contexts/LanguageContext';
import ScrollFadeIn from './ScrollFadeIn';

const projects = [
  {
    titleCn: '智能问答系统',
    titleEn: 'Intelligent QA System',
    descCn: '基于 LLM 和 RAG 架构的企业级智能问答系统，支持多轮对话和文档检索。',
    descEn: 'Enterprise QA system based on LLM and RAG, supporting multi-turn dialogue and document retrieval.',
    tags: ['LangChain', 'GPT-4', 'Vector DB', 'FastAPI'],
  },
  {
    titleCn: '自主移动机器人',
    titleEn: 'Autonomous Mobile Robot',
    descCn: '设计并实现了一款基于 ROS2 的室内自主导航机器人，集成激光雷达和深度相机。',
    descEn: 'Designed an indoor autonomous robot with ROS2, integrating LiDAR and depth camera.',
    tags: ['ROS2', 'LiDAR', 'Nav2', 'Python'],
  },
  {
    titleCn: '实时目标检测平台',
    titleEn: 'Real-time Object Detection',
    descCn: '基于 YOLOv8 的实时检测系统，部署于边缘设备，支持多类别目标识别。',
    descEn: 'Real-time detection system based on YOLOv8, deployed on edge devices for multi-class recognition.',
    tags: ['YOLOv8', 'TensorRT', 'CUDA', 'OpenCV'],
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="section-title text-center mb-16">
            {t('项目经验', 'Projects')}
          </h2>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((proj, i) => (
            <ScrollFadeIn key={i} delay={i * 0.1}>
              <div className="glass glass-hover rounded-2xl p-6 h-full flex flex-col">
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
      </div>
    </section>
  );
};

export default ProjectsSection;
