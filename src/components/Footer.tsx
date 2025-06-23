import Link from "next/link";
import {
  HelpCircle,
  FileText,
  MessageCircle,
  Headphones,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

import { LayoutContainer } from "@/components/layout-container";
import Image from "next/image";
import logo from "@/../public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#fafaf9] dark:bg-gray-900 py-16">
      <LayoutContainer className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Column */}
          <div>
            <h3 className="text-[#5b21b6] dark:text-purple-400 font-medium mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Pricing Plans Column */}
          <div>
            <h3 className="text-[#5b21b6] dark:text-purple-400 font-medium mb-4">
              Pricing Plans
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/pricing/starter"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Starter Plan
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing/professional"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Professional Plan
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing/enterprise"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing/comparison"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Plan Comparison
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing/custom"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Custom Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Learning Hub Column */}
          <div>
            <h3 className="text-[#5b21b6] dark:text-purple-400 font-medium mb-4">
              Learning Hub
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Blog Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Video Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/webinars"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-glossary"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  AI Glossary
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-[#5b21b6] dark:text-purple-400 font-medium mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help-center"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-[#5b21b6] dark:text-purple-400" />
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#5b21b6] dark:text-purple-400" />
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-[#5b21b6] dark:text-purple-400" />
                  Community Forum
                </Link>
              </li>
              <li>
                <Link
                  href="/submit-ticket"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors flex items-center gap-2">
                  <Headphones className="h-4 w-4 text-[#5b21b6] dark:text-purple-400" />
                  Submit a Ticket
                </Link>
              </li>
              <li>
                <Link
                  href="/system-status"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-500 flex-shrink-0"></div>
                  System Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-purple-950 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={logo}
                  alt="AdminDo Logo"
                  priority={true}
                  quality={100}
                  className="h-8 w-8"
                />
                <span className="ml-2 text-lg font-bold text-[#5b21b6] dark:text-purple-400">
                  AdminDo
                </span>
              </Link>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              ©{new Date().getFullYear()} Arbytals Technologies. All rights
              reserved. |
              <Link
                href="/privacy"
                className="text-[#5b21b6] dark:text-purple-400 hover:underline ml-1">
                Privacy
              </Link>{" "}
              |
              <Link
                href="/terms"
                className="text-[#5b21b6] dark:text-purple-400 hover:underline ml-1">
                Terms
              </Link>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link
                href="https://facebook.com/arbytals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors"
                aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/arbytals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors"
                aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/arbytals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors"
                aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/arbytals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors"
                aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </footer>
  );
}
