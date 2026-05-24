"use client";

import { useState } from "react";
import { siteContent } from "@/content/site-content";

export function TabbedSection() {
  const { templates } = siteContent.home;
  const [activeTab, setActiveTab] = useState(templates.defaultTab);
  const content =
    templates.tabs.find((tab) => tab.label === activeTab) ?? templates.tabs[0];

  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight lg:text-5xl">
            {templates.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {templates.description}
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {templates.tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              style={{ transitionDelay: `${index * 45}ms` }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeTab === tab.label
                  ? "bg-foreground text-white"
                  : "bg-white text-muted-foreground hover:bg-white/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl border border-black/5 bg-white p-6 lg:p-8">
          <div className="mb-6">
            <h3 className="mb-1 text-xl font-semibold">{content.title}</h3>
            <p className="text-sm text-muted-foreground">{content.subtitle}</p>
          </div>

          <div className="space-y-4">
            {content.sections.map((section, index) => (
              <div
                key={section.title}
                className="reveal-item rounded-xl bg-muted/50 p-4"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <h4 className="mb-1 text-sm font-semibold text-foreground">
                  {section.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
