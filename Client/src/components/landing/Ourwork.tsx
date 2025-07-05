import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Users, Briefcase, Award, TrendingUp, Globe, Zap } from "lucide-react";

const OurWork = () => {
    const t = useTranslations("OurWork");

    const stats = [
        {
            icon: BarChart,
            value: "10,000+",
            label: t("tasksCompleted"),
            color: "text-green-500",
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/20"
        },
        {
            icon: Users,
            value: "500+",
            label: t("happyClients"),
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20"
        },
        {
            icon: Briefcase,
            value: "200+",
            label: t("projectsDelivered"),
            color: "text-purple-500",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20"
        },
        {
            icon: Award,
            value: "5+",
            label: t("yearsOfExperience"),
            color: "text-orange-500",
            bgColor: "bg-orange-500/10",
            borderColor: "border-orange-500/20"
        }
    ];

    return (
        <section id="our-work" className="py-24 bg-gradient-to-br from-accent/10 via-background to-accent/20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="container px-4 md:px-8 relative z-10">
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <TrendingUp className="w-4 h-4" />
                        Our Impact
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-foreground mb-6">
                        <span className="text-gradient">{t("title")}</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {t("subtitle")}
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-20">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <Card key={index} className={`text-center glass-effect border ${stat.borderColor} card-hover-effect group cursor-pointer overflow-hidden`}>
                                <CardContent className="p-8 relative">
                                    {/* Hover Effect Background */}
                                    <div className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    <div className="relative z-10">
                                        <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                                            <IconComponent className={`h-8 w-8 ${stat.color}`} />
                                        </div>
                                        <p className="text-3xl md:text-4xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                            {stat.value}
                                        </p>
                                        <p className="text-sm text-muted-foreground font-medium group-hover:text-muted-foreground/90 transition-colors">
                                            {stat.label}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Section Divider */}
                <div className="section-divider"></div>

                {/* Additional Achievements */}
                <div className="max-w-4xl mx-auto">
                    <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-xl">
                        <div className="text-center mb-8 animate-fade-in-up">
                            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                                Global Recognition
                            </h3>
                            <p className="text-muted-foreground">Trusted by companies worldwide</p>
                        </div>

                        <div className="grid gap-8 sm:grid-cols-3">
                            <div className="text-center group interactive-element">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                                    <Globe className="h-8 w-8 text-primary" />
                                </div>
                                <div className="text-2xl font-bold text-foreground mb-2">50+</div>
                                <div className="text-sm text-muted-foreground">Countries Served</div>
                            </div>

                            <div className="text-center group interactive-element">
                                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                                    <Zap className="h-8 w-8 text-secondary" />
                                </div>
                                <div className="text-2xl font-bold text-foreground mb-2">99.9%</div>
                                <div className="text-sm text-muted-foreground">Uptime Record</div>
                            </div>

                            <div className="text-center group interactive-element">
                                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                                    <Award className="h-8 w-8 text-green-500" />
                                </div>
                                <div className="text-2xl font-bold text-foreground mb-2">15+</div>
                                <div className="text-sm text-muted-foreground">Industry Awards</div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWork;
