import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/context";
import SectionHeader from "../ui/SectionHeader";
import StatBlock from "../ui/StatBlock";

export default function About() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="section-padding">
      <div
        className="transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
      >
        <SectionHeader title={t.about.title} number="04" />
      </div>

      {/* Body: text + stats */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-start mt-16">

        {/* Text */}
        <div className="flex flex-col gap-6">
          {t.about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-body text-sm text-text-secondary leading-relaxed transition-all duration-700"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)", transitionDelay: `${150 + i * 80}ms` }}
            >
              {p}
            </p>
          ))}

          <div
            className="transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transitionDelay: "390ms" }}
          >
            <a
              href="/cv/Lautaro_Álvarez_Sanchez_CV.pdf"
              download
              className="font-mono text-xs text-text-secondary hover:text-text-primary border border-border-color hover:border-border-strong px-4 py-2 inline-flex items-center gap-2 transition-all duration-200"
            >
              {t.about.downloadCV} ↓
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-0 min-w-[220px]">
          {t.about.stats.map(([value, label], i) => (
            <div
              key={label}
              className="transition-all duration-700"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: `${150 + i * 100}ms` }}
            >
              <StatBlock value={value} label={label} last={i === t.about.stats.length - 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
