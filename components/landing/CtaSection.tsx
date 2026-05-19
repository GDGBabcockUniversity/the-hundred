import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Layers, Star } from "lucide-react";
import { PAGES } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-navy">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
        {/* Background elements placeholders */}
        <div className="absolute top-0 right-0 opacity-20 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          <Layers className="w-64 h-64 text-brand-navy" strokeWidth={1} />
        </div>
        <div className="absolute bottom-0 left-0 opacity-20 pointer-events-none transform -translate-x-1/4 translate-y-1/4">
          <Star className="w-64 h-64 text-brand-navy" strokeWidth={1} />
        </div>

        <div className="relative z-10">
          <h2 className="max-w-2xl font-bold leading-snug mx-auto text-4xl md:text-5xl font-serif text-brand-navy mb-6">
            Know someone who deerves to be seen?
          </h2>
          <p className="text-brand-gray-light mb-10 max-w-2xl mx-auto text-lg">
            Our nominations are currently open. Help us uncover the next
            generation of students shaping Babcock University.
          </p>
          <Button
            asChild
            className="rounded-2xl bg-brand-navy text-white hover:bg-brand-navy/90 h-12 px-8 text-base font-medium border-none"
          >
            <Link href={PAGES.nominate}>Submit a nomination</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
