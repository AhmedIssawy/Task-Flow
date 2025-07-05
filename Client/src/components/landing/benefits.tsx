'use client';
import { useTranslations } from "next-intl";
import { CheckCircle, TrendingUp, Users, Shield, Settings, Headphones, Star, Award } from "lucide-react";

const Benefits = () => {
    const t = useTranslations("Benefits");

    const benefits = [
        {
            icon: TrendingUp,
            title: t("increasedProductivity"),
            description: t("increasedProductivityDescription"),
            color: "text-green-500",
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/20"
        },
        {
            icon: Users,
            title: t("improvedCollaboration"),
            description: t("improvedCollaborationDescription"),
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20"
        },
        {
            icon: CheckCircle,
            title: t("betterProjectVisibility"),
            description: t("betterProjectVisibilityDescription"),
            color: "text-purple-500",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20"
        },
        {
            icon: Shield,
            title: t("seamlessIntegrations"),
            description: t("seamlessIntegrationsDescription"),
            color: "text-orange-500",
            bgColor: "bg-orange-500/10",
            borderColor: "border-orange-500/20"
        },
        {
            icon: Settings,
            title: t("customizableWorkflows"),
            description: t("customizableWorkflowsDescription"),
            color: "text-indigo-500",
            bgColor: "bg-indigo-500/10",
            borderColor: "border-indigo-500/20"
        },
        {
            icon: Headphones,
            title: t("customerSupport"),
            description: t("customerSupportDescription"),
            color: "text-pink-500",
            bgColor: "bg-pink-500/10",
            borderColor: "border-pink-500/20"
        },
    ];

    return (
        <section id="benefits" className="py-24 bg-gradient-to-br from-accent/20 via-background to-accent/10 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="container px-4 md:px-8 relative z-10">
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Award className="w-4 h-4" />
                        Benefits
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-foreground mb-6">
                        <span className="text-gradient">{t("title")}</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={index}
                                className={`glass-effect ${benefit.borderColor} p-8 rounded-2xl text-left card-hover-effect group cursor-pointer relative overflow-hidden`}
                            >
                                {/* Hover Effect Background */}
                                <div className={`absolute inset-0 ${benefit.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className="relative z-10">
                                    <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                                        <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                                    </div>

                                    <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-foreground transition-colors">
                                        {benefit.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Section Divider */}
                <div className="section-divider"></div>

                {/* Key Advantages Section */}
                <div className="mt-20 max-w-5xl mx-auto">
                    <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-xl">
                        <div className="text-center mb-8 animate-fade-in-up">
                            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                                Key Advantages
                            </h3>
                            <p className="text-muted-foreground">Everything you need to succeed, built right in</p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                { text: "Real-time synchronization", icon: "⚡" },
                                { text: "Advanced analytics", icon: "📊" },
                                { text: "Mobile optimization", icon: "📱" },
                                { text: "Enterprise security", icon: "🔒" },
                                { text: "API integrations", icon: "🔗" },
                                { text: "Unlimited storage", icon: "☁️" }
                            ].map((advantage, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-all duration-300 group interactive-element">
                                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                        {advantage.icon}
                                    </div>
                                    <div className="flex items-center gap-3 flex-1">
                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-foreground font-medium">{advantage.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Customer Rating */}
                        <div className="mt-12 text-center animate-scale-in">
                            <div className="flex justify-center items-center gap-2 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                                ))}
                            </div>
                            <p className="text-lg font-semibold text-foreground mb-2">4.9/5 Customer Rating</p>
                            <p className="text-muted-foreground">Based on 2,500+ reviews from satisfied customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
