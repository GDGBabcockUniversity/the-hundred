import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { LinkIcon, Upload } from "lucide-react";
import type { NominationData } from "../nomination-form";

interface StepEvidenceProps {
  data: NominationData;
  updateFields: (fields: Partial<NominationData>) => void;
}

export function StepEvidence({ data, updateFields }: StepEvidenceProps) {
  return (
    <div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Section E &mdash; Supporting Evidence
      </p>
      <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
        Back it up
      </h2>
      <p className="mb-6 text-sm text-muted-foreground">
        Provide links to articles, social media posts, projects, portfolios, or
        any supporting evidence that validates this nomination.
      </p>

      <div className="space-y-6">
        <div className="space-y-1.5">
          <Label htmlFor="evidence-links" className="text-sm font-medium">
            Links to supporting materials
          </Label>
          <div className="relative">
            <LinkIcon className="absolute left-3 top-3 size-4 text-muted-foreground" />
            <Input
              id="evidence-links"
              placeholder="Paste links separated by commas..."
              value={data.evidenceLinks}
              onChange={(e) => updateFields({ evidenceLinks: e.target.value })}
              className="pl-9"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Separate multiple links with commas.
          </p>
        </div>

        {/* File upload placeholder */}
        <div className="space-y-1.5">
          <Label className="text-sm font-medium">Upload files (optional)</Label>
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50 p-8 text-center transition-colors hover:border-gray-300">
            <div className="flex size-10 items-center justify-center rounded-full bg-gray-100">
              <Upload className="size-5 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              File upload coming soon
            </p>
            <p className="text-xs text-muted-foreground/70">
              For now, please share links to your files above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
