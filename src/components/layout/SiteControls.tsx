import { Check, ChevronDown, Languages, Palette } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useAppSettings } from "@/hooks/useAppSettings";
import type { Language, ThemeMode } from "@/types/content";
import { cn } from "@/utils/cn";

type SiteControlsProps = {
  className?: string;
};

export function SiteControls({ className }: SiteControlsProps) {
  const { theme, language, setTheme, setLanguage, content } = useAppSettings();
  const labels = content.ui.controls;
  const themeMenuId = useId();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  const themeOptions: Array<{ value: ThemeMode; label: string }> = [
    { value: "dark", label: labels.dark },
    { value: "light", label: labels.light },
  ];

  useEffect(() => {
    if (!themeMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setThemeMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setThemeMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [themeMenuOpen]);

  return (
    <div className={cn("site-controls flex items-center gap-2", className)}>
      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          onClick={() => setThemeMenuOpen((value) => !value)}
          className="theme-dropdown-trigger group flex h-10 min-w-[128px] items-center justify-between gap-2 rounded-2xl border border-slate-700/50 bg-slate-950/80 px-3 text-xs font-bold text-slate-100 shadow-xl shadow-slate-950/20 backdrop-blur-xl transition hover:border-cyan-300/60 hover:bg-slate-900/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
          aria-label={labels.themeLabel}
          aria-haspopup="listbox"
          aria-expanded={themeMenuOpen}
          aria-controls={themeMenuId}
        >
          <span className="flex items-center gap-2">
            <span className="theme-dropdown-icon flex h-6 w-6 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/20 transition group-hover:bg-cyan-300/15">
              <Palette className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span>{themeOptions.find((option) => option.value === theme)?.label}</span>
          </span>
          <ChevronDown
            className={cn("h-3.5 w-3.5 text-slate-400 transition", themeMenuOpen && "rotate-180 text-cyan-300")}
            aria-hidden="true"
          />
        </button>

        <div
          id={themeMenuId}
          role="listbox"
          className={cn(
            "theme-dropdown-menu absolute right-0 top-[calc(100%+0.5rem)] z-[70] w-full min-w-[150px] overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-950/95 p-1.5 shadow-2xl shadow-slate-950/35 backdrop-blur-2xl transition duration-150",
            themeMenuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
          )}
          aria-label={labels.themeLabel}
        >
          {themeOptions.map((option) => {
            const active = option.value === theme;

            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  setTheme(option.value);
                  setThemeMenuOpen(false);
                }}
                className={cn(
                  "theme-dropdown-option flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300",
                  active
                    ? "bg-cyan-300/15 text-cyan-200 ring-1 ring-cyan-300/20"
                    : "text-slate-400 hover:bg-white/[0.06] hover:text-slate-100",
                )}
              >
                {option.label}
                {active && <Check className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="language-switcher flex h-10 items-center rounded-2xl border border-slate-700/50 bg-slate-950/80 p-1 text-xs font-black shadow-xl shadow-slate-950/20 backdrop-blur-xl"
        aria-label={labels.languageLabel}
      >
        <Languages className="mx-2 h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
        {(["ru", "en"] as Language[]).map((item) => {
          const active = item === language;

          return (
            <button
              key={item}
              type="button"
              onClick={() => setLanguage(item)}
              className={cn(
                "rounded-xl px-2.5 py-1.5 uppercase transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300",
                active ? "bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-300/20" : "text-slate-400 hover:text-slate-100",
              )}
              aria-pressed={active}
            >
              {item === "ru" ? "RU" : "ENG"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
