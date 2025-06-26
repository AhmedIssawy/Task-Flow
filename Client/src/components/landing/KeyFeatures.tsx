import React from "react";
import {
  BookOpen,
  Calendar,
  File,
  Users,
  ChartSpline,
  MessageCircleMore,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const KeyFeatures = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <BookOpen />,
      title: t("pages.keyfeatures.features.courses.title"),
      description: t("pages.keyfeatures.features.courses.description"),
    },
    {
      icon: <File />,
      title: t("pages.keyfeatures.features.assignments.title"),
      description: t("pages.keyfeatures.features.assignments.description"),
    },
    {
      icon: <Calendar />,
      title: t("pages.keyfeatures.features.scheduling.title"),
      description: t("pages.keyfeatures.features.scheduling.description"),
    },
    {
      icon: <Users />,
      title: t("pages.keyfeatures.features.collaboration.title"),
      description: t("pages.keyfeatures.features.collaboration.description"),
    },
    {
      icon: <ChartSpline />,
      title: t("pages.keyfeatures.features.analytics.title"),
      description: t("pages.keyfeatures.features.analytics.description"),
    },
    {
      icon: <MessageCircleMore />,
      title: t("pages.keyfeatures.features.communication.title"),
      description: t("pages.keyfeatures.features.communication.description"),
    },
  ];
  return (
    <section id="features" className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-10 lg:px-[unset]">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black pb-12 sm:pb-16 lg:pb-20 sm:text-left">{t("pages.keyfeatures.title")}</h3>
        <div className="flex flex-col gap-8 sm:gap-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black sm:text-left">
            {t("pages.keyfeatures.subtitle")}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-normal sm:text-left max-w-4xl">
            {t("pages.keyfeatures.description")}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="flex-1 min-w-0 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-col gap-3 sm:gap-4 text-center p-4 sm:p-6">
                  <CardTitle className="flex justify-center text-primary text-2xl sm:text-3xl">{feature.icon}</CardTitle>
                  <CardTitle className="text-sm sm:text-base lg:text-lg font-bold leading-tight">{feature.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
