import { STEPPER_LABELS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import type { StepIndicatorProps } from "@/lib/interfaces";

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex min-w-[500px] items-center justify-between">
        {STEPPER_LABELS.map((label, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          const isFuture = index > currentStep;

          return (
            <div key={label} className="flex flex-1 items-center">
              {/* Step dot + label */}
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={cn(
                    "flex size-7 items-center justify-center rounded-full border-2 text-xs font-semibold transition-all duration-200 sm:size-8",
                    isActive &&
                      "border-brand-blue bg-brand-blue text-white shadow-md shadow-brand-blue/25",
                    isCompleted && "border-brand-blue bg-brand-blue text-white",
                    isFuture && "border-gray-300 bg-white text-gray-400",
                  )}
                >
                  {isCompleted ? (
                    <Check className="size-3.5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span
                  className={cn(
                    "hidden text-center text-[10px] font-medium leading-tight sm:block sm:text-xs",
                    isActive && "text-brand-blue",
                    isCompleted && "text-brand-blue",
                    isFuture && "text-gray-400",
                  )}
                >
                  {label}
                </span>
              </div>

              {/* Connector line */}
              {index < STEPPER_LABELS.length - 1 && (
                <div className="mx-1 h-0.5 flex-1 sm:mx-2">
                  <div
                    className={cn(
                      "h-full rounded-full transition-colors duration-200",
                      index < currentStep ? "bg-brand-blue" : "bg-gray-200",
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { StepIndicator };
