import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { Project, ProjectCategory } from "@/types/content";
import { useContent } from "@/hooks/useContent";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { profile, projects, ui } = useContent();

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => (project.categories as ProjectCategory[]).includes(activeCategory));
  }, [activeCategory, projects]);

  return (
    <Section id="projects">
      <Reveal>
        <SectionTitle
          eyebrow={ui.sections.projectsEyebrow}
          title={ui.sections.projectsTitle}
          action={
            <ButtonLink href={profile.githubUrl} target="_blank" rel="noreferrer" variant="ghost" className="px-0 text-cyan-300">
              {ui.sections.projectsAction}
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          }
        />
        <ProjectFilter activeCategory={activeCategory} onChange={setActiveCategory} />
      </Reveal>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.04}>
            <ProjectCard project={project} onOpen={() => setSelectedProject(project)} />
          </Reveal>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Section>
  );
}
