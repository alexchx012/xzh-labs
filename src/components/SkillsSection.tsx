import { useLanguage } from '@/contexts/LanguageContext';
import ScrollFadeIn from './ScrollFadeIn';
import ScrollFadeSection from './ScrollFadeSection';

type SkillItem = {
  src: string;
  name: string;
  nameEn?: string;
};

const skills: SkillItem[] = [
  { src: '/icons/python.png', name: 'Python' },
  { src: '/icons/typescript-def.png', name: 'TypeScript' },
  { src: '/icons/csharp.svg', name: 'C#' },

  { src: '/icons/React-icon.svg.png', name: 'React' },
  { src: '/icons/fastapi.svg', name: 'FastAPI' },

  { src: '/icons/mysql-5-logo.png', name: 'MySQL' },
  { src: '/icons/redis-logo.png', name: 'Redis' },
  { src: '/icons/milvus-icon-color.png', name: 'Milvus' },

  { src: '/icons/pytorch.png', name: 'PyTorch' },
  { src: '/icons/tensorflow.png', name: 'TensorFlow' },
  { src: '/icons/opencv.png', name: 'OpenCV' },
  { src: '/icons/langchain.webp', name: 'LangChain' },
  { src: '/icons/langgraph.png', name: 'LangGraph' },

  { src: '/icons/LLM.jpg', name: 'LLM' },
  { src: '/icons/NLP.png', name: 'NLP' },
  { src: '/icons/RAG.png', name: 'RAG' },

  { src: '/icons/500px-Claude-ai-icon.svg.png', name: 'Claude' },

  { src: '/icons/cursor.jpg', name: 'Cursor' },
  { src: '/icons/codex-color.png', name: 'Codex' },
  { src: '/icons/antigravity.jpg', name: 'Antigravity' },
  { src: '/icons/qoder.png', name: 'Qoder' },
  { src: '/icons/Traelogo.png', name: 'Trae' },
  { src: '/icons/open-code.webp', name: 'OpenCode' },
  { src: '/icons/lovable.png', name: 'Lovable' },

  { src: '/icons/coze.png', name: 'Coze' },
  { src: '/icons/dify.jpg', name: 'Dify' },
  { src: '/icons/aliyun-bailian-color.png', name: '阿里云百炼', nameEn: 'Aliyun Bailian' },

  { src: '/icons/ROS2.png', name: 'ROS2' },
  { src: '/icons/Gazebo.png', name: 'Gazebo' },

  { src: '/icons/vscode.png', name: 'VS Code' },
  { src: '/icons/docker.png', name: 'Docker' },
  { src: '/icons/github.svg', name: 'GitHub' },
  { src: '/icons/linux_logo_icon_181333.webp', name: 'Linux' },
];

const SkillCard = ({ item, t }: { item: SkillItem; t: (cn: string, en: string) => string }) => (
  <div className="flex flex-col items-center shrink-0 w-24">
    <div className="w-24 h-24 rounded-2xl bg-white border border-border shadow-sm p-3 flex items-center justify-center">
      <img
        src={item.src}
        alt={item.name}
        loading="lazy"
        className="w-full h-full object-contain"
      />
    </div>
    <span className="mt-2 text-[13px] text-muted-foreground truncate max-w-full text-center">
      {item.nameEn ? t(item.name, item.nameEn) : item.name}
    </span>
  </div>
);

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 section-tinted">
      <ScrollFadeSection>
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
            <h2 className="section-title text-center mb-16">
              {t('技能技术', 'Skills')}
            </h2>
          </ScrollFadeIn>
        </div>

        <div className="skills-marquee-mask overflow-hidden">
          <div className="skills-marquee-track flex gap-8 py-2">
            {skills.map((item, i) => (
              <SkillCard key={`a-${i}-${item.name}`} item={item} t={t} />
            ))}
            {skills.map((item, i) => (
              <SkillCard key={`b-${i}-${item.name}`} item={item} t={t} />
            ))}
          </div>
        </div>
      </ScrollFadeSection>
    </section>
  );
};

export default SkillsSection;
