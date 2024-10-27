// components/TechnologiesSection.tsx
const technologies = [
  "JavaScript",
  "React",
  "Node.js",
  "NextJS",
  "Blockchain",
  "Cloud Computing",
  "AI",
];

const TechnologiesSection = () => {
  return (
    <section className="py-12" id="techstack">
      <h2 className="text-2xl font-bold mb-6">Technologies & Interests</h2>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
