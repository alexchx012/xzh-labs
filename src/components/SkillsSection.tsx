import { useLanguage } from '@/contexts/LanguageContext';
import ScrollFadeIn from './ScrollFadeIn';

const skillCategories = [
  {
    titleCn: 'AI / 机器学习',
    titleEn: 'AI / ML',
    skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'NLP', 'Computer Vision', 'LLM', 'RAG'],
  },
  {
    titleCn: '机器人技术',
    titleEn: 'Robotics',
    skills: ['ROS / ROS2', 'SLAM', 'Motion Planning', 'Gazebo', 'Arduino', 'Raspberry Pi'],
  },
  {
    titleCn: '开发工具',
    titleEn: 'Dev Tools',
    skills: ['Python', 'C++', 'TypeScript', 'Docker', 'Git', 'Linux', 'React'],
  },
];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="section-title text-center mb-16">
            {t('技术技能', 'Skills')}
          </h2>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <ScrollFadeIn key={cat.titleEn} delay={i * 0.1}>
              <div className="glass glass-hover rounded-2xl p-6 h-full">
                <h3 className="text-xl font-semibold mb-4 gradient-text">
                  {t(cat.titleCn, cat.titleEn)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
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

export default SkillsSection;
