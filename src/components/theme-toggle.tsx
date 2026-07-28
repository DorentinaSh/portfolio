"use client";

import { useSyncExternalStore } from "react";
import { Icon } from "@/components/icons";

type Theme = "light" | "dark";

// Read the theme straight from the DOM attribute the inline script manages, and
// re-render whenever any toggle dispatches a "themechange" event.
function subscribe(callback: () => void) {
  window.addEventListener("themechange", callback);
  return () => window.removeEventListener("themechange", callback);
}
function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}
function getServerSnapshot(): Theme | null {
  return null; // unknown during SSR — render a neutral placeholder
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore private-mode storage errors */
    }
    window.dispatchEvent(new Event("themechange"));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border-[1.5px] border-line bg-window text-ink shadow-[2px_2px_0_0_var(--line)] transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {theme === null ? (
        <span className="h-[18px] w-[18px]" />
      ) : theme === "dark" ? (
        <Icon name="sun" size={18} />
      ) : (
        <Icon name="moon" size={18} />
      )}
    </button>
  );
}
