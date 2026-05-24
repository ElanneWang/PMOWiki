import { siteContent } from "@/content/site-content";
import { AvatarBadge } from "@/components/site/AvatarBadge";

export function CalendarSection() {
  const { calendar } = siteContent.home;

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-20">
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
          <div className="order-1 lg:mr-12">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              {calendar.title}
            </h2>
            <p className="mb-12 max-w-xl text-xl text-muted-foreground">
              {calendar.description}
            </p>

            <div className="shadow-card-warm relative max-w-xl rounded-lg border border-border bg-secondary p-6">
              <div className="absolute top-0 bottom-0 left-0 w-1 rounded-l-lg bg-primary" />
              <blockquote className="mb-4 text-xl text-foreground">
                &ldquo;{calendar.quote.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <AvatarBadge
                  name={calendar.quote.name}
                  className="h-10 w-10 rounded-lg"
                />
                <div>
                  <div className="font-semibold">{calendar.quote.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {calendar.quote.role}, {calendar.quote.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-card-warm relative order-2 rounded-lg border border-border bg-secondary p-6">
            <div className="absolute right-4 bottom-6 left-4 rounded-lg border border-border bg-card p-4">
              <div className="mb-2 text-xs text-muted-foreground">
                {calendar.contextTitle}
              </div>
              <div className="text-sm text-muted-foreground">
                {calendar.contextItems.join(" · ")}
              </div>
              <div className="mt-3 inline-block rounded bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                {calendar.contextCtaLabel}
              </div>
            </div>

            <div className="absolute right-0 bottom-32 left-0 flex flex-col gap-3">
              <div className="flex gap-3 overflow-hidden">
                <div className="flex gap-3 animate-marquee">
                  {[...calendar.actionItems.slice(0, 4), ...calendar.actionItems.slice(0, 4)].map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="shadow-card-warm whitespace-nowrap rounded-[12px] border border-border bg-card px-4 py-2 text-sm font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 overflow-hidden">
                <div className="flex gap-3 animate-marquee-reverse">
                  {[...calendar.actionItems.slice(4, 8), ...calendar.actionItems.slice(4, 8)].map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="shadow-card-warm whitespace-nowrap rounded-[12px] border border-border bg-card px-4 py-2 text-sm font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 overflow-hidden">
                <div className="flex gap-3 animate-marquee">
                  {[...calendar.actionItems.slice(8), ...calendar.actionItems.slice(8)].map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="shadow-card-warm whitespace-nowrap rounded-[12px] border border-border bg-card px-4 py-2 text-sm font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center lg:hidden">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            {calendar.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
            {calendar.description}
          </p>
        </div>
      </div>
    </section>
  );
}
