import { ReactNode } from "react";

export function SectionTitle({ title, eyebrow, action }: { title: string; eyebrow?: string; action?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">{eyebrow}</p>}
        <h2 className="flex items-center gap-3 text-2xl font-black text-white sm:text-3xl">
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
