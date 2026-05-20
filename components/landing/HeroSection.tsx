import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PAGES } from "@/lib/constants";

const pills = [
  {
    text: "Annual",
    bg: "bg-brand-red",
    textColor: "text-white",
  },
  {
    text: "Cross-campus",
    bg: "bg-brand-blue",
    textColor: "text-white",
  },
  {
    text: "Criteria-based",
    bg: "bg-brand-amber",
    textColor: "text-white",
  },
  {
    text: "Non-ranked",
    bg: "bg-brand-green",
    textColor: "text-white",
  },
];

export function HeroSection() {
  return (
    <section className="bg-[#fdfbf7] pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="max-w-2xl">
          <p className="text-brand-blue font-medium mb-4 text-sm uppercase tracking-wider">
            — BABCOCK UNIVERSITY• FOUNDING CLASS
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-navy leading-snug mb-8 font-extrabold">
            Recognizing 100 students
            <span className="text-brand-blue/50 italic ml-3 font-bold">
              shaping
            </span>
            <br />
            Babcock University.
          </h1>

          <div className="flex flex-wrap gap-2 mb-10">
            {pills.map((pill) => (
              <span
                key={pill.text}
                className={cn(
                  "px-4 py-1 rounded-sm text-sm font-medium uppercase tracking-wider",
                  pill.bg,
                  pill.textColor,
                )}
              >
                {pill.text}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="rounded-2xl bg-brand-navy text-white hover:bg-brand-navy/90 h-12 px-8 text-base"
            >
              <Link href={PAGES.nominate}>Open Nominations</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-2xl border-gray-300 text-brand-navy hover:bg-gray-50 h-12 px-8 text-base"
            >
              <Link href="#methodology">View Methodology</Link>
            </Button>
          </div>
        </div>

        {/* Right side decorative text */}
        <div className="hidden lg:block relative w-full h-full pointer-events-none select-none opacity-5">
          <div
            className="absolute right-0 xl:-right-10 top-1/2 -translate-y-1/2 font-serif text-[12rem] xl:text-[15rem] leading-[0.85] text-transparent text-right whitespace-nowrap"
            style={{ WebkitTextStroke: "2px #0f1729" }}
          >
            BABCOCK
            <br />
            100
          </div>
        </div>
      </div>
    </section>
  );
}
