"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { ExploreProductsSection } from "@/components/sections/ExploreProductsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-color dark:bg-gray-950">
      <HeroSection />
      <ExploreProductsSection />
      <SolutionsSection />
      <HowItWorksSection />
    </main>
  );
}
