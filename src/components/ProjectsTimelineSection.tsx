// components/ProjectsTimelineSection.tsx
import TimelineItem from "./TimelineItem";

const projectsData = [
  {
    year: "2024",
    isActive: true,
    title: "AI-Powered Portfolio Manager",
    description:
      "Built a full-stack application for portfolio management using AI to predict market trends and optimize investment strategies.",
    tags: ["React", "Node.js", "TensorFlow", "MongoDB"],
    link: "#",
  },
  {
    year: "2023",
    isActive: true,
    title: "Blockchain Voting System",
    description:
      "Developed a decentralized voting system using Ethereum smart contracts and Web3 technologies.",
    tags: ["Solidity", "Web3.js", "React", "Hardhat"],
    link: "#",
  },
  {
    year: "2022",
    isActive: true,
    title: "Real-time Collaboration Platform",
    description:
      "Created a real-time collaboration tool with features like document sharing and video conferencing.",
    tags: ["WebRTC", "Socket.io", "React", "Express"],
    link: "#",
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
