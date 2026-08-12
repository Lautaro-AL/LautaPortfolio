import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/context";
import { featuredProjects, extraProjects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

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
        className="transition-all duration-700 mb-10"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
      >
        <SectionHeader title={t.projects.title} subtitle={t.projects.subtitle} number="02" />
      </div>

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
        <Button variant="quiet" size="sm" trailing={showAll ? "↑" : "↓"} onClick={() => setShowAll((v) => !v)}>
          {showAll ? t.projects.hideAll : t.projects.viewAll}
        </Button>
      </div>
    </section>
  );
}
