import { useLanguage } from '@/contexts/LanguageContext';
import ScrollFadeIn from './ScrollFadeIn';
import ScrollFadeSection from './ScrollFadeSection';
import { Mail, Github } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24">
      <ScrollFadeSection className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="section-title text-center mb-16">
            {t('联系我', 'Contact')}
          </h2>
        </ScrollFadeIn>

        <div className="max-w-md mx-auto">
          <ScrollFadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:alexsander@mail.shiep.edu.cn"
                className="glass glass-hover rounded-2xl px-6 py-4 flex items-center gap-3 w-full sm:w-auto transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">{t('邮箱', 'Email')}</p>
                  <p className="text-sm font-medium text-foreground">alexsander@mail.shiep.edu.cn</p>
                </div>
              </a>

              <a
                href="https://github.com/alexchx012"
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover rounded-2xl px-6 py-4 flex items-center gap-3 w-full sm:w-auto transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm font-medium text-foreground">alexchx012</p>
                </div>
              </a>
            </div>
          </ScrollFadeIn>
        </div>

        <ScrollFadeIn>
          <p className="text-center text-sm text-muted-foreground mt-16">
            © 2024 Portfolio. {t('保留所有权利。', 'All rights reserved.')}
          </p>
        </ScrollFadeIn>
      </ScrollFadeSection>
    </section>
  );
};

export default ContactSection;