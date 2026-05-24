"use client";

import Link from "next/link";
import { useState } from "react";
import { siteContent } from "@/content/site-content";
import { BrandLogo } from "@/components/site/BrandLogo";

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 lg:px-20">
        <Link href="/" className="flex items-center gap-2">
          <BrandLogo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {siteContent.navigation.items.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.hasDropdown ? setActiveDropdown(item.label) : undefined
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.hasDropdown ? (
                <button className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary">
                  {item.label}
                  <ChevronDownIcon />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              )}

              {item.hasDropdown && activeDropdown === item.label ? (
                <div className="absolute top-full left-0 pt-2">
                  <div className="shadow-card-warm w-80 rounded-xl border border-border bg-card p-4">
                    {siteContent.navigation.productMenu.map((product) => (
                      <Link
                        key={product.title}
                        href={product.href}
                        className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-secondary"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-foreground">
                          {product.badge}
                        </span>
                        <div>
                          <div className="font-medium text-sm text-foreground">
                            {product.title}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {product.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <button
          className="p-2 md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="absolute top-16 left-0 right-0 border-b border-border bg-card p-4 md:hidden">
          {siteContent.navigation.items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-3 text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className="text-muted-foreground"
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
