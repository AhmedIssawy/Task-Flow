import { useTranslations, useLocale } from "next-intl";
import { Zap, Users, LayoutDashboard, ArrowRight, Sparkles } from "lucide-react";

const Features = () => {
    const t = useTranslations("Landing.Features");
    const locale = useLocale();
    
    // Debug: Log the current locale and a sample translation
    console.log("Features component - Current locale:", locale);
    console.log("Features component - Sample translation (badge):", t("badge"));

    const features = [
        {
            icon: Zap,
            title: t("realTimeCollaboration"),
            description: t("realTimeCollaborationDescription"),
            gradient: "from-blue-600 to-blue-700",
            iconBg: "bg-blue-500/20",
            iconColor: "text-blue-100"
        },
        {
            icon: LayoutDashboard,
            title: t("customizableDashboards"),
            description: t("customizableDashboardsDescription"),
            gradient: "from-purple-600 to-purple-700",
            iconBg: "bg-purple-500/20",
            iconColor: "text-purple-100"
        },
        {
            icon: Users,
            title: t("teamManagement"),
            description: t("teamManagementDescription"),
            gradient: "from-green-600 to-green-700",
            iconBg: "bg-green-500/20",
            iconColor: "text-green-100"
        }
    ];

    return (
        <section id="features" className="py-24 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent"></div>
            <div className="absolute top-0 ltr:left-1/4 rtl:right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 ltr:right-1/4 rtl:left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        {t("badge")}
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-foreground mb-6">
                        {t("title")}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${feature.gradient} text-white p-8 rounded-2xl ltr:text-left rtl:text-right transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl group cursor-pointer relative overflow-hidden`}
                            >
                                {/* Background Pattern */}
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute -top-4 ltr:-right-4 rtl:-left-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>

                                <div className="relative z-10">
                                    <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className={`h-8 w-8 ${feature.iconColor}`} />
                                    </div>

                                    <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors">
                                        {feature.title}
                                    </h3>

                                    <p className="text-sm opacity-90 leading-relaxed mb-6">
                                        {feature.description}
                                    </p>

                                    <div className="flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        {t("learnMore")}
                                        <ArrowRight className="ltr:ml-2 rtl:mr-2 h-4 w-4 group-hover:ltr:translate-x-1 group-hover:rtl:-translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Feature Highlights */}
                <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
                    <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/80 transition-all duration-300">
                        <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{t("stats.uptimeValue")}</div>
                        <div className="text-sm text-muted-foreground">{t("stats.uptime")}</div>
                    </div>
                    <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/80 transition-all duration-300">
                        <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{t("stats.supportValue")}</div>
                        <div className="text-sm text-muted-foreground">{t("stats.support")}</div>
                    </div>
                    <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/80 transition-all duration-300">
                        <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{t("stats.integrationsValue")}</div>
                        <div className="text-sm text-muted-foreground">{t("stats.integrations")}</div>
                    </div>
                    <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/80 transition-all duration-300">
                        <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{t("stats.usersValue")}</div>
                        <div className="text-sm text-muted-foreground">{t("stats.users")}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;