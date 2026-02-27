import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';

const sections = [
  { id: 'hero', cn: '首页', en: 'Home' },
  { id: 'skills', cn: '技能', en: 'Skills' },
  { id: 'experience', cn: '经历', en: 'Experience' },
  { id: 'projects', cn: '项目', en: 'Projects' },
  { id: 'portfolio', cn: '作品集', en: 'Portfolio' },
  { id: 'contact', cn: '联系', en: 'Contact' },
];

const Navbar = () => {
  const { lang, toggle, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <span className="text-lg font-bold gradient-text cursor-pointer" onClick={() => scrollTo('hero')}>
          Portfolio
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {lang === 'cn' ? s.cn : s.en}
            </button>
          ))}
          <button
            onClick={toggle}
            className="glass glass-hover px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === 'cn' ? 'EN' : '中文'}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggle} className="glass rounded-full p-2">
            <Globe className="w-4 h-4" />
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="glass rounded-full p-2">
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-3">
              {sections.map(s => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left py-1"
                >
                  {lang === 'cn' ? s.cn : s.en}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
