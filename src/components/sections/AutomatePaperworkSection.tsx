import { LayoutContainer } from "@/components/layout-container";
import Link from "next/link";

export function AutomatePaperworkSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#5b21b6] dark:bg-purple-900">
      <LayoutContainer className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Automate Your Paperwork Today
        </h2>
        <p className="text-xl text-purple-100 dark:text-purple-200 mb-12 max-w-2xl mx-auto">
          Join thousands of businesses already saving time and increasing
          revenue with AdminDo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="https://tally.so/r/w70YZP"
            className="bg-white dark:bg-gray-100 text-[#5b21b6] dark:text-purple-700 hover:bg-gray-100 dark:hover:bg-gray-200 font-medium px-8 py-3 rounded-full text-base transition-colors shadow-lg">
            Get Started
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white dark:border-gray-300 text-white dark:text-gray-100 hover:bg-white dark:hover:bg-gray-100 hover:text-[#5b21b6] dark:hover:text-purple-700 font-medium px-8 py-3 rounded-full text-base transition-colors">
            Chat with a Workflow Specialist
          </Link>
        </div>
      </LayoutContainer>
    </section>
  );
}
