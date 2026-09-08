export interface NavSection {
  id: string;
  cn: string;
  en: string;
}

/** 全站导航区块唯一数据源，Navbar 与 SideNav 共享，避免维护漂移 */
export const sections: NavSection[] = [
  { id: 'hero', cn: '首页', en: 'Home' },
  { id: 'about', cn: '简介', en: 'About' },
  { id: 'skills', cn: '技能', en: 'Skills' },
  { id: 'experience', cn: '经历', en: 'Experience' },
  { id: 'projects', cn: '项目', en: 'Projects' },
  { id: 'portfolio', cn: '作品集', en: 'Portfolio' },
  { id: 'contact', cn: '联系', en: 'Contact' },
];
