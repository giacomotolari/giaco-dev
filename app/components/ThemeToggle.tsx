import Brightness4Icon from "@mui/icons-material/Brightness4";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import IconButton from "@mui/material/IconButton";
import { useEffect } from "react";
import useThemeStore from "../store/theme";

export default function ThemeToggle() {
  const themeStore = useThemeStore();
  const { theme, update, setInitial } = themeStore;

  useEffect(() => {
    setInitial();
  }, [setInitial]);

  const handleThemeToggle = () => {
    const newState = theme === "dark" ? "light" : "dark";
    update(newState);
  };
  return (
    <IconButton
      aria-label="Toggle dark mode"
      color="inherit"
      edge="end"
      onClick={handleThemeToggle}
    >
      {theme === "dark" ? <Brightness4Icon /> : <DarkModeIcon />}
    </IconButton>
  );
}
