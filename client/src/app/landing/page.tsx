import dynamic from "next/dynamic";
import { getPlatformClasses } from "@/lib/mobile";
import Header from "@/components/landing/Header";
const HeroSection = dynamic(() => import("@/components/landing/HeroSection"));
const Features = dynamic(() => import("@/components/landing/Features"));
const Benefits = dynamic(() => import("@/components/landing/Benefits"));
const Analytics = dynamic(() => import("@/components/landing/Analytics"));
const OurWork = dynamic(() => import("@/components/landing/OurWork"));
const Testimonials = dynamic(() => import("@/components/landing/Testimonials"));
const Footer = dynamic(() => import("@/components/landing/Footer"));

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
