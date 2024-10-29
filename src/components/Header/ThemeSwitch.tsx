import React from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      checked={theme === "dark"}
      onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
};

export default ThemeSwitch;
