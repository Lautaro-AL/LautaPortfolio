import type { ReactNode } from "react";

interface StatusPillProps {
  children: ReactNode;
  tone?: "success" | "amber" | "accent";
  bordered?: boolean;
  className?: string;
}

const toneTextClass: Record<string, string> = {
  success: "text-success",
  amber: "text-accent-2",
  accent: "text-accent",
};

const toneDotClass: Record<string, string> = {
  success: "bg-success",
  amber: "bg-accent-2",
  accent: "bg-accent",
};

const toneBorderClass: Record<string, string> = {
  success: "border-accent/30",
  amber: "border-accent-2/30",
  accent: "border-accent/30",
};

export default function StatusPill({
  children,
  tone = "success",
  bordered = false,
  className = "",
}: StatusPillProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase ${
        bordered
          ? `${toneTextClass[tone]} border ${toneBorderClass[tone]} px-2 py-0.5`
          : "text-text-secondary"
      } ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 animate-ds-pulse ${toneDotClass[tone]}`} />
      {children}
    </span>
  );
}
