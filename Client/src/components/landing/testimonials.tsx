'use client';
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Testimonials = () => {
    const t = useTranslations("Landing.Testimonials");
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: t("testimonials.sarahJohnson.name"),
            role: t("testimonials.sarahJohnson.role"),
            company: t("testimonials.sarahJohnson.company"),
            avatar: "SJ",
            rating: 5,
            content: t("testimonials.sarahJohnson.content"),
            gradient: "from-blue-500 to-purple-600"
        },
        {
            name: t("testimonials.michaelChen.name"),
            role: t("testimonials.michaelChen.role"),
            company: t("testimonials.michaelChen.company"),
            avatar: "MC",
            rating: 5,
            content: t("testimonials.michaelChen.content"),
            gradient: "from-green-500 to-teal-600"
        },
        {
            name: t("testimonials.emilyRodriguez.name"),
            role: t("testimonials.emilyRodriguez.role"),
            company: t("testimonials.emilyRodriguez.company"),
            avatar: "ER",
            rating: 5,
            content: t("testimonials.emilyRodriguez.content"),
            gradient: "from-purple-500 to-pink-600"
        },
        {
            name: t("testimonials.davidKim.name"),
            role: t("testimonials.davidKim.role"),
            company: t("testimonials.davidKim.company"),
            avatar: "DK",
            rating: 5,
            content: t("testimonials.davidKim.content"),
            gradient: "from-orange-500 to-red-600"
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-1/4 ltr:left-1/4 rtl:right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 ltr:right-1/4 rtl:left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Quote className="w-4 h-4" />
                        {t("badge")}
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-foreground mb-6">
                        {t("title")}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {t("subtitle")}
                    </p>
                </div>

                {/* Main Testimonial Display */}
                <div className="max-w-4xl mx-auto mb-16">
                    <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-2xl overflow-hidden">
                        <CardContent className="p-0">
                            <div className={`bg-gradient-to-r ${testimonials[currentIndex].gradient} p-8 text-white relative`}>
                                <div className="absolute top-4 ltr:right-4 rtl:left-4 opacity-20">
                                    <Quote className="w-16 h-16" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-6">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <blockquote className="text-lg md:text-xl leading-relaxed mb-6 font-medium">
                                        &ldquo;{testimonials[currentIndex].content}&rdquo;
                                    </blockquote>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                            <span className="text-white font-semibold">
                                                {testimonials[currentIndex].avatar}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white">
                                                {testimonials[currentIndex].name}
                                            </div>
                                            <div className="text-white/80 text-sm">
                                                {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Navigation */}
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevTestimonial}
                            className="w-12 h-12 rounded-full border-border hover:bg-accent transition-all duration-200"
                        >
                            <ArrowLeft className="w-4 h-4" />
                        </Button>

                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'bg-primary scale-125'
                                            : 'bg-muted hover:bg-primary/50'
                                        }`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextTestimonial}
                            className="w-12 h-12 rounded-full border-border hover:bg-accent transition-all duration-200"
                        >
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Customer Logos */}
                <div className="text-center max-w-5xl mx-auto">
                    <p className="text-muted-foreground mb-8 font-medium">
                        {t("trustedBy")}
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                        {[...Array(8)].map((_, index) => (
                            <div
                                key={index}
                                className="w-20 h-12 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-muted/70 transition-all duration-300 hover:scale-105"
                            >
                                <div className="w-16 h-6 bg-muted rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center max-w-4xl mx-auto">
                    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                            {t("cta.title")}
                        </h3>
                        <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                            {t("cta.subtitle")}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                {t("cta.startFreeTrial")}
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-border hover:bg-accent text-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                            >
                                {t("cta.scheduleDemo")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
