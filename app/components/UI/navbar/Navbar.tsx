"use client";
import { CodeIcon } from "@heroicons/react/solid";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { navData } from "../../../data";
import Link from "next/link";
import Links from "./Links";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="dark:bg-slate-800 flex items-center justify-between flex-wrap bg-teal-500 p-6 ">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <CodeIcon className="h-5 w-5 mr-1" />
        <Link href={navData.home.href}>
          <span className="font-semibold text-xl tracking-tight">
            giaco-dev
          </span>
        </Link>
      </div>

      {!isMobileMenuOpen && (
        <Links classes="hidden lg:flex w-full flex-grow lg:items-center ml-30 lg:w-auto" />
      )}

      <DarkModeToggle />
      <div className="block lg:hidden" onClick={handleMenuToggle}>
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
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
