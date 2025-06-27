import { LayoutContainer } from "@/components/layout-container";

export function ClientResultsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 border-t border-[#ede9fe] dark:border-gray-700">
      <LayoutContainer className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#5b21b6] dark:text-purple-400 text-center mb-12">
          Client Results
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Testimonial 1 */}
          <div>
            <p className="text-lg text-gray-900 dark:text-gray-100 mb-4">
              Quotes go out in under five minutes and we're paid on average nine
              days faster.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Sophie L., Landscaping Director
            </p>
          </div>
          {/* Testimonial 2 */}
          <div>
            <p className="text-lg text-gray-900 dark:text-gray-100 mb-4">
              The AI chased late payers politely and recovered $18k in the first
              quarter.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Mark T., Dog trainer
            </p>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
