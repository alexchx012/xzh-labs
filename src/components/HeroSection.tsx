import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

import { useRef } from 'react';
import avatarImg from '@/assets/avatar.jpg';

const HeroSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section id="hero" ref={ref} className="min-h-screen flex items-center relative pt-20 bg-[#F5F1EB]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={reduced ? {} : { y: textY }}
            className="flex-1 text-center md:text-left"
          >
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <p className="gradient-text">
                {t('你好 我是解哲昊', "Hi, I'm Zhehao Xie")}
              </p>
              <p className="text-foreground">
                {t('AI & 机器人开发者', 'AI & Robotics Dev')}
              </p>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              {t(
                '热衷于人工智能与机器人技术，致力于构建智能化的未来。',
                'Passionate about AI and robotics, building the intelligent future.'
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={reduced ? {} : { y: imageY }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden bg-white">
                <img src={avatarImg} alt="Profile photo" className="w-full h-full object-cover block" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-white/60 scale-[1.15] animate-[ripple_3s_ease-out_infinite]" />
              <div className="absolute inset-0 rounded-full border-2 border-white/60 scale-[1.15] animate-[ripple_3s_ease-out_1.5s_infinite]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
