import Image from "next/image";
import { Play } from "lucide-react";
import { IMAGES } from "@/lib/constants";

export function DarkFeaturesSection() {
  return (
    <section className="bg-brand-navy text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-brand-amber text-sm font-semibold uppercase tracking-widest mb-4">
            WHY IT MATTERS —
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-snug mb-6 font-bold">
            Because good work deserves a{" "}
            <span className="text-gray-500 italic font-bold">
              public record
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-l border-white/10">
          {/* Feature 1 */}
          <div className="relative pl-10 border-l-2 border-brand-blue group">
            <div className="absolute left-1 top-0 flex items-center gap-0.5 text-brand-blue">
              <div className="w-[2px] h-5 bg-current" />
              <Play className="w-5 h-5 fill-current" />
            </div>
            <h3 className="text-2xl font-serif mb-4 flex items-center gap-3">
              Visibility
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Many students contribute enormously to campus life witout ever
              receiving formal recognition. The 100 makes that work visible and
              legibel to the wider community.
            </p>
            <Image
              src={IMAGES.visibility_icon.src}
              alt="Visibility"
              width={IMAGES.visibility_icon.w}
              height={IMAGES.visibility_icon.h}
              className="w-60 h-60 object-contain relative -left-6 md:-left-16"
            />
          </div>

          <div className="relative pl-10 border-l-2 border-brand-red group">
            <div className="absolute left-1 top-0 flex items-center gap-0.5 text-brand-red">
              <div className="w-[2px] h-5 bg-current" />
              <Play className="w-5 h-5 fill-current" />
            </div>
            <h3 className="text-2xl font-serif mb-4 flex items-center gap-3">
              Memory
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Contributions fade. Stories get lost. This platform is designed as
              a living archive — a record that persists long after a student has
              graduated.
            </p>
            <Image
              src={IMAGES.memory_icon.src}
              alt="Memory"
              width={IMAGES.memory_icon.w}
              height={IMAGES.memory_icon.h}
              className="w-60 h-60 object-contain relative -left-6 md:-left-19"
            />
          </div>

          <div className="relative pl-10 border-l-2 border-brand-green group">
            <div className="absolute left-1 top-0 flex items-center gap-0.5 text-brand-green">
              <div className="w-[2px] h-5 bg-current" />
              <Play className="w-5 h-5 fill-current" />
            </div>
            <h3 className="text-2xl font-serif mb-4 flex items-center gap-3">
              Culture
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              When meaningful contribution is celebrated publicly and seriously,
              it creates a stronger campus culture — one that values doing over
              performing.
            </p>
            <Image
              src={IMAGES.culture_icon.src}
              alt="Culture"
              width={IMAGES.culture_icon.w}
              height={IMAGES.culture_icon.h}
              className="w-60 h-60 object-contain relative -left-6 md:-left-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
