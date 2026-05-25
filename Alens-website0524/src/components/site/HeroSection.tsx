import Link from "next/link";
import { siteContent } from "@/content/site-content";
import { RotatingPhrase } from "@/components/site/RotatingPhrase";

export function HeroSection() {
  const { hero } = siteContent.home;

  return (
    <section className="pb-16 pt-32 lg:pb-24 lg:pt-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-20">
        <div className="mb-8 flex justify-center">
          <Link
            href={hero.announcement.href}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 shadow-card-warm transition-colors hover:bg-accent"
          >
            <span className="text-sm font-medium">
              {hero.announcement.label}
            </span>
            <span className="font-medium text-foreground underline">
              {hero.announcement.ctaLabel}
            </span>
          </Link>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-center text-4xl font-semibold leading-tight tracking-tight text-foreground lg:text-7xl">
            让团队专注创造<br /><span className="pl-[0.25em]">让 AI <RotatingPhrase /></span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground lg:text-xl">
            {hero.description}
          </p>

          <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={hero.primaryCta.href}
              className="shadow-button-press inline-flex min-w-[220px] items-center justify-center gap-3 rounded-[20px] bg-[#ff8a13] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-[#ff9226] sm:min-w-[264px]"
            >
              <span>{hero.primaryCta.label}</span>
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-secondary/60 p-8 lg:p-12">
              <DemoNote />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoNote() {
  const demo = siteContent.home.hero.demo;

  return (
    <div className="shadow-card-warm mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border bg-secondary px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-sm font-medium text-foreground">
            {demo.meetingLabel}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          {demo.statPills.map((pill, index) => (
            <span
              key={pill}
              className={
                index === 0
                  ? "rounded-full bg-[#fff0c0] px-2 py-0.5 font-medium text-[#64411e]"
                  : "rounded-full bg-muted px-2 py-0.5 text-muted-foreground"
              }
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 divide-black/5 md:grid-cols-2 md:divide-x">
        <div className="p-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {demo.rawNotesLabel}
            </span>
          </div>
          <div className="space-y-2 text-sm text-foreground">
            {demo.rawNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>

        <div className="hero-demo-panel bg-accent p-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-primary">
              {demo.enhancedLabel}
            </span>
          </div>
          <div className="space-y-3">
            {demo.enhancedSections.map((section) => (
              <div key={section.title} className="hero-demo-item">
                <h4 className="mb-0.5 text-sm font-semibold text-foreground">
                  {section.title}
                </h4>
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
