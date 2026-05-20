import { NominationWizard } from "@/components/nomination/NominationWizard";
import { ArrowRight } from "lucide-react";

export default function NominatePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#fdfbf7] pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-snug text-brand-navy mb-6">
            Nominate someone shaping Babcock
          </h1>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            You are about to nominate an individual for the 100 most impactful
            students. Please ensure you have their basic details and a clear
            reason for why they deserve to be seen.
          </p>
          <div className="flex justify-center">
            <a
              href="#nomination-form"
              className="inline-flex items-center justify-center rounded-full bg-brand-navy text-white h-12 px-8 text-base font-medium hover:bg-brand-navy/90 transition-colors"
            >
              Start Nomination <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <p className="text-brand-red font-medium mt-6">
            Nominations close June 20th, 2026
          </p>
        </div>

        {/* Giant background text */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none w-full text-center overflow-hidden">
          <div
            className="font-serif text-[15rem] leading-none whitespace-nowrap text-transparent"
            style={{ WebkitTextStroke: "2px #0f1729" }}
          >
            BABCOCK 100
          </div>
        </div>
      </section>

      {/* Wizard Section */}
      <section
        id="nomination-form"
        className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-8"
      >
        <div className="max-w-5xl mx-auto">
          <NominationWizard />
        </div>
      </section>
    </div>
  );
}
