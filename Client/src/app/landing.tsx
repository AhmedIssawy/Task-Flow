"use client"
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/landing/header"));
const HeroSection = dynamic(() => import("@/components/landing/HeroSection"));
const Features = dynamic(() => import("@/components/landing/features"));
const Benefits = dynamic(() => import("@/components/landing/benefits"));
const Analytics = dynamic(() => import("@/components/landing/Analytics"));
const OurWork = dynamic(() => import("@/components/landing/Ourwork"));
const Testimonials = dynamic(() => import("@/components/landing/testimonials"));
const Footer = dynamic(() => import("@/components/landing/footer"));

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
