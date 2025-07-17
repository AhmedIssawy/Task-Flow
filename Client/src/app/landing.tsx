"use client";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/landing/header"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/landing/HeroSection"), { ssr: false });
const Features = dynamic(() => import("@/components/landing/features"), { ssr: false });
const Benefits = dynamic(() => import("@/components/landing/benefits"), { ssr: false });
const Analytics = dynamic(() => import("@/components/landing/Analytics"), { ssr: false });
const OurWork = dynamic(() => import("@/components/landing/Ourwork"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/landing/testimonials"), { ssr: false });
const Footer = dynamic(() => import("@/components/landing/footer"), { ssr: false });

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-10">
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
