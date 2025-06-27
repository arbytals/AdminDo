import Image from "next/image";
import { LayoutContainer } from "@/components/layout-container";

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  onClick?: () => void;
}

function ExperienceCard({ title, subtitle, onClick }: ExperienceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors rounded-2xl p-6 flex items-center justify-between group border border-gray-200 dark:border-gray-600">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
      </div>
      <button
        onClick={onClick}
        className="w-24 h-24 cursor-pointer flex items-center justify-center ml-6 transition-all">
        <Image src="/play.png" alt="Play" width={60} height={60} />
      </button>
    </div>
  );
}

interface ExperienceSectionProps {
  title: string;
  description: string;
  cards: Array<{
    title: string;
    subtitle: string;
    onClick?: () => void;
  }>;
}

export function ExperienceSection({
  title,
  description,
  cards,
}: ExperienceSectionProps) {
  return (
    <section className="relative py-20 lg:py-32 bg-[#5b21b6] overflow-hidden">
      {/* Decorative curved lines */}
      <div className="absolute top-8 right-8 w-48 h-48 opacity-40">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M 20 180 Q 120 80 180 140"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="absolute bottom-8 left-8 w-48 h-48 opacity-40">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M 180 20 Q 80 120 140 180"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <LayoutContainer className="relative max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Conversation Samples Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden relative">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-100 dark:from-purple-950 dark:via-purple-900/90 dark:to-purple-950" />
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(216,180,254,0.05)_0deg,_transparent_60deg,_transparent_300deg,_rgba(216,180,254,0.05)_360deg)] dark:bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(168,85,247,0.02)_0deg,_transparent_60deg,_transparent_300deg,_rgba(168,85,247,0.02)_360deg)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.01)_0%,_transparent_70%)]" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,_transparent,_transparent_10px,_rgba(216,180,254,0.02)_10px,_rgba(216,180,254,0.02)_20px)] dark:bg-[repeating-linear-gradient(45deg,_transparent,_transparent_10px,_rgba(168,85,247,0.01)_10px,_rgba(168,85,247,0.01)_20px)]" />

          <div className="p-8 md:p-12 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {cards.slice(0, 2).map((card, index) => (
                <ExperienceCard key={index} {...card} />
              ))}
            </div>

            {/* Center the last card if it exists */}
            {cards[2] && (
              <div className="flex justify-center">
                <div className="max-w-md w-full">
                  <ExperienceCard {...cards[2]} />
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
