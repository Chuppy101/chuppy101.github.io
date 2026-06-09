import { BriefcaseBusiness, Code2, FolderGit2, Home, Mail, Shapes, UserRoundCheck } from "lucide-react";
import portfolioLogo from "@/assets/port_logo.png";
import { scrollToSection } from "@/utils/scrollToSection";
import type { SectionId } from "@/types/content";
import { cn } from "@/utils/cn";
import { useContent } from "@/hooks/useContent";

const icons: Record<SectionId, typeof Home> = {
  home: Home,
  projects: FolderGit2,
  experience: BriefcaseBusiness,
  skills: Shapes,
  "why-hire-me": UserRoundCheck,
  contact: Mail,
};

type SidebarProps = {
  activeSection: SectionId;
};

export function Sidebar({ activeSection }: SidebarProps) {
  const { navItems, profile, socialLinks, ui } = useContent();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[260px] border-r border-slate-700/40 bg-slate-950/70 backdrop-blur-2xl lg:block">
      <div className="flex h-full flex-col px-5 py-8">
        <button
          type="button"
          className="group mb-12 flex flex-col items-center text-center"
          onClick={() => scrollToSection("home")}
          aria-label={ui.sidebar.homeAria}
        >
          <div className="relative mb-5 flex h-24 w-24 items-center justify-center overflow-hidden rounded-[1.9rem] border border-cyan-300/25 bg-slate-950 shadow-2xl shadow-cyan-400/20 ring-1 ring-white/5 transition duration-300 group-hover:scale-105 group-hover:border-cyan-300/60 group-hover:shadow-cyan-400/30">
            <img
              src={portfolioLogo}
              alt="Alex Chub logo"
              className="h-full w-full scale-[1.14] object-cover object-center"
              width="96"
              height="96"
            />
            <span className="pointer-events-none absolute inset-0 rounded-[1.9rem] bg-gradient-to-br from-cyan-300/10 via-transparent to-violet-500/10" />
          </div>
          <span className="text-xl font-bold text-white">{profile.name}</span>
          <span className="mt-1 text-sm text-slate-400">{profile.role}</span>
        </button>

        <nav className="space-y-2" aria-label="Main navigation">
          {navItems.map((item) => {
            const Icon = icons[item.id];
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "group relative flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300",
                  isActive
                    ? "border-cyan-300/60 bg-cyan-300/10 text-white shadow-lg shadow-cyan-400/10"
                    : "border-transparent text-slate-400 hover:border-slate-600/70 hover:bg-white/[0.03] hover:text-slate-100",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className={cn("h-4 w-4", isActive ? "text-cyan-300" : "text-slate-500 group-hover:text-cyan-300")} />
                {item.label}
                {isActive && <span className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-cyan-300" />}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto flex items-center justify-center gap-3">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/50 bg-white/[0.03] text-slate-400 transition hover:border-cyan-300/60 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-600">
          <Code2 className="h-3.5 w-3.5" />
          <span>{ui.sidebar.builtWith}</span>
        </div>
      </div>
    </aside>
  );
}
