"use client";

import { LayoutContainer } from "@/components/layout-container";
import Image from "next/image";
import Link from "next/link";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { GetStartedSection } from "@/components/sections/GetStartedSection";

export default function CallsPage() {
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
                  <span className="text-[#5b21b6] dark:text-purple-400">
                    Round
                  </span>{" "}
                  <span className="text-gray-900 dark:text-white">the</span>
                  <br />
                  <span className="text-gray-900 dark:text-white">
                    Clock Call
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">
                    Management
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                  Let our AdminDo receptionists pick up every call: day or
                  night, so you never miss a customer.
                </p>
              </div>
              <Link
                href="https://tally.so/r/w70YZP"
                className="inline-block bg-[#5b21b6] dark:bg-purple-600 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-[#4c1d96] dark:hover:bg-purple-700 transition-colors shadow-lg dark:shadow-purple-500/20">
                Get Started Today
              </Link>
            </div>

            {/* Right Content */}
            <div className="relative">
              <Image
                src="/call-hero.png"
                alt="Calls"
                width={500}
                height={500}
                className="mx-auto"
              />
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* Inbound and Outbound Calls Sections */}
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Inbound Calls Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] hidden lg:block">
            <Image
              src="/svg1.png"
              alt="Inbound Calls"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>

          <LayoutContainer className="relative max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Empty space for absolute image */}

              {/* Right side - Content */}
              <div className="lg:col-start-2 space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#5b21b6] dark:text-purple-400">
                    Inbound Calls
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                    AdminDo assistant answers calls and handles FAQs for
                    individuals or businesses. Top features include:
                  </p>
                </div>

                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#5b21b6] dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Picks up every call and chats naturally with your callers.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#5b21b6] dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Instantly sends a text summary of what was said.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#5b21b6] dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Routes calls to the right person or department when
                      needed.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#5b21b6] dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Books, cancels, or reschedules appointments for you.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#5b21b6] dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Logs the outcome in your CRM with a clean recap for your
                      team.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </LayoutContainer>
        </section>

        {/* Outbound Calls Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] hidden lg:block">
            <Image
              src="/svg2.png"
              alt="Outbound Calls"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>

          <LayoutContainer className="relative max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#5b21b6] dark:text-purple-400">
                    Outbound Calls
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                    AdminDo Assistant follows up calls and payment reminders
                  </p>
                </div>

                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#5b21b6] dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Talks to people through whichever way suits them—phone,
                      text, email, or chat
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#5b21b6] dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Checks back with customers after the first chat or call
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#5b21b6] dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Chases up any paperwork that's still missing including
                      payment
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#5b21b6] dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Guides customers through finishing their purchase or lock
                      in a service
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#5b21b6] dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Log the outcome in your CRM, your team sees a tidy summary
                      (instant text recap available)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </LayoutContainer>
        </section>

        {/* Centered CTA Button */}
        <div className="text-center pb-20">
          <Link
            href="https://tally.so/r/w70YZP"
            className="inline-block bg-[#5b21b6] dark:bg-purple-600 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-[#4c1d96] dark:hover:bg-purple-700 transition-colors shadow-lg dark:shadow-purple-500/20">
            Get Started
          </Link>
        </div>

        {/* Why Choose Our AI Call Management Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-purple-50/50 to-white dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
          <LayoutContainer className="relative max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#5b21b6] dark:text-purple-400">
                Why Choose Our AI Call Management?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Zero Hold Time */}
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto flex items-center justify-center">
                  <Image
                    src="/timer.png"
                    alt="Zero Hold Time"
                    width={60}
                    height={60}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#5b21b6] dark:text-purple-400">
                  Zero Hold Time
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Cuts hold-times to zero, ensuring customers connect instantly
                  without waiting.
                </p>
              </div>

              {/* Natural Conversations */}
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto flex items-center justify-center">
                  <Image
                    src="/speak.png"
                    alt="Natural Conversations"
                    width={60}
                    height={60}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#5b21b6] dark:text-purple-400">
                  Natural Conversations
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Speaks naturally, powered by the latest large-language models
                  for smooth interactions.
                </p>
              </div>

              {/* Personalize Your Assistant */}
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto flex items-center justify-center">
                  <Image
                    src="/person.png"
                    alt="Personalize Assistant"
                    width={60}
                    height={60}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#5b21b6] dark:text-purple-400">
                  Personalize Your Assistant
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Give your AI receptionist a memorable name that feels like
                  part of the team.
                </p>
              </div>

              {/* Voice Selection */}
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto flex items-center justify-center">
                  <Image
                    src="/listen.png"
                    alt="Voice Selection"
                    width={60}
                    height={60}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#5b21b6] dark:text-purple-400">
                  Voice Selection
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Choose a male or female voice that aligns with your brand's
                  tone and customer expectations.
                </p>
              </div>

              {/* Support and Improvement */}
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto flex items-center justify-center">
                  <Image
                    src="/settings.png"
                    alt="Support and Improvement"
                    width={60}
                    height={60}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#5b21b6] dark:text-purple-400">
                  Support and Improvement
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We continuously refine your voice agent daily so it grows
                  seamlessly with your business.
                </p>
              </div>

              {/* Fast Learning & Routing */}
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto flex items-center justify-center">
                  <Image
                    src="/speak.png"
                    alt="Fast Learning"
                    width={60}
                    height={60}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#5b21b6] dark:text-purple-400">
                  Fast Learning & Routing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learns your policies and booking rules in under 10 minutes,
                  routing calls dynamically by intent.
                </p>
              </div>
            </div>
          </LayoutContainer>
        </section>

        {/* Experience AdminDo Section */}
        <ExperienceSection
          title="Experience AdminDo in Real Conversations"
          description="Listen to real-life call samples handled by AdminDo's AI assistants, natural, efficient, and tailored for your business"
          cards={[
            {
              title: "Front Desk Receptionist",
              subtitle: "Healthcare, Appointment Booking",
              onClick: () => {},
            },
            {
              title: "Sales Representative",
              subtitle: "Retail Product Enquiry",
              onClick: () => {},
            },
            {
              title: "Office Administrator",
              subtitle: "Legal, Insurance Claim Report",
              onClick: () => {},
            },
          ]}
        />

        {/* FAQ Section */}
        <FAQSection items={faqItems} />

        {/* Get Started Section */}
        <GetStartedSection />
      </div>
    </main>
  );
}
