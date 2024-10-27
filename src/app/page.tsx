// pages/index.tsx
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectsTimelineSection from "@/components/ProjectsTimelineSection";
import TechnologiesSection from "@/components/TechnologiesSection";

const HomePage = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <HeroSection />
      <ExpertiseSection />
      <ProjectsTimelineSection />
      <TechnologiesSection />
    </main>
  );
};

export default HomePage;
