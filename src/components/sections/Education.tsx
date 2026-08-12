import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/context";
import { educationItems } from "../../data/education";
import SectionHeader from "../ui/SectionHeader";
import EducationRow from "../ui/EducationRow";

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
      <div
        className="transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
      >
        <SectionHeader title={t.education.title} number="05" />
      </div>

      {/* Items */}
      {educationItems.map((item, i) => (
        <div
          key={`${item.institution}-${i}`}
          className="transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transitionDelay: `${i * 90}ms`,
          }}
        >
          <EducationRow
            period={item.period}
            degree={lang === "es" ? item.degree.es : item.degree.en}
            institution={item.institution}
            current={item.current}
            currentLabel={t.education.current}
          />
        </div>
      ))}
    </section>
  );
}
