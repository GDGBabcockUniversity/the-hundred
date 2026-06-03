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
      desc: "A five-member committee scores each nominee across five criteria: Impact, Initiative, Evidence, Consistency, and Potential.",
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
        "No. Babcock 100 is not a popularity contest. It is not an awards night, a leaderboard, or a list of the most well-known students on campus. Selection is criteria-based and committee-reviewed.",
    },
    {
      question: "Does nominating someone guarantee they’ll be selected?",
      answer:
        "No. Every submission is reviewed for completeness and verifiable evidence. A five-member committee evaluates each valid nomination.",
    },
    {
      question: "Is there a public vote?",
      answer:
        "No. The process relies on independent verification and committee review rather than public voting.",
    },
    {
      question: "When will the final class be published?",
      answer: "Mid-July 2026, ahead of graduation.",
    },
    {
      question: "Who is eligible to be nominated?",
      answer:
        "Any student making a real difference at Babcock University can be nominated, from first-year students to final-year students across all faculties.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-[#ffffff] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section 1 Header */}
        <div className="mb-24 flex flex-col items-center">
          <div className="inline-flex items-center self-start gap-4 rounded-full border border-gray-200 px-6 py-2 bg-[#f0f2f5] shadow-sm mb-8">
            <span className="text-[10px] font-bold text-brand-navy uppercase tracking-widest">
              HOW SELECTION WORKS
            </span>
            <span className="w-12 h-px bg-gray-400" />
          </div>

          <p className="text-center text-gray-500 max-w-2xl text-[15px] leading-relaxed font-medium">
            Selection is never arbitrary. Every nominated student passes through
            a structured review before being considered for the final class.
          </p>
        </div>

        <div className="hidden lg:block relative mb-20 h-120 max-w-5xl mx-auto z-10">
          {/* The Thick Grey Dome (Extends downwards behind FAQ) */}
          <div className="absolute top-42.5 left-1/2 -translate-x-1/2 w-265 h-337.5 rounded-[530px] border-32 border-gray-100 bg-[#fafafa] -z-20 shadow-[0_0_40px_rgba(0,0,0,0.02)]" />

          {/* The Blue Arc */}
          <div
            className="absolute top-25 left-1/2 -translate-x-1/2 w-300 h-300 rounded-full border-[1.5px] border-[#0A56F9] -z-10 pointer-events-none"
            style={{ clipPath: "inset(0 0 50% 0)" }}
          />

          {/* The Steps */}
          {steps.map((step, i) => (
            <div
              key={i}
              className="absolute z-20"
              style={{
                left: `calc(50% + ${step.x}px)`,
                top: `${100 + step.y}px`,
              }}
            >
              {/* Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-13 h-13 rounded-full bg-white border-[1.5px] border-[#0A56F9] flex items-center justify-center font-bold font-sans text-sm text-brand-navy shadow-sm transition-transform duration-300 hover:scale-110">
                {step.num}
              </div>

              {/* Text */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-9 w-55 text-center">
                <h4 className="font-extrabold text-brand-navy text-[14px] mb-2">
                  {step.title}
                </h4>
                <p className="text-[12px] text-gray-400 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vertical Process (Mobile/Tablet) */}
        <div className="lg:hidden flex flex-col gap-12 max-w-md mx-auto mb-20 px-4 relative">
          <div className="absolute left-9.75 top-6 bottom-6 w-px bg-brand-blue/30" />
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start relative">
              <div className="w-12 h-12 rounded-full bg-white border border-brand-blue flex items-center justify-center font-bold text-sm text-brand-navy shrink-0 shadow-sm relative z-10">
                {step.num}
              </div>
              <div className="flex-1">
                <h4 className="font-extrabold text-brand-navy text-[14px] mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 lg:p-0 relative z-10">
          <div className="inline-flex items-center gap-4 rounded-full border border-gray-200 px-6 py-2 bg-[#f0f2f5] shadow-sm mb-10">
            <span className="text-[10px] font-bold text-brand-navy uppercase tracking-widest">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="w-12 h-px bg-gray-400" />
          </div>

          <Accordion type="single" collapsible className="w-full mb-10">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-navy hover:text-brand-blue text-[15px] py-6 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-gray-500 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
