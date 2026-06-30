import { NominationWizard } from "@/components/nomination/NominationWizard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NominatePage() {
  const isClosed = new Date() > new Date("2026-06-30T23:59:59+01:00");

  if (isClosed) {
    return (
      <div className="bg-white min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto pt-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold leading-[1.1] text-brand-navy mb-6 tracking-tight">
            Nominations are <span className="text-[#D39B00]">Closed</span>
          </h1>
          <p className="text-gray-500 mb-10 text-[16px] leading-relaxed font-medium">
            Thank you for your interest. The nomination period for Babcock 100 has officially ended.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-brand-navy text-white h-13 px-8 text-[14px] font-medium hover:bg-brand-navy/90 transition-colors shadow-sm"
          >
            Return to Homepage
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 select-none pointer-events-none overflow-hidden flex justify-center opacity-50">
          <div
            className="font-serif text-brand-navy font-extrabold leading-[0.85] tracking-tight whitespace-nowrap translate-y-[25%] text-center"
            style={{ fontSize: "16vw" }}
          >
            Babcock 100
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#fcfaf8] pt-32 pb-24 sm:pt-40 sm:pb-48 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold leading-[1.1] text-brand-navy mb-6 tracking-tight">
            Nominate someone{" "}
            <span className="text-[#D39B00] relative inline-block">
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
                  stroke="#D39B00"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            <br />
            Babcock University.
          </h1>
          <p className="text-gray-500 mb-10 max-w-2xl mx-auto text-[14px] leading-relaxed font-medium">
            You’re about to nominate a student for Babcock 100. Have their basic
            details ready, and a clear reason they deserve to be seen.
          </p>

          <div className="flex flex-col items-center">
            <a
              href="#nomination-form"
              className="inline-flex items-center justify-center rounded-full bg-brand-navy text-white h-13 pl-6 pr-1.5 text-[14px] font-medium hover:bg-brand-navy/90 transition-colors shadow-sm"
            >
              Start Nomination
              <div className="ml-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <ArrowRight
                  className="w-4.5 h-4.5 text-brand-navy"
                  strokeWidth={2.5}
                />
              </div>
            </a>

            <p className="text-brand-red font-semibold text-[13px] mt-6">
              * Nominations close June 30, 2026.
            </p>
          </div>
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
      </section>

      {/* Wizard Section */}
      <section
        id="nomination-form"
        className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-8 relative z-20 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <NominationWizard />
        </div>
      </section>
    </div>
  );
}
