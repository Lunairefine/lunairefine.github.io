import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FarcasterProvider from "@/app/components/farcasterprovider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lunairefine",
  description: "I am HeavenlyDemon",
  metadataBase: new URL('https://lunairefine.vercel.app'),
  openGraph: {
    title: "lunairefine@server:~",
    description: "I am HeavenlyDemon",
    url: "https://lunairefine.vercel.app",
    siteName: "Lunairefine",
    images: [
      {
        url: "/media/images/frame.png",
        width: 1200,
        height: 630,
        alt: "Lunairefine OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Lunairefine",
    description: "I am HeavenlyDemon",
    card: "summary_large_image",
    images: ["/media/images/frame.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FarcasterProvider>
        {children}
        </FarcasterProvider>
      </body>
    </html>
  );
}
