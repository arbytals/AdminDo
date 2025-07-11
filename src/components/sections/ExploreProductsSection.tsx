"use client";

import { LayoutContainer } from "@/components/layout-container";
import { AnimatedSection } from "@/components/animated-section";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function ExploreProductsSection() {
  return (
    <section className="pt-12 md:pt-20 pb-12 md:pb-20">
      <LayoutContainer className="py-6 lg:px-14">
        <div className="w-full space-y-12 sm:space-y-24">
          <AnimatedSection>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-4 sm:mb-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]"></div>
                <span className="text-gray-900 dark:text-white">
                  Explore Our Products
                </span>
              </div>
            </motion.div>

            {/* Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-2 text-gray-900 dark:text-white">
              AdminDo offers an integrated set of products designed to simplify
              your tasks.
            </motion.h1>

            {/* Call Management Banner */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-2xl sm:rounded-3xl overflow-hidden bg-(--var(-stone-color)) dark:bg-gray-800/50 mb-8 sm:mb-12 shadow-lg">
              <div className="relative">
                <Image
                  src="/call-agents.svg"
                  alt="Call management assistants with headsets"
                  width={800}
                  height={300}
                  className="w-full object-cover h-[200px] sm:h-[250px] md:h-[300px]"
                  priority
                />
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2">
                  Call Management
                </h2>
                <p className="text-black/70 dark:text-gray-300 text-sm sm:text-base mb-4">
                  Effortlessly manage both inbound and outbound calls 24/7 with
                  our AI assistants by choosing either a friendly male or female
                  voice.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/calls"
                    className="inline-block border-2 border-[#5b21b6] dark:border-purple-700 text-[#5b21b6] dark:text-purple-300 hover:bg-[#5b21b6] hover:text-white dark:hover:bg-purple-700 dark:hover:text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base">
                    Learn more
                  </Link>
                  <Link
                    href="https://tally.so/r/w70YZP"
                    className="inline-block bg-[#5b21b6] hover:bg-[#4c1d95] dark:bg-purple-700 dark:hover:bg-purple-800 text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base">
                    Get started
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Product Cards */}
            <AnimatedSection>
              <motion.div
                variants={staggerChildren}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Email Handling Card */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-(--var(-stone-color)) dark:bg-gray-800/50 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col h-[420px] shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="relative w-full h-[180px] sm:h-[220px]">
                    <Image
                      src="/emails.png"
                      alt="Email handling illustration"
                      fill
                      className="object-cover rounded-t-2xl sm:rounded-t-3xl"
                      priority
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <div className="mb-auto">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        Email Handling & Organisation
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        Transform your chaotic inbox into a well-organised
                        workspace with AI-powered sorting and smart filtering.
                      </p>
                    </div>
                    <div className="pt-4 sm:pt-6">
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href="/email"
                          className="inline-block border-2 border-[#7c3aed] dark:border-purple-600 text-[#7c3aed] dark:text-purple-300 hover:bg-[#7c3aed] hover:text-white dark:hover:bg-purple-600 dark:hover:text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base">
                          Learn more
                        </Link>
                        <Link
                          href="https://tally.so/r/w70YZP"
                          className="inline-block bg-[#7c3aed] hover:bg-[#6d28d9] dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base">
                          Get started
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Social Media Card */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-(--var(-stone-color)) dark:bg-gray-800/50 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col h-[420px] shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="relative w-full h-[180px] sm:h-[220px]">
                    <Image
                      src="/socials.png"
                      alt="Social media management illustration"
                      fill
                      className="object-cover rounded-t-2xl sm:rounded-t-3xl"
                      priority
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <div className="mb-auto">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        Social Media Management
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        Ensure the planning, scheduling, and measuring of social
                        posts with integrated analytics using our AI.
                      </p>
                    </div>
                    <div className="pt-4 sm:pt-6">
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href="/social-media"
                          className="inline-block border-2 border-[#7c3aed] dark:border-purple-600 text-[#7c3aed] dark:text-purple-300 hover:bg-[#7c3aed] hover:text-white dark:hover:bg-purple-600 dark:hover:text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base">
                          Learn more
                        </Link>
                        <Link
                          href="https://tally.so/r/w70YZP"
                          className="inline-block bg-[#7c3aed] hover:bg-[#6d28d9] dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base">
                          Get started
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Support Maintenance Card */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white dark:bg-gray-800/50 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col h-[420px] shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="relative w-full h-[180px] sm:h-[220px]">
                    <Image
                      src="/support.jpg"
                      alt="Support maintenance illustration"
                      fill
                      className="object-cover rounded-t-2xl sm:rounded-t-3xl"
                      priority
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <div className="mb-auto">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        Support Maintenance
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        Our AI automates maintenance scheduling, monitors system
                        health, and delivers actionable performance insights.
                      </p>
                    </div>
                    <div className="pt-4 sm:pt-6">
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href="/support"
                          className="inline-block border-2 border-[#7c3aed] dark:border-purple-600 text-[#7c3aed] dark:text-purple-300 hover:bg-[#7c3aed] hover:text-white dark:hover:bg-purple-600 dark:hover:text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base">
                          Learn more
                        </Link>
                        <Link
                          href="https://tally.so/r/w70YZP"
                          className="inline-block bg-[#7c3aed] hover:bg-[#6d28d9] dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base">
                          Get started
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Customize Card */}
              <motion.div
                variants={fadeIn}
                className="bg-[#7c3aed] dark:bg-purple-600 rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-8 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 shadow-lg">
                <div className="flex flex-col justify-center">
                  <div className="flex items-center justify-start gap-2 mb-3 sm:mb-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      Customise
                    </h2>
                    <span className="ml-1 text-yellow-300">✨</span>
                  </div>
                  <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                    Your Business. Your AI. Customise AI assistants that
                    perfectly match your brand personality and customer needs.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://tally.so/r/w70YZP"
                      className="inline-block bg-white text-[#7c3aed] border border-[#7c3aed] hover:bg-[#ede9fe] hover:text-[#5b21b6] font-medium py-2 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base">
                      Get started
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-4 md:mt-0">
                  <div className="bg-[#8b5cf6] dark:bg-purple-500 p-6 sm:p-8 rounded-xl sm:rounded-2xl">
                    <Image
                      src="/setting.png"
                      alt="Settings icon"
                      width={120}
                      height={120}
                      className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </LayoutContainer>
    </section>
  );
}
