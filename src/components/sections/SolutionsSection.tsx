"use client";

import { LayoutContainer } from "@/components/layout-container";
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

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function SolutionsSection() {
  return (
    <section className="pt-12 md:pt-20 pb-12 md:pb-20 w-full bg-gradient-to-b from-white via-purple-50 to-[#e4d6fa] dark:from-gray-950 dark:via-gray-900 dark:to-purple-900/50">
      <LayoutContainer className="py-6">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#5b21b6] dark:bg-purple-400"></div>
              <p className="text-[#0c0a09] dark:text-gray-200 text-lg">
                Solutions That Boost Your Success
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#0c0a09] dark:text-white max-w-4xl leading-tight">
              AdminDo is a comprehensive solution designed to tackle your
              everyday communication challenges
            </h1>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1: Unified Communication Dashboard */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-purple-50 dark:bg-purple-900/30 rounded-full">
                <Image
                  src="/dashboard.svg"
                  alt="Dashboard icon"
                  width={64}
                  height={64}
                  className="w-full h-full dark:invert"
                />
              </div>
              <h2 className="text-xl font-bold text-[#0c0a09] dark:text-white mb-3">
                Unified Communication Dashboard
              </h2>
              <p className="text-[#57534d] dark:text-gray-300">
                AdminDo unifies your calls, emails, and social media into one
                smart dashboard, so nothing slips through the cracks.
              </p>
            </motion.div>

            {/* Feature 2: 24/7 Smart Call Handling */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-purple-50 dark:bg-purple-900/30 rounded-full">
                <Image
                  src="/calls.svg"
                  alt="Calls icon"
                  width={64}
                  height={64}
                  className="w-full h-full dark:invert"
                />
              </div>
              <h2 className="text-xl font-bold text-[#0c0a09] dark:text-white mb-3">
                24/7 Smart Call Handling
              </h2>
              <p className="text-[#57534d] dark:text-gray-300">
                Our AI agents manage inbound and outbound calls around the
                clock, capturing every lead and query.
              </p>
            </motion.div>

            {/* Feature 3: Email Sorting & Response */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-purple-50 dark:bg-purple-900/30 rounded-full">
                <Image
                  src="/email-sort.svg"
                  alt="Email sorting icon"
                  width={64}
                  height={64}
                  className="w-full h-full dark:invert"
                />
              </div>
              <h2 className="text-xl font-bold text-[#0c0a09] dark:text-white mb-3">
                Email Sorting & Response
              </h2>
              <p className="text-[#57534d] dark:text-gray-300">
                Filter, summarize, and respond to emails automatically, with
                suggested replies and follow-up reminders.
              </p>
            </motion.div>

            {/* Feature 4: Data-Driven Social Engagement */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-purple-50 dark:bg-purple-900/30 rounded-full">
                <Image
                  src="/data-driven.svg"
                  alt="Data driven icon"
                  width={64}
                  height={64}
                  className="w-full h-full dark:invert"
                />
              </div>
              <h2 className="text-xl font-bold text-[#0c0a09] dark:text-white mb-3">
                Data-Driven Social Engagement
              </h2>
              <p className="text-[#57534d] dark:text-gray-300">
                Plan, schedule, and track content across all platforms, with
                insights that help you boost engagement and stay consistent.
              </p>
            </motion.div>

            {/* Feature 5: Actionable Insights */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-purple-50 dark:bg-purple-900/30 rounded-full">
                <Image
                  src="/actionable.svg"
                  alt="Actionable insights icon"
                  width={64}
                  height={64}
                  className="w-full h-full dark:invert"
                />
              </div>
              <h2 className="text-xl font-bold text-[#0c0a09] dark:text-white mb-3">
                Actionable Insights
              </h2>
              <p className="text-[#57534d] dark:text-gray-300">
                AdminDo learns from every interaction to provide insights that
                help you improve customer service and grow your business
              </p>
            </motion.div>

            {/* Feature 6: Support Maintenance */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-purple-50 dark:bg-purple-900/30 rounded-full">
                <Image
                  src="/support-maintenance.svg"
                  alt="Support maintenance icon"
                  width={64}
                  height={64}
                  className="w-full h-full dark:invert"
                />
              </div>
              <h2 className="text-xl font-bold text-[#0c0a09] dark:text-white mb-3">
                Support Maintenance
              </h2>
              <p className="text-[#57534d] dark:text-gray-300">
                Automates issue tracking, maintenance schedules, and system
                health updates, keeping your operations smooth and secure.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </LayoutContainer>
    </section>
  );
}
