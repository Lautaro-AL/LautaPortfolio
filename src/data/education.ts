import type { EducationItem } from "../types";

export const educationItems: EducationItem[] = [
  {
    institution: "Universidad ORT Uruguay",
    degree: {
      es: "Analista en Tecnologías de la Información (ATI)",
      en: "Information Technology Analyst (ATI)",
    },
    period: "2023 — Presente",
    current: true,
  },
  {
    institution: "Universidad ORT Uruguay",
    degree: {
      es: "Analista Programador",
      en: "Software Analyst",
    },
    period: "2023 — Presente",
    current: true,
  },
  {
    institution: "Universidad ORT Uruguay",
    degree: {
      es: "Programador Web — Graduado",
      en: "Web Developer — Graduated",
    },
    period: "2023 — Mar 2026",
    current: false,
  },
  {
    institution: "Coderhouse",
    degree: {
      es: "Desarrollo Web Full Stack",
      en: "Full Stack Web Development",
    },
    period: "2023",
    current: false,
  },
];
