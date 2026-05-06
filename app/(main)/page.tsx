import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PAGES } from "@/lib/constants";

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        {/* Decorative gradient blobs */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-brand-green/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-brand-amber/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:py-40">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-blue">
            Babcock University
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-brand-navy sm:text-6xl lg:text-7xl">
            The{" "}
            <span className="bg-linear-to-r from-brand-blue via-brand-green via-50% to-brand-amber bg-clip-text text-transparent">
              100
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Recognizing and celebrating the most impactful students at Babcock
            University. Because extraordinary contribution deserves
            extraordinary recognition.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 gap-2 rounded-xl bg-brand-navy px-8 text-base text-white hover:bg-brand-navy/90"
            >
              <Link href={PAGES.nominate}>
                Nominate a Student
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-xl px-8 text-base"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Color bar accent */}
      <div className="flex h-1.5">
        <div className="flex-1 bg-brand-blue" />
        <div className="flex-1 bg-brand-red" />
        <div className="flex-1 bg-brand-amber" />
        <div className="flex-1 bg-brand-green" />
      </div>

      {/* Brief about */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            What is The 100?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The 100 is an annual initiative by GDG on Campus Babcock that
            identifies, celebrates, and showcases the 100 most impactful
            students across the university — across every faculty, discipline,
            and area of contribution.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                color: "bg-brand-blue",
                number: "100",
                label: "Students Recognized",
              },
              {
                color: "bg-brand-green",
                number: "10",
                label: "Recognition Areas",
              },
              {
                color: "bg-brand-amber",
                number: "Open",
                label: "Nominations",
              },
              {
                color: "bg-brand-red",
                number: "2026",
                label: "Inaugural Class",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className={`absolute inset-x-0 top-0 h-1 ${stat.color}`} />
                <p className="font-serif text-3xl font-bold text-brand-navy">
                  {stat.number}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Know someone making an impact?
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Nominations are open. Put forward a student who is creating change,
            leading initiatives, or building something meaningful.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 h-12 gap-2 rounded-xl bg-brand-blue px-8 text-base text-white hover:bg-brand-blue/90"
          >
            <Link href={PAGES.nominate}>
              Start a Nomination
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
