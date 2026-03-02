import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import ScrollFadeIn from './ScrollFadeIn';
import ScrollFadeSection from './ScrollFadeSection';
import PortfolioModal from './PortfolioModal';

export interface PortfolioItem {
  titleCn: string;
  titleEn: string;
  periodCn: string;
  periodEn: string;
  descCn: string;
  descEn: string;
  tags: string[];
  images: string[];
  emoji: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    titleCn: '智能机器人课程设计 - 移动机器人路径规划与智能识别',
    titleEn: 'Intelligent Robot Course Design - Mobile Robot Path Planning & Recognition',
    periodCn: '2024.09 - 2024.12',
    periodEn: 'Sep - Dec 2024',
    descCn: '基于ROS Melodic和Bulldog移动平台的完整机器人系统开发项目，实现了激光雷达SLAM建图、AMCL定位、A*+DWA路径规划与避障、多目标点自主导航，以及基于OpenCV的目标识别功能。完成实车调试，验证系统在真实环境中的性能。',
    descEn: 'Complete robot system based on ROS Melodic and Bulldog platform, implementing LiDAR SLAM mapping, AMCL localization, A*+DWA path planning & obstacle avoidance, multi-target autonomous navigation, and OpenCV-based object recognition. Verified with real robot testing.',
    tags: ['ROS Melodic', 'Python', 'C++', 'OpenCV', 'SLAM', 'LiDAR', 'AMCL', 'A*', 'DWA'],
    images: [],
    emoji: '🤖',
  },
  {
    titleCn: '智能系统设计 - 音频处理系统',
    titleEn: 'Intelligent System Design - Audio Processing System',
    periodCn: '2024.03 - 2024.06',
    periodEn: 'Mar - Jun 2024',
    descCn: '基于MATLAB开发的音频处理系统，实现��白噪声处理、音频去噪和频谱分析功能，包含8个独立的GUI应用页面。完整的信号处理应用，展示了MATLAB开发能力和信号处理专业知识。',
    descEn: 'Audio processing system in MATLAB with white noise processing, audio denoising, and spectrum analysis features. Includes 8 independent GUI application pages, demonstrating MATLAB development and signal processing expertise.',
    tags: ['MATLAB', 'Signal Processing', 'Audio Processing', 'GUI Design', 'Spectrum Analysis'],
    images: [],
    emoji: '🎵',
  },
  {
    titleCn: '计算机视觉 - 车道线检测项目',
    titleEn: 'Computer Vision - Lane Detection Project',
    periodCn: '2024.03 - 2024.06',
    periodEn: 'Mar - Jun 2024',
    descCn: '基于深度学习的车道线检测项目，使用1000+张图像数据集训练模型，实现了准确的车道线识别和定位。数据驱动的计算机视觉项目，展示了深度学习和图像处理能力。',
    descEn: 'Deep learning-based lane detection project using 1000+ image dataset for training. Achieved accurate lane recognition and localization, demonstrating deep learning and image processing capabilities.',
    tags: ['Python', 'OpenCV', 'Deep Learning', 'Image Processing', 'Dataset'],
    images: [],
    emoji: '🚗',
  },
  {
    titleCn: 'LabView - 虚拟仪器开发',
    titleEn: 'LabVIEW - Virtual Instrument Development',
    periodCn: '2024.03 - 2024.06',
    periodEn: 'Mar - Jun 2024',
    descCn: '基于LabVIEW的虚拟仪器开发项目，包含3个完整实验和计算器应用（52KB VI文件，完整的状态机设计）。展示了工业自动化和虚拟仪器开发能力，LabVIEW是工业界广泛使用的图形化编程工具。',
    descEn: 'Virtual instrument development project in LabVIEW, including 3 complete experiments and calculator application (52KB VI file with complete state machine design). Demonstrates industrial automation and virtual instrument development capabilities.',
    tags: ['LabVIEW', 'Graphical Programming', 'Virtual Instrument', 'State Machine'],
    images: [],
    emoji: '🔬',
  },
];

const PortfolioCard = ({ item, index }: { item: PortfolioItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const isReversed = index % 2 === 1;
  const { t } = useLanguage();

  return (
    <div ref={ref}>
      <ScrollFadeIn delay={0} direction={isReversed ? 'right' : 'left'}>
        <div
          className={`w-full glass glass-hover rounded-2xl p-6 md:p-8 flex flex-col ${
            isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
          } gap-6 items-center text-left transition-all cursor-pointer`}
        >
          <motion.div
            style={reduced ? {} : { y: imageY }}
            className="w-full md:w-2/5 aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 overflow-hidden"
          >
            <span className="text-4xl">{item.emoji}</span>
          </motion.div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {t(item.titleCn, item.titleEn)}
            </h3>
            <p className="text-sm text-muted-foreground mb-1">
              {t(item.periodCn, item.periodEn)}
            </p>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {t(item.descCn, item.descEn)}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="tag text-xs">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </ScrollFadeIn>
    </div>
  );
};

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-24">
      <ScrollFadeSection className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="section-title text-center mb-16">
            {t('作品集', 'Portfolio')}
          </h2>
        </ScrollFadeIn>

        <div className="max-w-5xl mx-auto space-y-8">
          {portfolioItems.map((item, i) => (
            <div key={i} onClick={() => setSelected(item)}>
              <PortfolioCard item={item} index={i} />
            </div>
          ))}
        </div>
      </ScrollFadeSection>

      <PortfolioModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default PortfolioSection;
