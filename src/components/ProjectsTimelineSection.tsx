// components/ProjectsTimelineSection.tsx
import TimelineItem from "./TimelineItem";

interface ProjectData {
  year: string;
  isActive: boolean;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projectsData: ProjectData[] = [
  {
    year: "Oct-2024",
    isActive: true,
    title: "Exchange App - Cryptocurrency Exchange Platform",
    description:
      "Exchange App is a cryptocurrency exchange platform that mimics an actual exchange platform. It magnages order book, transactions, bids and asks, in memory and updates it in real-time.",
    tags: [
      "React",
      "Redis",
      "NodeJS",
      "Express",
      "TimescaleDB",
      "Kubernetes",
      "WebSockets",
    ],
    link: "https://exchange.hritul.com",
  },
  {
    year: "Jan-2024",
    isActive: true,
    title: "FoodStall - Food Delivery Website",
    description:
      "FoodStall is a food ordering platform that utilizes the Swiggy API, a well-known food ordering platform, to provide users with a seamless experience of discovering, ordering, and enjoying delicious meals from various restaurants and eateries. ",
    tags: [
      "React",
      "CSS",
      "GeoLocation",
      "@emailjs/browser",
      "@reduxjs/toolkit",
    ],
    link: "https://swiggy.hritul.com",
  },
  {
    year: "Dec-2023",
    isActive: true,
    title: "Paralax Landing Page",
    description:
      "Developed a seemless paralax landing page for a startup to showcase their product and services.",
    tags: ["NextJS", "TailwindCSS", "Framer Motion"],
    link: "https://lp1.hritul.com",
  },
];

const ProjectsTimelineSection = () => {
  return (
    <section className="px-4 py-8 md:px-20" id="project">
      <div className="rounded-lg border border-rose-500/20 bg-background p-4 shadow backdrop-blur-md dark:border-rose-600/20 md:p-6">
        <h2 className="mb-6 text-lg font-bold md:text-xl">Featured Projects</h2>
        <div className="space-y-0">
          {projectsData.map((project, index) => (
            <TimelineItem
              key={project.year}
              year={project.year}
              isLast={index === projectsData.length - 1}
              isActive={project.isActive}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsTimelineSection;
