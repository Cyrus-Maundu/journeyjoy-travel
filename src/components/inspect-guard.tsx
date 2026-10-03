import { useEffect } from "react";

/** Deterrent only: blocks right-click and common developer-tool shortcuts. */
export function InspectGuard() {
  useEffect(() => {
    if (import.meta.env.DEV) return;
    const onContext = (e: MouseEvent) => e.preventDefault();
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toUpperCase();
      const mod = e.ctrlKey || e.metaKey;
      if (k === "F12" || (mod && e.shiftKey && ["I", "J", "C"].includes(k)) || (mod && e.altKey && ["I", "J", "C"].includes(k)) || (mod && k === "U")) {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", onContext);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("contextmenu", onContext);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  return null;
}
