"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PAGES } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="bg-[#fdfbf7] min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative pt-5 pb-0">
      {/* Subtitle pill */}
      <div className="flex items-center gap-3 mb-10">
        <span className="w-8 h-px bg-gray-300" />
        <span className="text-xs font-medium text-gray-500 uppercase tracking-[0.2em] bg-white border border-gray-200 rounded-full px-5 py-2">
          Babcock 100 • Founding Class
        </span>
        <span className="w-8 h-px bg-gray-300" />
      </div>

      {/* Main heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-brand-navy leading-tight mb-10 font-extrabold text-center max-w-7xl">
        The first 100 students{" "}
        <span className="text-brand-amber italic font-bold relative inline-block">
          shaping
          {/* Hand-drawn underline */}
          <svg
            className="absolute -bottom-1 left-0 w-full"
            viewBox="0 0 200 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M2 8C30 3 60 2 100 6C140 10 170 5 198 4"
              stroke="#f9ab00"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </span>
        <br />
        Babcock University.
      </h1>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Button
          asChild
          className="rounded-2xl bg-brand-navy text-white hover:bg-brand-navy/90 h-12 px-8 text-base font-medium"
        >
          <Link href={PAGES.nominate}>Open Nominations</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="rounded-2xl border-gray-300 text-brand-navy hover:bg-gray-50 h-12 px-8 text-base font-medium"
        >
          <Link href={PAGES.methodology}>View Methodology &gt;</Link>
        </Button>
      </div>

      {/* Giant "Babcock 100" text at bottom */}
      <div className="absolute bottom-0 left-0 right-0 select-none pointer-events-none overflow-hidden flex justify-center">
        <div
          className="font-serif text-brand-navy font-extrabold leading-[0.85] tracking-tight whitespace-nowrap translate-y-[25%] text-center"
          style={{ fontSize: "16vw" }}
        >
          Babcock 100
        </div>
      </div>

      {/* Scroll to explore indicator */}
      <div className="absolute right-6 bottom-8 hidden lg:flex flex-col items-center gap-2">
        <span
          className="text-brand-amber text-xs font-semibold uppercase tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll to explore
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-brand-amber"
        >
          <path
            d="M6 0L11.196 9H0.804L6 0Z"
            fill="currentColor"
            transform="rotate(180 6 6)"
          />
        </svg>
      </div>
    </section>
  );
}
