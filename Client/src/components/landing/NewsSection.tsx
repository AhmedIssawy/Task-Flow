import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Users, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const NewsSection = () => {
    const { t } = useTranslation();
    
    const newsItems = [
        {
            category: t("pages.news.newsItems.research.category"),
            title: t("pages.news.newsItems.research.title"),
            excerpt: t("pages.news.newsItems.research.excerpt"),
            date: t("pages.news.newsItems.research.date"),
            readTime: t("pages.news.newsItems.research.readTime"),
            image: "🔬"
        },
        {
            category: t("pages.news.newsItems.achievement.category"),
            title: t("pages.news.newsItems.achievement.title"),
            excerpt: t("pages.news.newsItems.achievement.excerpt"),
            date: t("pages.news.newsItems.achievement.date"),
            readTime: t("pages.news.newsItems.achievement.readTime"),
            image: "🏆"
        },
        {
            category: t("pages.news.newsItems.event.category"),
            title: t("pages.news.newsItems.event.title"),
            excerpt: t("pages.news.newsItems.event.excerpt"),
            date: t("pages.news.newsItems.event.date"),
            readTime: t("pages.news.newsItems.event.readTime"),
            image: "💡"
        },
        {
            category: t("pages.news.newsItems.community.category"),
            title: t("pages.news.newsItems.community.title"),
            excerpt: t("pages.news.newsItems.community.excerpt"),
            date: t("pages.news.newsItems.community.date"),
            readTime: t("pages.news.newsItems.community.readTime"),
            image: "🤝"
        }
    ];

    const upcomingEvents = [
        {
            date: t("pages.news.upcomingEvents.graduation.date"),
            title: t("pages.news.upcomingEvents.graduation.title"),
            time: t("pages.news.upcomingEvents.graduation.time"),
            location: t("pages.news.upcomingEvents.graduation.location")
        },
        {
            date: t("pages.news.upcomingEvents.symposium.date"),
            title: t("pages.news.upcomingEvents.symposium.title"),
            time: t("pages.news.upcomingEvents.symposium.time"),
            location: t("pages.news.upcomingEvents.symposium.location")
        },
        {
            date: t("pages.news.upcomingEvents.alumni.date"),
            title: t("pages.news.upcomingEvents.alumni.title"),
            time: t("pages.news.upcomingEvents.alumni.time"),
            location: t("pages.news.upcomingEvents.alumni.location")
        }
    ];

    return (
        <section id="news" className="py-20 bg-theme text-theme">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black mb-6">{t("pages.news.title")}</h2>
                    <p className="text-2xl font-normal max-w-3xl mx-auto">
                        {t("pages.news.description")}
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* News Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold">{t("pages.news.latestNews.title")}</h3>
                            <Button className="bg-primary hover:bg-primary-hover rounded font-semibold">{t("pages.news.latestNews.viewAll")}</Button>
                        </div>
                        <div className="space-y-8">
                            {newsItems.map((item, index) => (
                                <Card key={index} className="w-full shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                                    <CardHeader className="flex flex-row items-start gap-6 py-8">
                                        <div className="text-4xl flex items-center justify-center min-w-[56px]">{item.image}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                                                    {item.category}
                                                </span>
                                                <span className="text-gray-500 text-sm">{item.date}</span>
                                                <span className="text-gray-500 text-sm">• {item.readTime}</span>
                                            </div>
                                            <CardTitle className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                                {item.title}
                                            </CardTitle>
                                            <CardDescription className="text-gray-600 text-base mb-3">
                                                {item.excerpt}
                                            </CardDescription>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="p-0 h-auto text-main hover:text-main-hover font-semibold"
                                            >
                                                {t("pages.news.readMore")}
                                                <ArrowRight className="h-4 w-4 ml-1" />
                                            </Button>
                                        </div>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>
                    {/* Events Sidebar */}
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2 mb-2">
                            <Calendar className="h-6 w-6" />
                            <h3 className="text-2xl font-bold">{t("pages.news.upcomingEvents.title")}</h3>
                        </div>
                        <Card className="border-0 shadow-lg">
                            <CardHeader className="p-6">
                                <div className="space-y-6">
                                    {upcomingEvents.map((event, index) => (
                                        <div key={index} className="flex gap-4 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                                            <div className="text-center min-w-[50px]">
                                                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">
                                                    {event.date}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold  mb-1">{event.title}</h4>
                                                <p className="text-sm text-gray-600 mb-1">{event.time}</p>
                                                <p className="text-sm text-gray-500">{event.location}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button className="w-full mt-6 bg-primary hover:bg-primary-hover rounded font-semibold">
                                    {t("pages.news.upcomingEvents.viewAll")}
                                </Button>
                            </CardHeader>
                        </Card>
                        {/* Quick Stats */}
                        <Card className="border-0 shadow-lg">
                            <CardHeader className="p-6">
                                <h4 className="font-bold mb-4">{t("pages.news.stats.title")}</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-2 rounded">
                                            <Users className="h-4 w-4 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold ">{t("pages.news.stats.newStudents.value")}</p>
                                            <p className="text-sm text-gray-600">{t("pages.news.stats.newStudents.label")}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 p-2 rounded">
                                            <Award className="h-4 w-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold ">{t("pages.news.stats.researchPapers.value")}</p>
                                            <p className="text-sm text-gray-600">{t("pages.news.stats.researchPapers.label")}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-purple-100 p-2 rounded">
                                            <Calendar className="h-4 w-4 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold ">{t("pages.news.stats.campusEvents.value")}</p>
                                            <p className="text-sm text-gray-600">{t("pages.news.stats.campusEvents.label")}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};
