"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepIndicator } from "./step-indicator";
import { StepNominationType } from "./steps/step-nomination-type";
import { StepNomineeInfo } from "./steps/step-nominee-info";
import { StepRecognitionArea } from "./steps/step-recognition-area";
import { StepContribution } from "./steps/step-contribution";
import { StepEvidence } from "./steps/step-evidence";
import { StepDeclaration } from "./steps/step-declaration";
import { STEPPER_LABELS } from "@/lib/constants";
import type { NominationData } from "@/lib/interfaces";

const INITIAL_DATA: NominationData = {
  nominationType: "other",
  nomineeName: "",
  department: "",
  faculty: "",
  level: "",
  phone: "",
  email: "",
  social: "",
  recognitionArea: "",
  briefSummary: "",
  fullDescription: "",
  impact: "",
  evidenceLinks: "",
  nominatorName: "",
  nominatorEmail: "",
  nominatorRelationship: "",
  confirmAccurate: false,
  confirmNoGuarantee: false,
};

const TOTAL_STEPS = STEPPER_LABELS.length;

const NominationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<NominationData>(INITIAL_DATA);

  const updateFields = (fields: Partial<NominationData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = () => {
    // TODO: Wire to Google Sheets API
    console.log("Form submitted:", formData);
    alert("Thank you! Your nomination has been submitted.");
  };

  const isLastStep = currentStep === TOTAL_STEPS - 1;

  return (
    <div className="space-y-8">
      {/* Progress indicator */}
      <div className="rounded-xl border bg-white p-4 shadow-sm sm:p-6">
        <StepIndicator currentStep={currentStep} />
      </div>

      {/* Active step content */}
      <div className="rounded-xl border bg-white p-5 shadow-sm sm:p-8">
        {currentStep === 0 && (
          <StepNominationType data={formData} updateFields={updateFields} />
        )}
        {currentStep === 1 && (
          <StepNomineeInfo data={formData} updateFields={updateFields} />
        )}
        {currentStep === 2 && (
          <StepRecognitionArea data={formData} updateFields={updateFields} />
        )}
        {currentStep === 3 && (
          <StepContribution data={formData} updateFields={updateFields} />
        )}
        {currentStep === 4 && (
          <StepEvidence data={formData} updateFields={updateFields} />
        )}
        {currentStep === 5 && (
          <StepDeclaration data={formData} updateFields={updateFields} />
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground disabled:invisible"
        >
          <ArrowLeft className="size-3.5" />
          Previous section
        </button>

        <Button
          type="button"
          onClick={isLastStep ? handleSubmit : handleNext}
          className="h-10 gap-2 rounded-xl bg-brand-navy px-6 text-sm text-white hover:bg-brand-navy/90 sm:h-11 sm:px-8"
        >
          {isLastStep ? "Submit Nomination" : "Continue"}
          {!isLastStep && <ArrowRight className="size-3.5" />}
        </Button>
      </div>
    </div>
  );
};

export { NominationForm };
