import { useState } from "react";

export function useCopyToClipboard(timeout = 1600) {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), timeout);
      return true;
    } catch {
      setCopied(false);
      return false;
    }
  };

  return { copied, copy };
}
