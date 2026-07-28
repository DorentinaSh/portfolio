import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";
import { RetroWindow } from "@/components/window";
import { DesktopIcon, Folder } from "@/components/desktop-icon";
import { AppTile } from "@/components/app-tile";
import { Icon } from "@/components/icons";
import { socialStyle } from "@/lib/social";

function ProfileTile() {
  return (
    <span className="app-tile h-14 w-14 rounded-2xl bg-olive font-display text-xl font-semibold text-olive-fg">
      {portfolio.initials}
    </span>
  );
}

export function Hero() {
  const resume = portfolio.resumeUrl ?? "#contact";

  return (
    <section id="top" className="relative pb-6 pt-24 sm:pt-28">
      <div className="container-page">
        <Reveal>
          <p aria-hidden className="wordmark text-center text-6xl sm:text-7xl md:text-[7rem]">
            PORTFOLIO
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-6">
          {/* Left desktop icons (large screens) */}
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-8">
            <DesktopIcon label="profile" href="#about">
              <ProfileTile />
            </DesktopIcon>
            <DesktopIcon label="contact" href="#contact">
              <Folder />
            </DesktopIcon>
            <DesktopIcon label="experience" href="#experience">
              <Folder />
            </DesktopIcon>
          </div>

          {/* Profile window */}
          <Reveal delay={80}>
            <RetroWindow dir="profile" className="mx-auto max-w-2xl" bodyClassName="p-6 sm:p-9">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
                <div
                  className="relative grid h-32 w-32 shrink-0 place-items-center overflow-hidden rounded-full border-[1.5px] border-line shadow-[3px_3px_0_0_var(--line)]"
                  style={{
                    backgroundImage:
                      "radial-gradient(120% 120% at 30% 20%, var(--orange), transparent 62%), radial-gradient(120% 120% at 80% 95%, var(--olive), transparent 60%)",
                  }}
                >
                  <span className="font-display text-4xl font-semibold text-white/90">
                    {portfolio.initials}
                  </span>
                </div>

                <div className="text-center sm:text-left">
                  <p className="font-mono text-sm text-ink-soft">hi! i&rsquo;m</p>
                  <h1 className="font-display text-4xl font-bold leading-[1.05] text-orange sm:text-5xl">
                    {portfolio.name}
                  </h1>
                  <p className="eyebrow mt-2">I&rsquo;m a {portfolio.role}</p>
                  <p className="mt-3 max-w-sm font-mono text-sm italic leading-relaxed text-ink-soft">
                    &ldquo;{portfolio.headline}&rdquo;
                  </p>
                </div>
              </div>
            </RetroWindow>
          </Reveal>

          {/* Right desktop icons (large screens) */}
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-8">
            <DesktopIcon label="education" href="#education">
              <Folder />
            </DesktopIcon>
            <DesktopIcon label="resume" href={resume} external={resume.startsWith("/") || resume.startsWith("http")}>
              <Folder />
            </DesktopIcon>
          </div>
        </div>

        {/* Folder row (small + medium screens) */}
        <div className="mt-9 flex flex-wrap items-start justify-center gap-7 lg:hidden">
          <DesktopIcon label="profile" href="#about">
            <ProfileTile />
          </DesktopIcon>
          <DesktopIcon label="contact" href="#contact">
            <Folder />
          </DesktopIcon>
          <DesktopIcon label="experience" href="#experience">
            <Folder />
          </DesktopIcon>
          <DesktopIcon label="education" href="#education">
            <Folder />
          </DesktopIcon>
          <DesktopIcon label="resume" href={resume} external>
            <Folder />
          </DesktopIcon>
        </div>
      </div>

      {/* Social taskbar band */}
      <div className="taskbar mt-10">
        <div className="container-page flex h-[68px] items-center justify-center gap-3 sm:gap-4">
          {portfolio.socials.map((social) => {
            const { bg, fg } = socialStyle(social.icon);
            return (
              <AppTile
                key={social.label}
                href={social.href}
                external={social.href.startsWith("http")}
                ariaLabel={social.label}
                color={bg}
                fg={fg}
                tileClassName="h-11 w-11 rounded-xl"
              >
                <Icon name={social.icon} size={20} />
              </AppTile>
            );
          })}
        </div>
      </div>
    </section>
  );
}
