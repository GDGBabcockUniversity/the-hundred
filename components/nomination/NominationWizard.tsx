"use client";

import { useState } from "react";
import { Step1About } from "@/components/nomination/Step1About";
import { Step2Nomination } from "@/components/nomination/Step2Nomination";
import { Step3Confirm } from "@/components/nomination/Step3Confirm";
import { Step4Success } from "@/components/nomination/Step4Success";
import { cn } from "@/lib/utils";
import { INITIAL_FORM_DATA } from "@/lib/types";
import type { NominationFormData } from "@/lib/types";

export function NominationWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] =
    useState<NominationFormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const updateFormData = (updates: Partial<NominationFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/nominate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed");
      }

      nextStep();
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // If success step, we don't show the progress indicator
  if (step === 4) {
    return <Step4Success />;
  }

  const steps = [
    { num: 1, label: "About the nominee" },
    { num: 2, label: "Nomination" },
    { num: 3, label: "Submission" },
  ];

  return (
    <div>
      {/* Progress Indicator */}
      <div className="relative mb-16 w-full">
        {/* Background track */}
        <div className="absolute left-[16.66%] right-[16.66%] top-2 h-[2px] bg-gray-100 -z-10" />

        {/* Active track */}
        <div
          className="absolute left-[16.66%] top-2 h-[2px] bg-brand-blue -z-10 transition-all duration-500 ease-in-out"
          style={{ width: `${((step - 1) / (steps.length - 1)) * 66.66}%` }}
        />

        <div className="flex justify-between w-full">
          {steps.map((s) => (
            <div
              key={s.num}
              className="flex flex-col items-center flex-1 gap-2"
            >
              <div className="bg-white px-4">
                <div
                  className={cn(
                    "w-4 h-4 rounded-full shrink-0 transition-colors duration-500",
                    {
                      "bg-brand-blue": step >= s.num,
                      "bg-gray-100": step < s.num,
                    },
                  )}
                />
              </div>
              <span
                className={cn(
                  "text-xs font-medium transition-colors duration-500 text-center",
                  {
                    "text-brand-blue": step >= s.num,
                    "text-gray-400": step < s.num,
                  },
                )}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[400px]">
        {step === 1 && (
          <Step1About
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
          />
        )}
        {step === 2 && (
          <Step2Nomination
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )}
        {step === 3 && (
          <Step3Confirm
            formData={formData}
            isSubmitting={isSubmitting}
            submitError={submitError}
            onSubmit={handleSubmit}
            onPrev={prevStep}
          />
        )}
      </div>
    </div>
  );
}
