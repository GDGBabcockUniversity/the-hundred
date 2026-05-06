import { cn } from "@/lib/utils";
import type { NominationData } from "../nomination-form";

interface StepNominationTypeProps {
  data: NominationData;
  updateFields: (fields: Partial<NominationData>) => void;
}

const OPTIONS = [
  {
    value: "other" as const,
    title: "I am nominating someone else",
    description: "Most common. You\u2019re championing another student.",
  },
  {
    value: "self" as const,
    title: "I am nominating myself",
    description: "Self-nominations are accepted and treated equally.",
  },
];

export function StepNominationType({
  data,
  updateFields,
}: StepNominationTypeProps) {
  return (
    <div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Section A &mdash; Nomination Type
      </p>
      <h2 className="mb-6 font-serif text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
        Are you nominating yourself or someone else?
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {OPTIONS.map((option) => {
          const isSelected = data.nominationType === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => updateFields({ nominationType: option.value })}
              className={cn(
                "group relative flex flex-col items-start gap-2 rounded-xl border-2 p-5 text-left transition-all duration-200 sm:p-6",
                isSelected
                  ? "border-brand-navy bg-brand-navy text-white shadow-lg"
                  : "border-gray-200 bg-white text-foreground hover:border-gray-300 hover:shadow-sm",
              )}
            >
              {/* Radio indicator */}
              <div
                className={cn(
                  "flex size-5 items-center justify-center rounded-full border-2 transition-colors",
                  isSelected
                    ? "border-white bg-white"
                    : "border-gray-300 bg-white",
                )}
              >
                {isSelected && (
                  <div className="size-2.5 rounded-full bg-brand-navy" />
                )}
              </div>

              <div>
                <p className="text-sm font-semibold sm:text-base">
                  {option.title}
                </p>
                <p
                  className={cn(
                    "mt-0.5 text-xs sm:text-sm",
                    isSelected ? "text-white/70" : "text-muted-foreground",
                  )}
                >
                  {option.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
