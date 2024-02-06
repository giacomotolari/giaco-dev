
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = [
    {
      title: "All Projects",
      href: "/projects",
    },
    {
      title: "Personal",
      href: "/projects/personal",
    },
    {
      title: "Corporate",
      href: "/projects/corporate",
    },
  ];
  return (
    <>
      {/* <Sidebar items={items} /> */}
      {children}
    </>
  );
}
