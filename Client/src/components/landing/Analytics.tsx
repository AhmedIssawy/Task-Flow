import { useTranslations } from "next-intl";
import { BarChart3, TrendingUp, Users, Target, Clock, CheckCircle, Activity } from "lucide-react";

const Analytics = () => {
    const t = useTranslations("OurWork");

    const stats = [
        { value: "10,000+", label: t("tasksCompleted"), icon: CheckCircle, color: "text-green-500", bgColor: "bg-green-500/10" },
        { value: "500+", label: t("happyClients"), icon: Users, color: "text-blue-500", bgColor: "bg-blue-500/10" },
        { value: "200+", label: t("projectsDelivered"), icon: Target, color: "text-purple-500", bgColor: "bg-purple-500/10" },
        { value: "5+", label: t("yearsOfExperience"), icon: Clock, color: "text-orange-500", bgColor: "bg-orange-500/10" },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-background to-accent/10 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="container px-4 md:px-8 relative z-10">
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Activity className="w-4 h-4" />
                        Analytics
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
                                    Weekly Performance
                                </h3>
                                <p className="text-sm text-muted-foreground">Task completion trends</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Chart Bars */}
                            <div className="flex items-end justify-between h-40 gap-3 bg-muted/30 rounded-xl p-4">
                                {[65, 45, 80, 55, 70, 85, 90].map((height, index) => (
                                    <div key={index} className="flex flex-col items-center flex-1 group">
                                        <div
                                            className="w-full bg-gradient-to-t from-primary to-primary/70 rounded-sm transition-all duration-500 hover:from-primary/80 hover:to-primary/50 cursor-pointer relative interactive-element"
                                            style={{ height: `${height}%` }}
                                        >
                                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                {height}%
                                            </div>
                                        </div>
                                        <span className="text-xs text-muted-foreground mt-3 font-medium">
                                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-between p-4 bg-muted/20 rounded-xl">
                                <span className="text-muted-foreground font-medium">Tasks Completed</span>
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="h-4 w-4 text-green-500" />
                                    <span className="text-green-600 font-semibold">+15%</span>
                                    <span className="text-xs text-muted-foreground">vs last week</span>
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
                                    Team Progress
                                </h3>
                                <p className="text-sm text-muted-foreground">Individual performance</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { name: "Sarah Johnson", progress: 85, color: "bg-blue-500", avatar: "SJ" },
                                { name: "Mike Chen", progress: 72, color: "bg-green-500", avatar: "MC" },
                                { name: "Emily Davis", progress: 94, color: "bg-purple-500", avatar: "ED" },
                                { name: "Alex Rodriguez", progress: 68, color: "bg-orange-500", avatar: "AR" },
                            ].map((member, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors interactive-element">
                                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                                        <span className="text-sm font-semibold text-foreground">
                                            {member.avatar}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-semibold text-foreground">
                                                {member.name}
                                            </span>
                                            <span className="text-sm text-muted-foreground font-medium">
                                                {member.progress}%
                                            </span>
                                        </div>
                                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${member.color} rounded-full transition-all duration-1000 ease-out`}
                                                style={{ width: `${member.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional Metrics */}
                <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
                    {[
                        { value: "98%", label: "Customer Satisfaction", color: "text-blue-600", icon: "😊" },
                        { value: "24/7", label: "Support Availability", color: "text-green-600", icon: "🛟" },
                        { value: "99.9%", label: "Uptime Guarantee", color: "text-purple-600", icon: "⚡" }
                    ].map((metric, index) => (
                        <div key={index} className="text-center p-6 glass-effect rounded-2xl card-hover-effect group">
                            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                {metric.icon}
                            </div>
                            <div className={`text-3xl font-bold ${metric.color} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                                {metric.value}
                            </div>
                            <div className="text-sm text-muted-foreground font-medium">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Analytics;