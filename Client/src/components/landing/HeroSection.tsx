'use client'
import { useTranslations } from "next-intl";
import { Users, Smartphone, BarChart3, CheckCircle, Clock, TrendingUp, ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
    const t = useTranslations("Landing.HeroSection");

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-8 py-20 bg-gradient-to-br from-background via-background to-accent/20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-20 ltr:left-10 rtl:right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 ltr:right-10 rtl:left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            {/* Floating geometric shapes */}
            <div className="absolute top-1/4 ltr:right-1/4 rtl:left-1/4 w-6 h-6 bg-primary/30 rounded-full animate-float"></div>
            <div className="absolute bottom-1/3 ltr:left-1/3 rtl:right-1/3 w-4 h-4 bg-secondary/30 rounded-full animate-float-reverse"></div>
            <div className="absolute top-2/3 ltr:right-1/3 rtl:left-1/3 w-5 h-5 bg-accent/30 rounded-full animate-float-delayed"></div>

            <div className="container mx-auto text-center relative z-10 max-w-7xl">
                {/* Hero Content */}
                <div className="animate-fade-in-up max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight font-serif text-foreground mb-6 leading-tight">
                        <span className="text-gradient">{t("title")}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                        {t("subtitle")}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
                        <button
                            className="btn-primary-enhanced bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group flex items-center justify-center gap-2"
                        >
                            {t("getStarted")}
                            <ArrowRight className="ltr:ml-2 rtl:mr-2 h-5 w-5 group-hover:ltr:translate-x-1 group-hover:rtl:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            className="interactive-element border border-border hover:bg-accent text-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 group flex items-center justify-center gap-2"
                        >
                            <Play className="ltr:mr-2 rtl:ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                            {t("learnMore")}
                        </button>
                    </div>
                </div>

                {/* Floating Cards Grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Team Collaboration Card */}
                    <div className="relative transform -translate-y-5 glass-effect rounded-2xl p-6 shadow-2xl animate-float card-hover-effect group">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-semibold text-foreground">{t("teamCollaboration")}</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                                    <span className="text-xs font-medium text-muted-foreground">SJ</span>
                                </div>
                                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                    <div className="h-full w-3/4 bg-primary rounded-full animate-pulse"></div>
                                </div>
                                <span className="text-xs text-muted-foreground">75%</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                                    <span className="text-xs font-medium text-muted-foreground">MC</span>
                                </div>
                                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                    <div className="h-full w-1/2 bg-green-500 rounded-full animate-pulse delay-300"></div>
                                </div>
                                <span className="text-xs text-muted-foreground">50%</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                                    <span className="text-xs font-medium text-muted-foreground">ED</span>
                                </div>
                                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                    <div className="h-full w-5/6 bg-orange-500 rounded-full animate-pulse delay-500"></div>
                                </div>
                                <span className="text-xs text-muted-foreground">83%</span>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Ready Card */}
                    <div className="relative transform translate-y-5 glass-effect rounded-2xl p-6 shadow-2xl animate-float-reverse card-hover-effect group">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                <Smartphone className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-foreground">{t("mobileReady")}</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                                <span className="text-sm text-muted-foreground">{t("tasksToday")}</span>
                                <span className="text-sm font-medium text-foreground">8/12</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 hover:bg-muted/30 rounded-lg transition-colors interactive-element">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-foreground">{t("designReview")}</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 hover:bg-muted/30 rounded-lg transition-colors interactive-element">
                                <Clock className="w-4 h-4 text-orange-500" />
                                <span className="text-sm text-foreground">{t("clientMeeting")}</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 hover:bg-muted/30 rounded-lg transition-colors interactive-element">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-foreground">{t("codeDeploy")}</span>
                            </div>
                        </div>
                    </div>

                    {/* Analytics Card */}
                    <div className="relative transform -translate-y-2 glass-effect rounded-2xl p-6 shadow-2xl animate-float-delayed card-hover-effect group md:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                <BarChart3 className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold text-foreground">{t("analytics")}</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">{t("productivity")}</span>
                                <div className="flex items-center gap-1">
                                    <TrendingUp className="w-3 h-3 text-green-500" />
                                    <span className="text-sm font-medium text-green-600">{t("percentageIncrease")}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-7 gap-1 h-16">
                                {[40, 65, 45, 80, 55, 70, 85].map((height, index) => (
                                    <div
                                        key={index}
                                        className="bg-primary rounded-sm hover:bg-primary/80 transition-colors cursor-pointer interactive-element"
                                        style={{ height: `${height}%` }}
                                        title={`Day ${index + 1}: ${height}%`}
                                    ></div>
                                ))}
                            </div>
                            <div className="text-xs text-muted-foreground text-center">Last 7 days</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
