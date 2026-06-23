import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IMAGES, PAGES } from "@/lib/constants";

export function CtaSection() {
  return (
    <section
      id="nominations"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-navy"
    >
      <div className="max-w-6xl mx-auto bg-[#f0f2f5] rounded-[24px] p-8 sm:p-12 md:p-24 text-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 pointer-events-none transform translate-x-[10%] translate-y-[-10%] opacity-80 hidden sm:block">
          <Image
            src={IMAGES.cta_stack.src}
            alt="CTA Stack"
            width={IMAGES.cta_stack.w}
            height={IMAGES.cta_stack.h}
            className="w-32 h-32 md:w-64 md:h-64 object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 pointer-events-none transform translate-x-[-10%] translate-y-[10%] opacity-80 hidden sm:block">
          <Image
            src={IMAGES.cta_star.src}
            alt="CTA Star"
            width={IMAGES.cta_star.w}
            height={IMAGES.cta_star.h}
            className="w-32 h-32 md:w-64 md:h-64 object-contain"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="max-w-3xl font-bold leading-[1.1] mx-auto text-4xl sm:text-5xl md:text-6xl font-serif text-brand-navy mb-6">
            Know someone who <br />
            <span className="text-[#B28200]">deserves</span>
            <br />
            to be seen?
          </h2>
          <p className="text-gray-700 mb-10 max-w-xl mx-auto text-sm md:text-base font-medium">
            Nominations are open until June 30, 2026. The process takes under
            ten minutes.
          </p>
          <Button
            asChild
            className="rounded-2xl bg-brand-navy text-white hover:bg-brand-navy/90 h-12 px-8 text-[14px] font-medium border-none"
          >
            <Link href={PAGES.nominate}>Submit a Nomination</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
