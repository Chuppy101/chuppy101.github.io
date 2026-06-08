import { Boxes, Bug, Code2, Database, GitBranch, Layers3, Network, Palette, Route, Sparkles } from "lucide-react";
import type { Skill, SkillGroup } from "@/types/content";

export const skills: Skill[] = [
  { name: "React", group: "Core", icon: Sparkles, accent: "cyan" },
  { name: "TypeScript", group: "Core", icon: Code2, accent: "blue" },
  { name: "JavaScript", group: "Core", icon: Code2, accent: "lime" },
  { name: "Redux Toolkit", group: "State", icon: Layers3, accent: "violet" },
  { name: "Zustand", group: "State", icon: Boxes, accent: "lime" },
  { name: "REST API", group: "Integration", icon: Network, accent: "cyan" },
  { name: "Axios / Fetch", group: "Integration", icon: Route, accent: "blue" },
  { name: "Tailwind CSS", group: "Styling", icon: Palette, accent: "cyan" },
  { name: "SCSS", group: "Styling", icon: Palette, accent: "violet" },
  { name: "Vite", group: "Tooling", icon: Sparkles, accent: "lime" },
  { name: "Storybook", group: "Tooling", icon: Boxes, accent: "violet" },
  { name: "GitHub Actions", group: "Tooling", icon: GitBranch, accent: "blue" },
  { name: "Vitest", group: "Testing", icon: Bug, accent: "lime" },
  { name: "Jest", group: "Testing", icon: Bug, accent: "cyan" },
  { name: "Cypress", group: "Testing", icon: Bug, accent: "violet" },
  { name: "Node.js", group: "Backend", icon: Database, accent: "lime" },
  { name: "Express", group: "Backend", icon: Database, accent: "blue" },
  { name: "Strapi", group: "Backend", icon: Database, accent: "violet" },
];

export const skillGroups: SkillGroup[] = [
  { title: "Core", skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { title: "State", skills: ["Redux Toolkit", "Zustand", "Context API"] },
  { title: "Styling", skills: ["Tailwind CSS", "SCSS", "Responsive UI"] },
  { title: "Integration", skills: ["REST API", "Axios / Fetch", "TMDB API"] },
  { title: "Tooling", skills: ["Vite", "Storybook", "GitHub Actions", "ESLint"] },
  { title: "Testing", skills: ["Vitest", "Jest", "Cypress"] },
  { title: "Backend familiarity", skills: ["Node.js", "Express", "Strapi", "MySQL", "MongoDB"] },
];
