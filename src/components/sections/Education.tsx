import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/context";
import { educationItems } from "../../data/education";

export default function Education() {
  const { t, lang } = useLanguage();
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
    <section id="education" ref={ref} className="section-padding">
      {/* Section header */}
      <div
        className="flex items-end justify-between mb-0 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
      >
        <h2 className="font-display font-bold text-text-primary" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
          {t.education.title}
        </h2>
        <span className="section-num">04</span>
      </div>

      <div className="section-line mt-4" />

      {/* Items */}
      {educationItems.map((item, i) => (
        <div
          key={`${item.institution}-${i}`}
          className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8 py-8 border-b border-border-color transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transitionDelay: `${i * 90}ms`,
          }}
        >
          {/* Period */}
          <div className="flex items-start gap-3">
            <span className="font-mono text-xs text-text-secondary tracking-wide pt-0.5">
              {item.period}
            </span>
            {item.current && (
              <span className="flex items-center gap-1 font-mono text-xs text-accent-cyan border border-accent-cyan/30 px-2 py-0.5 shrink-0">
                <span className="w-1 h-1 rounded-full bg-accent-cyan animate-pulse" />
                {t.education.current}
              </span>
            )}
          </div>

          {/* Degree */}
          <div className="md:col-span-2">
            <h3 className="font-heading text-base font-semibold text-text-primary leading-snug">
              {lang === "es" ? item.degree.es : item.degree.en}
            </h3>
          </div>

          {/* Institution */}
          <div>
            <span className="font-body text-sm text-text-secondary">{item.institution}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
