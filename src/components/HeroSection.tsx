import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center relative pt-20 hero-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="gradient-text">
                {t('你好，我是', "Hi, I'm")}
              </span>
              <br />
              <span className="text-foreground">
                {t('AI & 机器人开发者', 'AI & Robotics Dev')}
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              {t(
                '热衷于人工智能与机器人技术，致力于构建智能化的未来。',
                'Passionate about AI and robotics, building the intelligent future.'
              )}
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="glass glass-hover rounded-full p-3 text-foreground">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:hello@example.com" className="glass glass-hover rounded-full p-3 text-foreground">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full glass-strong overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl">🤖</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
