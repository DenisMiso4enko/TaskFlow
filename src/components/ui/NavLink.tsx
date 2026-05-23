"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  fromDashboard?: boolean;
}

export default function NavLink({
  href,
  children,
  className,
  disabled,
  fromDashboard,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <Link
      href={href}
      aria-current={isActive(href) ? "page" : undefined}
      className={classNames(
        fromDashboard
          ? "rounded-lg px-3 py-2.5 text-sm text-app-text-muted hover:bg-app-border hover:text-app-text transition-colors"
          : "hover:text-mkt-text transition-colors",
        {
          "text-mkt-text font-medium": isActive(href) && !fromDashboard,
          "bg-app-border text-app-text": isActive(href) && fromDashboard,
          "cursor-not-allowed text-app-text-muted/50 pointer-events-none": disabled,
        },
        className,
      )}
    >
      {children}
    </Link>
  );
}
