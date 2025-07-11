import { LayoutContainer } from "@/components/layout-container";
import Image from "next/image";
import Link from "next/link";

interface SupportBenefitsSectionProps {
  className?: string;
}

export function SupportBenefitsSection({
  className = "",
}: SupportBenefitsSectionProps) {
  return (
    <section
      className={`py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-900 ${className}`}>
      <LayoutContainer className="max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="flex justify-start -ml-8 lg:-ml-24">
            <Image
              src="/support-svg.png"
              alt="Support Benefits"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#5b21b6] dark:text-purple-400 mb-6">
                Why Ongoing Support Matters
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Like any team member, your AdminDo assistant needs regular
                updates to stay sharp and on track. Our Support & Insights
                program keeps it performing at its best.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#5b21b6] dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  Patches new LLM releases and security updates automatically.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#5b21b6] dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  Fine-tunes responses to reflect policy or branding tweaks.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#5b21b6] dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  Spots drift in tone or accuracy before it hurts customer
                  trust.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#5b21b6] dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  Turns raw usage data into clear, actionable recommendations.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="https://tally.so/r/w70YZP"
                className="inline-block bg-[#5b21b6] dark:bg-purple-600 hover:bg-[#4c1d96] dark:hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-lg text-base transition-colors shadow-lg dark:shadow-purple-500/20">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
