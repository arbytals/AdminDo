import { LayoutContainer } from "@/components/layout-container";

export function SocialHowItWorksSection() {
  return (
    <section className="relative py-24 bg-[#5b21b6] overflow-hidden">
      {/* Gold confetti dots */}
      <div className="absolute left-0 top-0 w-40 h-40 pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none">
          <circle cx="20" cy="40" r="2" fill="#FFD700" />
          <circle cx="60" cy="20" r="1.5" fill="#FFD700" />
          <circle cx="100" cy="60" r="2.5" fill="#FFD700" />
          <circle cx="30" cy="100" r="1.5" fill="#FFD700" />
          <circle cx="80" cy="120" r="2" fill="#FFD700" />
        </svg>
      </div>
      <div className="absolute right-0 top-0 w-40 h-40 pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none">
          <circle cx="140" cy="20" r="2" fill="#FFD700" />
          <circle cx="120" cy="60" r="1.5" fill="#FFD700" />
          <circle cx="100" cy="100" r="2.5" fill="#FFD700" />
          <circle cx="130" cy="140" r="1.5" fill="#FFD700" />
          <circle cx="60" cy="80" r="2" fill="#FFD700" />
        </svg>
      </div>
      <div className="absolute left-0 bottom-0 w-40 h-40 pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none">
          <circle cx="20" cy="20" r="1.5" fill="#FFD700" />
          <circle cx="60" cy="40" r="2.5" fill="#FFD700" />
          <circle cx="100" cy="80" r="1.5" fill="#FFD700" />
          <circle cx="30" cy="120" r="2" fill="#FFD700" />
          <circle cx="80" cy="140" r="1.5" fill="#FFD700" />
        </svg>
      </div>
      <div className="absolute right-0 bottom-0 w-40 h-40 pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none">
          <circle cx="140" cy="40" r="2.5" fill="#FFD700" />
          <circle cx="120" cy="80" r="1.5" fill="#FFD700" />
          <circle cx="100" cy="120" r="2" fill="#FFD700" />
          <circle cx="130" cy="20" r="1.5" fill="#FFD700" />
          <circle cx="60" cy="100" r="2" fill="#FFD700" />
        </svg>
      </div>

      <LayoutContainer className="relative max-w-7xl">
        {/* How It Works Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            How It Works
          </h2>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Stepper with connecting lines */}
            <div className="relative max-w-4xl mx-auto">
              {/* Connecting lines background */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-full max-w-2xl">
                <div className="h-0.5 bg-white w-full"></div>
              </div>

              {/* Steps Grid */}
              <div className="grid grid-cols-3 gap-8 text-white text-center relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-xl font-bold text-[#5b21b6] mb-6">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Connect</h3>
                  <p>
                    Link your social accounts in one click. We support all major
                    platforms.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-xl font-bold text-[#5b21b6] mb-6">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Set Priorities</h3>
                  <p>
                    Pick your posting frequency, tone, and goals. Our AI learns
                    your brand voice.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-xl font-bold text-[#5b21b6] mb-6">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Let It Rip</h3>
                  <p>
                    Watch AdminDo post, reply, and report. You approve anything
                    sensitive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            <div className="flex items-start gap-4 relative">
              <div className="flex flex-col items-center flex-shrink-0 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg font-bold text-[#5b21b6] mb-4">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Connect
                </h3>
                <p className="text-white">
                  Link your social accounts in one click. We support all major
                  platforms.
                </p>
              </div>
              <div
                className="absolute left-5 top-0 bottom-0 w-0.5 bg-white z-0 translate-x-1/2"
                style={{ height: "calc(100% + 2rem)" }}></div>
            </div>

            <div className="flex items-start gap-4 relative">
              <div className="flex flex-col items-center flex-shrink-0 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg font-bold text-[#5b21b6] mb-4">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Set Priorities
                </h3>
                <p className="text-white">
                  Pick your posting frequency, tone, and goals. Our AI learns
                  your brand voice.
                </p>
              </div>
              <div
                className="absolute left-5 top-0 bottom-0 w-0.5 bg-white z-0 translate-x-1/2"
                style={{ height: "calc(100% + 2rem)" }}></div>
            </div>

            <div className="flex items-start gap-4 relative">
              <div className="flex flex-col items-center flex-shrink-0 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg font-bold text-[#5b21b6] mb-4">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Let It Rip
                </h3>
                <p className="text-white">
                  Watch AdminDo post, reply, and report. You approve anything
                  sensitive.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Results Section */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Client Results
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-white">
            <div className="bg-white/10 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400 rounded-bl-full opacity-20"></div>
              <p className="mb-4 relative z-10">
                Engagement up 47% and I spend zero time on socials.
              </p>
              <p className="text-yellow-300 relative z-10">
                - Sophie L., Landscaping Director
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400 rounded-bl-full opacity-20"></div>
              <p className="mb-4 relative z-10">
                Gained 1200 followers in 3 months with no effort.
              </p>
              <p className="text-yellow-300 relative z-10">
                - Sam K., Fitness Coach
              </p>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
