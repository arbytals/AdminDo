import { LayoutContainer } from "@/components/layout-container";
import Image from "next/image";

export function SocialWhySection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <LayoutContainer className="max-w-6xl">
        {/* Top: Heading, Subheading, Bullets */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#5b21b6] dark:text-purple-400 text-center mb-4">
            Explore Why AdminDo Should Handle Your Socials
          </h2>
          <p className="text-center text-lg text-gray-900 dark:text-gray-100 mb-8 max-w-2xl mx-auto">
            AdminDo plans, posts, and replies for you, from one intuitive
            dashboard so you stay focused on your business.
          </p>
          <ul className="space-y-4 max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 mt-2 rounded-full bg-[#7c3aed] dark:bg-purple-400 flex-shrink-0"></span>
              <span className="text-gray-700 dark:text-gray-300">
                Keeps your brand voice consistent across Facebook, Thread,
                Instagram, X, LinkedIn & TikTok.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 mt-2 rounded-full bg-[#7c3aed] dark:bg-purple-400 flex-shrink-0"></span>
              <span className="text-gray-700 dark:text-gray-300">
                Never misses a peak-time post schedules when your audience is
                most active.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 mt-2 rounded-full bg-[#7c3aed] dark:bg-purple-400 flex-shrink-0"></span>
              <span className="text-gray-700 dark:text-gray-300">
                Spots trending topics early and suggests on-brand angles.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 mt-2 rounded-full bg-[#7c3aed] dark:bg-purple-400 flex-shrink-0"></span>
              <span className="text-gray-700 dark:text-gray-300">
                Replies to routine comments and DMs with polite, human-sounding
                responses.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 mt-2 rounded-full bg-[#7c3aed] dark:bg-purple-400 flex-shrink-0"></span>
              <span className="text-gray-700 dark:text-gray-300">
                Tracks performance and emails you plain English weekly reports.
              </span>
            </li>
          </ul>
        </div>

        {/* Bottom: Features and Chart */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: Features of AdminDo */}
          <div>
            <h3 className="text-xl font-bold text-[#5b21b6] dark:text-purple-400 mb-2">
              Features of AdminDo
            </h3>
            <p className="text-gray-900 dark:text-gray-100 mb-4">
              AdminDo learns your business, handles the busywork of your socials
              and helps you scale with ease.
            </p>
          </div>
          {/* Right: Chart Image */}
          <div className="flex justify-center">
            <Image
              src="/charts.png"
              alt="Revenue by promo code chart"
              width={340}
              height={200}
              className="rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm dark:shadow-gray-800"
            />
          </div>
        </div>

        {/* Feature Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-[#5b21b6] dark:text-purple-400 mb-2">
              Automated Posting
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Queues and publishes across all platforms, on time, every time
              thereby generating consistency that boosts reach.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#5b21b6] dark:text-purple-400 mb-2">
              Content Planning
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Generates a 30-day calendar matched to your business goals. No
              more last-minute scrambling, guesswork, or missed opportunities.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#5b21b6] dark:text-purple-400 mb-2">
              Smart Replies
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Uses sentiment analysis to answer FAQs or flag tricky queries for
              you. Faster response times and happier followers.
            </p>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
