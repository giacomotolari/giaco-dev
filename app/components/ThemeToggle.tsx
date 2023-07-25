import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
      // improve it depending on the season and location
      const currentHour = new Date().getHours();
      const isNightTime = currentHour >= 19 || currentHour < 6;
      const defaultTheme = isNightTime ? "dark" : "light";
      setTheme(defaultTheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
