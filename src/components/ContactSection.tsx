import { useLanguage } from '@/contexts/LanguageContext';
import ScrollFadeIn from './ScrollFadeIn';
import { Mail, MessageCircle, Download } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="section-title text-center mb-16">
            {t('联系我', 'Contact')}
          </h2>
        </ScrollFadeIn>

        <div className="max-w-lg mx-auto">
          <ScrollFadeIn>
            <div className="glass rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('邮箱', 'Email')}</p>
                  <a href="mailto:hello@example.com" className="text-foreground font-medium hover:text-primary transition-colors">
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('微信', 'WeChat')}</p>
                  <p className="text-foreground font-medium">your_wechat_id</p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <a
                  href="#"
                  className="glass glass-hover rounded-xl px-6 py-3 flex items-center justify-center gap-2 font-medium text-foreground"
                >
                  <Download className="w-4 h-4" />
                  {t('下载简历 (PDF)', 'Download Resume (PDF)')}
                </a>
              </div>
            </div>
          </ScrollFadeIn>
        </div>

        {/* Footer */}
        <ScrollFadeIn>
          <p className="text-center text-sm text-muted-foreground mt-16">
            © 2024 Portfolio. {t('保留所有权利。', 'All rights reserved.')}
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default ContactSection;
