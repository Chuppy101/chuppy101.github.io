import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types/content";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <Section id="projects">
      <Reveal>
        <SectionTitle
          eyebrow="Selected work"
          title="Проекты"
          action={
            <ButtonLink href={profile.githubUrl} target="_blank" rel="noreferrer" variant="ghost" className="px-0 text-cyan-300">
              Смотреть все проекты
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
