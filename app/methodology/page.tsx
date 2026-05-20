export default function MethodologyPage() {
  const criteria = [
    {
      name: "Impact",
      score: "/30",
      colorClass: "text-brand-blue border-brand-blue",
      borderColor: "border-brand-blue/20",
      description:
        "To what extent has the nominee influenced people, projects, systems, culture, or outcomes at Babcock?",
    },
    {
      name: "Initiative",
      score: "/20",
      colorClass: "text-brand-green border-brand-green",
      borderColor: "border-brand-green/20",
      description:
        "How much ownership, leadership, originality, or proactive contribution did the nominee demonstrate?",
    },
    {
      name: "Evidence",
      score: "/20",
      colorClass: "text-brand-amber border-brand-amber",
      borderColor: "border-brand-amber/20",
      description:
        "How strong and credible is the evidence supporting the nomination? Can it be independently verified?",
    },
    {
      name: "Consistency",
      score: "/15",
      colorClass: "text-brand-red border-brand-red",
      borderColor: "border-brand-red/20",
      description:
        "Does the contribution reflect sustained effort over time, or was it a single isolated moment?",
    },
    {
      name: "Potential",
      score: "/15",
      colorClass: "text-brand-blue border-brand-blue",
      borderColor: "border-brand-blue/20",
      description:
        "Does the nominee show continuing direction, promise, or relevance beyond the current year?",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Nominations Open",
      duration: "4 weeks",
      desc: "Nominations open campus-wide at ORBIT. Students, staff, and alumni may submit. Each requires evidence and a description of the nominee's contribution.",
    },
    {
      num: "02",
      title: "Screening",
      duration: "1 week",
      desc: "The coordination team reviews all submissions for completeness and eligibility. Incomplete nominations may be returned for resubmission before the deadline.",
    },
    {
      num: "03",
      title: "Panel Review",
      duration: "3 weeks",
      desc: "12 independent reviewers — academic staff, student reps, alumni — score each nomination against the five criteria. Review is blind where possible.",
    },
    {
      num: "04",
      title: "Verification",
      duration: "2 weeks",
      desc: "Top nominations are sent to departments for independent verification. Unverifiable claims are flagged and re-reviewed by the full panel before a final decision.",
    },
  ];

  const fairnessCommitments = [
    "No self-nominations without external corroboration",
    "Panel members recuse from nominees they know personally",
    "Results undisclosed until announcement day",
    "No rankings — all 100 are equal",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Back to Home Navigation Anchor */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-6">
        <Link
          href={PAGES.home}
          className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-brand-navy transition-colors group"
        >
          <ArrowLeft className="mr-2 w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to home
        </Link>
      </div> */}

      {/* Hero Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 pt-36">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-4">
              METHODOLOGY
            </p>
            <h1 className="text-5xl md:text-6xl font-serif text-brand-navy leading-snug mb-8 font-bold">
              How we select the hundred.
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Our process is transparent, evidence-based, and designed to ensure
              that contribution — not reputation, connections, or popularity —
              determines selection.
            </p>
          </div>
        </div>

        <div className="hidden lg:block relative w-full h-full pointer-events-none select-none opacity-5">
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
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
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
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  <span className="text-brand-blue font-bold mr-2">—</span>
                  {commitment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
