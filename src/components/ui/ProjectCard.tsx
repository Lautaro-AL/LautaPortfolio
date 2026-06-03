import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
  lang: "es" | "en";
  index: number;
  labels: { viewCode: string; viewDemo: string; highlight: string };
  visible: boolean;
}

export default function ProjectCard({ project, lang, index, labels, visible }: ProjectCardProps) {
  const desc = project.description[lang];
  const highlight = project.highlight[lang];

  return (
    <div
      className="group py-10 border-b border-border-color transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        {/* Left: number + title + links */}
        <div className="flex flex-col justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-text-secondary">
              {String(index + 1).padStart(2, "0")} · {project.date}
            </span>
            <h3
              className="font-display font-bold text-text-primary mt-2 leading-tight group-hover:text-accent transition-colors duration-300"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", letterSpacing: "-0.02em" }}
            >
              {project.title}
            </h3>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <FiGithub className="w-3.5 h-3.5" />
              {labels.viewCode}
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-mono text-xs text-accent hover:text-accent/80 transition-colors duration-200"
              >
                <FiArrowUpRight className="w-3.5 h-3.5" />
                {labels.viewDemo}
              </a>
            )}
          </div>
        </div>

        {/* Middle: description */}
        <div className="md:col-span-1">
          <p className="font-body text-sm text-text-secondary leading-relaxed">{desc}</p>
        </div>

        {/* Right: stack + highlight */}
        <div className="flex flex-col gap-4">
          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-text-secondary border border-border-color px-2 py-0.5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Highlight */}
          <div className="border-l-2 border-accent/40 pl-3">
            <p className="font-mono text-xs text-text-secondary mb-1 uppercase tracking-wider">
              {labels.highlight}
            </p>
            <p className="font-body text-xs text-text-secondary leading-relaxed">{highlight}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
