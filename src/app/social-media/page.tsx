"use client";

import { LayoutContainer } from "@/components/layout-container";
import { GetStartedSection } from "@/components/sections/GetStartedSection";
import Image from "next/image";
import Link from "next/link";
import { SocialWhySection } from "@/components/sections/SocialWhySection";
import { SocialHowItWorksSection } from "@/components/sections/SocialHowItWorksSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function SocialMediaPage() {
  const faqItems = [
    {
      question: "Can I use AdminDo for my business?",
      answer: "Yes, AdminDo is designed to work for businesses of all sizes.",
    },
    {
      question: "Is it secure?",
      answer: "Yes, AdminDo is designed to work for businesses of all sizes.",
    },
    {
      question: "Is it easy to use?",
      answer: "Yes, AdminDo is designed to work for businesses of all sizes.",
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
          {/* Title and Description */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="text-gray-900 dark:text-white">
                Let AdminDo{" "}
              </span>
              <span className="text-[#5b21b6] dark:text-purple-400">
                Run Your Socials
              </span>
              <span className="text-gray-900 dark:text-white">,</span>
              <br />
              <span className="text-gray-900 dark:text-white">
                While You Run the Business
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              A 24/7 digital teammate that plans, posts, replies, and reports
              across all your channels: Facebook, Instagram, TikTok, LinkedIn,
              X, Threads, so you can focus on your clients.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#5b21b6] dark:bg-purple-600 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-[#4c1d96] dark:hover:bg-purple-700 transition-colors shadow-lg dark:shadow-purple-500/20">
              Book a Free Demo
            </Link>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <Image
              src="/social-hero.png"
              alt="Social Media Management Dashboard"
              width={1200}
              height={800}
              className="mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </LayoutContainer>
      </section>

      {/* Why AdminDo Section */}
      <SocialWhySection />

      {/* How It Works & Client Results Section */}
      <SocialHowItWorksSection />

      <FAQSection items={faqItems} />

      <GetStartedSection
        title="Ready to Take Social Off Your Plate?"
        buttons={[
          {
            text: "Start My 14-Day Free Trial",
            href: "/signup",
            variant: "primary",
          },
          {
            text: "Book a Call with a Human",
            href: "/contact",
            variant: "secondary",
          },
        ]}
      />
    </main>
  );
}
