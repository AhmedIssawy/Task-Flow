import Analytics from "@/components/landing/Analytics";
import Benefits from "@/components/landing/benefits";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import HeroSection from "@/components/landing/HeroSection";
import OurWork from "@/components/landing/Ourwork";
import Testimonials from "@/components/landing/testimonials";

const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <div className="w-full max-w-none mx-auto">
                    <HeroSection />
                </div>
                <div className="w-full max-w-none mx-auto">
                    <Features />
                </div>
                <div className="w-full max-w-none mx-auto">
                    <Benefits />
                </div>
                <div className="w-full max-w-none mx-auto">
                    <Analytics />
                </div>
                <div className="w-full max-w-none mx-auto">
                    <OurWork />
                </div>
                <div className="w-full max-w-none mx-auto">
                    <Testimonials />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;