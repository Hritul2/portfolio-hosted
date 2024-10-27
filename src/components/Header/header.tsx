import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./mobileNav";
import Nav from "./nav";

const links = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Blogs",
    href: "https://blog.hritul.com",
  },

  {
    name: "Projects",
    href: "#project",
  },
  {
    name: "TechStack",
    href: "#techstack",
  },
];

const Header = () => {
  return (
    <header className="py-4 sm:py-6 lg:py-8 xl:py-12 animate-fadeIn">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Hritul <span className="text-primary animate-pulse">.rs</span>
          </h1>
        </Link>

        <div className="hidden lg:flex items-center gap-4 sm:gap-6 lg:gap-8">
          <Nav links={links} />
        </div>

        <div className="lg:hidden">
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
};

export default Header;
