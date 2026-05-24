import { siteContent } from "@/content/site-content";
import { AvatarBadge } from "@/components/site/AvatarBadge";

export function RecordSection() {
  const { record } = siteContent.home;

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-20">
        <div className="hidden lg:grid lg:min-h-[596px] lg:grid-cols-2 lg:gap-6">
          <div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight lg:text-5xl">
              {record.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {record.description}
            </p>

            <div className="relative mt-8 max-w-3xl rounded-lg bg-[#f7f7f2] p-6">
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#0066f5]" />
              <blockquote className="mb-4 text-xl text-foreground">
                &ldquo;{record.quote.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <AvatarBadge
                  name={record.quote.name}
                  className="h-10 w-10 rounded-lg"
                />
                <div>
                  <div className="font-semibold">{record.quote.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {record.quote.role}, {record.quote.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="h-full rounded-lg border border-black/5 bg-[#f7f7f2] p-4">
              <div className="grid h-full grid-cols-3 gap-2">
                {record.items.slice(0, 3).map((platform) => (
                  <div
                    key={platform}
                    className="flex items-center justify-center rounded-lg border border-black/5 bg-white p-4"
                  >
                    <span className="text-center font-semibold text-muted-foreground">
                      {platform}
                    </span>
                  </div>
                ))}
                <div className="col-start-1 col-end-2 flex items-center justify-center rounded-lg border border-black/5 bg-white p-4">
                  <span className="text-center font-semibold text-muted-foreground">
                    {record.items[3]}
                  </span>
                </div>
                <div className="col-start-2 col-end-3 flex items-center justify-center rounded-lg border border-black/5 bg-white p-4">
                  <span className="text-center font-semibold text-muted-foreground">
                    {record.items[4]}
                  </span>
                </div>
                <div className="col-start-3" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
              {record.title}
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              {record.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {record.items.map((platform) => (
              <div key={platform} className="rounded-lg bg-muted px-4 py-2">
                <span className="text-sm font-medium">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
