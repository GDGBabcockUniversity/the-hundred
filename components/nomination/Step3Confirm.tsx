"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import type { NominationFormData } from "@/lib/types";

interface Step3ConfirmProps {
  formData: NominationFormData;
  isSubmitting: boolean;
  submitError: string | null;
  onSubmit: () => void;
  onPrev: () => void;
}

export function Step3Confirm({
  formData,
  isSubmitting,
  submitError,
  onSubmit,
  onPrev,
}: Step3ConfirmProps) {
  const [checks, setChecks] = useState({
    term1: false,
    term2: false,
    term3: false,
  });
  const allChecked = checks.term1 && checks.term2 && checks.term3;

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

      {/* Summary Card */}
      <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-6 mb-8">
        <h3 className="text-sm font-semibold text-brand-navy mb-4">
          Nomination Summary
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-400 text-xs uppercase tracking-wider">
              Nominee
            </span>
            <p className="text-brand-navy font-medium">
              {formData.firstName} {formData.lastName}
            </p>
          </div>
          <div>
            <span className="text-gray-400 text-xs uppercase tracking-wider">
              Email
            </span>
            <p className="text-brand-navy font-medium">{formData.email}</p>
          </div>
          <div>
            <span className="text-gray-400 text-xs uppercase tracking-wider">
              School &amp; Department
            </span>
            <p className="text-brand-navy font-medium">
              {formData.school} — {formData.department}
            </p>
          </div>
          <div>
            <span className="text-gray-400 text-xs uppercase tracking-wider">
              Level
            </span>
            <p className="text-brand-navy font-medium">{formData.level}</p>
          </div>
          <div className="sm:col-span-2">
            <span className="text-gray-400 text-xs uppercase tracking-wider">
              Recognition Area(s)
            </span>
            <p className="text-brand-navy font-medium">
              {formData.categories.join(", ")}
            </p>
          </div>
        </div>
      </div>

      {/* Terms */}
      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-6 mb-8">
        <h3 className="text-sm font-semibold text-brand-navy mb-4">
          By submitting this form, I confirm:
        </h3>

        <div className="flex items-start space-x-3">
          <Checkbox
            id="term1"
            className="mt-1"
            checked={checks.term1}
            onCheckedChange={(v) => setChecks((p) => ({ ...p, term1: !!v }))}
          />
          <label
            htmlFor="term1"
            className="text-sm text-gray-600 leading-relaxed cursor-pointer"
          >
            The information I have provided is accurate to the best of my
            knowledge.
          </label>
        </div>

        <div className="flex items-start space-x-3">
          <Checkbox
            id="term2"
            className="mt-1"
            checked={checks.term2}
            onCheckedChange={(v) => setChecks((p) => ({ ...p, term2: !!v }))}
          />
          <label
            htmlFor="term2"
            className="text-sm text-gray-600 leading-relaxed cursor-pointer"
          >
            I consent to the nominee being contacted by the Babcock 100
            committee if they are shortlisted.
          </label>
        </div>

        <div className="flex items-start space-x-3">
          <Checkbox
            id="term3"
            className="mt-1"
            checked={checks.term3}
            onCheckedChange={(v) => setChecks((p) => ({ ...p, term3: !!v }))}
          />
          <label
            htmlFor="term3"
            className="text-sm text-gray-600 leading-relaxed cursor-pointer"
          >
            I understand that submission does not guarantee selection.
          </label>
        </div>
      </div>

      {/* Error message */}
      {submitError && (
        <div className="bg-brand-red/10 border border-brand-red/20 rounded-xl p-4 mb-6">
          <p className="text-sm text-brand-red">{submitError}</p>
        </div>
      )}

      <div className="flex flex-col items-center">
        <Button
          onClick={onSubmit}
          disabled={!allChecked || isSubmitting}
          className="w-full rounded-xl bg-brand-navy text-white hover:bg-brand-navy/90 h-12 px-12 mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Nomination"
          )}
        </Button>

        <p className="text-gray-500 text-xs mb-4">
          Your response will be reviewed by the Babcock 100 coordination team.
        </p>

        <Button
          variant="ghost"
          onClick={onPrev}
          disabled={isSubmitting}
          className="text-gray-500 hover:text-brand-navy"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to edit
        </Button>
      </div>
    </div>
  );
}
