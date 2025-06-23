"use client";

import { LayoutContainer } from "@/components/layout-container";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="pt-12 md:pt-0 pb-12 md:pb-20 w-full bg-gradient-to-b from-[#e4d6fa] via-purple-50 to-white dark:from-purple-950 dark:via-purple-900/50 dark:to-gray-900">
      <LayoutContainer className="py-4 sm:py-8">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center px-4 py-12 sm:py-24">
            <div className="w-full text-center">
              {/* Join text */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-6 sm:mb-10">
                <div className="space-x-8 lg:-space-x-4 self-center-safe items-center justify-center">
                  <Image
                    src="/heroimg.png"
                    alt="Customers"
                    width={100}
                    height={100}
                    className="rounded-full h-[50%] w-[50%] lg:h-[100%] lg:w-[100%] border-2 border-transparent dark:border-purple-500/20"
                  />
                </div>
                <div className="flex flex-wrap justify-center items-center gap-2">
                  <span className="text-[#0c0a09] dark:text-gray-200 text-lg sm:text-xl">
                    Join
                  </span>
                  <span className="text-[#5b21b6] dark:text-purple-400 font-semibold text-lg sm:text-xl">
                    5000+
                  </span>
                  <span className="text-[#0c0a09] dark:text-gray-200 text-lg sm:text-xl">
                    exciting customers
                  </span>
                </div>
              </div>

              {/* Main heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900 dark:text-white">
                Meet{" "}
                <span className="text-[#5b21b6] dark:text-purple-400">
                  AdminDo:
                </span>{" "}
                Your AI Assistant for Effortless Communication
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl md:text-2xl text-[#44403c] dark:text-gray-300 mb-8 sm:mb-12 w-full max-w-4xl mx-auto leading-relaxed">
                Effortlessly manage calls, emails, and social media from one
                intuitive platform, empowering you with insights that transform
                every client interaction
              </p>

              {/* CTA Button */}
              <Link
                href="/signup"
                className="inline-block bg-[#5b21b6] dark:bg-purple-600 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-[#4c1d96] dark:hover:bg-purple-700 transition-colors shadow-lg dark:shadow-purple-500/20">
                Get started for free
              </Link>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
