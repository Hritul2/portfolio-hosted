import React from "react";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import Link from "next/link";
import { Twitter } from "lucide-react";

interface MobileNavProps {
  links: { name: string; href: string }[];
}

const MobileNav = ({ links }: MobileNavProps) => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="default" className="p-4 sm:p-5 lg:p-6">
          <HamburgerMenuIcon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className=" p-4 sm:p-5 lg:p-6 rounded-lg shadow-lg flex flex-col justify-center items-center top-5 right-0 w-4/5 h-full">
        <DrawerClose asChild>
          <Button
            variant="outline"
            className="absolute top-4 right-4  border-white p-4 sm:p-5 lg:p-6"
          >
            <Cross2Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          </Button>
        </DrawerClose>

        <DrawerDescription className="flex flex-col gap-4 sm:gap-5 lg:gap-6 items-center text-center mt-10">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`capitalize text-base sm:text-lg lg:text-xl font-medium hover:text-primary transition-all cursor-pointer hover:border-primary`}
            >
              {link.name}
            </Link>
          ))}
        </DrawerDescription>
        <DrawerFooter className="mt-8 flex flex-col gap-4 w-full items-center">
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
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
