import { Button } from "@/components/ui/button";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-rose-500/20 bg-white/70 px-4 py-8 backdrop-blur-md dark:border-rose-600/20 dark:bg-zinc-950/70 md:px-20">
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-center gap-3">
          <Link href="https://github.com/Hritul2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-rose-500/10 hover:text-rose-500 dark:hover:bg-rose-600/10 dark:hover:text-rose-600"
            >
              <Github className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="https://x.com/_Hritul_">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-rose-500/10 hover:text-rose-500 dark:hover:bg-rose-600/10 dark:hover:text-rose-600"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Button>
          </Link>
          <Link href="mailto:hritul.srivastava@gmail.com">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-rose-500/10 hover:text-rose-500 dark:hover:bg-rose-600/10 dark:hover:text-rose-600"
            >
              <Mail className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <p className="text-center text-xs text-muted-foreground">
          © 2024 • Built with Next.js & Tailwind CSS by{" "}
          <Link
            href="https://github.com/Hritul2"
            className="text-rose-500 transition-colors duration-200 hover:text-rose-600 dark:text-rose-600 dark:hover:text-rose-500"
          >
            @Hritul2
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
