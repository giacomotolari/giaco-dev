import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { z } from "zod";
import CustomThemeProvider from "./components/CustomThemeProvider";
// import { darkTheme } from "./theme/themes";
// import { ThemeProvider, CssBaseline } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

const navDataSchema = z.object({
  home: z.object({ name: z.literal("home"), href: z.literal("/") }),
  dashboard: z.object({
    name: z.literal("dashboard"),
    href: z.literal("/dashboard"),
  }),
  projects: z.object({
    name: z.literal("projects"),
    href: z.literal("/projects"),
  }),
  skills: z.object({ name: z.literal("skills"), href: z.literal("/skills") }),
  companies: z.object({
    name: z.literal("companies"),
    href: z.literal("/companies"),
  }),
  about: z.object({ name: z.literal("about"), href: z.literal("/about") }),
});

type NavData = z.infer<typeof navDataSchema>;

const navData: NavData = {
  home: { name: "home", href: "/" },
  dashboard: { name: "dashboard", href: "/dashboard" },
  projects: { name: "projects", href: "/projects" },
  skills: { name: "skills", href: "/skills" },
  companies: { name: "companies", href: "/companies" },
  about: { name: "about", href: "/about" },
};

const navLinks = Object.values(navData);

export const metadata: Metadata = {
  title: "giaco-dev",
  description: "portfolio of giacomo tolari",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <CustomThemeProvider>
          <Navbar navLinks={navLinks} />
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}
