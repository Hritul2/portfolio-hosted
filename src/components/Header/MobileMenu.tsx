import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import ThemeSwitch from "./ThemeSwitch";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="text-rose-500 transition-colors hover:text-rose-600 dark:text-rose-600 dark:hover:text-rose-500">
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="z-50 w-[300px] border-rose-500 bg-white/90 backdrop-blur-lg dark:border-rose-600 dark:bg-zinc-950/90"
      >
        <div className="mt-12 flex flex-col items-center gap-10">
          <NavLinks isMobile />
          <ThemeSwitch />
          <SocialLinks />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
