"use client";
import Hero from "src/components/visual/hero";
import FeaturesGrid from "src/components/visual/features-grid";
import Brands from "src/components/visual/brands";
import FAQ from "src/components/visual/faq";
import Materials from "src/components/visual/materials";
export default function Home() {
  return (
    <>
            <Hero />
           <FeaturesGrid />
            <Materials />
           <Brands />
           <FAQ />
    </>
  );
}