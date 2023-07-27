"use client";
import { CodeIcon } from "@heroicons/react/solid";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { navData } from "@/src/data/navigation";
import Link from "next/link";
import Links from "./Links";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex h-20 flex-wrap items-center justify-between bg-teal-500 p-6 dark:bg-slate-800 lg:h-24">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <CodeIcon className="mr-2 h-5 w-5" />
        <Link href={navData.home.href}>
          <span className="text-xl font-semibold tracking-tight">
            giaco-dev
          </span>
        </Link>
      </div>

      {!isMobileMenuOpen && (
        <Links classes="hidden lg:flex w-full flex-grow lg:items-center ml-30 lg:w-auto" />
      )}

      <DarkModeToggle />
      <div className="block lg:hidden" onClick={handleMenuToggle}>
        <button className="flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white hover:text-white">
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <Links classes="w-full block flex-grow lg:flex lg:items-center lg:w-auto" />
      )}
    </nav>
  );
}
