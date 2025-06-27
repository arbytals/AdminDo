"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { LayoutContainer } from "@/components/layout-container";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  const [openItem, setOpenItem] = useState<number>(-1);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute opacity-0 md:opacity-100 top-20 left-20 w-32 h-32 bg-[#5b21b6] dark:bg-purple-600 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#5b21b6] dark:bg-purple-600 rounded-full translate-x-20 translate-y-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5b21b6] dark:text-purple-400 text-center mb-16">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-700/50">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-semibold text-[#0c0a09] dark:text-gray-100 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full border-2 border-[#78716c] dark:border-gray-400 flex items-center justify-center transition-all duration-300 ${
                      openItem === index
                        ? "bg-[#78716c] dark:bg-gray-400"
                        : "bg-transparent"
                    }`}>
                    {openItem === index ? (
                      <Minus
                        className={`w-5 h-5 transition-all duration-300 ${
                          openItem === index
                            ? "text-white dark:text-gray-900"
                            : "text-[#78716c] dark:text-gray-400"
                        }`}
                      />
                    ) : (
                      <Plus
                        className={`w-5 h-5 transition-all duration-300 ${
                          openItem === index
                            ? "text-white dark:text-gray-900"
                            : "text-[#78716c] dark:text-gray-400"
                        }`}
                      />
                    )}
                  </div>
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openItem === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}>
                <div className="overflow-hidden">
                  <div className="px-8 pb-6">
                    <p className="text-[#78716c] dark:text-gray-300 text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
