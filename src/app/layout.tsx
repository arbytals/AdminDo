import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { AuthProvider } from "@/contexts/auth-context";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "The Best Voice Automation Platform for Modern Businesses | AdminDo",
  description:
    "AdminDo is designed specifically to help unlock the potential of your business to its fullest, AdminDo the premier SaaS for AI voice automation. Automate routine tasks, deliver exceptional customer service, and optimize operations with intuitive voice commands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          :root {
            --font-plus-jakarta: ${plusJakarta.style.fontFamily};
            --font-lato: ${lato.style.fontFamily};
          }
        `}</style>
      </head>
      <body
        className={`${plusJakarta.variable} ${lato.variable} font-sans antialiased`}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="admin-do-theme">
            <LayoutWrapper>{children}</LayoutWrapper>
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
