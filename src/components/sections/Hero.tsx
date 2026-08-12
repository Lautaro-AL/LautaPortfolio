import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { useLanguage } from "../../i18n/context";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import HeroPhoto from "../ui/HeroPhoto";
import StatusPill from "../ui/StatusPill";

export default function Hero() {
  const { t } = useLanguage();
  const displayRole = useTypingEffect(t.hero.roles);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(id);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const fadeUp = (delay: number): CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(14px)",
    transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)",
    transitionDelay: `${delay}ms`,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden hero-bg flex flex-col"
    >
      {/* Centered grid container — matches max-w of other sections */}
      <div className="max-w-6xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-[55%_45%] px-6 md:px-12 lg:px-8">

        {/* ── Left: text ── */}
        <div className="flex flex-col justify-start pt-28 pb-16 lg:pr-8">

          {/* Availability + location */}
          <div style={fadeUp(80)} className="flex items-center gap-2.5 mb-10 flex-wrap">
            <StatusPill>{t.hero.availability}</StatusPill>
            <span className="font-mono text-xs text-border-color mx-0.5">·</span>
            <span className="font-mono text-xs text-text-secondary tracking-wide">
              {t.hero.location}
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-display font-extrabold text-text-primary leading-[0.9]"
            style={{
              fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(32px)",
              transition:
                "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: "180ms",
            }}
          >
            Lautaro
            <br />
            <span className="text-text-secondary">Álvarez</span>
          </h1>

          {/* Divider — expands on mount */}
          <div className="overflow-hidden h-px my-8">
            <div
              className="h-full bg-border-color"
              style={{
                width: mounted ? "100%" : "0%",
                transition: "width 0.9s cubic-bezier(0.16,1,0.3,1)",
                transitionDelay: "380ms",
              }}
            />
          </div>

          {/* Role */}
          <div style={fadeUp(480)} className="flex items-center gap-2 mb-5">
            <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              {displayRole}
            </span>
            <span className="text-accent-2 animate-ds-pulse-fast font-thin text-base leading-none">|</span>
          </div>

          {/* Description */}
          <p
            style={fadeUp(560)}
            className="font-body text-sm text-text-secondary leading-relaxed max-w-sm mb-10"
          >
            {t.hero.description}
          </p>

          {/* CTAs */}
          <div style={fadeUp(660)} className="flex items-center gap-4 mb-12">
            <button
              onClick={() => scrollTo("projects")}
              className="font-mono text-xs text-accent border border-accent/30 hover:border-accent hover:bg-accent/5 px-5 py-2.5 transition-all duration-200 tracking-wide"
            >
              {t.hero.ctaProjects} →
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-200 tracking-wide"
            >
              {t.hero.ctaContact} ↓
            </button>
          </div>

          {/* Social + CV */}
          <div style={fadeUp(750)} className="flex items-center gap-6">
            <a
              href="https://github.com/Lautaro-AL"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-200 tracking-wide"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/lautaro-alvarez-sanchez/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-200 tracking-wide"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://routeev.uy/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-200 tracking-wide"
            >
              routeev.uy ↗
            </a>
            <a
              href="/cv/Lautaro_Álvarez_Sanchez_CV.pdf"
              download
              className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-200 tracking-wide"
            >
              {t.cv} ↓
            </a>
          </div>
        </div>

        {/* ── Right: photo ── */}
        <div className="flex flex-col items-center justify-start pb-12 pt-4 lg:pt-28 lg:pl-4">
          {/* Spacer = availability row height + mb-10 */}
          <div className="hidden lg:block h-[3.5rem]" />
          <HeroPhoto mounted={mounted} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-text-secondary tracking-widest"
        style={{
          opacity: mounted ? 0.4 : 0,
          transition: "opacity 0.7s ease",
          transitionDelay: "950ms",
        }}
      >
        scroll
      </div>
    </section>
  );
}
