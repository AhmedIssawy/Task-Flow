import React from "react";
import Header from "@/components/layout/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import KeyFeatures from "@/components/landing/KeyFeatures";
import Benefits from "@/components/landing/Benefits";
import { AboutSection } from "@/components/landing/AboutSection";
import { ProgramsSection } from "@/components/landing/ProgramsSection";
import { NewsSection } from "@/components/landing/NewsSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-theme text-theme">
      {/* Header - Full width for proper sticky behavior */}
      <Header />

      {/* Main Content */}
      <main>
        <HeroSection />
        <KeyFeatures />
        <Benefits />
        <AboutSection />
        <ProgramsSection />
        <NewsSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
