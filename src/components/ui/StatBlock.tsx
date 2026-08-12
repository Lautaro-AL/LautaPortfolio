interface StatBlockProps {
  value: string;
  label: string;
  last?: boolean;
}

export default function StatBlock({ value, label, last = false }: StatBlockProps) {
  return (
    <div className={`py-8 ${last ? "" : "border-b border-border-color"}`}>
      <span
        className="font-display font-bold text-text-primary block leading-none"
        style={{ fontSize: "clamp(3rem, 7vw, 5rem)", letterSpacing: "-0.03em" }}
      >
        {value}
      </span>
      <span className="font-mono text-xs text-text-secondary uppercase tracking-widest mt-2 block">
        {label}
      </span>
    </div>
  );
}
