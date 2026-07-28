"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/content/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

const sectionIds = portfolio.nav.map((item) => item.href.replace("#", ""));

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b-[1.5px] border-line bg-window/85 backdrop-blur transition-shadow",
          scrolled && "shadow-[0_3px_0_-1px_var(--line)]",
        )}
      >
        <div className="container-page flex h-14 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2.5" aria-label={`${portfolio.name} — home`}>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border-[1.5px] border-line bg-olive font-display text-sm font-semibold text-olive-fg shadow-[2px_2px_0_0_var(--line)]">
              {portfolio.initials}
            </span>
            <span className="hidden font-mono text-sm sm:block">{portfolio.name}</span>
          </a>

          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
            {portfolio.nav.map((item) => {
              const isActive = active === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-1.5 font-mono text-[13px] lowercase transition-colors",
                    isActive ? "bg-olive/20 text-ink" : "text-ink-soft hover:bg-olive/10 hover:text-ink",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <span aria-hidden className="hidden items-center gap-1.5 pr-1 sm:flex">
              <span className="h-2.5 w-2.5 rounded-full border border-line" style={{ background: "var(--red)" }} />
              <span className="h-2.5 w-2.5 rounded-full border border-line" style={{ background: "var(--yellow)" }} />
              <span className="h-2.5 w-2.5 rounded-full border border-line" style={{ background: "var(--olive)" }} />
            </span>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border-[1.5px] border-line bg-window text-ink shadow-[2px_2px_0_0_var(--line)] md:hidden"
            >
              <Icon name={menuOpen ? "close" : "menu"} size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-b-[1.5px] border-line bg-window/95 backdrop-blur transition-[max-height,opacity] duration-300 ease-out md:hidden",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="container-page flex flex-col py-3" aria-label="Mobile">
          {portfolio.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-3 font-mono text-base lowercase text-ink-soft transition-colors hover:bg-olive/10 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
