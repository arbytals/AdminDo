import { LayoutContainer } from "@/components/layout-container";
import Link from "next/link";

interface Button {
  text: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface GetStartedSectionProps {
  className?: string;
  title?: string;
  buttons?: Button[];
}

export function GetStartedSection({
  className = "",
  title = "Ready to relax and let the phones sort themselves out?",
  buttons = [
    {
      text: "Get Started",
      href: "/contact",
      variant: "primary",
    },
  ],
}: GetStartedSectionProps) {
  return (
    <section
      className={`relative py-20 lg:py-32 bg-white dark:bg-gray-900 ${className}`}>
      {/* Purple circle decoration */}
      <div className="absolute left-0 md:left-[1.8rem] top-0 md:top-1/2 -translate-y-1/2 w-[100px] h-[100px]">
        <div className="w-full h-full rounded-full border-4 border-[#5b21b6] dark:border-purple-400"></div>
      </div>

      <LayoutContainer className="relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            {title}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={`${
                  button.variant === "primary"
                    ? "bg-[#5b21b6] dark:bg-purple-600 text-white hover:bg-[#4c1d96] dark:hover:bg-purple-700"
                    : "bg-white text-[#5b21b6] border-2 border-[#5b21b6] hover:bg-[#f3f0ff] dark:bg-transparent dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-900/30"
                } font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-colors shadow-lg dark:shadow-purple-500/20`}>
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
