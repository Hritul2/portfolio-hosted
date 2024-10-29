import { Terminal, Server, Layout } from "lucide-react";
import { Card, CardContent, CardHeader, CardDescription } from "./ui/card";

const cardContent = [
  {
    icon: (
      <Terminal className="mb-3 h-8 w-8 text-rose-500 dark:text-rose-600" />
    ),
    title: "Frontend Development",
    description:
      "Crafting responsive and intuitive user interfaces with modern React and related technologies.",
  },
  {
    icon: <Server className="mb-3 h-8 w-8 text-rose-500 dark:text-rose-600" />,
    title: "Backend Development",
    description:
      "Building scalable server-side applications and APIs using Node.js and modern frameworks.",
  },
  {
    icon: <Layout className="mb-3 h-8 w-8 text-rose-500 dark:text-rose-600" />,
    title: "Full-Stack Solutions",
    description:
      "Delivering end-to-end solutions with a focus on performance and maintainability.",
  },
];

const ExpertiseSection = () => {
  return (
    <section className="px-4 py-8 md:px-20" id="expertise">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {cardContent.map(({ icon, title, description }, index) => (
          <Card
            key={index}
            className="border-rose-500/20 dark:border-rose-600/20"
          >
            <CardHeader>
              {icon}
              <h3 className="mb-2 text-base font-semibold md:text-lg">
                {title}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
