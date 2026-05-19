import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const tanPearl = localFont({
  src: "../public/fonts/tan-pearl-regular.otf",
  variable: "--font-serif",
  display: "swap",
});

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The 100 — Babcock University",
  description:
    "Recognizing and celebrating the 100 most impactful students at Babcock University. Nominate a student making a difference.",
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        tanPearl.variable,
        googleSansFlex.variable,
        "h-full antialiased",
      )}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
