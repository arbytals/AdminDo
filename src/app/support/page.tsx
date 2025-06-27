"use client";

import { LayoutContainer } from "@/components/layout-container";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { GetStartedSection } from "@/components/sections/GetStartedSection";
import { SupportBenefitsSection } from "@/components/sections/SupportBenefitsSection";
import Image from "next/image";
import Link from "next/link";

export default function SupportPage() {
  const faqItems = [
    {
      question: "Does the AI sound robotic?",
      answer: "Our customers say callers can't tell it isn't human.",
    },
    {
      question: "Can I keep my existing number?",
      answer: "Absolutely, we will port it in or forward it.",
    },
    {
      question: "What happens after hours?",
      answer: "Exactly the same thing that happens at 2 pm: we answer.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Yes. We encrypt everything in transit and at rest, and comply with Australian Privacy Principles.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#e4d6fa] via-purple-50 to-white dark:from-purple-950 dark:via-purple-900/50 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background gradients and patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-100 dark:from-purple-950 dark:via-purple-900/90 dark:to-purple-950" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(216,180,254,0.05)_0deg,_transparent_60deg,_transparent_300deg,_rgba(216,180,254,0.05)_360deg)] dark:bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(168,85,247,0.02)_0deg,_transparent_60deg,_transparent_300deg,_rgba(168,85,247,0.02)_360deg)]" />

        <LayoutContainer className="relative max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900 dark:text-white">Your </span>
                  <span className="text-[#5b21b6] dark:text-purple-400">
                    Assistant
                  </span>
                  <span className="text-gray-900 dark:text-white">,</span>
                  <br />
                  <span className="text-gray-900 dark:text-white">
                    Always On
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Point</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                  Maintenance, monitoring, and insights that keep your AI
                  getting smarter, not slower.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-block bg-[#5b21b6] dark:bg-purple-600 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-[#4c1d96] dark:hover:bg-purple-700 transition-colors shadow-lg dark:shadow-purple-500/20">
                Book a Free Call
              </Link>
            </div>

            {/* Right Content - Support Hero Image */}
            <div className="relative">
              <Image
                src="/support-hero.png"
                alt="AI Assistant Support & Maintenance"
                width={600}
                height={500}
                className="mx-auto"
              />
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* Support Benefits Section */}
      <SupportBenefitsSection />

      {/* Experience Section */}
      <ExperienceSection
        title="Experience Our Support Excellence"
        description="Listen to real support interactions showcasing how our AI assistants handle various scenarios with expertise and care"
        cards={[
          {
            title: "Technical Support",
            subtitle: "System Integration & Troubleshooting",
            onClick: () => {},
          },
          {
            title: "Customer Service",
            subtitle: "Issue Resolution & Follow-up",
            onClick: () => {},
          },
          {
            title: "Product Specialist",
            subtitle: "Feature Guidance & Best Practices",
            onClick: () => {},
          },
        ]}
      />

      {/* FAQ Section */}
      <FAQSection items={faqItems} />

      {/* Get Started Section */}
      <GetStartedSection />
    </main>
  );
}
