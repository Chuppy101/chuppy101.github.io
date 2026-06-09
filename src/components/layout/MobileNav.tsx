import { Menu, X } from "lucide-react";
import { useState } from "react";
import portfolioLogo from "@/assets/port_logo.png";
import { scrollToSection } from "@/utils/scrollToSection";
import type { SectionId } from "@/types/content";
import { cn } from "@/utils/cn";
import { useContent } from "@/hooks/useContent";
import { SiteControls } from "./SiteControls";

type MobileNavProps = {
  activeSection: SectionId;
};

export function MobileNav({ activeSection }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const { navItems, profile, ui } = useContent();

  const handleNav = (id: SectionId) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-700/40 bg-slate-950/80 backdrop-blur-2xl lg:hidden">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4">
        <button
          type="button"
          onClick={() => handleNav("home")}
          className="flex min-w-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
        >
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/30 bg-slate-950 shadow-lg shadow-cyan-400/10">
            <img src={portfolioLogo} alt="Alex Chub logo" className="h-full w-full scale-[1.18] object-cover object-center" width="44" height="44" />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-violet-500/10" />
          </span>
          <span className="min-w-0 text-left">
            <span className="block truncate text-sm font-bold text-white">{profile.name}</span>
            <span className="block truncate text-xs text-slate-400">{profile.role}</span>
          </span>
        </button>

        <div className="flex shrink-0 items-center gap-2">
          <SiteControls className="hidden min-[520px]:flex" />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/50 text-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
            aria-label={open ? ui.mobileNav.closeAria : ui.mobileNav.openAria}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-slate-700/40 transition-all duration-300",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <nav className="min-h-0 px-4" aria-label="Mobile navigation">
          <div className="flex py-3 min-[520px]:hidden">
            <SiteControls />
          </div>
          <div className="grid gap-2 py-4 sm:grid-cols-2">
            {navItems.map((item) => {
              const isActive = item.id === activeSection;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNav(item.id)}
                  className={cn(
                    "rounded-2xl border px-4 py-3 text-left text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300",
                    isActive
                      ? "border-cyan-300/50 bg-cyan-300/10 text-white"
                      : "border-slate-700/40 bg-white/[0.03] text-slate-400",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
