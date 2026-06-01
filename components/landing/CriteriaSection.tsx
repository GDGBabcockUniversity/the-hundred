import { cn } from "@/lib/utils";
import {
  HandMetal,
  Lightbulb,
  Music,
  PlayCircle,
  Microscope,
  Cog,
  Users,
  Trophy,
  Heart,
  Star,
} from "lucide-react";

export function CriteriaSection() {
  const criteria = [
    {
      name: "Leadership",
      color: "bg-[#0A56F9]",
      icon: HandMetal,
      description:
        "You know who this person is. The one who organized everyone else, showed up before anyone asked, and stayed after everyone else went home. Leadership here is evidenced in patterns over time. Rooms organized. People moved. Outcomes changed because of one person's consistent presence.",
    },
    {
      name: "Entrepreneurship\nand Enterprise",
      color: "bg-[#B28200]",
      icon: Lightbulb,
      description:
        "Something was built, and someone paid for it, or used it, or came back for more. A product, a service, a business tested against reality and still standing. If you know a student who has been building something real, this is their category.",
    },
    {
      name: "Arts and Performance",
      color: "bg-[#0A56F9]",
      icon: Music,
      description:
        "Music recorded and released. Collections designed and shown. Performances given to real audiences. If you know someone who has been creating original work with serious commitment behind it, they belong here.",
    },
    {
      name: "Media and Storytelling",
      color: "bg-[#B28200]",
      icon: PlayCircle,
      description:
        "The journalist who chased stories the campus needed to hear. The content creator who built a platform with real readership. The editor, the producer, the writer. The people who shaped how Babcock understands itself.",
    },
    {
      name: "Research and\nScholarship",
      color: "bg-[#0A56F9]",
      icon: Microscope,
      description:
        "Academic work that went further than the assignment required. If you know a student conducting research, publishing findings, or contributing intellectually in ways that will outlast the semester, nominate them.",
    },
    {
      name: "Innovation and\nProblem Solving",
      color: "bg-[#B28200]",
      icon: Cog,
      description:
        "There was a broken system, and this person fixed it. A gap identified and closed. A solution that exists now because one person decided it should. Small or large, funded or not, the work just had to solve something real.",
    },
    {
      name: "Community Building\nand Service",
      color: "bg-[#0A56F9]",
      icon: Users,
      description:
        "Organizations built from nothing. Communities held together when they might have fallen apart. People who show up for others in ways that ask nothing back. You know who they are.",
    },
    {
      name: "Athletics and Sports",
      color: "bg-[#B28200]",
      icon: Trophy,
      description:
        "Competitive excellence on fields, courts, and tracks. The student who represented Babcock with distinction and brought something back. Physical achievement is real achievement.",
    },
    {
      name: "Health and\nSocial Impact",
      color: "bg-[#0A56F9]",
      icon: Heart,
      description:
        "Medical outreach that reached people beyond the hospital walls. Mental health advocacy on a campus that struggles to make room for it. Social change pursued with patience and real care. If someone you know has been doing this work quietly, now is the time to name them.",
    },
    {
      name: "Emerging Talent",
      color: "bg-[#B28200]",
      icon: Star,
      description:
        "First and second year students already doing what most wait until final year to attempt. If you know someone in early years who is already shaping something, they belong on this list.",
    },
  ];

  return (
    <section
      id="the-class"
      className="bg-brand-navy py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-4 rounded-full border border-white/20 px-6 py-2 mb-8 bg-white/5">
            <span className="text-[10px] font-bold text-[#D39B00] uppercase tracking-widest">
              RECOGNITION AREAS
            </span>
            <span className="w-12 h-px bg-white/30" />
          </div>

          <h2 className="font-bold text-4xl md:text-5xl font-serif text-white leading-snug">
            Ten ways to be part <br className="hidden sm:block" />
            of <span className="text-[#D39B00]">the class</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((item, i) => {
            const isLast = i === criteria.length - 1;
            const Icon = item.icon;

            return (
              <div
                key={i}
                className={cn(
                  "bg-white rounded-xl p-8 shadow-lg flex flex-col gap-5",
                  isLast && "md:col-span-2 lg:col-span-3",
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1",
                      item.color,
                    )}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-brand-navy whitespace-pre-line border-b-2 border-[#D39B00] pb-2 inline-block">
                      {item.name}
                    </h3>
                  </div>
                </div>
                <p className="text-[#64748b] text-[13px] leading-relaxed font-medium">
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
