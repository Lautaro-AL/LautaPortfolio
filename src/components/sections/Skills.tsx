import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/context";
import { skillCategories } from "../../data/skills";

export default function Skills() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="section-padding">
      {/* Section header */}
      <div
        className="flex items-end justify-between mb-0 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
      >
        <h2 className="font-display font-bold text-text-primary" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
          {t.skills.title}
        </h2>
        <span className="section-num">02</span>
      </div>

      <div className="section-line mt-4 mb-0" />

      {/* Skills list */}
      <div className="flex flex-col">
        {skillCategories.map((cat, catIndex) => (
          <div
            key={cat.category.es}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 py-7 border-b border-border-color transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transitionDelay: `${catIndex * 70}ms`,
            }}
          >
            {/* Category */}
            <div className="md:col-span-1 flex items-start">
              <span className="font-mono text-xs text-text-secondary uppercase tracking-widest pt-0.5">
                {lang === "es" ? cat.category.es : cat.category.en}
              </span>
            </div>

            {/* Skills */}
            <div className="md:col-span-3 flex flex-wrap gap-x-6 gap-y-2">
              {cat.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={skill.name}
                    className="flex items-center gap-1.5 font-heading text-base text-text-primary hover:text-accent transition-colors duration-200 cursor-default"
                  >
                    <Icon className="w-3.5 h-3.5 text-text-secondary shrink-0" />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p
        className="mt-8 font-mono text-xs text-text-secondary transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transitionDelay: "500ms" }}
      >
        {t.skills.subtitle}
      </p>
    </section>
  );
}
