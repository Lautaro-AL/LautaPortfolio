import StatusPill from "./StatusPill";

interface EducationRowProps {
  period: string;
  degree: string;
  institution: string;
  current?: boolean;
  currentLabel: string;
}

export default function EducationRow({
  period,
  degree,
  institution,
  current,
  currentLabel,
}: EducationRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8 py-8 border-b border-border-color">
      <div className="flex items-start gap-3">
        <span className="font-mono text-xs text-text-secondary tracking-wide pt-0.5">{period}</span>
        {current && (
          <StatusPill tone="amber" bordered>
            {currentLabel}
          </StatusPill>
        )}
      </div>
      <div className="md:col-span-2">
        <h3 className="font-heading text-base font-semibold text-text-primary leading-snug">{degree}</h3>
      </div>
      <div>
        <span className="font-body text-sm text-text-secondary">{institution}</span>
      </div>
    </div>
  );
}
