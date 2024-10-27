// components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20" id="about">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Full-Stack Developer
          <span className="text-primary"> & Tech Enthusiast</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
          Building robust web applications with modern technologies. Passionate
          about clean code, intuitive user experiences, and innovative
          solutions.
        </p>
        <div className="flex gap-4 pt-4">
          <Link href={"#project"}>
            <Button>
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href={"mailto:hritul.srivastava@gmail.com"}>
            <Button variant="outline">
              Contact Me <Mail className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
