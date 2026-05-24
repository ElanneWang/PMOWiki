"use client";

import Link from "next/link";
import { useState } from "react";
import { siteContent } from "@/content/site-content";

export function BlogList() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPosts =
    activeFilter === "all"
      ? siteContent.blog.posts
      : siteContent.blog.posts.filter((post) => post.type === activeFilter);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-20">
        <div className="mb-12">
          <h1 className="mb-8 text-4xl font-semibold tracking-tight lg:text-5xl">
            {siteContent.blog.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {siteContent.blog.filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === filter.value
                    ? "bg-foreground text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface BlogCardProps {
  post: (typeof siteContent.blog.posts)[number];
}

function BlogCard({ post }: BlogCardProps) {
  const content = (
    <div className="group">
      <div className="mb-4 aspect-[16/9] overflow-hidden rounded-xl bg-muted">
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-muted">
          <span className="text-4xl font-semibold opacity-60">
            {getBadge(post.type)}
          </span>
        </div>
      </div>

      <div className="mb-3 flex items-center gap-1">
        {post.authors.map((author) => (
          <span
            key={author}
            className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-medium"
          >
            {author[0]}
          </span>
        ))}
        <span className="ml-2 text-sm text-muted-foreground">{post.date}</span>
        {post.isExternal ? (
          <span className="ml-2 rounded bg-muted px-2 py-0.5 text-xs">
            External
          </span>
        ) : null}
      </div>

      <h2 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
        {post.title}
      </h2>
      <p className="line-clamp-2 text-sm text-muted-foreground">
        {post.excerpt}
      </p>
    </div>
  );

  if (post.isExternal) {
    return (
      <a
        href={post.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return <Link href={post.href}>{content}</Link>;
}

function getBadge(type: string): string {
  switch (type) {
    case "updates":
      return "U";
    case "press":
      return "P";
    default:
      return "B";
  }
}
