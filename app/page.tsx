import { HeroSection } from "@/components/landing/HeroSection";
import { ValuePropSection } from "@/components/landing/ValuePropSection";
import { DarkFeaturesSection } from "@/components/landing/DarkFeaturesSection";
import { CriteriaSection } from "@/components/landing/CriteriaSection";
// import { ProcessSection } from "@/components/landing/ProcessSection";
import { CtaSection } from "@/components/landing/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuePropSection />
      <DarkFeaturesSection />
      <CriteriaSection />
      {/* <ProcessSection /> */}
      <CtaSection />
    </>
  );
}
