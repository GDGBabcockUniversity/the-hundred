import type { Metadata } from "next";
import { NominationForm } from "@/components/nominate/nomination-form";

export const metadata: Metadata = {
  title: "Nominate a Student — The 100",
  description:
    "Nominate a student at Babcock University for The 100. Selection is criteria-based and evidence-supported.",
};

const NominatePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="border-b bg-white px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Nominate a Student
          </p>
          <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl md:text-5xl">
            Who are you putting forward?
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Selection is criteria-based and evidence-supported. Completing this
            form does not guarantee selection. All information is treated with
            discretion.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-gray-50/50 px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-3xl">
          <NominationForm />
        </div>
      </section>
    </>
  );
};

export default NominatePage;
