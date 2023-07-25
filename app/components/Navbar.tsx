"use client";
import { CodeIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import WithWaitMounting from "./HOC/WithWaitMounting";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "../types";

const ThemeToggleWithWaitMounting = WithWaitMounting(ThemeToggle);

export default function Navbar({ navLinks }: { navLinks: NavLink[] }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false); // Use a boolean to track the state of mobile menu

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="dark:bg-slate-800 flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <CodeIcon className="h-5 w-5 mr-1" />
        <span className="font-semibold text-xl tracking-tight">giaco-dev</span>
      </div>
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
      <ThemeToggleWithWaitMounting />

      <div className="hidden lg:flex w-full flex-grow lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.name} href={link.href}>
                <p
                  className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${
                    isActive ? "text-white" : ""
                  }`}
                >
                  {link.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.name} href={link.href}>
                  <p
                    className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${
                      isActive ? "text-white" : ""
                    }`}
                  >
                    {link.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
