import { navLinks } from "../../../data";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Links {
  classes: string;
}

export default function Links({ classes }: Links) {
  const pathname = usePathname();

  return (
    <div className={classes}>
      <div className="text-sm lg:flex-grow">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.name} href={link.href}>
              <p
                className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 uppercase  mr-4 lg:mx-6 ${
                  isActive
                    ? "dark:text-white text-black font-bold"
                    : "hover:text-white"
                }`}
              >
                {link.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
