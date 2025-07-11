import { LayoutContainer } from "@/components/layout-container";
import Link from "next/link";
import Image from "next/image";

export function TryItSection() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <LayoutContainer className="max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Try It Yourself:{" "}
              <span className="text-[#5b21b6] dark:text-purple-400">
                Safe, Simple, and Secure
              </span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Start your free trial now with full control and secure data:
              hosted in Australia, encrypted end-to-end, and fully compliant
              with industry standards.
            </p>
            <div className="flex md:justify-start justify-center">
              <Link
                href="https://tally.so/r/w70YZP"
                className="bg-[#5b21b6] dark:bg-purple-600 hover:bg-[#4c1d96] dark:hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full text-base transition-colors shadow-lg dark:shadow-purple-500/20">
                Start My Free Trial
              </Link>
            </div>
          </div>

          {/* Right column - Features */}
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-start text-left">
              <div className="flex-shrink-0 w-14 h-14  flex items-center justify-center mb-3">
                <Image src="/person.png" alt="Person" width={40} height={40} />
              </div>
              <h3 className="font-semibold text-[#5b21b6] dark:text-purple-400 mb-1">
                Control
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm max-w-xs">
                Approve every quote before it's sent, and make quick edits with
                just one click.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-start text-left">
              <div className="flex-shrink-0 w-14 h-14  flex items-center justify-center mb-3">
                <Image src="/person.png" alt="Person" width={40} height={40} />
              </div>
              <h3 className="font-semibold text-[#5b21b6] dark:text-purple-400 mb-1">
                Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm max-w-xs">
                Works seamlessly with Xero, MYOB, QuickBooks & Reckon
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-start text-left">
              <div className="flex-shrink-0 w-14 h-14  flex items-center justify-center mb-3">
                <Image src="/person.png" alt="Person" width={40} height={40} />
              </div>
              <h3 className="font-semibold text-[#5b21b6] dark:text-purple-400 mb-1">
                No Risk
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm max-w-xs">
                Start for free with no credit card or commitment needed.
              </p>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
