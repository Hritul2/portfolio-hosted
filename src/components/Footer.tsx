// components/Footer.tsx
import { Button } from "@/components/ui/button";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 border-t">
      <div className="flex flex-col items-center gap-6">
        <div className="flex justify-center gap-6">
          <Link href={"https://github.com/Hritul2"}>
            <Button variant="ghost" size="icon">
              <Github className="h-6 w-6" />
            </Button>
          </Link>
          <Link href={"https://x.com/_Hritul_"}>
            <Button variant="ghost" size="icon">
              <Twitter className="h-6 w-6" />
            </Button>
          </Link>
          <Link href={"mailto:hritul.srivastava@gmail.com"}>
            <Button variant="ghost" size="icon">
              <Mail className="h-6 w-6" />
            </Button>
          </Link>
        </div>
        <p className="text-center text-muted-foreground">
          © 2024 • Built with Next.js & Tailwind CSS by{" "}
          <Link href={"https://github.com/Hritul2"}>@Hritul2</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
