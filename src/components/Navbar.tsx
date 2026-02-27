import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
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
  const { lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_3px_rgba(0,0,0,0.08)]' : ''
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <span
          className="text-lg font-semibold text-foreground cursor-pointer"
          onClick={() => scrollTo('hero')}
        >
          Portfolio
        </span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {lang === 'cn' ? s.cn : s.en}
            </button>
          ))}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <Globe className="w-4 h-4" />
            {lang === 'cn' ? 'EN' : '中文'}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggle} className="p-2 text-foreground">
            <Globe className="w-5 h-5" />
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-foreground">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left py-2"
              >
                {lang === 'cn' ? s.cn : s.en}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
