"use client";

import { useState } from "react";
import { Step1About } from "@/components/nomination/Step1About";
import { Step2Nomination } from "@/components/nomination/Step2Nomination";
import { Step3Confirm } from "@/components/nomination/Step3Confirm";
import { Step4Success } from "@/components/nomination/Step4Success";
import { cn } from "@/lib/utils";

export function NominationWizard() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

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
      <div className="flex items-center justify-between mb-16 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-100 -z-10" />

        {steps.map((s) => (
          <div
            key={s.num}
            className="flex flex-col items-center gap-2 bg-white px-2"
          >
            <div
              className={cn("w-3 h-3 rounded-full shrink-0 transition-colors", {
                "bg-brand-blue": step === s.num,
                "bg-brand-green": step > s.num,
                "bg-gray-200": step < s.num,
              })}
            />
            <span
              className={cn(`text-xs font-medium`, {
                "text-brand-navy": step >= s.num,
                "text-gray-400": step < s.num,
              })}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="min-h-[400px]">
        {step === 1 && <Step1About onNext={nextStep} />}
        {step === 2 && <Step2Nomination onNext={nextStep} onPrev={prevStep} />}
        {step === 3 && <Step3Confirm onNext={nextStep} onPrev={prevStep} />}
      </div>
    </div>
  );
}
