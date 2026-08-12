import {
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiReact,
  SiVuedotjs,
  SiHtml5,
  SiTailwindcss,
  SiDotnet,
  SiSpring,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiSwagger,
  SiJest,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp, TbBrandAzure, TbBrandAws } from "react-icons/tb";
import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategoryData {
  category: { es: string; en: string };
  skills: Skill[];
}

export const skillCategories: SkillCategoryData[] = [
  {
    category: { es: "Lenguajes", en: "Languages" },
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C#", icon: TbBrandCSharp },
      { name: "Java", icon: SiOpenjdk },
    ],
  },
  {
    category: { es: "Frontend", en: "Frontend" },
    skills: [
      { name: "React", icon: SiReact },
      { name: "Vue", icon: SiVuedotjs },
      { name: "HTML / CSS", icon: SiHtml5 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: { es: "Backend", en: "Backend" },
    skills: [
      { name: "ASP.NET Core", icon: SiDotnet },
      { name: "Spring Boot", icon: SiSpring },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    category: { es: "Bases de datos", en: "Databases" },
    skills: [
      { name: "SQL Server", icon: DiMsqlServer },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    category: { es: "Herramientas", en: "Tools" },
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Swagger", icon: SiSwagger },
      { name: "Jest", icon: SiJest },
    ],
  },
  {
    category: { es: "Cloud", en: "Cloud" },
    skills: [
      { name: "Azure", icon: TbBrandAzure },
      { name: "AWS", icon: TbBrandAws },
    ],
  },
];
