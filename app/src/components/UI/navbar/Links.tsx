import { navLinks } from "@/src/data/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IdentificationIcon,
  HomeIcon,
  ChatAlt2Icon,
} from "@heroicons/react/solid";

interface Links {
  classes: string;
}

const navLinksWithIcons = [{}];

export default function Links({ classes }: Links) {
  const pathname = usePathname();

  return (
    <div className={classes}>
      <div className="text-sm lg:flex-grow">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.name} href={link.href}>
              {link.name === "home" && (
                <HomeIcon className="inline h-6 w-6 lg:h-8 lg:w-8" />
              )}
              {link.name === "contact" && (
                <ChatAlt2Icon className="inline h-6 w-6 lg:h-8 lg:w-8" />
              )}

              <p
                className={`mr-4 mt-4 block uppercase text-teal-200 lg:mx-6  lg:mt-0 lg:inline-block ${
                  isActive
                    ? "font-bold text-black dark:text-white"
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
