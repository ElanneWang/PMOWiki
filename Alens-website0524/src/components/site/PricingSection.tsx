import Link from "next/link";
import { siteContent } from "@/content/site-content";
import { AvatarBadge } from "@/components/site/AvatarBadge";

export function PricingSection() {
  const { pricing } = siteContent;

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-20">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight lg:text-6xl">
            {pricing.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {pricing.description}
          </p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 ${
                plan.highlighted
                  ? "bg-foreground text-white"
                  : "border border-black/5 bg-muted/50"
              }`}
            >
              <div className="mb-6">
                <h2 className="mb-2 text-xl font-semibold">{plan.name}</h2>
                <p
                  className={`text-sm ${
                    plan.highlighted ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {" "}
                  {plan.period}
                </span>
              </div>

              <Link
                href={plan.cta.href}
                className={`mb-6 block w-full rounded-lg py-3 text-center font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-primary text-black hover:opacity-90"
                }`}
              >
                {plan.cta.label}
              </Link>

              {plan.secondaryCta ? (
                <Link
                  href={plan.secondaryCta.href}
                  className={`mb-6 block w-full rounded-lg border py-3 text-center font-medium transition-colors ${
                    plan.highlighted
                      ? "border-white/20 text-white hover:bg-white/10"
                      : "border-black/10 hover:bg-muted"
                  }`}
                >
                  {plan.secondaryCta.label}
                </Link>
              ) : null}

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 text-sm ${
                      plan.highlighted ? "text-white/90" : "text-foreground"
                    }`}
                  >
                    <CheckIcon className="text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-16 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <span className="font-semibold">{pricing.notePrefix}</span>
          <span>{pricing.noteText}</span>
          <Link href={pricing.noteLink.href} className="font-medium text-primary">
            {pricing.noteLink.label}
          </Link>
          <span>.</span>
        </div>

        <div className="mx-auto mb-16 max-w-2xl rounded-2xl bg-muted/30 p-8 text-center">
          <blockquote className="mb-6 text-lg">
            {pricing.testimonial.quote}
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <AvatarBadge
              name={pricing.testimonial.person.name}
              className="h-12 w-12"
            />
            <div className="text-left">
              <div className="font-semibold">
                {pricing.testimonial.person.name}
              </div>
              <div className="text-sm text-muted-foreground">
                {pricing.testimonial.person.role}, {pricing.testimonial.person.company}
              </div>
            </div>
          </div>
          <Link
            href={pricing.testimonial.href}
            className="mt-4 inline-block text-sm font-medium text-primary"
          >
            {pricing.testimonial.hrefLabel}
          </Link>
        </div>

        <div className="text-center">
          <h2 className="mb-8 text-2xl font-semibold">
            {pricing.resourcesTitle}
          </h2>
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-3">
            {pricing.resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="rounded-xl border border-black/5 bg-muted/50 p-6 transition-colors hover:bg-muted"
              >
                <h3 className="mb-1 font-semibold">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M13.5 4.5L6 12L2.5 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
