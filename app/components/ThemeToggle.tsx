import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import IconButton from "@mui/material/IconButton";

export default function ThemeToggle() {
  const handleThemeToggle = () => {};
  const test = true;
  return (
    <IconButton
      aria-label="Toggle dark mode"
      color="inherit"
      edge="end"
      onClick={() => {
        handleThemeToggle;
      }}
    >
      {test ? (
        <Brightness4Icon />
      ) : (
        <DarkModeIcon />
      )}
    </IconButton>
  );
}
