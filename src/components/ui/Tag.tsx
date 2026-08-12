import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  tone?: "neutral" | "accent" | "amber";
  className?: string;
}

const toneClass: Record<string, string> = {
  neutral: "text-text-secondary border-border-color",
  accent: "text-accent border-accent/30",
  amber: "text-accent-2 border-accent-2/30",
};

export default function Tag({ children, tone = "neutral", className = "" }: TagProps) {
  return (
    <span className={`font-mono text-xs leading-relaxed px-2 py-0.5 border ${toneClass[tone]} ${className}`}>
      {children}
    </span>
  );
}
