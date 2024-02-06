"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/src/lib/utils";

interface Item {
  title: string;
  href: string;
}

export interface DocsSidebarNavProps {
  items: Item[];
}

export default function Sidebar({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();

  return (
    <div className="w-30">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <div key={item.title} className={cn("pb-8")}>
            <Link
              href={item.href}
              className={`mt-2 flex items-center lg:mr-4 lg:mt-0 lg:inline-block ${
                isActive
                  ? "font-bold text-black dark:text-white"
                  : "hover:text-white"
              }`}
            >
              <h4>{item.title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
