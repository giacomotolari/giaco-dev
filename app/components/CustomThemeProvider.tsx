"use client";

import { darkTheme, lightTheme } from "../theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import useThemeStore from "../store/theme";

export default function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
    const themeStore = useThemeStore();
  return (
    <ThemeProvider theme={themeStore.theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
