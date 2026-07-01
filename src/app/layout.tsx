import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DIMHANS — Institute of Mental Health, Neuroscience & Technology Incubator",
    template: "%s | DIMHANS",
  },
  description:
    "DIMHANS is a premier government-funded research institute advancing mental health, neuroscience, and deep-tech innovation. Home to India's leading Technology Business Incubator for healthcare and deep-tech startups.",
  keywords: [
    "DIMHANS",
    "mental health research",
    "neuroscience institute",
    "technology business incubator",
    "government research institute",
    "deep tech incubator",
    "pharmacogenomics",
    "digital diagnostics",
    "AI healthcare",
    "startup incubation",
    "research publications",
    "Dharwad",
    "Karnataka",
  ],
  authors: [{ name: "DIMHANS Research Institute" }],
  creator: "DIMHANS",
  publisher: "Government of Karnataka",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dimhans.gov.in",
    siteName: "DIMHANS",
    title: "DIMHANS — Institute of Mental Health, Neuroscience & Technology Incubator",
    description:
      "Advancing mental health, neuroscience, and deep-tech innovation through world-class research and incubation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIMHANS — Research & Technology Incubator",
    description:
      "Premier government research institute advancing mental health, neuroscience, and deep-tech innovation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-[var(--color-text)] antialiased">
        <Header />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
