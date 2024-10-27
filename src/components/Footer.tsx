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
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
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
