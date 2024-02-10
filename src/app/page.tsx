"use client";
import Hero from "src/components/visual/hero";
import FeaturesGrid from "src/components/visual/features-grid";
import Brands from "src/components/visual/brands";
import FAQ from "src/components/visual/faq";
export default function Home() {
  return (
    <>
            <Hero />
           <FeaturesGrid />
           <Brands />
           <FAQ />
    </>
  );
}