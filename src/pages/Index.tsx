import { LanguageProvider } from '@/contexts/LanguageContext';
import BackgroundParticles from '@/components/BackgroundParticles';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SideNav';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <BackgroundParticles />
        <Navbar />
        <SideNav />
        <main className="relative z-10">
          <HeroSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <PortfolioSection />
          <ContactSection />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Index;
