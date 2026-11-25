import { Navbar } from "@/components/brand/Navbar";
import { Hero } from "@/components/brand/Hero";
import { ProofStrip } from "@/components/brand/ProofStrip";
import { FeatureBento } from "@/components/brand/FeatureBento";
import { Experience } from "@/components/brand/Experience";
import { DemoShowcase } from "@/components/brand/DemoShowcase";
import { ProcessSteps } from "@/components/brand/ProcessSteps";
import { TemplatePreview } from "@/components/brand/TemplatePreview";
import { Testimonials } from "@/components/brand/Testimonials";
import { PricingTeaser } from "@/components/brand/PricingTeaser";
import { Faq } from "@/components/brand/Faq";
import { FinalCta } from "@/components/brand/FinalCta";
import { Footer } from "@/components/brand/Footer";
import { FairytaleBackground } from "@/components/motion/FairytaleBackground";

export default function Home() {
  return (
    <>
      <FairytaleBackground />
      <Navbar />
      <main id="main">
        <Hero />
        <ProofStrip />
        <FeatureBento />
        <Experience />
        <DemoShowcase />
        <ProcessSteps />
        <TemplatePreview />
        <Testimonials />
        <PricingTeaser />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
