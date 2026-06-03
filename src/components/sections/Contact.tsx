import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../i18n/context";

type Status = "idle" | "sending" | "success" | "error";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export default function Contact() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-transparent border-b border-border-color focus:border-text-secondary outline-none py-3 font-body text-sm text-text-primary placeholder:text-text-secondary transition-colors duration-200";

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      {/* Section header */}
      <div
        className="flex items-end justify-between mb-0 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
      >
        <div>
          <h2
            className="font-display font-bold text-text-primary leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            {t.contact.subtitle}
          </h2>
          <p className="font-mono text-xs text-text-secondary mt-2 tracking-wide max-w-sm">
            {t.contact.description}
          </p>
        </div>
        <span className="section-num">05</span>
      </div>

      <div className="section-line mt-4 mb-16" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-16px)", transitionDelay: "100ms" }}
        >
          <input type="text" name="from_name" required placeholder={t.contact.namePlaceholder} className={inputClass} />
          <input type="email" name="from_email" required placeholder={t.contact.emailPlaceholder} className={inputClass} />
          <textarea name="message" required rows={4} placeholder={t.contact.messagePlaceholder} className={`${inputClass} resize-none`} />

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="font-mono text-xs text-text-primary border border-border-color hover:border-text-secondary px-5 py-2.5 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            >
              {status === "sending" ? t.contact.sending : `${t.contact.send} →`}
            </button>
            {status === "success" && <p className="font-mono text-xs text-accent-cyan">{t.contact.success}</p>}
            {status === "error" && <p className="font-mono text-xs text-red-400">{t.contact.error}</p>}
          </div>
        </form>

        {/* Direct links */}
        <div
          className="flex flex-col gap-0 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(16px)", transitionDelay: "200ms" }}
        >
          <p className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-6">
            {t.contact.orContact}
          </p>

          {[
            { label: "Email", href: "mailto:brunola365@gmail.com", display: "brunola365@gmail.com" },
            { label: "GitHub", href: "https://github.com/Lautaro-AL", display: "github.com/Lautaro-AL" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/lautaro-alvarez-sanchez/", display: "lautaro-alvarez-sanchez" },
          ].map(({ label, href, display }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-end justify-between py-5 border-b border-border-color hover:border-text-secondary transition-colors duration-200"
            >
              <div>
                <p className="font-mono text-xs text-text-secondary mb-1">{label}</p>
                <p className="font-heading text-base text-text-primary group-hover:text-accent transition-colors duration-200">
                  {display}
                </p>
              </div>
              <span className="font-mono text-xs text-text-secondary group-hover:text-text-primary transition-colors duration-200">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
