import { CtaSection } from "@/components/web";
import {
  FaqSection,
  HeroSection,
  PriceSection,
  BentoGridSection,
  StatsSection,
} from "./components";

export const Main = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <BentoGridSection />
      <PriceSection />
      <CtaSection />
      <FaqSection />
    </main>
  );
};
