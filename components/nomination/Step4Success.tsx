import Image from "next/image";
import Link from "next/link";

export function Step4Success() {
  return (
    <div className="animate-in zoom-in-95 duration-500 max-w-7xl mx-auto">
      <div className="bg-brand-navy rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-xl">
        <div className="flex justify-center mb-6 relative z-10">
          <div className="w-16 h-16 rounded-full bg-brand-amber/20 flex items-center justify-center">
            <Image src="/success-check.png" alt="Success Check" width={32} height={32} className="w-8 h-8 object-contain" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif mb-4 relative z-10 font-semibold leading-snug">
          Thank you.
          <br />
          Your nomination has been received.
        </h2>

        <p className="text-gray-400 text-sm mb-10 max-w-md mx-auto relative z-10">
          If the person you nominated is shortlisted, they will be contacted
          directly and invited to submit their own profile.
        </p>

        <div className="relative z-10 border-t border-white/10 pt-6">
          <Link
            href="/nominate"
            onClick={() => window.location.reload()}
            className="text-sm text-brand-amber hover:text-white transition-colors"
          >
            Nominate another student →
          </Link>
        </div>

        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="text-sm font-semibold text-brand-navy hover:text-brand-blue"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
