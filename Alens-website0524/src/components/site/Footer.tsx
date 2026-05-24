import Link from "next/link";
import { siteContent } from "@/content/site-content";
import { BrandLogo } from "@/components/site/BrandLogo";

export function Footer() {
  return (
    <footer>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-lg border border-border bg-secondary p-2 shadow-card-warm sm:p-4 md:p-12 lg:p-16 lg:pb-0">
            <div className="rounded-t-lg border border-border bg-card px-4 py-12 text-center sm:px-8 md:px-16 md:py-24">
              <h2 className="mb-4 text-2xl font-semibold tracking-[-0.015em] text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
                {siteContent.footer.ctaTitle}
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-2xl">
                {siteContent.footer.ctaDescription}
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                {siteContent.footer.ctaLinks.map((link, index) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={
                      index === 0
                        ? "shadow-button-press inline-flex items-center justify-center gap-2 rounded-[20px] bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-[#ff9226]"
                        : "inline-flex items-center justify-center gap-2 rounded-[20px] border border-border bg-secondary px-6 py-3 font-medium text-foreground transition-colors hover:bg-card"
                    }
                  >
                    <DownloadIcon />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden bg-white px-6 py-16">
        <div className="pointer-events-none absolute -bottom-[104px] -left-10 right-0 flex w-[107%] justify-center -z-10">
          <svg
            width="88"
            height="88"
            viewBox="0 0 88 88"
            fill="none"
            className="text-primary"
          >
            <path
              d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349l-.011 41.34-47.318-6.678-.066-34.739z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-5">
            <div className="col-span-2 md:col-span-1">
              <BrandLogo />
              <p className="mt-4 text-sm text-muted-foreground">
                {siteContent.footer.note}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {siteContent.footer.copyright}
              </p>
            </div>

            {siteContent.footer.columns.map((column) => (
              <div key={column.title}>
                <h4 className="mb-4 text-sm font-semibold">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4">
              {siteContent.footer.socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.platform === "linkedin" ? <LinkedInIcon /> : null}
                  {link.platform === "x" ? <XIcon /> : null}
                  {link.platform === "youtube" ? <YouTubeIcon /> : null}
                </Link>
              ))}
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              {siteContent.footer.legalLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 12V2M8 12L4 8M8 12L12 8M2 14H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531-1.544 0-1.78 1.204-1.78 2.449v4.722H7.77V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54 3.001 0 3.556 1.974 3.556 4.545v5.238h-.013zM4.447 6.194a1.72 1.72 0 1 1 0-3.439 1.72 1.72 0 0 1 0 3.44zm.532 10.849h2.961V7.5h-2.96v9.543zM18.522 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.04c.815 0 1.482-.645 1.482-1.44V1.44c0-.795-.667-1.44-1.476-1.44z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M15.752 1.01h2.923L12.416 8.684 19.98 18.99h-5.305l-3.895-5.09-4.453 5.09H1.436l5.903-6.748L0 1.01h5.43l3.527 4.62L15.752 1.01zm-.886 16.078h1.34L5.633 2.29H4.24l10.626 14.798z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M19.58 5.14c.23.96.23 2.92.23 4.86s0 3.9-.23 4.86c-.14.96-.88 1.71-1.78 1.95-1.8.48-9.02.48-9.02.48s-7.22 0-9.02-.48c-.9-.24-1.64-.99-1.78-1.95C-.002 14.9-.002 12.94-.002 11S-.002 7.1.22 6.14c.14-.96.88-1.71 1.78-1.95C3.8 3.71 10.98 3.71 10.98 3.71s7.22 0 9.02.48c.9.24 1.64.99 1.78 1.95zM8.02 15.32V4.68L13.78 10l-5.76 5.32z" />
    </svg>
  );
}
