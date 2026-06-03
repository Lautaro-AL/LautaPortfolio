import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/context";
import { featuredProjects, extraProjects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.06 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const cardLabels = {
    viewCode: t.projects.viewCode,
    viewDemo: t.projects.viewDemo,
    highlight: t.projects.highlight,
  };

  return (
    <section id="projects" ref={ref} className="section-padding">
      {/* Section header */}
      <div
        className="flex items-end justify-between mb-0 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
      >
        <div>
          <h2 className="font-display font-bold text-text-primary" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
            {t.projects.title}
          </h2>
          <p className="font-mono text-xs text-text-secondary mt-2 tracking-wide">
            {t.projects.subtitle}
          </p>
        </div>
        <span className="section-num">03</span>
      </div>

      <div className="section-line mt-4" />

      {/* Featured */}
      {featuredProjects.map((project, i) => (
        <ProjectCard key={project.id} project={project} lang={lang} index={i} labels={cardLabels} visible={visible} />
      ))}

      {/* Extra */}
      {showAll && extraProjects.map((project, i) => (
        <ProjectCard key={project.id} project={project} lang={lang} index={featuredProjects.length + i} labels={cardLabels} visible={showAll} />
      ))}

      {/* Toggle */}
      <div
        className="pt-8 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transitionDelay: "400ms" }}
      >
        <button
          onClick={() => setShowAll((v) => !v)}
          className="font-mono text-xs text-text-secondary hover:text-text-primary border border-border-color hover:border-text-secondary px-4 py-2 transition-all duration-200"
        >
          {showAll ? `${t.projects.hideAll} ↑` : `${t.projects.viewAll} ↓`}
        </button>
      </div>
    </section>
  );
}
