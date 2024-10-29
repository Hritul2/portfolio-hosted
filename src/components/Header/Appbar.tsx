"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import ThemeSwitch from "./ThemeSwitch";
import MobileMenu from "./MobileMenu";

const Appbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <nav className="fixed left-4 right-4 top-4 z-40 md:left-20 md:right-20">
        <div className="rounded-full border border-rose-500 bg-white/70 px-4 py-3 backdrop-blur-md dark:border-rose-600 dark:bg-zinc-950/70 md:px-8 md:py-4">
          <Logo />
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed left-4 right-4 top-4 z-40 md:left-20 md:right-20">
      <div className="rounded-full border border-rose-500 bg-white/70 px-4 py-3 backdrop-blur-md dark:border-rose-600 dark:bg-zinc-950/70 md:px-8 md:py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex md:items-center md:gap-6">
            <NavLinks />
          </div>
          <div className="hidden md:flex md:items-center md:gap-6">
            <ThemeSwitch />
            <SocialLinks />
          </div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
