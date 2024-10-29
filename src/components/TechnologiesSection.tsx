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
    <section className="px-4 py-8 md:px-20" id="techstack">
      <div className="rounded-lg border border-rose-500/20 bg-background p-4 shadow backdrop-blur-md dark:border-rose-600/20 md:p-6">
        <h2 className="mb-4 text-lg font-bold md:text-xl">
          Technologies & Interests
        </h2>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="flex items-center justify-center rounded-full bg-rose-500/10 px-3 py-1.5 text-xs text-rose-500 transition-colors duration-200 hover:bg-rose-500/20 dark:bg-rose-600/10 dark:text-rose-600 dark:hover:bg-rose-600/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
