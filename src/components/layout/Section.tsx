import { ReactNode } from "react";
import type { SectionId } from "@/types/content";
import { cn } from "@/utils/cn";

export function Section({
  id,
  children,
  className,
}: {
  id: SectionId;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 border-b border-slate-800/70 py-10 sm:py-14 lg:scroll-mt-8", className)}>
      {children}
    </section>
  );
}
