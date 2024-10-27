import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  ArrowRight,
  LucideArrowUpRightFromSquare,
  Twitter,
} from "lucide-react";
interface NavProps {
  links: { name: string; href: string }[];
}
const Nav = ({ links }: NavProps) => {
  return (
    <nav className="flex text-lg sm:text-xl lg:text-2xl gap-4 sm:gap-6 lg:gap-8">
      {links.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className={`capitalize font-medium hover:text-primary transition-all cursor-pointer hover:border-primary`}
        >
          {link.name}
        </Link>
      ))}

      <Link
        href={
          "https://twitter.com/messages/compose?recipient_id=1580897213005598720"
        }
      >
        <Button className="p-2 sm:p-3 lg:p-4 text-base sm:text-lg lg:text-xl gap-2">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </Button>
      </Link>
    </nav>
  );
};

export default Nav;
