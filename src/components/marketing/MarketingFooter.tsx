import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function MarketingFooter() {
  return (
    <footer className="border-t border-mkt-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-3">
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-mkt-text-muted mb-3">
              {column.title}
            </h3>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-mkt-text-muted hover:text-mkt-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="sm:col-span-3 text-sm text-mkt-text-muted pt-4 border-t border-mkt-border">
          © {new Date().getFullYear()} TaskFlow
        </p>
      </div>
    </footer>
  );
}
