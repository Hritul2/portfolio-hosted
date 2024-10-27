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
          <Twitter />
        </Button>
      </Link>
    </nav>
  );
};

export default Nav;
