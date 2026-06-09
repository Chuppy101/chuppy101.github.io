import type { ProjectCategory } from "@/types/content";
import { cn } from "@/utils/cn";
import { useContent } from "@/hooks/useContent";

type ProjectFilterProps = {
  activeCategory: ProjectCategory;
  onChange: (category: ProjectCategory) => void;
};

export function ProjectFilter({ activeCategory, onChange }: ProjectFilterProps) {
  const { projectCategories, projectCategoryLabels, ui } = useContent();

  return (
    <div className="flex flex-wrap gap-2" aria-label={ui.project.filterAria}>
      {projectCategories.map((category) => {
        const active = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={cn(
              "rounded-xl border px-3 py-2 text-xs font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300",
              active
                ? "border-cyan-300/50 bg-cyan-300/10 text-cyan-200"
                : "border-slate-700/50 bg-white/[0.03] text-slate-400 hover:border-slate-600 hover:text-slate-100",
            )}
            aria-pressed={active}
          >
            {projectCategoryLabels[category]}
          </button>
        );
      })}
    </div>
  );
}
