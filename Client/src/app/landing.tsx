'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Header from "@/components/landing/header"
import HeroSection from "@/components/landing/HeroSection"
import Features from "@/components/landing/features"
import Benefits from "@/components/landing/benefits"
import Testimonials from "@/components/landing/testimonials"
import Footer from "@/components/landing/footer"

const Landing = () => {
    const pageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    }

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    }

    return (
        <motion.div
            className="min-h-screen bg-background text-foreground font-sans"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            <Header />
            <main className="pt-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <HeroSection />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    <Features />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                    transition={{ delay: 0.2 }}
                >
                    <Benefits />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                    transition={{ delay: 0.3 }}
                >
                    <Testimonials />
                </motion.div>
            </main>
            <Footer />
        </motion.div>
    )
}

export default Landing
