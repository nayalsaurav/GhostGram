import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers";
import { Toaster } from "@/components/ui/sonner";

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
    default: "GhostGram",
    template: "%s | GhostGram",
  },
  description:
    "Send and receive anonymous messages with GhostGram. Share your unique link and get honest feedback.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "GhostGram - Anonymous Messaging Platform",
    description:
      "Send and receive anonymous messages. Share your link, get honest feedback, and stay completely private.",
    url: siteUrl,
    siteName: "GhostGram",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GhostGram - Anonymous Messaging Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GhostGram",
    description: "Send and receive anonymous messages with GhostGram.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Providers>
          <main className="min-h-screen flex justify-center items-center ">
            {children}
            <Toaster />
          </main>
        </Providers>
      </body>
    </html>
  );
}
