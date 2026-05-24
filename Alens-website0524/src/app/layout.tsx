import type { Metadata } from "next";
import { siteContent } from "@/content/site-content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteContent.seo.title,
    template: `%s | ${siteContent.brand.name}`,
  },
  description: siteContent.seo.description,
  applicationName: siteContent.brand.name,
  keywords: siteContent.seo.keywords,
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    siteName: siteContent.brand.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteContent.brand.language} className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}