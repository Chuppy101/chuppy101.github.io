import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GitBranch, X } from "lucide-react";
import { useEffect } from "react";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectPreview } from "./ProjectPreview";
import type { Project } from "@/types/content";
import { useContent } from "@/hooks/useContent";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const reduceMotion = useReducedMotion();
  const { ui } = useContent();

  useEffect(() => {
    if (!project) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-3 sm:items-center sm:p-6" role="dialog" aria-modal="true">
          <motion.button
            type="button"
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={onClose}
            aria-label={ui.project.closeDetails}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-700/60 bg-slate-950/95 shadow-2xl shadow-black/60"
            initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-800 bg-slate-950/90 px-5 py-4 backdrop-blur-xl">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">{ui.project.caseDetails}</p>
                <h3 className="mt-1 text-xl font-black text-white">{project.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/60 text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
                aria-label={ui.project.closeDetails}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-6 p-5 lg:grid-cols-[0.9fr_1.1fr] lg:p-6">
              <div>
                <ProjectPreview type={project.preview} accent={project.accent} />
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} active={tech === "React" || tech === "TypeScript"}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <ButtonLink href={project.githubUrl} target="_blank" rel="noreferrer" variant="primary">
                    <GitBranch className="h-4 w-4" />
                    GitHub
                  </ButtonLink>
                  {project.demoUrl && (
                    <ButtonLink href={project.demoUrl} target="_blank" rel="noreferrer" variant="secondary">
                      Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </ButtonLink>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <InfoBlock title={ui.project.description} text={project.caseSummary} />
                <InfoBlock title={ui.project.role} text={project.role} />
                <InfoBlock title={ui.project.problem} text={project.problem} />
                <div>
                  <h4 className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">{ui.project.solution}</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                    {project.solution.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <InfoBlock title={ui.project.result} text={project.result} />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}
