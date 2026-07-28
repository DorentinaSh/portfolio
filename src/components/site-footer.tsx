import { portfolio } from "@/content/portfolio";
import { Icon } from "@/components/icons";
import { Clock } from "@/components/clock";
import { CurrentYear } from "@/components/current-year";
import { socialStyle } from "@/lib/social";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container-page flex flex-col gap-2 py-8 font-mono text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p>
          © <CurrentYear fallback={year} /> {portfolio.name} — all rights reserved
        </p>
        <p>designed &amp; built with Next.js + Tailwind CSS</p>
      </div>

      {/* Taskbar */}
      <div className="taskbar">
        <div className="container-page flex h-14 items-center justify-between gap-3">
          <a
            href="#top"
            className="btn btn-primary h-9 gap-2 px-3 py-0 text-sm"
            aria-label={`${portfolio.name} — back to top`}
          >
            <span className="grid h-4 w-4 grid-cols-2 grid-rows-2 gap-px" aria-hidden>
              <span className="bg-white/90" />
              <span className="bg-white/90" />
              <span className="bg-white/90" />
              <span className="bg-white/90" />
            </span>
            <span className="hidden sm:inline">{portfolio.name.split(" ")[0]}</span>
          </a>

          <div className="flex items-center gap-1.5">
            {portfolio.socials.map((social) => {
              const { bg, fg } = socialStyle(social.icon);
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="app-tile h-9 w-9 rounded-lg"
                  style={{ backgroundColor: bg, color: fg }}
                >
                  <Icon name={social.icon} size={17} />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2 rounded-md border-[1.5px] border-line bg-window px-3 py-1 text-ink shadow-[inset_2px_2px_0_-1px_var(--line-soft)]">
            <span className="hidden font-mono text-xs text-ink-soft sm:inline">{portfolio.location}</span>
            <Clock className="font-mono text-sm tabular-nums" />
          </div>
        </div>
      </div>
    </footer>
  );
}
