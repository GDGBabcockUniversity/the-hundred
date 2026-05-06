import { RECOGNITION_AREAS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { StepProps } from "@/lib/interfaces";

const StepRecognitionArea = ({ data, updateFields }: StepProps) => {
  return (
    <div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Section C &mdash; Recognition Area
      </p>
      <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
        Primary recognition area
      </h2>
      <p className="mb-6 text-sm text-muted-foreground">
        Select the area that best describes the nominee&apos;s primary
        contribution.
      </p>

      <div className="flex flex-wrap gap-2.5">
        {RECOGNITION_AREAS.map((area) => {
          const isSelected = data.recognitionArea === area;
          return (
            <button
              key={area}
              type="button"
              onClick={() => updateFields({ recognitionArea: area })}
              className={cn(
                "rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200",
                isSelected
                  ? "border-brand-green bg-brand-green/5 text-brand-green shadow-sm"
                  : "border-gray-200 bg-white text-foreground hover:border-gray-300 hover:bg-gray-50",
              )}
            >
              {area}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export { StepRecognitionArea };
