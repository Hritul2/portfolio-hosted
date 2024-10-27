// components/TechnologiesSection.tsx
const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "NextJS",
  "Solana",
  "AWS",
  "Langchain",
  "Tailwind CSS",
  "Shadcn UI",
  "Python",
  "Prometheus",
  "Grafana",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "Kafka",
  "Prisma",
  "WebHooks",
  "CI/CD",
  "Linux",
  "Git",
  "Vitest",
  "Jest",
  "React Testing Library",
  "Clerk",
  "Rust",
  "React Query",
];

const TechnologiesSection = () => {
  return (
    <section className="py-12" id="techstack">
      <h2 className="text-2xl font-bold mb-6">Technologies & Interests</h2>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm  items-center justify-center flex"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
