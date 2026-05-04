import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Phone } from 'lucide-react';

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
            <p className="text-lg text-muted-foreground mb-4 max-w-lg">
              {t(
                '热衷于人工智能与机器人技术，致力于构建智能化的未来。',
                'Passionate about AI and robotics, building the intelligent future.'
              )}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-border text-sm text-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>18201938361</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-border text-sm text-foreground">
                <svg className="w-4 h-4 text-[#07C160]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
                </svg>
                <span>wick_122</span>
              </div>
            </div>
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
