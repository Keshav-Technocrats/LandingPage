import "./globals.css";
import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import { jsonLd, SITE } from "./seo";


const title = "Keshav Technocrats | Mobile App Development & IT Consulting";
const description = "Keshav Technocrats builds Android and iOS apps, AI-powered features and cloud backends, and provides IT consulting to help businesses launch smarter and grow faster.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.endsWith("/") ? SITE : SITE + "/"),
  title: { default: title, template: "%s | Keshav Technocrats" },
  description,
  keywords: ["mobile app development", "Android app development", "iOS app development", "AI solutions", "cloud backend", "IT consulting", "Keshav Technocrats"],
  alternates: { canonical: "./" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", url: SITE, siteName: "Keshav Technocrats", title, description, images: [{ url: "og-image.png", width: 1200, height: 630, alt: "Keshav Technocrats" }] },
  twitter: { card: "summary_large_image", title, description, images: ["og-image.png"] },
};

export const viewport: Viewport = {
  width: "device-width", initialScale: 1, viewportFit: "cover",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0a0e17" }, { media: "(prefers-color-scheme: light)", color: "#f7f8fb" }],
};

const themeInit = "try{var t=localStorage.getItem('kt-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
