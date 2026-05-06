import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { NominationData } from "../nomination-form";

interface StepNomineeInfoProps {
  data: NominationData;
  updateFields: (fields: Partial<NominationData>) => void;
}

export function StepNomineeInfo({ data, updateFields }: StepNomineeInfoProps) {
  const isOther = data.nominationType === "other";

  return (
    <div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Section B &mdash; Nominee Information
      </p>
      <h2 className="mb-6 font-serif text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
        {isOther
          ? "Tell us about the student you\u2019re nominating."
          : "Tell us about yourself."}
      </h2>

      <div className="space-y-5">
        {/* Row 1: Name + Department */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="nominee-name" className="text-sm font-medium">
              Full Name of Nominee
            </Label>
            <Input
              id="nominee-name"
              placeholder="e.g. Amara Osei"
              value={data.nomineeName}
              onChange={(e) => updateFields({ nomineeName: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="department" className="text-sm font-medium">
              Department
            </Label>
            <Input
              id="department"
              placeholder="e.g. Computer Science"
              value={data.department}
              onChange={(e) => updateFields({ department: e.target.value })}
            />
          </div>
        </div>

        {/* Row 2: Faculty + Level + Phone */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-1.5">
            <Label htmlFor="faculty" className="text-sm font-medium">
              Faculty / College
            </Label>
            <Input
              id="faculty"
              placeholder="e.g. College of Computing & IT"
              value={data.faculty}
              onChange={(e) => updateFields({ faculty: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="level" className="text-sm font-medium">
              Level
            </Label>
            <Input
              id="level"
              placeholder="e.g. 300 Level"
              value={data.level}
              onChange={(e) => updateFields({ level: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="e.g. +234 801 234 5678"
              value={data.phone}
              onChange={(e) => updateFields({ phone: e.target.value })}
            />
          </div>
        </div>

        {/* Row 3: Email + Social */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="e.g. student@babcock.edu.ng"
              value={data.email}
              onChange={(e) => updateFields({ email: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="social" className="text-sm font-medium">
              Social / Portfolio (optional)
            </Label>
            <Input
              id="social"
              placeholder="Instagram, LinkedIn, or portfolio link"
              value={data.social}
              onChange={(e) => updateFields({ social: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
