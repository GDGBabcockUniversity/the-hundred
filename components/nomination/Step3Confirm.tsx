import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function Step3Confirm({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-2">
          —— STEP 3
        </p>
        <h2 className="text-3xl font-serif text-brand-navy mb-2">
          Confirm and submit.
        </h2>
        <p className="text-gray-500 text-sm">
          Please review the terms and confirm before submitting your nomination.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-6 mb-8">
        <h3 className="text-sm font-semibold text-brand-navy mb-4">Please verify the following:</h3>
        
        <div className="flex items-start space-x-3">
          <Checkbox id="term1" className="mt-1" />
          <label htmlFor="term1" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
            I confirm that the information provided is true and accurate to the best of my knowledge.
          </label>
        </div>
        
        <div className="flex items-start space-x-3">
          <Checkbox id="term2" className="mt-1" />
          <label htmlFor="term2" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
            I agree that the selection committee may contact me for further information if needed (my identity remains confidential to the nominee).
          </label>
        </div>
        
        <div className="flex items-start space-x-3">
          <Checkbox id="term3" className="mt-1" />
          <label htmlFor="term3" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
            I understand that my nomination is subject to review and does not guarantee selection into The 100 class.
          </label>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Button onClick={onNext} className="w-full sm:w-auto rounded-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12 px-12 mb-4">
          Submit Nomination
        </Button>
        <Button variant="ghost" onClick={onPrev} className="text-gray-500 hover:text-brand-navy">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to edit
        </Button>
      </div>
    </div>
  );
}
