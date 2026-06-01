"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
import NavLink from "../ui/NavLink";

export default function MarketingHeader() {
  return (
    <header className="border-b border-mkt-border bg-mkt-bg/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="text-lg font-semibold text-mkt-text">
          TaskFlow
        </Link>
        <nav className="hidden sm:flex items-center gap-8 text-sm text-mkt-text-muted">
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="small" href="/login">
            Sign in
          </Button>
          <Button variant="primary" size="small" href="/dashboard">
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}
