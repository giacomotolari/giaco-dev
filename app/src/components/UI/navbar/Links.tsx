import { navData } from "@/src/data/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IdentificationIcon,
  HomeIcon,
  AcademicCapIcon,
  ChartSquareBarIcon,
  UserGroupIcon,
  FolderIcon,
} from "@heroicons/react/solid";

interface Links {
  classes: string;
}

const { home, dashboard, projects, skills, companies, about } = navData;

const navLinksWithIcons = [
  {
    ...home,
    icon: <HomeIcon className="navlink-icon" />,
  },
  {
    ...dashboard,
    icon: <ChartSquareBarIcon className="navlink-icon" />,
  },
  {
    ...projects,
    icon: <FolderIcon className="navlink-icon" />,
  },
  {
    ...skills,
    icon: <AcademicCapIcon className="navlink-icon" />,
  },
  {
    ...companies,
    icon: <UserGroupIcon className="navlink-icon" />,
  },
  {
    ...about,
    icon: <IdentificationIcon className="navlink-icon" />,
  },
];

export default function Links({ classes }: Links) {
  const pathname = usePathname();

  return (
    <div className={classes}>
      <div className="text-sm lg:flex-grow">
        {navLinksWithIcons.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.name} href={link.href} className="">
              {link.icon}
              <p
                className={`mr-4 mt-4  uppercase text-teal-200 lg:mx-6  lg:mt-0 lg:inline-block ${
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
