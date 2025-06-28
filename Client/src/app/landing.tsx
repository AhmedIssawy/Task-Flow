import React from 'react'
import Header from "@/components/landing/header"
import Features from "@/components/landing/features"
import Benefits from "@/components/landing/benefits"
import Hero from "@/components/landing/HeroSection"
import Testimonials from "@/components/landing/testimonials"
import Footer from "@/components/landing/footer"

const Landing = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Header />
            <main className="pt-4"> {/* Add top padding for floating header */}
                <Hero />
                <Features />
                <Benefits />
                <Testimonials />
            </main>
            <Footer />
        </div>
    )
}

export default Landing
