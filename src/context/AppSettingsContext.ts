import { createContext } from "react";
import { localizedContent } from "@/data/localizedContent";
import type { Language, ThemeMode } from "@/types/content";

export type AppSettingsContextValue = {
  theme: ThemeMode;
  language: Language;
  setTheme: (theme: ThemeMode) => void;
  setLanguage: (language: Language) => void;
  content: (typeof localizedContent)[Language];
};

export const AppSettingsContext = createContext<AppSettingsContextValue | null>(null);
