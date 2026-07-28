import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";
import { RetroWindow } from "@/components/window";

export function Experience() {
  return (
    <section id="experience" className="container-page scroll-mt-20 py-14 sm:py-20">
      <Reveal>
        <RetroWindow dir="experience" bodyClassName="p-6 sm:p-9">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">experience.log</h2>
          <p className="mt-1 font-mono text-sm text-ink-soft">where i&rsquo;ve worked</p>

          <ol className="mt-8 space-y-4">
            {portfolio.experience.map((item, i) => (
              <li
                key={`${item.company}-${i}`}
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
                    <h3 className="font-display text-lg font-bold tracking-tight">
                      {item.role} <span className="text-orange">@ {item.company}</span>
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">{item.description}</p>
                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded border-[1.5px] border-line-soft px-2 py-0.5 font-mono text-[10px] text-ink-soft"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
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
