import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { PAGES } from "@/lib/constants";

export function ValuePropSection() {
  const stats = [
    {
      num: "100",
      title: "Students\nselected",
      desc: "From across all faculties, departments, and levels.",
      color: "bg-[#0A56F9]", // blue
      textColor: "text-[#0A56F9]",
    },
    {
      num: "10",
      title: "Recognition\nareas",
      desc: "Covering leadership, creativity, service, and beyond.",
      color: "bg-[#B28200]", // darker amber
      textColor: "text-[#D39B00]",
    },
    {
      num: "0",
      title: "Public votes",
      desc: "Selection is criteria-based and committee-reviewed.",
      color: "bg-[#B28200]", // darker amber
      textColor: "text-[#D39B00]",
    },
    {
      num: "∞",
      title: "Archive\nEditions",
      desc: "Designed to grow year on year as institutional memory.",
      color: "bg-[#0A56F9]", // blue
      textColor: "text-[#0A56F9]",
    },
  ];

  return (
    <section id="about" className="bg-[#fafafa] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top pill */}
        <div className="flex items-center gap-4 mb-8 bg-[#f0f2f5] rounded-full px-6 py-2 shadow-sm border border-gray-100">
          <span className="text-[10px] font-bold text-brand-navy uppercase tracking-widest">
            WHAT BABCOCK 100 IS
          </span>
          <span className="w-12 h-px bg-gray-400" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-navy leading-snug mb-8 text-center">
          A record of{" "}
          <span className="text-brand-amber italic font-bold">real</span>{" "}
          contribution
        </h2>

        {/* Paragraphs */}
        <div className="max-w-4xl mx-auto text-center space-y-4 text-gray-500 mb-16 text-sm md:text-base leading-relaxed">
          <p>
            The 100 is not a popularity contest. It is not an awards night, a
            leaderboard, or a list of the most well-known students on campus. It
            is something more deliberate than that.
          </p>
          <p>
            Each year, The 100 identifies and publicly documents one hundred
            students whose contributions to Babcock University — through
            leadership, innovation, service, enterprise, creativity, or impact —
            are real, evidenced, and worth preserving.
          </p>
          <p>
            The platform is founded and run by GDG on Campus Babcock, and is
            designed to grow into an institutional archive over time.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-xl p-8 relative overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-start min-h-70"
            >
              <div
                className={cn(
                  "text-4xl font-extrabold mb-4 font-sans tracking-tight",
                  stat.textColor,
                )}
              >
                {stat.num}
              </div>
              <h3 className="font-bold text-brand-navy mb-3 whitespace-pre-line text-[15px] leading-snug">
                {stat.title}
              </h3>
              <p className="text-[13px] text-gray-400 leading-relaxed font-medium">
                {stat.desc}
              </p>

              {/* Colored Corner Ribbon - leaves a white triangle at the extreme corner */}
              <div
                className={cn(
                  "absolute -right-8 -bottom-2 w-32 h-6 transform -rotate-45",
                  stat.color,
                )}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          asChild
          className="rounded-2xl bg-[#B28200] text-white hover:bg-[#B28200]/90 h-12 px-8 text-sm font-medium"
        >
          <Link href={PAGES.methodology}>See how selection works &gt;</Link>
        </Button>
      </div>
    </section>
  );
}
