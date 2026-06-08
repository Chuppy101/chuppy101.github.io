import { GitBranch, Mail, Send } from "lucide-react";
import type { SectionId, SocialLink, ValueCard } from "@/types/content";
import { Boxes, Gem, Lightbulb, Rocket } from "lucide-react";

export const profile = {
  name: "Alex Chub",
  fullName: "Александр Чубчик",
  role: "Frontend Developer",
  subtitle: "React / TypeScript / Product Interfaces",
  location: "Saint Petersburg / Remote",
  email: "a_chubchik@mail.ru",
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  githubUrl: "https://github.com/Chuppy101",
  telegramUrl: "https://t.me/Chubby_Alex",
  pitch:
    "Я создаю SPA-интерфейсы, работаю с бизнес-логикой клиентской части, интегрирую REST API, улучшаю инфраструктуру проектов и делаю UI, которым удобно пользоваться.",
  experienceLabel: "3+ года коммерческого опыта",
  availability: "Открыт к frontend позициям, удаленной работе и продуктовым командам.",
};

export const navItems: Array<{ id: SectionId; label: string }> = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "why-hire-me", label: "Why Hire Me" },
  { id: "contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.githubUrl, icon: GitBranch },
  { label: "Telegram", href: profile.telegramUrl, icon: Send },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export const valueCards: ValueCard[] = [
  {
    title: "Product thinking",
    text: "Я думаю о сценарии пользователя, бизнес-цели и понятном результате для продукта.",
    icon: Lightbulb,
    accent: "cyan",
  },
  {
    title: "UI quality",
    text: "Я умею собирать аккуратные адаптивные интерфейсы: от резиновой верстки и сложных форм до таблиц, карточек и модальных сценариев.",
    icon: Gem,
    accent: "violet",
  },
  {
    title: "Infrastructure mindset",
    text: "Я умею работать со Storybook, тестами, CI, линтерами, конфигами и обновлением зависимостей.",
    icon: Boxes,
    accent: "lime",
  },
  {
    title: "Ownership",
    text: "Я могу взять задачу целиком: уточнить требования, собрать UI, интегрировать API и проверить edge cases.",
    icon: Rocket,
    accent: "blue",
  },
];
