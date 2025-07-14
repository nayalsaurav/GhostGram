import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "GhostGram",
  description:
    "Step into the world of anonymous messaging with GhostGram. Speak freely, stay private.",
  openGraph: {
    title: "GhostGram",
    description:
      "Step into the world of anonymous messaging with GhostGram. Speak freely, stay private.",
    url: "https://ghostgram.app", // change to your real domain
    siteName: "GhostGram",
    images: [
      {
        url: "/og-image.png", // add this image to your public folder
        width: 1200,
        height: 630,
        alt: "GhostGram - Anonymous Messaging",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GhostGram",
    description: "Step into the world of anonymous messaging with GhostGram.",
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
