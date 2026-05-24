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
      desc: "Start here. Nominate a student who deserves to be in the Founding Class. You can nominate a peer, a classmate, someone from a different faculty, or yourself. Each nomination requires specific evidence and a description of what your nominee has contributed.",
      x: -509,
      y: 282,
    },
    {
      num: "02",
      title: "Screening",
      desc: "Every submission is reviewed for completeness and verifiable evidence. Nominations that cannot be supported do not advance.",
      x: -291,
      y: 75,
    },
    {
      num: "03",
      title: "Review",
      desc: "A five-member committee evaluates each valid nomination across five criteria: Impact, Initiative, Evidence, Consistency, and Future Potential. Reviewers score independently.",
      x: 0,
      y: 0,
    },
    {
      num: "04",
      title: "Verification",
      desc: "Shortlisted nominations are verified. Links are followed. References are contacted.",
      x: 291,
      y: 75,
    },
    {
      num: "05",
      title: "Final Class",
      desc: "One hundred students. Selected from across every faculty. Published as a class, with no internal ranking.",
      x: 509,
      y: 282,
    },
  ];

  const faqs = [
    {
      question: "Can I nominate myself?",
      answer:
        "Please do. Self-nominations go through the same review as peer nominations. The committee evaluates the work and the evidence, regardless of who submitted the form. Don’t be shy about it.",
    },
    {
      question: "What happens after I submit?",
      answer:
        "Your nomination enters screening. If it advances, it reaches the review committee. If your nominee makes the shortlist, they will be contacted directly and invited to complete a full profile. Every valid nomination is reviewed.",
    },
    {
      question: "How many people can I nominate?",
      answer:
        "One person per form. Fill it in again if you have more than one person in mind.",
    },
    {
      question: "Will my nominee know it was me?",
      answer:
        "Only if you tell them. The committee reaches out to shortlisted nominees directly.",
    },
    {
      question: "What if I don’t have formal evidence?",
      answer:
        "Evidence takes many forms. Event records, social media where the work is visible, a faculty reference, photographs, meeting documentation — if the contribution is real, something verifiable exists. Start with what you have.",
    },
    {
      question: "Who makes the final selection?",
      answer:
        "A five-member committee: one faculty anchor, one cross-campus student representative from outside GDG, one independent administrative or faculty member, one external industry observer, and one organizing lead in a non-voting chair capacity. Majority vote. No single person decides.",
    },
    {
      question: "What if a committee member knows my nominee personally?",
      answer:
        "They step back from that specific evaluation.",
    },
    {
      question: "When is the class announced?",
      answer:
        "Mid-July 2026, ahead of graduation.",
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
          <div className="absolute top-[170px] left-1/2 -translate-x-1/2 w-[1060px] h-[1350px] rounded-[530px] border-32 border-gray-200/50 bg-white -z-20 shadow-[0_0_40px_rgba(0,0,0,0.02)]" />

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
