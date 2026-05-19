import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Step1About({ onNext }: { onNext: () => void }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-2">
          —— STEP 1
        </p>
        <h2 className="text-3xl font-serif text-brand-navy mb-2">
          About the nominee.
        </h2>
        <p className="text-gray-500 text-sm">
          Tell us about the person you are nominating. All fields are required unless stated otherwise.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-xs text-gray-500 uppercase tracking-wider font-semibold">First name <span className="text-brand-red">*</span></Label>
            <Input id="firstName" placeholder="e.g. John" className="h-12 bg-gray-50/50 border-gray-200" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Last name <span className="text-brand-red">*</span></Label>
            <Input id="lastName" placeholder="e.g. Doe" className="h-12 bg-gray-50/50 border-gray-200" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email <span className="text-brand-red">*</span></Label>
            <Input id="email" type="email" placeholder="e.g. john.doe@babcock.edu.ng" className="h-12 bg-gray-50/50 border-gray-200" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Phone number <span className="text-brand-red">*</span></Label>
            <Input id="phone" type="tel" placeholder="e.g. +234 800 000 0000" className="h-12 bg-gray-50/50 border-gray-200" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedin" className="text-xs text-gray-500 uppercase tracking-wider font-semibold">LinkedIn / Social Profile <span className="text-brand-red">*</span></Label>
          <Input id="linkedin" placeholder="www.linkedin.com/in/johndoe" className="h-12 bg-gray-50/50 border-gray-200" />
        </div>

        <div className="pt-8 flex justify-end">
          <Button onClick={onNext} className="rounded-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12 px-8">
            Continue
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
