import { siteContent } from "@/content/site-content";

export function HowItWorksSection() {
  const { howItWorks } = siteContent.home;
  const titleWithoutBrand = howItWorks.title.replace(/^ALens\s*/, "");

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-20">
        <div className="mb-16 text-center">
          <h2 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-3xl font-semibold tracking-tight lg:text-5xl">
            <img
              src="/images/alens-wordmark.svg"
              alt="ALens"
              className="h-[1.08em] shrink-0 translate-y-[0.03em]"
            />
            <span>{titleWithoutBrand}</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {howItWorks.steps.map((step) => (
            <div key={step.index} className="rounded-2xl bg-muted/50 p-6 lg:p-8">
              <div className="mb-4 text-sm font-medium text-primary">
                {step.index}
              </div>
              <div className="mb-4 overflow-hidden rounded-xl border border-black/5 bg-white">
                <div className="border-b border-black/5 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {step.windowTitle}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {step.windowLabel}
                  </div>
                </div>
                <div className="space-y-3 p-4">
                  {step.platforms ? (
                    <div className="flex flex-wrap gap-3">
                      {step.platforms.map((platform) => (
                        <div
                          key={platform}
                          className="rounded-md bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground"
                        >
                          {platform}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <div className="h-2 w-full rounded bg-muted" />
                      <div className="h-2 w-4/5 rounded bg-muted" />
                      <div className="h-2 w-3/5 rounded bg-muted" />
                      {step.summaryTitle ? (
                        <>
                          <div className="h-px bg-muted" />
                          <div className="text-xs font-medium text-primary">
                            {step.summaryTitle}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {step.summaryDescription}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {step.helperText}
                          </div>
                        </>
                      ) : null}
                    </>
                  )}
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
