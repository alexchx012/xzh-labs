import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'skills', cn: '技能', en: 'Skills' },
  { id: 'experience', cn: '经历', en: 'Experience' },
  { id: 'projects', cn: '项目', en: 'Projects' },
  { id: 'portfolio', cn: '作品集', en: 'Portfolio' },
  { id: 'contact', cn: '联系', en: 'Contact' },
];

const SideNav = () => {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        setVisible(window.scrollY > heroEl.offsetHeight - 100);
      }

      // Find active section
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s.id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
        >
          <div className="glass-strong rounded-full py-4 px-2 flex flex-col gap-3 items-center">
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`text-xs font-medium transition-all duration-200 px-2 py-1 rounded-full [writing-mode:vertical-lr] ${
                  active === s.id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {lang === 'cn' ? s.cn : s.en}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideNav;
