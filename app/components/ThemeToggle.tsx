import Brightness4Icon from "@mui/icons-material/Brightness4";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect } from "react";
import useThemeStore from "../store/theme";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  // const themeStore = useThemeStore();
  // const { theme, update, setInitial } = themeStore;
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect(() => {
  //   setInitial();
  // }, [setInitial]);

  const handleThemeToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    // const newState = theme === "dark" ? "light" : "dark";
    // update(newState);
  };

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return;
  // }

  return (
    <button
      aria-label="Toggle dark mode"
      type="button"
      color="inherit"
      className="flex items-center justify-center rounded-lg p-2 transition-colors"
      onClick={handleThemeToggle}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-5 w-5 text-orange-300" />
      ) : (
        <MoonIcon className="h-5 w-5 text-slate-800" />
      )}
    </button>
  );
}
