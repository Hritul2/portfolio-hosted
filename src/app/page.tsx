"use client";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectsTimelineSection from "@/components/ProjectsTimelineSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import { use, useEffect, useState } from "react";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <main className="container mx-auto animate-fadeIn px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <ExpertiseSection />
      <ProjectsTimelineSection />
      <TechnologiesSection />
    </main>
  );
};

export default HomePage;
