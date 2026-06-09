import type { LucideIcon } from "lucide-react";

export type ThemeMode = "dark" | "light";

export type Language = "ru" | "en";

export type SectionId = "home" | "projects" | "experience" | "skills" | "why-hire-me" | "contact";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type ProjectCategory = "All" | "React" | "TypeScript" | "Fullstack" | "UI" | "API" | "Infrastructure";

export type Project = {
  id: string;
  title: string;
  description: string;
  caseSummary: string;
  role: string;
  problem: string;
  solution: string[];
  result: string;
  stack: string[];
  categories: ProjectCategory[];
  githubUrl: string;
  demoUrl?: string;
  accent: "cyan" | "violet" | "lime" | "blue";
  preview: "dashboard" | "shop" | "cars" | "calendar" | "movies" | "editor";
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  duration: string;
  logoText: string;
  accent: "cyan" | "violet" | "lime" | "blue";
  bullets: string[];
  stack: string[];
};

export type Skill = {
  name: string;
  group: string;
  icon?: LucideIcon;
  accent: "cyan" | "violet" | "lime" | "blue";
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ValueCard = {
  title: string;
  text: string;
  icon: LucideIcon;
  accent: "cyan" | "violet" | "lime" | "blue";
};
