import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { RECOGNITION_AREAS } from "@/lib/constants";

export function Step2Nomination({
  onNext,
  onPrev,
}: {
  onNext: () => void;
  onPrev: () => void;
}) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(cat)) {
        return prev.filter((c) => c !== cat);
      }
      if (prev.length < 2) {
        return [...prev, cat];
      }
      return prev;
    });
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <p className="text-brand-amber text-sm font-semibold uppercase tracking-widest mb-2">
          STEP 2 —
        </p>
        <h2 className="text-3xl font-serif text-brand-navy mb-2 font-semibold">
          The nomination
        </h2>
        <p className="text-gray-500 text-sm">
          Tell us why this person should be selected for the Founding Class.
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <Label className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
            Which area best describes their contribution? Pick up to two.{" "}
            <span className="text-brand-red">*</span>
          </Label>
          <div className="flex flex-wrap gap-2">
            {RECOGNITION_AREAS.map((cat) => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                  selectedCategories.includes(cat)
                    ? "bg-brand-green/10 border-brand-green text-brand-green"
                    : "bg-white border-gray-200 text-gray-600 hover:border-brand-green/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="reason"
            className="text-xs text-gray-500 uppercase tracking-wider font-semibold"
          >
            In your own words, why does this person deserve to be in the
            Founding Class? <span className="text-brand-red">*</span>
          </Label>
          <p className="text-xs text-gray-400 mb-2">
            What have they done? What's the impact? What makes them stand out? ·
            Minimum 100 words. Maximum 300 words.
          </p>
          <Textarea
            id="reason"
            placeholder="Tell us about their contribution..."
            className="min-h-[150px] bg-gray-50/50 border-gray-200 resize-none"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="evidence"
            className="text-xs text-gray-500 uppercase tracking-wider font-semibold"
          >
            Do you have any links that support this nomination? (Optional)
          </Label>
          <p className="text-xs text-gray-400 mb-2">
            Social media profiles, project links, articles, event pages,
            portfolio — anything that helps us verify the contribution.
          </p>
          <Textarea
            id="evidence"
            placeholder="Paste links here..."
            className="min-h-[150px] bg-gray-50/50 border-gray-200 resize-none"
          />
        </div>

        <div className="pt-8 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onPrev}
            className="text-gray-500 hover:text-brand-navy"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back
          </Button>
          <Button
            onClick={onNext}
            className="rounded-xl bg-brand-navy text-white hover:bg-brand-navy/90 h-12 px-8"
          >
            Continue
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
