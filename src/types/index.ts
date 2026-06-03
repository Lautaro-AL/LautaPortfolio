export type Language = 'es' | 'en';

export interface Project {
  id: string;
  title: string;
  description: { es: string; en: string };
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  featured: boolean;
  date: string;
  highlight: { es: string; en: string };
}

export interface SkillCategory {
  category: { es: string; en: string };
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: { es: string; en: string };
  period: string;
  current?: boolean;
}
