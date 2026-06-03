import type { Metadata } from "next";
import { Bricolage_Grotesque, Google_Sans_Flex } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Babcock 100",
  description:
    "Babcock 100 is an annual, cross-campus recognition platform that identifies and permanently documents 100 students shaping Babcock University. Nominations close June 20, 2026.",
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
        bricolageGrotesque.variable,
        googleSansFlex.variable,
        "h-full antialiased",
      )}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
