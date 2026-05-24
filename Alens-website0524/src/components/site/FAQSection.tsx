"use client";

import { useState } from "react";
import { siteContent } from "@/content/site-content";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-20">
        <h2 className="mb-12 text-center text-3xl font-semibold">
          {siteContent.faq.title}
        </h2>

        <div className="space-y-4">
          {siteContent.faq.items.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-xl border border-black/5 bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left font-medium"
              >
                <span>{faq.question}</span>
                <PlusMinusIcon isOpen={openIndex === index} />
              </button>
              {openIndex === index ? (
                <div className="px-5 pb-5 text-muted-foreground">
                  {faq.answer}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlusMinusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="flex-shrink-0 text-muted-foreground"
    >
      {isOpen ? (
        <path
          d="M5 10H15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M10 5V15M5 10H15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
