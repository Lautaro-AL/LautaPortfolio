import { useLanguage } from "../../i18n/context";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-color overflow-hidden">
      {/* Top row */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-secondary">
          © {year} · {t.footer.by} · {t.footer.rights}
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Lautaro-AL"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/lautaro-alvarez-sanchez"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:brunola365@gmail.com"
            className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            Email ↗
          </a>
        </div>
      </div>

      {/* Giant name — Sirnik-style */}
      <div className="pb-2 -mb-2 overflow-hidden w-full">
        <p
          className="font-display font-black leading-none text-text-primary select-none whitespace-nowrap"
          style={{
            fontSize: "clamp(4rem, 16.5vw, 999rem)",
            letterSpacing: "0.06em",
            opacity: 0.07,
          }}
          aria-hidden="true"
        >
          Lautaro Álvarez
        </p>
      </div>
    </footer>
  );
}
