import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'cn' | 'en';

interface LanguageContextType {
  lang: Language;
  toggle: () => void;
  t: (cn: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('cn');
  const toggle = () => setLang(l => l === 'cn' ? 'en' : 'cn');
  const t = (cn: string, en: string) => lang === 'cn' ? cn : en;

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
