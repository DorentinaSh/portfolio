import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";
import { RetroWindow } from "@/components/window";
import { AppTile } from "@/components/app-tile";
import { Icon } from "@/components/icons";
import { CopyEmail } from "@/components/copy-email";
import { socialStyle } from "@/lib/social";

export function Contact() {
  return (
    <section id="contact" className="container-page scroll-mt-20 py-14 sm:py-24">
      <Reveal>
        <RetroWindow dir="contact" bodyClassName="p-8 sm:p-12">
          <div className="mx-auto max-w-xl text-center">
            <span className="eyebrow">new message</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              let&rsquo;s connect
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Have a project in mind, a role to fill, or just want to say hi? My inbox is always
              open — I&rsquo;ll do my best to get back to you.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${portfolio.email}`} className="btn btn-primary">
                <Icon name="mail" size={16} />
                {portfolio.email}
              </a>
              <CopyEmail email={portfolio.email} />
            </div>

            <div className="mt-12">
              <p className="font-mono text-xs uppercase tracking-widest text-faint">find me online</p>
              <div className="mt-5 flex flex-wrap justify-center gap-5">
                {portfolio.socials.map((social) => {
                  const { bg, fg } = socialStyle(social.icon);
                  return (
                    <AppTile
                      key={social.label}
                      href={social.href}
                      external={social.href.startsWith("http")}
                      label={social.label}
                      color={bg}
                      fg={fg}
                      tileClassName="h-14 w-14 rounded-2xl"
                    >
                      <Icon name={social.icon} size={24} />
                    </AppTile>
                  );
                })}
              </div>
            </div>
          </div>
        </RetroWindow>
      </Reveal>
    </section>
  );
}
