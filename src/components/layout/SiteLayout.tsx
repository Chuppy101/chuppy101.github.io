import { ReactNode } from "react";
import { MobileNav } from "./MobileNav";
import { Sidebar } from "./Sidebar";
import { SiteControls } from "./SiteControls";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";

export function SiteLayout({ children }: { children: ReactNode }) {
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-cyan-300/30 selection:text-white">
      <GlowBackground />
      <ScrollProgress />
      <SiteControls className="fixed right-5 top-5 z-50 hidden lg:flex" />
      <Sidebar activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />
      <main className="relative z-10 mx-auto w-full max-w-[1480px] px-4 pb-10 pt-20 sm:px-6 lg:pl-[300px] lg:pr-8 lg:pt-0">
        {children}
      </main>
    </div>
  );
}
