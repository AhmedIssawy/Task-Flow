import Link from "next/link";

type NavItem = { label: string; href: string };
type SidebarProps = {
  navItems: NavItem[];
};

export default function Sidebar({ navItems }: SidebarProps) {
  return (
    <aside className="w-64 bg-muted p-4">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="block px-3 py-2 rounded hover:bg-accent">
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
