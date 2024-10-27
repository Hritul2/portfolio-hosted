// components/ExpertiseSection.tsx
import { Terminal, Server, Layout } from "lucide-react";

const ExpertiseSection = () => {
  return (
    <section
      className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8"
      id="expertise"
    >
      <div className="p-6 rounded-lg border bg-card">
        <Terminal className="h-12 w-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
        <p className="text-muted-foreground">
          Crafting responsive and intuitive user interfaces with modern React
          and related technologies.
        </p>
      </div>
      <div className="p-6 rounded-lg border bg-card">
        <Server className="h-12 w-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
        <p className="text-muted-foreground">
          Building scalable server-side applications and APIs using Node.js and
          modern frameworks.
        </p>
      </div>
      <div className="p-6 rounded-lg border bg-card">
        <Layout className="h-12 w-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-2">Full-Stack Solutions</h3>
        <p className="text-muted-foreground">
          Delivering end-to-end solutions with a focus on performance and
          maintainability.
        </p>
      </div>
    </section>
  );
};

export default ExpertiseSection;
