import Link from "next/link";
import NavLink from "../ui/NavLink";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/projects", label: "Projects" },
  { href: "/tasks", label: "Tasks", disabled: true },
  { href: "/team", label: "Team", disabled: true },
];

export default function AppSidebar() {
  return (
    <aside className="flex w-(--sidebar-width) min-h-screen shrink-0 flex-col border-r border-app-border bg-app-surface px-3 py-5">
      <Link href="/" className="px-3 pb-6 text-lg font-semibold">
        TaskFlow
      </Link>
      <nav aria-label="Main" className="flex flex-1 flex-col gap-0.5">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.disabled ? "#" : item.href}
            fromDashboard
            disabled={item.disabled}
          >
            {item.label}
          </NavLink>
        ))}
        <div className="flex-1" />
        <NavLink href="#" fromDashboard>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}
