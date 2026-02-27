import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import ScrollFadeIn from './ScrollFadeIn';
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
}

const portfolioItems: PortfolioItem[] = [
  {
    titleCn: '智慧校园导览机器人',
    titleEn: 'Smart Campus Guide Robot',
    periodCn: '2024.03 - 2024.06',
    periodEn: 'Mar - Jun 2024',
    descCn: '设计并开发了一款校园导览机器人，具备语音交互、自主导航和信息查询功能，服务于新生入学导览。',
    descEn: 'Designed a campus guide robot with voice interaction, autonomous navigation, and info queries for new students.',
    tags: ['ROS2', 'NLP', 'SLAM', 'React'],
    images: [],
  },
  {
    titleCn: '手势控制无人机',
    titleEn: 'Gesture-Controlled Drone',
    periodCn: '2023.09 - 2024.01',
    periodEn: 'Sep 2023 - Jan 2024',
    descCn: '基于 MediaPipe 手势识别的无人机控制系统，实现了直观的人机交互飞行控制方式。',
    descEn: 'Drone control system using MediaPipe gesture recognition for intuitive human-machine flight interaction.',
    tags: ['MediaPipe', 'Python', 'PX4', 'OpenCV'],
    images: [],
  },
  {
    titleCn: '工业缺陷检测系统',
    titleEn: 'Industrial Defect Detection',
    periodCn: '2023.03 - 2023.06',
    periodEn: 'Mar - Jun 2023',
    descCn: '基于深度学习的工业产品表面缺陷检测系统，准确率达 98%，部署于生产线实时检测。',
    descEn: 'Deep learning-based industrial surface defect detection system with 98% accuracy on production lines.',
    tags: ['PyTorch', 'YOLOv5', 'Flask', 'Docker'],
    images: [],
  },
  {
    titleCn: '多模态情感分析平台',
    titleEn: 'Multimodal Sentiment Analysis',
    periodCn: '2022.09 - 2023.01',
    periodEn: 'Sep 2022 - Jan 2023',
    descCn: '融合文本、语音和图像信息的多模态情感分析平台，支持实时情感识别和趋势分析。',
    descEn: 'Multimodal sentiment analysis platform combining text, audio, and image for real-time sentiment recognition.',
    tags: ['BERT', 'Whisper', 'CLIP', 'Streamlit'],
    images: [],
  },
  {
    titleCn: '智能温室控制系统',
    titleEn: 'Smart Greenhouse Controller',
    periodCn: '2022.03 - 2022.06',
    periodEn: 'Mar - Jun 2022',
    descCn: '基于 IoT 的智能温室环境监控系统，实现温湿度自动调节和远程监控功能。',
    descEn: 'IoT-based smart greenhouse monitoring system with auto temperature/humidity control and remote access.',
    tags: ['Arduino', 'MQTT', 'React', 'Node.js'],
    images: [],
  },
];

const PortfolioCard = ({ item, index }: { item: PortfolioItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const isReversed = index % 2 === 1;
  const emojis = ['🤖', '🚁', '🔍', '🧠', '🌱'];
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
            <span className="text-4xl">{emojis[index]}</span>
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
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
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
      </div>

      <PortfolioModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default PortfolioSection;
