import { useState, useEffect } from "react";
import { useLanguage } from "../../i18n/context";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_SECTIONS = ["about", "skills", "projects", "education", "contact"] as const;
type NavSection = (typeof NAV_SECTIONS)[number];

export default function Navbar() {
  const { lang, t, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<NavSection | "">("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const current = NAV_SECTIONS.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom > 120;
      });
      setActiveSection(current ?? "");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (section: string) => {
    setMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bg/85 backdrop-blur-xl border-b border-border-color" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-bold text-base text-text-primary tracking-wide hover:text-accent transition-colors duration-200"
        >
          LA<span className="text-accent">.</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_SECTIONS.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollTo(section)}
                className={`font-body text-xs tracking-widest uppercase transition-colors duration-200 ${
                  activeSection === section
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {t.nav[section]}
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setLang("es")}
              className={`font-mono text-xs px-2 py-1 transition-colors duration-200 ${
                lang === "es" ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              ES
            </button>
            <span className="text-border-color text-xs">/</span>
            <button
              onClick={() => setLang("en")}
              className={`font-mono text-xs px-2 py-1 transition-colors duration-200 ${
                lang === "en" ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              EN
            </button>
          </div>

          {/* CV link — desktop */}
          <a
            href="/cv/Lautaro_Álvarez_Sanchez_CV.pdf"
            download
            className="hidden md:inline-flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-text-primary border border-border-color hover:border-text-secondary px-3 py-1.5 transition-all duration-200"
          >
            {t.nav.downloadCV} ↓
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-text-secondary hover:text-text-primary p-1 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg border-b border-border-color">
          <ul className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-6">
            {NAV_SECTIONS.map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollTo(section)}
                  className={`font-body text-sm tracking-widest uppercase transition-colors w-full text-left ${
                    activeSection === section ? "text-text-primary" : "text-text-secondary"
                  }`}
                >
                  {t.nav[section]}
                </button>
              </li>
            ))}
            <li>
              <a
                href="/cv/Lautaro_Álvarez_Sanchez_CV.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs text-text-secondary"
              >
                {t.nav.downloadCV} ↓
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
