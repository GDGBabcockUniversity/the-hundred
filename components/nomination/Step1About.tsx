import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import type { NominationFormData } from "@/lib/types";

interface Step1AboutProps {
  formData: NominationFormData;
  updateFormData: (updates: Partial<NominationFormData>) => void;
  onNext: () => void;
}

export function Step1About({
  formData,
  updateFormData,
  onNext,
}: Step1AboutProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.school.trim()) newErrors.school = "School is required";
    if (!formData.department.trim())
      newErrors.department = "Department is required";
    if (!formData.level) newErrors.level = "Level is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validate()) {
      onNext();
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-2">
          STEP 1 —
        </p>
        <h2 className="text-3xl font-serif text-brand-navy mb-2 font-semibold">
          About the nominee
        </h2>
        <p className="text-gray-500 text-sm">
          Tell us who you are nominating. This is how we&apos;ll identify and
          contact them if they&apos;re shortlisted.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label
              htmlFor="firstName"
              className="text-xs text-gray-500 uppercase tracking-wider font-semibold"
            >
              First name <span className="text-brand-red">*</span>
            </Label>
            <Input
              id="firstName"
              placeholder="e.g. John"
              className="h-12 bg-gray-50/50 border-gray-200"
              value={formData.firstName}
              onChange={(e) => updateFormData({ firstName: e.target.value })}
            />
            {errors.firstName && (
              <p className="text-xs text-brand-red">{errors.firstName}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="lastName"
              className="text-xs text-gray-500 uppercase tracking-wider font-semibold"
            >
              Last name <span className="text-brand-red">*</span>
            </Label>
            <Input
              id="lastName"
              placeholder="e.g. Doe"
              className="h-12 bg-gray-50/50 border-gray-200"
              value={formData.lastName}
              onChange={(e) => updateFormData({ lastName: e.target.value })}
            />
            {errors.lastName && (
              <p className="text-xs text-brand-red">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label
              htmlFor="school"
              className="text-xs text-gray-500 uppercase tracking-wider font-semibold"
            >
              School <span className="text-brand-red">*</span>
            </Label>
            <Input
              id="school"
              placeholder="e.g. School of Computing"
              className="h-12 bg-gray-50/50 border-gray-200"
              value={formData.school}
              onChange={(e) => updateFormData({ school: e.target.value })}
            />
            {errors.school && (
              <p className="text-xs text-brand-red">{errors.school}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="department"
              className="text-xs text-gray-500 uppercase tracking-wider font-semibold"
            >
              Department <span className="text-brand-red">*</span>
            </Label>
            <Input
              id="department"
              placeholder="e.g. Computer Science"
              className="h-12 bg-gray-50/50 border-gray-200"
              value={formData.department}
              onChange={(e) => updateFormData({ department: e.target.value })}
            />
            {errors.department && (
              <p className="text-xs text-brand-red">{errors.department}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label
              htmlFor="level"
              className="text-xs text-gray-500 uppercase tracking-wider font-semibold"
            >
              Level <span className="text-brand-red">*</span>
            </Label>
            <Select
              value={formData.level}
              onValueChange={(value) => updateFormData({ level: value })}
            >
              <SelectTrigger
                id="level"
                className="bg-gray-50/50 border-gray-200 w-full"
              >
                <SelectValue placeholder="Select level..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="100L">100L</SelectItem>
                <SelectItem value="200L">200L</SelectItem>
                <SelectItem value="300L">300L</SelectItem>
                <SelectItem value="400L">400L</SelectItem>
                <SelectItem value="500L">500L</SelectItem>
                <SelectItem value="600L">600L</SelectItem>
                <SelectItem value="Postgraduate">Postgraduate</SelectItem>
              </SelectContent>
            </Select>
            {errors.level && (
              <p className="text-xs text-brand-red">{errors.level}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-xs text-gray-500 uppercase tracking-wider font-semibold"
            >
              School Email Address <span className="text-brand-red">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="e.g. john@babcock.edu.ng"
              className="h-12 bg-gray-50/50 border-gray-200"
              value={formData.email}
              onChange={(e) => updateFormData({ email: e.target.value })}
            />
            {errors.email && (
              <p className="text-xs text-brand-red">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="pt-8 flex justify-end">
          <Button
            onClick={handleContinue}
            className="rounded-xl bg-brand-navy text-white hover:bg-brand-navy/90 h-12 px-8"
          >
            Continue
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
