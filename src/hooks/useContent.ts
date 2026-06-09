import { useAppSettings } from "@/hooks/useAppSettings";

export function useContent() {
  return useAppSettings().content;
}
