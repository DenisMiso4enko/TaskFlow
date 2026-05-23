"use client";

import classNames from "classnames";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

const variantStyles = {
  primary: "bg-brand text-white hover:bg-brand-hover border border-transparent",
  secondary:
    "bg-mkt-surface text-mkt-text border border-mkt-border hover:border-mkt-text-muted",
  ghost:
    "bg-transparent text-mkt-text hover:bg-brand-muted border border-transparent",
  dark: "bg-app-elevated text-app-text border border-app-border hover:border-app-text-muted",
} as const;

const sizeStyles = {
  small: "px-3 py-1.5 text-sm",
  medium: "px-4 py-2.5 text-sm",
  large: "px-6 py-3 text-base",
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  children: ReactNode;
  href?: string;
}

export default function Button({
  variant = "primary",
  size = "medium",
  children,
  href,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  const styles = classNames(
    "inline-flex items-center justify-center font-medium rounded-[var(--radius-md)] transition-colors duration-200",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} {...rest}>
      {children}
    </button>
  );
}
