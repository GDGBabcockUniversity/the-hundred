import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

export function Step2Nomination({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [
    "Academics", "Community Building", "Innovation", "Entrepreneurship", 
    "Creative Energy", "Sports & Extracurriculars", "Faith & Spiritual Leadership", "Service & Volunteering"
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <p className="text-brand-amber text-sm font-semibold uppercase tracking-widest mb-2">
          —— STEP 2
        </p>
        <h2 className="text-3xl font-serif text-brand-navy mb-2">
          The nomination.
        </h2>
        <p className="text-gray-500 text-sm">
          Tell us why this person should be selected for the class of 2026.
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <Label className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
            Why should they be part of the class? <span className="text-brand-red">*</span>
          </Label>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                  selectedCategory === cat 
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
          <Label htmlFor="reason" className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
            Why is this student an outstanding candidate? (Max 300 words) <span className="text-brand-red">*</span>
          </Label>
          <p className="text-xs text-gray-400 mb-2">Please describe their specific impact, leadership, or contribution. Avoid generalizations and focus on concrete achievements.</p>
          <Textarea 
            id="reason" 
            placeholder="Tell us about their contribution..." 
            className="min-h-[150px] bg-gray-50/50 border-gray-200 resize-none"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="evidence" className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
            Does this student have a specific project/portfolio we should see? (Optional)
          </Label>
          <p className="text-xs text-gray-400 mb-2">Paste a link to their work, startup, or portfolio.</p>
          <Input id="evidence" placeholder="Provide a link to their work" className="h-12 bg-gray-50/50 border-gray-200" />
        </div>

        <div className="pt-8 flex items-center justify-between">
          <Button variant="ghost" onClick={onPrev} className="text-gray-500 hover:text-brand-navy">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back
          </Button>
          <Button onClick={onNext} className="rounded-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12 px-8">
            Continue
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
