import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export function ValuePropSection() {
  const stats = [
    {
      num: "100",
      title: "Selected students",
      desc: "From across all faculties, departments, and levels.",
      color: "bg-brand-blue",
    },
    {
      num: "10",
      title: "Recognition areas",
      desc: "Covering leadership, creativity, service, and beyond.",
      color: "bg-brand-green",
    },
    {
      num: "0",
      title: "Public votes",
      desc: "Selection is criteria-based and committee-reviewed.",
      color: "bg-brand-amber",
    },
    {
      num: "∞",
      title: "Archive editions",
      desc: "Designed to grow year-on-year as institutional memory.",
      color: "bg-brand-red",
    },
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="max-w-xl">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">
            WHAT THE 100 IS —
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-navy leading-snug mb-6">
            A record of real contribution
          </h2>
          <div className="space-y-6 text-gray-600 mb-8">
            <p>
              The 100 is not a popularity contest. It is not an awards night, a
              leaderboard, or a list of the most well-known students on campus.
              It is something more deliberate than that.
            </p>
            <p>
              Each year, The 100 identifies and publicly documents one hundred
              students whose contributions to Babcock University — through
              leadership, innovation, service, enterprise, creativity, or impact
              — are real, evidenced, and worth preserving.
            </p>
            <p>
              The platform is founded and run by GDG on Campus Babcock, and is
              designed to grow into an institutional archive over time.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="rounded-2xl border-gray-300 text-brand-navy hover:bg-gray-50 h-12 px-8 text-base"
          >
            <Link
              href="#methodology"
              className="inline-flex items-center text-sm font-semibold text-brand-navy hover:text-brand-blue transition-colors group"
            >
              See how selection works
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-8 relative overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={cn(
                  "text-4xl font-serif mb-2",
                  stat.color.replace("bg-", "text-"),
                )}
              >
                {stat.num}
              </div>
              <h3 className="font-semibold text-brand-navy mb-2">
                {stat.title}
              </h3>
              <p className="text-sm text-gray-500">{stat.desc}</p>

              {/* Colored Corner Triangle */}
              <div
                className={cn(
                  "absolute right-3 -bottom-5 w-4 h-24",
                  stat.color,
                  "transform rotate-45 opacity-90",
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
