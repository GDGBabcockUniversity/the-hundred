import { Eye, Brain, Network } from "lucide-react";

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
          <div className="relative pl-8 border-l-2 border-brand-blue group">
            <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-brand-blue" />
            <h3 className="text-2xl font-serif mb-4 flex items-center gap-3">
              Visibility
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Many students contribute enormously to campus life witout ever
              receiving formal recognition. The 100 makes that work visible and
              legibel to the wider community.
            </p>
            <Eye className="w-16 h-16 text-brand-blue transition-colors stroke-1" />
          </div>

          {/* Feature 2 */}
          <div className="relative pl-8 border-l-2 border-brand-red group md:border-l-0 md:pl-0 md:before:content-[''] md:before:absolute md:before:-left-6 md:before:top-0 md:before:w-0.5 md:before:h-full md:before:bg-brand-red">
            <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-brand-red md:-left-5.5" />
            <h3 className="text-2xl font-serif mb-4 flex items-center gap-3">
              Memory
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Contributions fade. Stories get lost. This platform is designed as
              a living archive — a record that persists long after a student has
              graduated.
            </p>
            <Brain className="w-16 h-16 text-brand-red transition-colors stroke-1" />
          </div>

          {/* Feature 3 */}
          <div className="relative pl-8 border-l-2 border-brand-green group md:border-l-0 md:pl-0 md:before:content-[''] md:before:absolute md:before:-left-6 md:before:top-0 md:before:w-0.5 md:before:h-full md:before:bg-brand-green">
            <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-brand-green md:-left-5.5" />
            <h3 className="text-2xl font-serif mb-4 flex items-center gap-3">
              Culture
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              When meaningful contribution is celebrated publicly and seriously,
              it creates a stronger campus culture — one that values doing over
              performing.
            </p>
            <Network className="w-16 h-16 text-brand-green transition-colors stroke-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
