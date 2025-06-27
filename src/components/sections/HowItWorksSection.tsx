"use client";

import { LayoutContainer } from "@/components/layout-container";
import Image from "next/image";

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-[#5b21b6] relative overflow-hidden">
      <LayoutContainer className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          <span className="text-gray-900 dark:text-white">How It Works</span>
        </h2>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <span className="text-2xl font-bold text-[#5b21b6] dark:text-purple-400">
                1
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Upload Your Data
            </h3>
            <p className="text-gray-500 dark:text-purple-100 text-base sm:text-lg text-left">
              Share your business details, customer preferences, and service
              offerings with our secure AI system.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <span className="text-2xl font-bold text-[#5b21b6] dark:text-purple-400">
                2
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              AI Learns Your Style
            </h3>
            <p className="text-gray-500 dark:text-purple-100 text-base sm:text-lg text-left">
              Our advanced AI analyzes your communication patterns and business
              approach to match your unique voice.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <span className="text-2xl font-bold text-[#5b21b6] dark:text-purple-400">
                3
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Connect Your Tools
            </h3>
            <p className="text-gray-500 dark:text-purple-100 text-base sm:text-lg text-left">
              Seamlessly integrate with your existing CRM, email, and business
              management systems.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <span className="text-2xl font-bold text-[#5b21b6] dark:text-purple-400">
                4
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Start Automating
            </h3>
            <p className="text-gray-500 dark:text-purple-100 text-base sm:text-lg text-left">
              Watch as AdminDo handles calls, emails, and administrative tasks
              while you focus on growing your business.
            </p>
          </div>
        </div>

        {/* Visual mockup */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#5b21b6] dark:bg-purple-600 rounded-full flex items-center justify-center">
                  <Image
                    src="/person.png"
                    alt="AI Assistant"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    AdminDo Assistant
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Online now
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                  <p className="text-gray-900 dark:text-gray-100 text-sm">
                    "Hello! I've prepared your weekly report and scheduled 3
                    follow-up calls for tomorrow."
                  </p>
                </div>
                <div className="bg-[#5b21b6] dark:bg-purple-600 rounded-lg p-3 ml-8">
                  <p className="text-white text-sm">
                    "Perfect! Can you also send quotes to the new leads?"
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                  <p className="text-gray-900 dark:text-gray-100 text-sm">
                    "Already done! I've sent personalized quotes to all 5 leads
                    and will follow up in 48 hours."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
