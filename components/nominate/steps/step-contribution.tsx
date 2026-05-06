import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { StepProps } from "@/lib/interfaces";

const StepContribution = ({ data, updateFields }: StepProps) => {
  return (
    <div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Section D &mdash; Core Contribution
      </p>
      <h2 className="mb-6 font-serif text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
        What has this nominee done?
      </h2>

      <div className="space-y-6">
        <div className="space-y-1.5">
          <Label htmlFor="brief-summary" className="text-sm font-medium">
            In 50 words or less, what is this nominee best known for
            contributing?
          </Label>
          <Textarea
            id="brief-summary"
            placeholder="Brief summary of their defining contribution..."
            rows={3}
            value={data.briefSummary}
            onChange={(e) => updateFields({ briefSummary: e.target.value })}
            className="resize-none"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="full-description" className="text-sm font-medium">
            Describe what the nominee has done and why they should be
            considered. (What have they built, led, created, solved, or
            improved?)
          </Label>
          <Textarea
            id="full-description"
            placeholder="Full description of contribution..."
            rows={4}
            value={data.fullDescription}
            onChange={(e) => updateFields({ fullDescription: e.target.value })}
            className="resize-none"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="impact" className="text-sm font-medium">
            What specific impact has this nominee had? (Who or what was
            affected? What changed?)
          </Label>
          <Textarea
            id="impact"
            placeholder="Describe measurable or observable impact..."
            rows={4}
            value={data.impact}
            onChange={(e) => updateFields({ impact: e.target.value })}
            className="resize-none"
          />
        </div>
      </div>
    </div>
  );
};

export { StepContribution };
