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
    <section className="py-12 bg-card rounded-lg border p-8" id="project">
      <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
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
    </section>
  );
};

export default ProjectsTimelineSection;
