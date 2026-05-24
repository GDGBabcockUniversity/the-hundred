import { cn } from "@/lib/utils";

export function CriteriaSection() {
  const criteria = [
    {
      name: "Leadership",
      color: "bg-brand-blue",
      description:
        "You know who this person is. The one who organized everyone else, showed up before anyone asked, and stayed after everyone else went home. Leadership here is evidenced in patterns over time. Rooms organized. People moved. Outcomes changed because of one person’s consistent presence.",
    },
    {
      name: "Entrepreneurship and Enterprise",
      color: "bg-brand-red",
      description:
        "Something was built, and someone paid for it, or used it, or came back for more. A product, a service, a business tested against reality and still standing. If you know a student who has been building something real, this is their category.",
    },
    {
      name: "Arts and Performance",
      color: "bg-brand-amber",
      description:
        "Music recorded and released. Collections designed and shown. Performances given to real audiences. If you know someone who has been creating original work with serious commitment behind it, they belong here.",
    },
    {
      name: "Media and Storytelling",
      color: "bg-brand-green",
      description:
        "The journalist who chased stories the campus needed to hear. The content creator who built a platform with real readership. The editor, the producer, the writer. The people who shaped how Babcock understands itself.",
    },
    {
      name: "Research and Scholarship",
      color: "bg-brand-blue",
      description:
        "Academic work that went further than the assignment required. If you know a student conducting research, publishing findings, or contributing intellectually in ways that will outlast the semester, nominate them.",
    },
    {
      name: "Innovation and Problem Solving",
      color: "bg-brand-red",
      description:
        "There was a broken system, and this person fixed it. A gap identified and closed. A solution that exists now because one person decided it should. Small or large, funded or not, the work just had to solve something real.",
    },
    {
      name: "Community Building and Service",
      color: "bg-brand-amber",
      description:
        "Organizations built from nothing. Communities held together when they might have fallen apart. People who show up for others in ways that ask nothing back. You know who they are.",
    },
    {
      name: "Athletics and Sports",
      color: "bg-brand-green",
      description:
        "Competitive excellence on fields, courts, and tracks. The student who represented Babcock with distinction and brought something back. Physical achievement is real achievement.",
    },
    {
      name: "Health and Social Impact",
      color: "bg-brand-blue",
      description:
        "Medical outreach that reached people beyond the hospital walls. Mental health advocacy on a campus that struggles to make room for it. Social change pursued with patience and real care. If someone you know has been doing this work quietly, now is the time to name them.",
    },
    {
      name: "Emerging Talent",
      color: "bg-brand-amber",
      description:
        "First and second year students already doing what most wait until final year to attempt. If you know someone in early years who is already shaping something, they belong on this list.",
    },
  ];

  return (
    <section
      id="the-class"
      className="bg-brand-amber/20 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-4">
            RECOGNITION AREAS —
          </p>
          <h2 className="font-bold text-4xl md:text-5xl font-serif text-brand-navy leading-snug">
            Ten ways to be part of the{" "}
            <span className="text-brand-navy/50 italic font-bold">class</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((item, i) => {
            const isLast = i === criteria.length - 1;
            return (
              <div
                key={i}
                className={cn(
                  "bg-white rounded-2xl p-6 md:p-8 border border-gray-100/80 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col gap-4 cursor-default relative overflow-hidden",
                  isLast && "md:col-span-2 lg:col-span-3"
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn("w-3.5 h-3.5 rounded-full shrink-0", item.color)}
                  />
                  <h3 className="text-xl font-serif font-bold text-brand-navy">
                    {item.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
