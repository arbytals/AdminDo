"use client";

import { LayoutContainer } from "@/components/layout-container";
import Image from "next/image";
import Link from "next/link";
import { TryItSection } from "@/components/sections/TryItSection";
import { ClientResultsSection } from "@/components/sections/ClientResultsSection";
import { AutomatePaperworkSection } from "@/components/sections/AutomatePaperworkSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function EmailPage() {
  const faqItems = [
    {
      question: "How does it work?",
      answer:
        "It's simple! You send an email to our AI, and it builds a quote for you.",
    },
    {
      question: "Does it work with Xero, MYOB, QuickBooks & Reckon?",
      answer: "Yes, it works with Xero, MYOB, QuickBooks & Reckon",
    },
    {
      question: "Is it secure?",
      answer:
        "Yes, it's secure. We use the latest encryption technology to protect your data.",
    },
    {
      question: "Is it easy to use?",
      answer: "Yes, it's easy to use. You can start using it in minutes.",
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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="text-gray-900 dark:text-white">
                From Inbox to{" "}
              </span>
              <span className="text-[#5b21b6] dark:text-purple-400">
                Paid Invoice
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Turn client emails into quotes, invoices, and payments,
              automatically. AdminDo is your AI-powered admin assistant that
              turns client emails into quotes, invoices, and payments, without
              manual effort.
            </p>
          </div>

          {/* Images and Benefits Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Images */}
            <div className="flex">
              <Image
                src="/email-hero.png"
                alt="Email"
                width={500}
                height={500}
                className="mx-auto"
              />
            </div>

            {/* Right Side - Benefits */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#5b21b6] dark:text-purple-400">
                Key Benefits:
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#5b21b6] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Faster cash flow, fewer overdue invoices.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#5b21b6] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    No data double-handling.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#5b21b6] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Real-time dashboard, clear audit trail, and effortless
                    tracking.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#5b21b6] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Clients get quotes before your competitors reply.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button - Centered below the content */}
          <div className="text-center mt-16">
            <Link
              href="/signup"
              className="inline-block bg-[#5b21b6] dark:bg-purple-600 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-[#4c1d96] dark:hover:bg-purple-700 transition-colors shadow-lg dark:shadow-purple-500/20">
              Book a Free Workflow Audit
            </Link>
          </div>
        </LayoutContainer>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 lg:py-32 bg-[#5b21b6]">
        <LayoutContainer className="relative max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Steps */}
            <div className="space-y-2 -mt-24">
              <h2 className="text-3xl pb-12 font-bold text-white">
                See How It Works
              </h2>

              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-yellow-300 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    <span className="text-white">Step 1:</span> Email received ,
                    AI detects "Request for Quote".
                  </h3>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-yellow-300 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    <span className="text-white">Step 2:</span> Quote built &
                    sent in minute
                  </h3>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-yellow-300 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    <span className="text-white">Step 3:</span> Client approves
                    invoice auto-generated.
                  </h3>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-yellow-300 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    <span className="text-white">Step 4:</span> Payment tracked,
                    dashboard updated.
                  </h3>
                </div>
              </div>
            </div>

            {/* Right side - Visual Workflow */}
            <div className="bg-transparent rounded-3xl p-8">
              <div className="space-y-8">
                <Image
                  src="/email-works.png"
                  alt="Email Workflow"
                  width={500}
                  height={500}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* Try It Yourself Section */}
      <TryItSection />

      {/* Client Results Section */}
      <ClientResultsSection />

      <FAQSection items={faqItems} />

      {/* Automate Paperwork CTA Section */}
      <AutomatePaperworkSection />
    </main>
  );
}
