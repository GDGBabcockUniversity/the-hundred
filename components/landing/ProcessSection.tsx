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
      desc: "Anyone can nominate a student shaping Babcock.",
      x: "0%",
      y: "100%",
    },
    {
      num: "02",
      title: "Screening",
      desc: "A committee reviews all entries for validity and impact.",
      x: "20%",
      y: "45%",
    },
    {
      num: "03",
      title: "Review",
      desc: "A distinguished panel shortlists the final 100 students.",
      x: "50%",
      y: "20%",
    },
    {
      num: "04",
      title: "Publication",
      desc: "The list is finalized, printed, and published digitally.",
      x: "80%",
      y: "45%",
    },
    {
      num: "05",
      title: "The Class",
      desc: "The final 100 students are inducted into the hall of fame.",
      x: "100%",
      y: "100%",
    },
  ];

  const faqs = [
    {
      question: "Can I nominate multiple people?",
      answer: "Yes, you can submit as many nominations as you like.",
    },
    {
      question: "Can self-nominations be made? Will I remain anonymous?",
      answer:
        "Yes, self-nominations are allowed. And yes, all nominators remain anonymous.",
    },
    {
      question: "How is the selection made?",
      answer:
        "A panel of students, alumni, and faculty reviews the nominations based on impact, reach, and alignment with our categories.",
    },
    {
      question: "Are nominations from previous years valid?",
      answer:
        "No, you must submit a new nomination for the current year's class.",
    },
    {
      question: "Is the recognizee list final?",
      answer:
        "Once published, the list is final and cannot be amended for that year.",
    },
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-4">
          —— HOW IT WORKS
        </p>
        <h2 className="text-3xl text-gray-500 mb-16">
          A transparent, merit-based selection process to ensure the most
          deserving individuals make the class.
        </h2>

        {/* Semi-circle Process */}
        <div className="relative mt-32 mb-16 w-full max-w-4xl mx-auto h-[300px]">
          {/* The Arc */}
          <div className="absolute top-0 left-0 w-full h-[600px] border-t-2 border-dashed border-gray-300 rounded-t-full" />
          <div className="absolute top-4 left-4 w-[calc(100%-32px)] h-[568px] border-20 border-gray-100 rounded-t-full" />

          {/* The Steps */}
          {steps.map((step, i) => (
            <div
              key={i}
              className="absolute w-48 -ml-24 flex flex-col items-center text-center"
              style={{
                left: step.x,
                top: step.y,
                transform: "translateY(-50%)",
              }}
            >
              <div className="mb-4">
                <h4 className="font-semibold text-brand-navy">{step.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white border-2 border-brand-blue text-brand-blue flex items-center justify-center font-bold text-xs relative z-10">
                {step.num}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-4">
          —— FREQUENTLY ASKED QUESTIONS
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-medium text-brand-navy hover:text-brand-blue">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 text-right">
          <a
            href="#"
            className="text-sm font-semibold text-brand-navy border border-gray-200 rounded-full px-4 py-2 hover:bg-gray-50"
          >
            View All FAQs →
          </a>
        </div>
      </div>
    </section>
  );
}
