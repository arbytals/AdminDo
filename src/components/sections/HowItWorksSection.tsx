"use client";

import { LayoutContainer } from "@/components/layout-container";

export function HowItWorksSection() {
  return (
    <section className="pt-12 w-full max-w-7xl mx-auto md:pt-20 pb-12 md:pb-20">
      <LayoutContainer className="py-6 lg:px-5">
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-sm font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]"></div>
            <span className="text-gray-900 dark:text-white">How It Works</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-8">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:col-span-2">
            <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col justify-center md:pr-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#7c3aed] mb-2 text-left">
                Sign Up & Customize
              </h2>
              <p className="text-gray-500 text-base sm:text-lg text-left">
                Complete a brief onboarding form, select your industry, team
                size, and preferred channels to tailor the dashboard to your
                needs.
              </p>
            </div>
            <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-end md:justify-center items-center mb-4 md:mb-0">
              <span className="text-[120px] sm:text-[160px] md:text-[220px] font-bold bg-gradient-to-b from-[#ede9fe] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent leading-none">
                01
              </span>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:col-span-2">
            <div className="w-full md:w-1/2 flex justify-start md:justify-center items-center mb-4 md:mb-0">
              <span className="text-[120px] sm:text-[160px] md:text-[220px] font-bold bg-gradient-to-b from-[#ede9fe] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent leading-none">
                02
              </span>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#7c3aed] mb-2 text-left">
                Connect Your Channels
              </h2>
              <p className="text-gray-500 text-base sm:text-lg text-left">
                Easily link your phone system, choose a male or female AI for
                calls, and connect email and social media to sync communications
                in real time.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:col-span-2">
            <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col justify-center md:pr-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#7c3aed] mb-2 text-left">
                Centralized Dashboard
              </h2>
              <p className="text-gray-500 text-base sm:text-lg text-left">
                View all interactions: calls, and soon emails, social media and
                support tasks—in one intuitive hub. Actionable stats and alerts
                ensure you never miss a follow-up.
              </p>
            </div>
            <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-end md:justify-center items-center mb-4 md:mb-0">
              <span className="text-[120px] sm:text-[160px] md:text-[220px] font-bold bg-gradient-to-b from-[#ede9fe] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent leading-none">
                03
              </span>
            </div>
          </div>
          {/* Step 4 */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:col-span-2">
            <div className="w-full md:w-1/2 flex justify-start md:justify-center items-center mb-4 md:mb-0">
              <span className="text-[120px] sm:text-[160px] md:text-[220px] font-bold bg-gradient-to-b from-[#ede9fe] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent leading-none">
                04
              </span>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#7c3aed] mb-2 text-left">
                Act & Optimize
              </h2>
              <p className="text-gray-500 text-base sm:text-lg text-left">
                Use AI-driven recommendations to prioritize tasks, improve
                customer satisfaction, to refine communication and grow your
                business.
              </p>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
