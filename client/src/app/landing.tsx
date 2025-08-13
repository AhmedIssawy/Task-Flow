// Server component for static generation - remove "use client" directive
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import Features from "@/components/landing/Features";
import Benefits from "@/components/landing/Benefits";
import Analytics from "@/components/landing/Analytics";
import OurWork from "@/components/landing/Ourwork";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/landing/Footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
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
