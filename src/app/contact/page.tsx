import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";
import { LayoutContainer } from "@/components/layout-container";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen relative">
      {/* Subtle creative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-100 dark:from-purple-950 dark:via-purple-900/90 dark:to-purple-950" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(216,180,254,0.05)_0deg,_transparent_60deg,_transparent_300deg,_rgba(216,180,254,0.05)_360deg)] dark:bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(168,85,247,0.02)_0deg,_transparent_60deg,_transparent_300deg,_rgba(168,85,247,0.02)_360deg)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.01)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,_transparent,_transparent_10px,_rgba(216,180,254,0.02)_10px,_rgba(216,180,254,0.02)_20px)] dark:bg-[repeating-linear-gradient(45deg,_transparent,_transparent_10px,_rgba(168,85,247,0.01)_10px,_rgba(168,85,247,0.01)_20px)]" />

      {/* Content wrapper with relative positioning */}
      <div className="relative">
        {/* Header */}
        <header className="pt-24 pb-12">
          <LayoutContainer>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We&apos;d love to hear from you. Fill out the form below or use
                our contact information to reach out.
              </p>
            </div>
          </LayoutContainer>
        </header>

        {/* Main Content */}
        <main className="pb-24">
          <LayoutContainer>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="overflow-hidden border-none bg-[#5b21b6] shadow-lg dark:bg-gray-800">
                  <div className="h-24 bg-gradient-to-r from-violet-500 to-purple-600"></div>
                  <CardContent className="p-6 -mt-10">
                    <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center mb-6 mx-auto">
                      <Mail className="h-8 w-8 text-violet-600 dark:text-purple-400" />
                    </div>

                    <h2 className="text-2xl text-white font-semibold text-center mb-6 dark:text-white">
                      Contact Information
                    </h2>

                    <div className="space-y-4">
                      <div className="flex items-start text-white space-x-4">
                        <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-5 w-5 text-violet-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-white dark:text-gray-400">
                            Phone Number
                          </h3>
                          <p className="text-white dark:text-gray-300">
                            +61 (4) 522-04174
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start text-white space-x-4">
                        <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-violet-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-white dark:text-gray-400">
                            Email Address
                          </h3>
                          <p className="text-white dark:text-gray-300">
                            info@admindo.ai
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t text-white border-gray-200 dark:border-gray-700">
                      <h3 className="text-sm font-medium text-white dark:text-gray-400 mb-4">
                        Connect With Us
                      </h3>
                      <div className="flex items-center text-white space-x-4">
                        <Link
                          href="https://facebook.com/admindo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white dark:text-gray-400 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors"
                          aria-label="Facebook">
                          <Facebook className="h-5 w-5" />
                        </Link>
                        <Link
                          href="https://instagram.com/admindo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white dark:text-gray-400 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors"
                          aria-label="Instagram">
                          <Instagram className="h-5 w-5" />
                        </Link>
                        <Link
                          href="https://linkedin.com/in/admindo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white dark:text-gray-400 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors"
                          aria-label="LinkedIn">
                          <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link
                          href="https://twitter.com/admindo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white dark:text-gray-400 hover:text-[#5b21b6] dark:hover:text-purple-400 transition-colors"
                          aria-label="Twitter">
                          <Twitter className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-lg dark:bg-gray-800">
                  <CardContent className="p-8">
                                       <ContactForm />
                  </CardContent>
                </Card>

                {/* Map */}
                <div className="mt-8 rounded-xl overflow-hidden shadow-lg h-80 bg-gray-200 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-10 w-10 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-500 dark:text-gray-400">
                        Interactive map would be displayed here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </LayoutContainer>
        </main>
      </div>
    </div>
  );
}
