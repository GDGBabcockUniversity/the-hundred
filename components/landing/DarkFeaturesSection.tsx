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
              If you have watched someone put in years of work that nobody
              officially named — this is the platform that names it. The 100
              makes meaningful contribution visible across this campus, reaching
              beyond the department, the team, and the group chat.
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
              Student achievements at Babcock fade fast. By graduation, so much
              of what students built, organized, and created has already started
              to disappear. The 100 is the attempt to hold that record, so the
              work that happened here can still be found, read, and built on
              years from now.
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
              When a campus publicly celebrates its builders, researchers,
              creators, and leaders, it tells students what this place actually
              values. The 100 is how Babcock says: the work you did here
              mattered.
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
