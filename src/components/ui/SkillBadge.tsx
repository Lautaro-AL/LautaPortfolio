import type { IconType } from "react-icons";

interface SkillBadgeProps {
  name: string;
  icon: IconType;
}

export default function SkillBadge({ name, icon: Icon }: SkillBadgeProps) {
  return (
    <span className="flex items-center gap-1.5 font-heading text-base text-text-primary hover:text-accent transition-colors duration-200 cursor-default">
      <Icon className="w-3.5 h-3.5 text-text-secondary shrink-0" />
      {name}
    </span>
  );
}
