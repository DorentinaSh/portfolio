import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";
import { RetroWindow } from "@/components/window";

export function Education() {
  if (portfolio.education.length === 0) return null;

  return (
    <section id="education" className="container-page scroll-mt-20 py-14 sm:py-20">
      <Reveal>
        <RetroWindow dir="education" bodyClassName="p-6 sm:p-9">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">education.log</h2>
          <p className="mt-1 font-mono text-sm text-ink-soft">where i studied</p>

          <ol className="mt-8 space-y-4">
            {portfolio.education.map((item, i) => (
              <li
                key={`${item.school}-${i}`}
                className="rounded-xl border-[1.5px] border-line bg-window-2 p-5 shadow-[2px_2px_0_0_var(--line)]"
              >
                <div className="grid gap-4 md:grid-cols-[190px_1fr] md:gap-6">
                  <div>
                    <span className="inline-block rounded-md border-[1.5px] border-line bg-window px-2 py-0.5 font-mono text-xs">
                      {item.period}
                    </span>
                    {item.location && (
                      <p className="mt-2 font-mono text-[11px] text-faint">{item.location}</p>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight">{item.degree}</h3>
                    <p className="mt-1 text-ink-soft">{item.school}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </RetroWindow>
      </Reveal>
    </section>
  );
}
