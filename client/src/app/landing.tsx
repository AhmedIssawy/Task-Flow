"use client";
import dynamic from "next/dynamic";
import { getPlatformClasses } from "@/lib/mobile";

const Header = dynamic(() => import("@/components/landing/Header"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/landing/HeroSection"), { ssr: false });
const Features = dynamic(() => import("@/components/landing/Features"), { ssr: false });
const Benefits = dynamic(() => import("@/components/landing/Benefits"), { ssr: false });
const Analytics = dynamic(() => import("@/components/landing/Analytics"), { ssr: false });
const OurWork = dynamic(() => import("@/components/landing/Ourwork"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/landing/Testimonials"), { ssr: false });
const Footer = dynamic(() => import("@/components/landing/Footer"), { ssr: false });

const LandingPage = () => {
  // Platform-specific spacing for main content
  const mainClasses = getPlatformClasses(
    'flex-grow mobile-safe-content', // Mobile: uses safe area spacing
    'flex-grow mt-20' // Web: uses fixed margin-top
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={mainClasses}>
        <div className="w-full">
          <HeroSection />
          <Features />
          <Benefits />
          <Analytics />
          <OurWork />
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
