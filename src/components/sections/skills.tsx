import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";
import { RetroWindow } from "@/components/window";
import { AppTile } from "@/components/app-tile";
import { hueFrom, monogram } from "@/lib/cover";

export function Skills() {
  return (
    <section id="skills" className="container-page scroll-mt-20 py-14 sm:py-20">
      <Reveal>
        <RetroWindow dir="tools" bodyClassName="p-0">
          {/* Orange accent strip, like the reference window */}
          <div className="h-2.5 border-b-[1.5px] border-line bg-orange" />

          <div className="p-6 sm:p-9">
            <h2 className="text-center font-display text-3xl font-bold tracking-[0.22em] sm:text-4xl">
              TOOLS
            </h2>

            <div className="mt-9 space-y-9">
              {portfolio.skills.map((group) => (
                <div key={group.title}>
                  <p className="eyebrow text-center sm:text-left">{group.title}</p>
                  <div className="mt-4 grid grid-cols-3 justify-items-center gap-x-4 gap-y-6 sm:grid-cols-4 md:grid-cols-6">
                    {group.items.map((item) => (
                      <AppTile
                        key={item}
                        label={item}
                        color={`hsl(${hueFrom(item)} 55% 52%)`}
                        fg="#ffffff"
                        tileClassName="h-14 w-14 rounded-2xl"
                      >
                        <span className="font-display text-xl font-bold">{monogram(item)}</span>
                      </AppTile>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RetroWindow>
      </Reveal>
    </section>
  );
}
