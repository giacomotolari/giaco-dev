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
                <HomeIcon className="h-6 w-6 lg:h-8 lg:w-8 inline" />
              )}
              {link.name === "contact" && (
                <ChatAlt2Icon className="h-6 w-6 lg:h-8 lg:w-8 inline" />
              )}

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