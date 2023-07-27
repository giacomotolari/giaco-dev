import { NavData } from "@/src/types/navigation";

const navData: NavData = {
  home: { name: "home", href: "/" },
  dashboard: { name: "dashboard", href: "/dashboard" },
  projects: { name: "projects", href: "/projects" },
  skills: { name: "skills", href: "/skills" },
  companies: { name: "companies", href: "/companies" },
  about: { name: "about", href: "/about" },
};

const navLinks = Object.values(navData);

export { navData, navLinks };
