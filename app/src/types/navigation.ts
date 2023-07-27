export interface NavData {
  home: { name: "home"; href: "/" };
  dashboard: { name: "dashboard"; href: "/dashboard" };
  projects: { name: "projects"; href: "/projects" };
  skills: { name: "skills"; href: "/skills" };
  companies: { name: "companies"; href: "/companies" };
  about: { name: "about"; href: "/about" };
}

export interface NavLink {
  name: string;
  href: string;
}
