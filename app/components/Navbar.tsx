// 'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

export function Navigation({ navLinks }: { navLinks: NavLink[] }) {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              className={isActive ? "text-blue" : "text-black"}
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
