import { siteContent } from "@/content/site-content";

export function TakeactionSection() {
  const { takeaction } = siteContent.home;

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-20">
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
          <div className="shadow-card-warm relative rounded-lg border border-border bg-secondary p-6 md:p-8">
            <div className="rounded-lg border border-border bg-card p-5 md:p-6">
              <div className="mb-4 flex justify-end">
                <span className="text-sm font-medium text-primary">Action</span>
              </div>
              {takeaction.actionSections.map((section) => (
                <div key={section.title} className="mb-4 last:mb-0">
                  <h3 className="mb-2 text-lg font-semibold">{section.title}</h3>
                  <ul className="ml-4 list-outside list-disc text-sm text-muted-foreground">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="absolute top-1/2 right-4 flex -translate-y-1/2 flex-col gap-2 md:right-8">
              {takeaction.actionOptions.slice(0, 6).map((option) => (
                <div
                  key={option}
                  className="shadow-card-warm flex items-center gap-2 rounded-[12px] border border-border bg-card px-3 py-2"
                >
                  <div className="h-5 w-5 rounded bg-muted" />
                  <span className="text-sm font-medium">{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center lg:ml-12">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground lg:text-5xl">
              {takeaction.title}
            </h2>
            <p className="max-w-xl text-xl text-muted-foreground">
              {takeaction.description}
            </p>
          </div>
        </div>

        <div className="text-center lg:hidden">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            {takeaction.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
            {takeaction.description}
          </p>
        </div>
      </div>
    </section>
  );
}