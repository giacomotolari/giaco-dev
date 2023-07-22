"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

export default function Navbar({ navLinks }: { navLinks: NavLink[] }) {
  const pathname = usePathname();
  return (
      <header>
          <nav>
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  className={isActive ? "text-red-800" : "text-yellow-500"}
                  href={link.href}
                  key={link.name}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
      </header>
  );
}
