import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Mail, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="scroll-animate text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.1] text-foreground mb-6">
              {t('构建智能化的未来', 'Building the intelligent future')}
            </h1>
            <p className="scroll-animate text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              {t(
                'AI 工程师 & 机器人开发者，热衷于用技术解决真实世界的问题。',
                'AI Engineer & Robotics Developer, passionate about solving real-world problems with technology.'
              )}
            </p>
            <div className="scroll-animate flex items-center gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors"
              >
                {t('联系我', 'Get in touch')}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right - illustration */}
          <div className="flex-shrink-0 lg:flex-1 flex justify-center">
            <div className="scroll-animate w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-card flex items-center justify-center">
              <span className="text-8xl md:text-9xl">🤖</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
