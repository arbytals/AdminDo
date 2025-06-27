import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import { LayoutContainer } from "@/components/layout-container";
import Image from "next/image";
import logo from "@/../public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#f3f0ff] dark:bg-gray-900 py-16">
      <LayoutContainer className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          {/* AdminDo Logo Column */}
          <div>
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

          {/* Company Column */}
          <div>
            <h3 className="text-[#5b21b6] dark:text-purple-400 font-medium mb-6 text-lg">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Pricing Plans Column */}
          <div>
            <h3 className="text-[#5b21b6] dark:text-purple-400 font-medium mb-6 text-lg">
              Pricing Plans
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/pricing/starter"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Starter Plan
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing/professional"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Professional Plan
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing/enterprise"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing/comparison"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Plan Comparison
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing/custom"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors">
                  Custom Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ARBYTALS PTY LTD. All rights
              reserved.
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="https://facebook.com/arbytals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors"
                aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/arbytals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors"
                aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/arbytals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors"
                aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/arbytals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors"
                aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </footer>
  );
}
