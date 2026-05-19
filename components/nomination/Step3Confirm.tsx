import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function Step3Confirm({
  onNext,
  onPrev,
}: {
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-2">
          STEP 3 —
        </p>
        <h2 className="text-3xl font-serif text-brand-navy mb-2 font-semibold">
          Confirm and submit
        </h2>
        <p className="text-gray-500 text-sm">
          Please read and confirm the following before submitting your
          nomination.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-6 mb-8">
        <h3 className="text-sm font-semibold text-brand-navy mb-4">
          By submitting this form, I confirm:
        </h3>

        <div className="flex items-start space-x-3">
          <Checkbox id="term1" className="mt-1" />
          <label
            htmlFor="term1"
            className="text-sm text-gray-600 leading-relaxed cursor-pointer"
          >
            The information I have provided is accurate to the best of my
            knowledge.
          </label>
        </div>

        <div className="flex items-start space-x-3">
          <Checkbox id="term2" className="mt-1" />
          <label
            htmlFor="term2"
            className="text-sm text-gray-600 leading-relaxed cursor-pointer"
          >
            I consent to the nominee being contacted by the Babcock 100
            committee if they are shortlisted.
          </label>
        </div>

        <div className="flex items-start space-x-3">
          <Checkbox id="term3" className="mt-1" />
          <label
            htmlFor="term3"
            className="text-sm text-gray-600 leading-relaxed cursor-pointer"
          >
            I understand that submission does not guarantee selection.
          </label>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Button
          onClick={onNext}
          className="w-full rounded-xl bg-brand-navy text-white hover:bg-brand-navy/90 h-12 px-12 mb-4"
        >
          Submit Nomination
        </Button>

        <p className="text-gray-500 text-xs mb-4">
          Your response will be reviewed by the Babcock 100 coordination team.
        </p>

        <Button
          variant="ghost"
          onClick={onPrev}
          className="text-gray-500 hover:text-brand-navy"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to edit
        </Button>
      </div>
    </div>
  );
}
