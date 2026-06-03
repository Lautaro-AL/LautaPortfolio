import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/context";

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

  const stats = [
    { value: "5", label: t.about.stat1Label },
    { value: "10+", label: t.about.stat2Label },
    { value: t.about.stat3Value, label: t.about.stat3Label },
  ];

  return (
    <section id="about" ref={ref} className="section-padding">
      {/* Section header */}
      <div
        className="flex items-end justify-between mb-0 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
      >
        <h2 className="font-display font-bold text-text-primary" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
          {t.about.title}
        </h2>
        <span className="section-num">01</span>
      </div>

      <div className="section-line mt-4 mb-16" />

      {/* Body: photo + text + stats */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-start">

        {/* Text */}
        <div className="flex flex-col gap-6">
          {[t.about.p1, t.about.p2, t.about.p3].map((p, i) => (
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
              className="font-mono text-xs text-text-secondary hover:text-text-primary border border-border-color hover:border-text-secondary px-4 py-2 inline-flex items-center gap-2 transition-all duration-200"
            >
              {t.about.downloadCV} ↓
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-0">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className="py-8 border-b border-border-color last:border-0 transition-all duration-700"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: `${150 + i * 100}ms` }}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
