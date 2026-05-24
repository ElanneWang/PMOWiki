import { siteContent } from "@/content/site-content";
import { AvatarBadge } from "@/components/site/AvatarBadge";

export function TestimonialsSection() {
  const { testimonials } = siteContent.home;

  return (
    <section id="case-studies" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight lg:text-5xl">
            {testimonials.title}
          </h2>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {testimonials.featured.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="reveal-item shadow-card-warm rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-0.5"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <blockquote className="mb-6 text-lg">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <AvatarBadge
                  name={testimonial.name}
                  className="h-12 w-12"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8 text-center">
          <h3 className="text-xl font-semibold">{testimonials.socialHeading}</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.social.map((tweet, index) => (
            <div
              key={tweet.handle}
              className="reveal-item shadow-card-warm rounded-2xl border border-border bg-card p-5"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <AvatarBadge name={tweet.name} className="h-10 w-10" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold">{tweet.name}</span>
                    <VerifiedIcon />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    @{tweet.handle}
                  </div>
                </div>
              </div>
              <p className="mb-3 text-sm">{tweet.text}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{tweet.date}</span>
                <div className="flex items-center gap-1">
                  <HeartIcon />
                  <span>{tweet.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VerifiedIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor"
      className="text-primary"
    >
      <path d="M7 0C3.13 0 0 3.13 0 7C0 10.87 3.13 14 7 14C10.87 14 14 10.87 14 7C14 3.13 10.87 0 7 0ZM6 10.5L3 7.5L4.06 6.44L6 8.38L9.94 4.44L11 5.5L6 10.5Z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className="text-muted-foreground"
    >
      <path
        d="M6 10.5C6 10.5 1.5 7.5 1.5 4C1.5 2.5 2.5 1.5 4 1.5C5 1.5 5.5 2 6 2.5C6.5 2 7 1.5 8 1.5C9.5 1.5 10.5 2.5 10.5 4C10.5 7.5 6 10.5 6 10.5Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
