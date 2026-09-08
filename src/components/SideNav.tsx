import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { sections } from '@/lib/sections';

const SideNav = () => {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const heroEl = document.getElementById('hero');
          if (heroEl) {
            setVisible(window.scrollY > heroEl.offsetHeight - 100);
          }

          // 滚动到页面底部时，最后一节的 offsetTop 可能超过 maxScrollY，
          // 常规判断永远命中不到 — 此处兜底强制激活末节
          const atBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 2;
          if (atBottom) {
            setActive(sections[sections.length - 1].id);
            ticking = false;
            return;
          }

          for (const s of [...sections].reverse()) {
            const el = document.getElementById(s.id);
            if (el && window.scrollY >= el.offsetTop - 200) {
              setActive(s.id);
              break;
            }
          }
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 30, y: '-50%' }}
          animate={{ opacity: 1, x: 0, y: '-50%' }}
          exit={{ opacity: 0, x: 30, y: '-50%' }}
          className="fixed right-4 top-1/2 z-40 hidden lg:block"
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
