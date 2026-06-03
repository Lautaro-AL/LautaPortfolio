import type { IconType } from "react-icons";

interface SkillBadgeProps {
  name: string;
  icon: IconType;
}

export default function SkillBadge({ name, icon: Icon }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border-color hover:border-accent transition-colors duration-200 group">
      <Icon className="w-4 h-4 text-text-secondary group-hover:text-accent transition-colors duration-200 shrink-0" />
      <span className="font-mono text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}
