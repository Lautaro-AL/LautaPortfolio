import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/context";
import { workExperience } from "../../data/work";
import SectionHeader from "../ui/SectionHeader";
import StatusPill from "../ui/StatusPill";
import Button from "../ui/Button";
import Tag from "../ui/Tag";

export default function Work() {
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
    <section id="work" ref={ref} className="section-padding">
      <div
        className="transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
      >
        <SectionHeader title={t.work.title} subtitle={t.work.subtitle} number="01" />
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 py-10 border-b border-border-color transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transitionDelay: "120ms" }}
      >
        {/* Left: story */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5 flex-wrap">
            <StatusPill>{t.work.production}</StatusPill>
            <span className="font-mono text-xs text-text-secondary">2026 · routeev.uy</span>
          </div>
          <h3
            className="font-display font-bold text-text-primary leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            {workExperience.name}
          </h3>
          <p className="font-body text-sm text-text-secondary leading-relaxed">{t.work.description}</p>
          <p className="font-body text-sm text-text-secondary leading-relaxed">{t.work.role}</p>
          <div className="flex items-center gap-5 flex-wrap mt-2">
            <Button variant="outline" trailing="↗" href={workExperience.url}>
              {t.work.visit}
            </Button>
            <Button variant="ghost" trailing="↗" href={workExperience.webRepoUrl}>
              {t.work.webRepo}
            </Button>
            <Button variant="ghost" trailing="↗" href={workExperience.apiRepoUrl}>
              {t.work.apiRepo}
            </Button>
          </div>
        </div>

        {/* Right: stack breakdown + highlight */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-2.5">Frontend</p>
            <div className="flex flex-wrap gap-2">
              {workExperience.frontendStack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-2.5">API</p>
            <div className="flex flex-wrap gap-2">
              {workExperience.apiStack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>
          <div className="border-l-2 border-accent/40 pl-3">
            <p className="font-mono text-xs text-text-secondary uppercase tracking-wider mb-1">
              {t.work.highlightLabel}
            </p>
            <p className="font-body text-xs text-text-secondary leading-relaxed">{t.work.highlight}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
