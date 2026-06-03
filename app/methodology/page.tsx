export default function MethodologyPage() {
  const criteria = [
    {
      name: "Impact",
      score: "/30",
      colorClass: "text-brand-blue border-brand-blue",
      borderColor: "border-brand-blue/20",
      description:
        "What changed because this person was here? The committee looks for contribution with observable consequence — things built that people used, communities that grew, problems that got solved. Impact is what stayed after the work was done.",
    },
    {
      name: "Initiative",
      score: "/20",
      colorClass: "text-brand-green border-brand-green",
      borderColor: "border-brand-green/20",
      description:
        "Who started it? The committee pays close attention to students who built things that did not exist before they arrived. Maintaining something valuable matters too, but building from scratch carries different weight.",
    },
    {
      name: "Evidence",
      score: "/20",
      colorClass: "text-brand-amber border-brand-amber",
      borderColor: "border-brand-amber/20",
      description:
        "Can it be verified? Every claim in a nomination is expected to arrive with documentation. The stronger the evidence, the stronger the nomination.",
    },
    {
      name: "Consistency",
      score: "/15",
      colorClass: "text-brand-red border-brand-red",
      borderColor: "border-brand-red/20",
      description:
        "How long did it last? A single impressive moment matters less than a sustained pattern of contribution. The committee looks for students who showed up repeatedly, over time.",
    },
    {
      name: "Potential",
      score: "/15",
      colorClass: "text-brand-blue border-brand-blue",
      borderColor: "border-brand-blue/20",
      description:
        "Where are they going? The Founding Class of 2026 will be professionals, founders, researchers, and leaders for decades. The committee considers trajectory alongside what has already been achieved.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Nominations Open",
      duration: "May 26 to June 20, 2026",
      desc: "Nominations opened May 26, 2026 and are open campus-wide for four weeks. Students, staff, and faculty may all submit. Each nomination requires evidence and a specific description of the nominee’s contribution.",
    },
    {
      num: "02",
      title: "Screening",
      duration: "1 week",
      desc: "All submissions are reviewed for completeness and eligibility. Incomplete nominations may be returned for resubmission before the deadline.",
    },
    {
      num: "03",
      title: "Committee Review",
      duration: "3 weeks",
      desc: "A five-member committee scores each nomination against the five criteria. Review is blind where possible.",
    },
    {
      num: "04",
      title: "Verification",
      duration: "2 weeks",
      desc: "Shortlisted nominations are independently verified. Claims that cannot be substantiated are flagged and re-reviewed by the full committee before a final decision.",
    },
    {
      num: "05",
      title: "Final Class",
      duration: "1 week",
      desc: "The final 100 are curated, profiled, and published.\n\nThe class is presented as a selected cohort, not a ranked list.",
    },
  ];

  const fairnessCommitments = [
    "Self-nominations are reviewed on the same basis as peer nominations.",
    "Committee members recuse from nominees they know personally.",
    "Results are held until announcement day.",
    "No rankings. All 100 are equal.",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 pt-36 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-4">
              METHODOLOGY
            </p>
            <h1 className="text-5xl md:text-6xl font-serif text-brand-navy leading-snug mb-8 font-bold">
              How we select the class.
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              The process is transparent. Contribution, not reputation, connections, or popularity, determines selection. Here is exactly how we select the class.
            </p>
          </div>
        </div>

        <div className="hidden lg:block absolute inset-0 pointer-events-none select-none opacity-5 overflow-hidden">
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 font-serif text-[12rem] xl:text-[15rem] leading-[0.85] text-transparent text-right whitespace-nowrap"
            style={{ WebkitTextStroke: "2px #0f1729" }}
          >
            BABCOCK
            <br />
            100
          </div>
        </div>
      </section>

      {/* Section 2: Evaluation Criteria */}
      <section className="bg-gray-50/50 py-24 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <p className="text-brand-green text-xs font-semibold uppercase tracking-widest mb-4">
              FIVE EVALUATION CRITERIA
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-navy leading-snug mb-6 font-bold">
              What every nomination is measured against.
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Every nomination is independently scored across five dimensions.
              Reviewers recuse themselves from nominees they know personally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {criteria.map((item, index) => (
              <div
                key={index}
                className={`border ${item.borderColor} rounded-2xl p-6 bg-white hover:shadow-lg hover:border-gray-300 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <h3
                    className={`text-base font-semibold ${item.colorClass.split(" ")[0]} mb-3`}
                  >
                    {item.name}
                  </h3>
                  <div
                    className={`font-serif text-5xl font-bold ${item.colorClass.split(" ")[0]} pb-4 mb-4 border-b-2 ${item.colorClass.split(" ")[1]}`}
                  >
                    {item.score}
                  </div>
                </div>
                <p className="text-gray-500 text-xs md:text-[13px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-4">
              THE PROCESS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-navy leading-snug mb-6 font-bold">
              From nomination to recognition.
            </h2>
          </div>

          <div className="border-t border-gray-200 divide-y divide-gray-100">
            {steps.map((step) => (
              <div
                key={step.num}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-gray-50/50 px-4 -mx-4 rounded-lg transition-colors duration-200"
              >
                <div className="md:col-span-3 flex items-start gap-4">
                  <div className="font-serif text-4xl font-bold text-brand-blue select-none">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-brand-navy">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      {step.duration}
                    </p>
                  </div>
                </div>
                <div className="md:col-span-9">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Commitments to Fairness */}
      <section className="bg-brand-navy text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle decorative dot/glow pattern */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none select-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-snug mb-16 font-bold">
            Our commitments to fairness.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {fairnessCommitments.map((commitment, index) => (
              <div
                key={index}
                className="border-t border-white/10 pt-6 flex flex-col justify-between h-full"
              >
                <p className="text-gray-300 text-sm md:text-base leading-relaxed flex items-start">
                  <span className="text-brand-blue font-bold mr-3 mt-1 text-lg leading-none">•</span>
                  <span>{commitment}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
