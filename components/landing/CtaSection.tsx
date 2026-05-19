import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PAGES } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-navy">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
        {/* Background elements placeholders */}
        <div className="absolute top-0 right-0 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          <Image
            src="/cta-stack.png"
            alt="CTA Stack"
            width={256}
            height={256}
            className="w-32 h-32 md:w-64 md:h-64 object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 pointer-events-none transform -translate-x-1/4 translate-y-1/4">
          <Image
            src="/cta-star.png"
            alt="CTA Star"
            width={256}
            height={256}
            className="w-32 h-32 md:w-64 md:h-64 object-contain"
          />
        </div>

        <div className="relative z-10">
          <h2 className="max-w-2xl font-bold leading-snug mx-auto text-4xl md:text-5xl font-serif text-brand-navy mb-6">
            Know someone who{" "}
            <span className="text-brand-navy/50 italic font-bold">
              deserves
            </span>{" "}
            to be seen?
          </h2>
          <p className="text-brand-gray-light mb-10 max-w-2xl mx-auto text-lg">
            Nominations are now open. The process takes about ten minutes and
            requires specific, evidenced information about the nominee's
            contribution.
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
