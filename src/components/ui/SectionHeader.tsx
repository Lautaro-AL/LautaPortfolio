interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  number: string;
}

export default function SectionHeader({ title, subtitle, number }: SectionHeaderProps) {
  return (
    <div>
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2
            className="font-display font-bold text-text-primary leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="font-mono text-xs text-text-secondary tracking-wide mt-2">{subtitle}</p>
          )}
        </div>
        <span
          className="font-display font-bold text-border-color select-none leading-none shrink-0"
          style={{ fontSize: "clamp(5rem, 12vw, 9rem)" }}
        >
          {number}
        </span>
      </div>
      <div className="h-px w-full bg-border-color mt-4" />
    </div>
  );
}
