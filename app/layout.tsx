import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  { name: "home", href: "/" },
  { name: "dashboard", href: "/dashboard" },
  { name: "projects", href: "/projects" },
  { name: "skills", href: "/skills" },
  { name: "companies", href: "/companies" },
  { name: "about", href: "/about" },
];

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
    <html lang="en">
      <body className={inter.className}>
        <Navbar navLinks={navLinks} />
        {children}
      </body>
    </html>
  );
}
