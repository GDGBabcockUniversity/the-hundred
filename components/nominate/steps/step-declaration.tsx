import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ShieldCheck } from "lucide-react";
import type { StepProps } from "@/lib/interfaces";

const StepDeclaration = ({ data, updateFields }: StepProps) => {
  return (
    <div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Section F &mdash; Declaration
      </p>
      <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
        Almost there
      </h2>
      <p className="mb-6 text-sm text-muted-foreground">
        Please provide your details and confirm the accuracy of this nomination.
      </p>

      <div className="space-y-6">
        {/* Nominator info */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">
            Your Information
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="nominator-name" className="text-sm font-medium">
                Your Full Name
              </Label>
              <Input
                id="nominator-name"
                placeholder="e.g. John Doe"
                value={data.nominatorName}
                onChange={(e) =>
                  updateFields({ nominatorName: e.target.value })
                }
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="nominator-email" className="text-sm font-medium">
                Your Email Address
              </Label>
              <Input
                id="nominator-email"
                type="email"
                placeholder="e.g. john@babcock.edu.ng"
                value={data.nominatorEmail}
                onChange={(e) =>
                  updateFields({ nominatorEmail: e.target.value })
                }
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label
              htmlFor="nominator-relationship"
              className="text-sm font-medium"
            >
              Relationship to Nominee
            </Label>
            <Input
              id="nominator-relationship"
              placeholder="e.g. Classmate, Mentor, Faculty Advisor"
              value={data.nominatorRelationship}
              onChange={(e) =>
                updateFields({ nominatorRelationship: e.target.value })
              }
            />
          </div>
        </div>

        {/* Confirmations */}
        <div className="space-y-4 rounded-xl border border-gray-100 bg-gray-50/50 p-5">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-5 text-brand-green" />
            <h3 className="text-sm font-semibold text-foreground">
              Declarations
            </h3>
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="confirm-accurate"
              checked={data.confirmAccurate}
              onCheckedChange={(checked) =>
                updateFields({ confirmAccurate: checked === true })
              }
              className="mt-0.5"
            />
            <Label
              htmlFor="confirm-accurate"
              className="text-sm leading-relaxed text-muted-foreground"
            >
              I confirm that all information provided in this nomination is
              accurate and truthful to the best of my knowledge.
            </Label>
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="confirm-no-guarantee"
              checked={data.confirmNoGuarantee}
              onCheckedChange={(checked) =>
                updateFields({ confirmNoGuarantee: checked === true })
              }
              className="mt-0.5"
            />
            <Label
              htmlFor="confirm-no-guarantee"
              className="text-sm leading-relaxed text-muted-foreground"
            >
              I understand that submitting this nomination does not guarantee
              selection into The 100.
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export { StepDeclaration };
