import type { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "accent" | "outline" | "quiet" | "ghost";
  size?: "sm" | "md";
  trailing?: ReactNode;
  href?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  className?: string;
  download?: boolean;
  type?: "button" | "submit";
}

const variantClass: Record<string, string> = {
  accent: "text-accent border-accent/30 hover:border-accent hover:bg-accent/5",
  outline: "text-text-primary border-border-color hover:border-border-strong",
  quiet:
    "text-text-secondary border-border-color hover:text-text-primary hover:border-border-strong",
  ghost: "text-text-secondary border-transparent hover:text-text-primary",
};

const sizeClass: Record<string, string> = {
  sm: "px-3 py-1.5",
  md: "px-5 py-2.5",
};

export default function Button({
  children,
  variant = "outline",
  size = "md",
  trailing,
  href,
  disabled,
  onClick,
  className = "",
  download,
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center gap-1.5 font-mono text-xs tracking-wide leading-none whitespace-nowrap border transition-all duration-200 ${
    variant === "ghost" ? "" : sizeClass[size]
  } ${variantClass[variant]} ${
    disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
  } ${className}`;

  const content = (
    <>
      {children}
      {trailing && <span aria-hidden="true">{trailing}</span>}
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={disabled ? undefined : onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
