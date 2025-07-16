import { useTranslations, useLocale } from "next-intl";
import { BarChart3, TrendingUp, Users, Target, Clock, CheckCircle, Activity } from "lucide-react";

const Analytics = () => {
    const t = useTranslations("Landing.Analytics");
    const locale = useLocale();
    
    // Debug: Log the current locale and a sample translation
    console.log("Analytics component - Current locale:", locale);
    console.log("Analytics component - Sample translation (badge):", t("badge"));

    const stats = [
        { value: t("stats.tasksCompletedValue"), label: t("stats.tasksCompleted"), icon: CheckCircle, color: "text-green-500", bgColor: "bg-green-500/10" },
        { value: t("stats.happyClientsValue"), label: t("stats.happyClients"), icon: Users, color: "text-blue-500", bgColor: "bg-blue-500/10" },
        { value: t("stats.projectsDeliveredValue"), label: t("stats.projectsDelivered"), icon: Target, color: "text-purple-500", bgColor: "bg-purple-500/10" },
        { value: t("stats.yearsOfExperienceValue"), label: t("stats.yearsOfExperience"), icon: Clock, color: "text-orange-500", bgColor: "bg-orange-500/10" },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-background to-accent/10 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-1/3 ltr:right-0 rtl:left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 ltr:left-0 rtl:right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Activity className="w-4 h-4" />
                        {t("badge")}
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-foreground mb-6">
                        <span className="text-gradient">{t("title")}</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {t("subtitle")}
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-20">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div
                                key={index}
                                className="glass-effect p-8 rounded-2xl text-center shadow-lg card-hover-effect group animate-scale-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Analytics Dashboard */}
                <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto mb-20">

                    {/* Bar Chart Card */}
                    <div className="glass-effect p-8 rounded-2xl shadow-xl card-hover-effect">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                <BarChart3 className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground">
                                    {t("weeklyPerformance")}
                                </h3>
                                <p className="text-sm text-muted-foreground">{t("taskCompletionTrends")}</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Chart Bars */}
                            <div className="flex items-end justify-between h-40 gap-3 bg-muted/30 rounded-xl p-4">
                                {[65, 45, 80, 55, 70, 85, 90].map((height, index) => (
                                    <div key={index} className="flex flex-col items-center flex-1 group">
                                        <div
                                            className="w-full bg-gradient-to-t from-primary to-primary/70 dark:from-[#020817] dark:via-[#020817] dark:to-transparent rounded-sm transition-all duration-500 hover:from-primary/80 hover:to-primary/50 cursor-pointer relative interactive-element"
                                            style={{ height: `${height}%` }}
                                        >
                                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                {height}%
                                            </div>
                                        </div>
                                        <span className="text-xs text-muted-foreground mt-3 font-medium">
                                            {[t("weekDays.monday"), t("weekDays.tuesday"), t("weekDays.wednesday"), t("weekDays.thursday"), t("weekDays.friday"), t("weekDays.saturday"), t("weekDays.sunday")][index]}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-between p-4 bg-muted/20 rounded-xl">
                                <span className="text-muted-foreground font-medium">{t("stats.tasksCompleted")}</span>
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="h-4 w-4 text-green-500" />
                                    <span className="text-green-600 font-semibold">{t("percentageIncrease")}</span>
                                    <span className="text-xs text-muted-foreground">{t("vsLastWeek")}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Tracking Card */}
                    <div className="glass-effect p-8 rounded-2xl shadow-xl card-hover-effect">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                                <Users className="h-6 w-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground">
                                    {t("teamProgress")}
                                </h3>
                                <p className="text-sm text-muted-foreground">{t("individualPerformance")}</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors interactive-element">
                                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                                    <span className="text-sm font-semibold text-foreground">SJ</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-semibold text-foreground">{t("teamMembers.sarahJohnson")}</span>
                                        <span className="text-sm text-muted-foreground font-medium">85%</span>
                                    </div>
                                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out" style={{ width: "85%" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors interactive-element">
                                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                                    <span className="text-sm font-semibold text-foreground">MC</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-semibold text-foreground">{t("teamMembers.mikeCheng")}</span>
                                        <span className="text-sm text-muted-foreground font-medium">72%</span>
                                    </div>
                                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 rounded-full transition-all duration-1000 ease-out" style={{ width: "72%" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors interactive-element">
                                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                                    <span className="text-sm font-semibold text-foreground">ED</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-semibold text-foreground">{t("teamMembers.emilyDavis")}</span>
                                        <span className="text-sm text-muted-foreground font-medium">94%</span>
                                    </div>
                                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                                        <div className="h-full bg-purple-500 rounded-full transition-all duration-1000 ease-out" style={{ width: "94%" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors interactive-element">
                                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                                    <span className="text-sm font-semibold text-foreground">AR</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-semibold text-foreground">{t("teamMembers.alexRodriguez")}</span>
                                        <span className="text-sm text-muted-foreground font-medium">68%</span>
                                    </div>
                                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                                        <div className="h-full bg-orange-500 rounded-full transition-all duration-1000 ease-out" style={{ width: "68%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Metrics */}
                <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
                    <div className="text-center p-6 glass-effect rounded-2xl card-hover-effect group">
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">😊</div>
                        <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-105 transition-transform duration-300">
                            {t("metrics.customerSatisfactionValue")}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                            {t("metrics.customerSatisfaction")}
                        </div>
                    </div>
                    <div className="text-center p-6 glass-effect rounded-2xl card-hover-effect group">
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🛟</div>
                        <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-105 transition-transform duration-300">
                            {t("metrics.supportAvailabilityValue")}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                            {t("metrics.supportAvailability")}
                        </div>
                    </div>
                    <div className="text-center p-6 glass-effect rounded-2xl card-hover-effect group">
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">⚡</div>
                        <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-105 transition-transform duration-300">
                            {t("metrics.uptimeGuaranteeValue")}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                            {t("metrics.uptimeGuarantee")}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Analytics;