"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Nomination",
      desc: "Anyone can nominate a student, or themselves. Nominations must include evidence and specific contribution details.",
      x: -509,
      y: 282,
    },
    {
      num: "02",
      title: "Screening",
      desc: "All submissions are reviewed for completeness, eligibility, and credibility. Weak or incomplete nominations are filtered.",
      x: -291,
      y: 75,
    },
    {
      num: "03",
      title: "Review",
      desc: "A committee scores each nominee across five criteria: Impact, Initiative, Evidence, Consistency, and Future Potential.",
      x: 0,
      y: 0,
    },
    {
      num: "04",
      title: "Verification",
      desc: "Claims are independently verified where possible. Nominees flagged for concern are reviewed carefully before inclusion.",
      x: 291,
      y: 75,
    },
    {
      num: "05",
      title: "Final Class",
      desc: "The final 100 are curated, profiled, and published. The class is presented as a selected cohort, not a ranked list.",
      x: 509,
      y: 282,
    },
  ];

  const faqs = [
    {
      question: "Is this a popularity contest?",
      answer:
        "No. Selection is strictly criteria-based and decided by a committee review, not votes.",
    },
    {
      question: "Does submitting a nomination guarantee selection?",
      answer:
        "No, it enters the nominee into the screening process. All shortlisted candidates will be reviewed against our 5 criteria.",
    },
    {
      question: "Is there a public vote?",
      answer:
        "No. There is zero public voting. This ensures that the selection is purely merit-based and structured.",
    },
    {
      question: "When will the final class be published?",
      answer:
        "The final 100 will be published at the end of the review cycle in late June 2026.",
    },
    {
      question: "Who is eligible to be nominated?",
      answer:
        "Any currently enrolled undergraduate or postgraduate student at Babcock University is eligible.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-[#fdfbf7] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative vectors */}
      {/* <div className="absolute -top-10 -right-10 pointer-events-none select-none z-0">
        <Image
          src={IMAGES.curly_brace.src}
          alt="Process Curly Brace"
          width={IMAGES.curly_brace.w}
          height={IMAGES.curly_brace.h}
          className="w-48 h-48 md:w-80 md:h-80 object-contain opacity-90"
        />
      </div>

      <div className="absolute top-[480px] -left-16 pointer-events-none select-none z-0">
        <Image
          src={IMAGES.gear.src}
          alt="Process Gear"
          width={IMAGES.gear.w}
          height={IMAGES.gear.h}
          className="w-48 h-48 md:w-80 md:h-80 object-contain opacity-90"
        />
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section 1 Header */}
        <div className="mb-24 relative">
          <div className="flex items-center gap-4 w-full max-w-2xl pr-6">
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-4">
              How selection works —
            </p>
          </div>

          <p className="text-center text-gray-500 max-w-2xl mx-auto text-base md:text-[17px] leading-[1.6] font-normal relative z-10">
            Selection is never arbitrary. Every nominated student passes through
            a structured review before being considered for the final class.
          </p>
        </div>

        <div className="hidden lg:block relative mb-20 h-[480px] max-w-5xl mx-auto z-10">
          {/* The Thick Grey Dome (Extends downwards behind FAQ) */}
          <div className="absolute top-[170px] left-1/2 -translate-x-1/2 w-[1060px] h-[1060px] rounded-full border-32 border-gray-200/50 bg-white -z-20 shadow-[0_0_40px_rgba(0,0,0,0.02)]" />

          {/* The Blue Arc */}
          <div
            className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full border-[1.5px] border-brand-blue/40 -z-10 pointer-events-none"
            style={{ clipPath: "inset(0 0 50% 0)" }}
          />

          {/* The Steps */}
          {steps.map((step, i) => (
            <div
              key={i}
              className="absolute z-20"
              style={{
                left: `calc(50% + ${step.x}px)`,
                top: `${100 + step.y}px`, // 100 is the top of the blue arc
              }}
            >
              {/* Circle centered at exactly (x, y) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px] rounded-full bg-white border-[1.5px] border-brand-blue flex items-center justify-center font-serif text-base text-brand-navy shadow-sm transition-transform duration-300 hover:scale-110">
                {step.num}
              </div>

              {/* Text positioned above the circle */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[36px] w-[240px] text-center">
                <h4 className="font-bold text-brand-navy text-[15px] mb-2">
                  {step.title}
                </h4>
                <p className="text-[12px] text-gray-500 leading-[1.6] font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vertical Process (Mobile/Tablet) */}
        <div className="lg:hidden flex flex-col gap-12 max-w-md mx-auto mb-20 px-4 relative">
          {/* Vertical path */}
          <div className="absolute left-[39px] top-6 bottom-6 w-px bg-brand-blue/30" />

          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start relative">
              {/* Step Circle */}
              <div className="w-12 h-12 rounded-full bg-white border border-brand-blue flex items-center justify-center font-serif text-base text-brand-navy shrink-0 shadow-sm relative z-10">
                {step.num}
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h4 className="font-bold text-brand-navy text-base mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 lg:p-0 border border-gray-100 shadow-sm lg:bg-transparent lg:border-none lg:shadow-none relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-4">
              Frequently asked questions —
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full mb-10">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-gray-100"
              >
                <AccordionTrigger className="text-left font-medium text-brand-navy hover:text-brand-blue text-base py-5 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-500 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* <div className="flex justify-end">
            <a
              href="#"
              className="text-xs font-semibold text-brand-navy border border-brand-navy rounded-full px-6 py-3 hover:bg-brand-navy hover:text-white transition-all duration-300"
            >
              Read full FAQ →
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
