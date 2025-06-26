"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Mail,
  PhoneIncoming,
  PhoneOutgoing,
  MessageSquare,
  Users,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LayoutContainer } from "@/components/layout-container";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";
import logo from "@/../public/logo.png";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to apply sticky styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/90 shadow-sm border-b border-gray-100 dark:bg-gray-900/95 dark:border-gray-800"
          : "bg-[#fafaf9] border-b border-gray-100 dark:bg-gray-900 dark:border-gray-800"
      }`}>
      <LayoutContainer>
        <div className="flex h-16 sm:h-20 items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="AdminDo Logo"
                priority={true}
                quality={100}
                className="h-6 w-6 sm:h-8 sm:w-8"
              />
              <span className="ml-2 text-lg sm:text-xl font-bold text-[#5b21b6] dark:text-purple-400">
                AdminDo
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <div className="relative">
              <button
                onClick={() => toggleDropdown("products")}
                className="flex items-center text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors cursor-pointer">
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "products" && (
                <div className="absolute top-full left-0 mt-2 w-[700px] xl:w-[800px] rounded-md bg-white dark:bg-gray-800 shadow-lg -translate-x-1/4">
                  <div className="p-4 xl:p-6 grid grid-cols-2 gap-6 xl:gap-8">
                    <div className="space-y-4 xl:space-y-6">
                      <Link
                        href="/calls"
                        className="block group"
                        onClick={closeDropdown}>
                        <div className="flex items-start gap-3 xl:gap-4 p-2 rounded-lg hover:bg-[#f3f0ff] dark:hover:bg-purple-900/30 transition-colors">
                          <div className="bg-[#f3f0ff] dark:bg-purple-900/30 p-2 rounded-full">
                            <PhoneIncoming className="h-4 w-4 xl:h-5 xl:w-5 text-[#5b21b6] dark:text-purple-400" />
                          </div>
                          <div>
                            <h3 className="font-medium text-sm xl:text-base text-[#5b21b6] dark:text-purple-400 group-hover:text-[#4c1d95] dark:group-hover:text-purple-300 transition-colors">
                              Inbound Calls
                            </h3>
                            <p className="text-xs xl:text-sm text-gray-600 dark:text-gray-300 mt-1">
                              Our AI assistants, Rina, Riley and Reagan, handle
                              inbound calls with real-time transcription and
                              sentiment analysis.
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/email"
                        className="block group"
                        onClick={closeDropdown}>
                        <div className="flex items-start gap-3 xl:gap-4 p-2 rounded-lg hover:bg-[#f3f0ff] dark:hover:bg-purple-900/30 transition-colors">
                          <div className="bg-[#f3f0ff] dark:bg-purple-900/30 p-2 rounded-full">
                            <Mail className="h-4 w-4 xl:h-5 xl:w-5 text-[#5b21b6] dark:text-purple-400" />
                          </div>
                          <div>
                            <h3 className="font-medium text-sm xl:text-base text-[#5b21b6] dark:text-purple-400 group-hover:text-[#4c1d95] dark:group-hover:text-purple-300 transition-colors">
                              Email to Invoice Automation
                            </h3>
                            <p className="text-xs xl:text-sm text-gray-600 dark:text-gray-300 mt-1">
                              Turn incoming emails into organized quotes,
                              invoices, and tracked payments, automatically.
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/support"
                        className="block group"
                        onClick={closeDropdown}>
                        <div className="flex items-start gap-3 xl:gap-4 p-2 rounded-lg hover:bg-[#f3f0ff] dark:hover:bg-purple-900/30 transition-colors">
                          <div className="bg-[#f3f0ff] dark:bg-purple-900/30 p-2 rounded-full">
                            <MessageSquare className="h-4 w-4 xl:h-5 xl:w-5 text-[#5b21b6] dark:text-purple-400" />
                          </div>
                          <div>
                            <h3 className="font-medium text-sm xl:text-base text-[#5b21b6] dark:text-purple-400 group-hover:text-[#4c1d95] dark:group-hover:text-purple-300 transition-colors">
                              Ongoing Support & Maintenance
                            </h3>
                            <p className="text-xs xl:text-sm text-gray-600 dark:text-gray-300 mt-1">
                              We continuously monitor, update, and optimize your
                              AI assistant for peak performance.
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="space-y-4 xl:space-y-6">
                      <Link
                        href="/calls"
                        className="block group"
                        onClick={closeDropdown}>
                        <div className="flex items-start gap-3 xl:gap-4 p-2 rounded-lg hover:bg-[#f3f0ff] dark:hover:bg-purple-900/30 transition-colors">
                          <div className="bg-[#f3f0ff] dark:bg-purple-900/30 p-2 rounded-full">
                            <PhoneOutgoing className="h-4 w-4 xl:h-5 xl:w-5 text-[#5b21b6] dark:text-purple-400" />
                          </div>
                          <div>
                            <h3 className="font-medium text-sm xl:text-base text-[#5b21b6] dark:text-purple-400 group-hover:text-[#4c1d95] dark:group-hover:text-purple-300 transition-colors">
                              Outbound Calls
                            </h3>
                            <p className="text-xs xl:text-sm text-gray-600 dark:text-gray-300 mt-1">
                              Jumus and Jilana, our proactive AI will handle
                              follow-ups and reminder calls with a friendly,
                              reliable touch.
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/social-media"
                        className="block group"
                        onClick={closeDropdown}>
                        <div className="flex items-start gap-3 xl:gap-4 p-2 rounded-lg hover:bg-[#f3f0ff] dark:hover:bg-purple-900/30 transition-colors">
                          <div className="bg-[#f3f0ff] dark:bg-purple-900/30 p-2 rounded-full">
                            <Users className="h-4 w-4 xl:h-5 xl:w-5 text-[#5b21b6] dark:text-purple-400" />
                          </div>
                          <div>
                            <h3 className="font-medium text-sm xl:text-base text-[#5b21b6] dark:text-purple-400 group-hover:text-[#4c1d95] dark:group-hover:text-purple-300 transition-colors">
                              Social Media Management
                            </h3>
                            <p className="text-xs xl:text-sm text-gray-600 dark:text-gray-300 mt-1">
                              Schedule posts, reply to comments, and analyse
                              performance from one AI-powered hub.
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/contact"
                        className="block group"
                        onClick={closeDropdown}>
                        <div className="bg-[#5b21b6] dark:bg-purple-800 rounded-lg p-3 xl:p-4 flex items-start gap-3 hover:bg-[#4c1d95] dark:hover:bg-purple-700 transition-colors">
                          <div className="bg-white/20 p-2 rounded-full">
                            <Sparkles className="h-4 w-4 xl:h-5 xl:w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-medium text-sm xl:text-base text-white flex items-center">
                              Custom{" "}
                              <span className="ml-1 text-yellow-300">✨</span>
                            </h3>
                            <p className="text-xs xl:text-sm text-white/90 mt-1">
                              A tailored solution that fits your business
                              perfectly
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("solutions")}
                className="flex items-center text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors cursor-pointer">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "solutions" && (
                <div className="absolute top-full left-0 mt-2 w-[600px] xl:w-[700px] rounded-md bg-white dark:bg-gray-800 shadow-lg -translate-x-1/4">
                  <div className="p-4 xl:p-6 grid grid-cols-2 gap-6 xl:gap-8">
                    <div>
                      <h3 className="uppercase text-xs font-semibold text-[#5B21B6] dark:text-[#5B21B6] mb-3 xl:mb-4">
                        USE CASES
                      </h3>
                      <ul className="space-y-2 xl:space-y-3">
                        <li>
                          <Link
                            href="#"
                            onClick={closeDropdown}
                            className="text-sm xl:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors cursor-pointer">
                            Office Administrator
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={closeDropdown}
                            className="text-sm xl:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors cursor-pointer">
                            Front-Desk Receptionist
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={closeDropdown}
                            className="text-sm xl:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors cursor-pointer">
                            Sales Representative
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={closeDropdown}
                            className="text-sm xl:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors cursor-pointer">
                            Customer Support Agent
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={closeDropdown}
                            className="text-sm xl:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors cursor-pointer">
                            Social Media Manager
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={closeDropdown}
                            className="text-sm xl:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors cursor-pointer">
                            Operations Analyst
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="uppercase text-xs font-semibold text-[#5B21B6] dark:text-[#5B21B6] mb-3 xl:mb-4">
                        INDUSTRIES
                      </h3>
                      <ul className="space-y-2 xl:space-y-3">
                        <li>
                          <Link
                            href="#"
                            onClick={closeDropdown}
                            className="text-sm xl:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                            Retail
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={closeDropdown}
                            className="text-sm xl:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                            Travel
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={closeDropdown}
                            className="text-sm xl:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                            Legal
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={closeDropdown}
                            className="text-sm xl:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                            Healthcare
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={closeDropdown}
                            className="text-sm xl:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                            Real Estate
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={closeDropdown}
                            className="text-sm xl:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                            Financial Services
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="#"
              className="text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors cursor-pointer">
              How It Works
            </Link>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("resources")}
                className="flex items-center text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors cursor-pointer">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "resources" && (
                <div className="absolute top-full right-0 mt-2 w-48 rounded-md bg-white dark:bg-gray-800 shadow-lg">
                  <div className="py-1">
                    <Link
                      href="#"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Blog
                    </Link>
                    <Link
                      href="#"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Case Studies
                    </Link>
                    <Link
                      href="#"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Documentation
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-[#0c0a09] dark:text-gray-200 p-2 focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-[#5b21b6] hover:bg-[#4c1d95] dark:bg-purple-700 dark:hover:bg-purple-800 text-white rounded-full px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-base cursor-pointer">
              <Link href="/signup" className="text-white">
                Start for Free
              </Link>
            </Button>
          </div>
        </div>
      </LayoutContainer>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden overflow-y-auto`}>
        <LayoutContainer className="py-4 sm:py-6">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <Link
              href="/"
              className="flex items-center"
              onClick={closeMobileMenu}>
              <Image
                src={logo}
                alt="AdminDo Logo"
                priority={true}
                quality={100}
                className="h-6 w-6 sm:h-8 sm:w-8"
              />
              <span className="ml-2 text-lg sm:text-xl font-bold text-[#5b21b6] dark:text-purple-400">
                AdminDo
              </span>
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="text-[#0c0a09] dark:text-gray-200 p-2 focus:outline-none"
              aria-label="Close menu">
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 sm:space-y-6">
            <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <button
                onClick={() => toggleDropdown("mobile-products")}
                className="flex items-center justify-between w-full text-[#0c0a09] dark:text-gray-200 py-2 cursor-pointer">
                <span className="text-base sm:text-lg font-medium">
                  Products
                </span>
                <ChevronDown
                  className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform ${
                    activeDropdown === "mobile-products" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "mobile-products" && (
                <div className="mt-3 sm:mt-4 space-y-4 sm:space-y-6">
                  <Link
                    href="/calls"
                    className="block group"
                    onClick={closeMobileMenu}>
                    <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-[#f3f0ff] dark:hover:bg-purple-900/30 transition-colors">
                      <div className="bg-[#f3f0ff] dark:bg-purple-900/30 p-2 rounded-full flex-shrink-0">
                        <PhoneIncoming className="h-4 w-4 sm:h-5 sm:w-5 text-[#5b21b6] dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm sm:text-base text-[#5b21b6] dark:text-purple-400 group-hover:text-[#4c1d95] dark:group-hover:text-purple-300 transition-colors">
                          Inbound Calls
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                          Our AI assistants, Rina, Riley and Reagan, handle
                          inbound calls with real-time transcription and
                          sentiment analysis.
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/calls"
                    className="block group"
                    onClick={closeMobileMenu}>
                    <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-[#f3f0ff] dark:hover:bg-purple-900/30 transition-colors">
                      <div className="bg-[#f3f0ff] dark:bg-purple-900/30 p-2 rounded-full flex-shrink-0">
                        <PhoneOutgoing className="h-4 w-4 sm:h-5 sm:w-5 text-[#5b21b6] dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm sm:text-base text-[#5b21b6] dark:text-purple-400 group-hover:text-[#4c1d95] dark:group-hover:text-purple-300 transition-colors">
                          Outbound Calls
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                          Jumus and Jilana, our proactive AI will handle
                          follow-ups and reminder calls with a friendly,
                          reliable touch.
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/email"
                    className="block group"
                    onClick={closeMobileMenu}>
                    <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-[#f3f0ff] dark:hover:bg-purple-900/30 transition-colors">
                      <div className="bg-[#f3f0ff] dark:bg-purple-900/30 p-2 rounded-full flex-shrink-0">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#5b21b6] dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm sm:text-base text-[#5b21b6] dark:text-purple-400 group-hover:text-[#4c1d95] dark:group-hover:text-purple-300 transition-colors">
                          Email to Invoice Automation
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                          Turn incoming emails into organized quotes, invoices,
                          and tracked payments, automatically.
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/social-media"
                    className="block group"
                    onClick={closeMobileMenu}>
                    <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-[#f3f0ff] dark:hover:bg-purple-900/30 transition-colors">
                      <div className="bg-[#f3f0ff] dark:bg-purple-900/30 p-2 rounded-full flex-shrink-0">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[#5b21b6] dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm sm:text-base text-[#5b21b6] dark:text-purple-400 group-hover:text-[#4c1d95] dark:group-hover:text-purple-300 transition-colors">
                          Social Media Management
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                          Schedule posts, reply to comments, and analyse
                          performance from one AI-powered hub.
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/support"
                    className="block group"
                    onClick={closeMobileMenu}>
                    <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-[#f3f0ff] dark:hover:bg-purple-900/30 transition-colors">
                      <div className="bg-[#f3f0ff] dark:bg-purple-900/30 p-2 rounded-full flex-shrink-0">
                        <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-[#5b21b6] dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm sm:text-base text-[#5b21b6] dark:text-purple-400 group-hover:text-[#4c1d95] dark:group-hover:text-purple-300 transition-colors">
                          Ongoing Support & Maintenance
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                          We continuously monitor, update, and optimize your AI
                          assistant for peak performance.
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/contact"
                    className="block group"
                    onClick={closeMobileMenu}>
                    <div className="bg-[#5b21b6] dark:bg-purple-800 rounded-lg p-3 sm:p-4 flex items-start gap-3 hover:bg-[#4c1d95] dark:hover:bg-purple-700 transition-colors">
                      <div className="bg-white/20 p-2 rounded-full flex-shrink-0">
                        <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm sm:text-base text-white flex items-center">
                          Custom{" "}
                          <span className="ml-1 text-yellow-300">✨</span>
                        </h3>
                        <p className="text-xs sm:text-sm text-white/90 mt-1">
                          A tailored solution that fits your business perfectly
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <button
                onClick={() => toggleDropdown("mobile-solutions")}
                className="flex items-center justify-between w-full text-[#0c0a09] dark:text-gray-200 py-2 cursor-pointer">
                <span className="text-base sm:text-lg font-medium">
                  Solutions
                </span>
                <ChevronDown
                  className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform ${
                    activeDropdown === "mobile-solutions" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "mobile-solutions" && (
                <div className="mt-3 sm:mt-4 space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="uppercase text-xs font-semibold text-[#5B21B6] dark:text-[#5B21B6] mb-3">
                      USE CASES
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 pl-2">
                      <li>
                        <Link
                          href="#"
                          className="text-sm sm:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors cursor-pointer">
                          Office Administrator
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm sm:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors cursor-pointer">
                          Front-Desk Receptionist
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm sm:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors cursor-pointer">
                          Sales Representative
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm sm:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors cursor-pointer">
                          Customer Support Agent
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm sm:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors cursor-pointer">
                          Social Media Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm sm:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors cursor-pointer">
                          Operations Analyst
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="uppercase text-xs font-semibold text-[#5B21B6] dark:text-[#5B21B6] mb-3">
                      INDUSTRIES
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 pl-2">
                      <li>
                        <Link
                          href="#"
                          className="text-sm sm:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                          Retail
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm sm:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                          Travel
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm sm:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                          Legal
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm sm:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                          Healthcare
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm sm:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                          Real Estate
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm sm:text-base text-[#0c0a09] dark:text-gray-200 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                          Financial Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <Link
                href="#"
                className="block text-base sm:text-lg font-medium text-[#0c0a09] dark:text-gray-200 py-2 cursor-pointer"
                onClick={closeMobileMenu}>
                How It Works
              </Link>
            </div>

            <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <button
                onClick={() => toggleDropdown("mobile-resources")}
                className="flex items-center justify-between w-full text-[#0c0a09] dark:text-gray-200 py-2">
                <span className="text-base sm:text-lg font-medium">
                  Resources
                </span>
                <ChevronDown
                  className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform ${
                    activeDropdown === "mobile-resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "mobile-resources" && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link
                    href="#"
                    className="block py-2 text-sm sm:text-base text-[#0c0a09]/80 dark:text-gray-300"
                    onClick={closeMobileMenu}>
                    Blog
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-sm sm:text-base text-[#0c0a09]/80 dark:text-gray-300"
                    onClick={closeMobileMenu}>
                    Case Studies
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-sm sm:text-base text-[#0c0a09]/80 dark:text-gray-300"
                    onClick={closeMobileMenu}>
                    Documentation
                  </Link>
                </div>
              )}
            </div>

            <div className="pt-4">
              <Button
                className="bg-[#5b21b6] hover:bg-[#4c1d95] dark:bg-purple-700 dark:hover:bg-purple-800 text-white rounded-full px-4 sm:px-6 w-full py-4 sm:py-6 text-sm sm:text-base"
                onClick={closeMobileMenu}>
                Start for Free
              </Button>
            </div>
          </nav>
        </LayoutContainer>
      </div>
    </header>
  );
}
