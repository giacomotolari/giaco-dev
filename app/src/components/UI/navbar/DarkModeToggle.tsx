import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import WithWaitMounting from "@/src/components/HOC/WithWaitMounting";
import { Skeleton } from "@/src/components/shadcn/ui/skeleton";

function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleDarkModeToggle = () => {
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
      onClick={handleDarkModeToggle}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-5 w-5 text-orange-300 lg:h-6 lg:w-6" />
      ) : (
        <MoonIcon className="h-5 w-5 text-slate-800 lg:h-6 lg:w-6" />
      )}
    </button>
  );
}

export default WithWaitMounting(
  DarkModeToggle,
  <button
    aria-label="Skeleton Toggle dark mode"
    color="inherit"
    className="flex h-5 w-5 items-center justify-center rounded-lg bg-black p-2 transition-colors dark:bg-orange-300 lg:h-6 lg:w-6"
  ></button>,
  "",
  false,
);
