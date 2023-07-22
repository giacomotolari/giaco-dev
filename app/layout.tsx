import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Companies", href: "/companies" },
  { name: "About", href: "/about" },
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
