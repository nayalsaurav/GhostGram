import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "../providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ghostgram.nayalsaurav.in";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GhostGram - Anonymous Q&A Platform for Creators",
    template: "%s | GhostGram",
  },
  description:
    "GhostGram is an anonymous Q&A platform where creators receive questions from their audience. Get your unique link, share it publicly, and collect honest feedback anonymously.",
  keywords: [
    "anonymous questions",
    "anonymous Q&A",
    "ask me anything",
    "AMA platform",
    "creator feedback",
    "audience questions",
    "question box",
    "ghostgram",
    "anonymous messaging",
    "creator tools",
    "honest feedback",
    "content creator",
  ],
  authors: [{ name: "GhostGram", url: siteUrl }],
  creator: "GhostGram",
  publisher: "GhostGram",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "GhostGram - Anonymous Q&A Platform for Creators",
    description:
      "Get your unique link and receive anonymous questions from your audience. Perfect for AMAs, honest feedback, and building authentic connections.",
    url: siteUrl,
    siteName: "GhostGram",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GhostGram - Anonymous Q&A Platform for Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GhostGram - Anonymous Q&A Platform for Creators",
    description:
      "Get your unique link and receive anonymous questions from your audience. Perfect for AMAs and honest feedback.",
    images: ["/og-image.png"],
    creator: "@ghostgram",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/witch.png", type: "image/png" },
    ],
    apple: [{ url: "/witch.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <Providers>
          <Navbar />
          <main className="min-h-[85vh] max-w-6xl mx-auto ">{children}</main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
