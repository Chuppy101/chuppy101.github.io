import { ReactNode, useEffect, useMemo, useState } from "react";
import { localizedContent } from "@/data/localizedContent";
import { AppSettingsContext } from "@/context/AppSettingsContext";
import type { Language, ThemeMode } from "@/types/content";

const THEME_STORAGE_KEY = "alex-portfolio-theme";
const LANGUAGE_STORAGE_KEY = "alex-portfolio-language";

const isThemeMode = (value: string | null): value is ThemeMode => value === "dark" || value === "light";
const isLanguage = (value: string | null): value is Language => value === "ru" || value === "en";

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isThemeMode(storedTheme) ? storedTheme : "dark";
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "ru";
  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return isLanguage(storedLanguage) ? storedLanguage : "ru";
}

export function AppSettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language === "ru" ? "ru" : "en";
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      theme,
      language,
      setTheme,
      setLanguage,
      content: localizedContent[language],
    }),
    [language, theme],
  );

  return <AppSettingsContext.Provider value={value}>{children}</AppSettingsContext.Provider>;
}
