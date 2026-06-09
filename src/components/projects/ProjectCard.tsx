import { ArrowUpRight, GitBranch, Maximize2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ProjectPreview } from "./ProjectPreview";
import type { Project } from "@/types/content";
import { accentClasses } from "@/utils/accent";
import { cn } from "@/utils/cn";
import { useContent } from "@/hooks/useContent";

type ProjectCardProps = {
  project: Project;
  onOpen: () => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const accent = accentClasses[project.accent];
  const { ui } = useContent();

  return (
    <Card
      className={cn(
        "group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-slate-500/70 hover:shadow-2xl",
        accent.shadow,
      )}
    >
      <button
        type="button"
        onClick={onOpen}
        className="block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
        aria-label={`${ui.project.openDetails}: ${project.title}`}
      >
        <ProjectPreview type={project.preview} accent={project.accent} />
      </button>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-black text-white">{project.title}</h3>
            <p className="mt-2 min-h-[52px] text-sm leading-6 text-slate-400">{project.description}</p>
          </div>
          <button
            type="button"
            onClick={onOpen}
            className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-700/60 bg-white/[0.03] text-slate-400 transition hover:border-cyan-300/60 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
            aria-label={`${ui.project.openDetails}: ${project.title}`}
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech} active={tech === "React" || tech === "TypeScript"}>
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-slate-800/80 pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
          >
            <GitBranch className="h-4 w-4" />
            GitHub
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
            >
              Demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
