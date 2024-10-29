import React from "react";
import Link from "next/link";

const links = [
  { name: "About", href: "#about" },
  { name: "Blogs", href: "https://blog.hritul.com" },
  { name: "Projects", href: "#project" },
  { name: "TechStack", href: "#techstack" },
];

const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div className={`flex ${isMobile ? "flex-col" : "items-center"} gap-6`}>
    {links.map((link) => (
      <Link
        key={link.name}
        href={link.href}
        className="text-lg font-medium text-rose-500 transition-colors hover:text-rose-600 dark:text-rose-600 dark:hover:text-rose-500"
      >
        {link.name}
      </Link>
    ))}
  </div>
);

export default NavLinks;
