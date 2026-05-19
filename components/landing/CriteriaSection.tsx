import { cn } from "@/lib/utils";

export function CriteriaSection() {
  const criteria = [
    { name: "Leadership", color: "bg-brand-blue" },
    { name: "Community Building", color: "bg-brand-red" },
    { name: "Innovation", color: "bg-brand-amber" },
    { name: "Entrepreneurship", color: "bg-brand-blue" },
    { name: "Media & Communication", color: "bg-brand-red" },
    { name: "Design & Creative Practice", color: "bg-brand-amber" },
    { name: "Research & Thought Leadership", color: "bg-brand-green" },
    { name: "Service & Volunteering", color: "bg-brand-red" },
    { name: "Problem Solving", color: "bg-brand-green" },
    { name: "Emerging Talent", color: "bg-brand-amber" },
  ];

  return (
    <section className="bg-brand-amber/20 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-4">
            RECOGNITION AREAS —
          </p>
          <h2 className="font-bold text-4xl md:text-5xl font-serif text-brand-navy leading-snug">
            Ten ways to be part of the{" "}
            <span className="text-brand-navy/50 italic font-bold">class</span>
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
            {criteria.map((item, i) => (
              <div
                key={i}
                className="flex items-start flex-col gap-6 p-4 border hover:bg-gray-50 transition-colors cursor-default"
              >
                <div
                  className={cn("w-4 h-4 rounded-full shrink-0", item.color)}
                />
                <span className="text-sm font-medium text-brand-navy">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
