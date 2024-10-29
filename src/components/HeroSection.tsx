import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="px-4 pb-8 pt-32 md:px-20" id="about">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Full-Stack Developer{" "}
          <span className="text-rose-500 dark:text-rose-600">
            & Tech Enthusiast
          </span>
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          Building robust web applications with modern technologies. Passionate
          about clean code, intuitive user experiences, and innovative
          solutions.
        </p>
        <div className="flex gap-3 pt-3">
          <Link href="#project">
            <Button size="sm" className="h-9">
              View Projects
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Button>
          </Link>
          <Link href="mailto:hritul.srivastava@gmail.com">
            <Button size="sm" variant="outline" className="h-9">
              Contact Me
              <Mail className="ml-2 h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
