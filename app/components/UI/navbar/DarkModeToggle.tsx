import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import WithWaitMounting from "../../HOC/WithWaitMounting";

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
        <SunIcon className="h-6 w-6 lg:h-6 lg:w-6 text-orange-300" />
      ) : (
        <MoonIcon className="h-6 w-6 lg:h-6 lg:w-6 text-slate-800" />
      )}
    </button>
  );
}

const skeleton = (
  <button
    aria-label="Toggle dark mode"
    type="button"
    color="inherit"
    className="flex items-center justify-center rounded-lg p-2 transition-colors h-6 w-6 lg:h-6 lg:w-6 dark:bg-orange-300 bg-black  animate-pulse blur"
  ></button>
);

export default WithWaitMounting(DarkModeToggle, skeleton);
