import type { ReactNode } from "react";
import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";
import { RetroWindow } from "@/components/window";
import { YearsOfExperience, YearsCount } from "@/components/years-of-experience";
import { yearsOfExperience } from "@/lib/experience";

export function About() {
  const now = portfolio.experience[0];

  // Build-time years count — the SSR / hydration fallback for the live client
  // components (<YearsOfExperience /> in the stat, <YearsCount /> in the prose),
  // which then keep the number current on each visitor's device without a rebuild.
  const buildYears = yearsOfExperience();

  const stats: { value: ReactNode; label: string }[] = [
    { value: <YearsOfExperience fallback={buildYears} />, label: "Years of experience" },
    ...portfolio.about.stats,
  ];

  const details: { label: string; value: string }[] = [
    { label: "name", value: portfolio.name },
    { label: "role", value: portfolio.role },
    { label: "based", value: portfolio.location },
    { label: "now", value: `${now.role} @ ${now.company}` },
  ];

  // Drops the live experience count wherever a paragraph contains "{years}".
  const withYears = (text: string): ReactNode =>
    text
      .split("{years}")
      .flatMap((part, i) =>
        i === 0 ? [part] : [<YearsCount key={i} fallback={buildYears} />, part],
      );

  return (
    <section id="about" className="container-page scroll-mt-20 py-14 sm:py-20">
      <Reveal>
        <RetroWindow dir="about" bodyClassName="p-6 sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">about me</h2>
              <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
                {portfolio.about.paragraphs.map((paragraph, i) => (
                  <p key={i} className={i === 0 ? "text-ink" : undefined}>
                    {withYears(paragraph)}
                  </p>
                ))}
              </div>

              <dl className="mt-8 grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border-[1.5px] border-line bg-window-2 p-4 shadow-[2px_2px_0_0_var(--line)]"
                  >
                    <dt className="font-display text-3xl font-bold text-orange">{stat.value}</dt>
                    <dd className="mt-1 font-mono text-[11px] leading-tight text-ink-soft">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Properties panel */}
            <aside className="h-fit rounded-xl border-[1.5px] border-line bg-window-2 p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-faint">details.txt</p>
              <div className="mt-4 h-px bg-line-soft" />
              <dl className="mt-4 space-y-3">
                {details.map((row) => (
                  <div key={row.label}>
                    <dt className="font-mono text-[11px] uppercase tracking-wide text-faint">{row.label}</dt>
                    <dd className="mt-0.5 text-sm">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </RetroWindow>
      </Reveal>
    </section>
  );
}
