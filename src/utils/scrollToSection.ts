import type { SectionId } from "@/types/content";

export function scrollToSection(sectionId: SectionId) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
