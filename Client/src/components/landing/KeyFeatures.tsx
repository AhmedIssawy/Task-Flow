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
  CardContent,
  CardDescription,
  CardFooter,
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
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-5xl font-black pb-20">{t("pages.keyfeatures.title")}</h3>
        <div className="flex flex-col gap-10">
          <h2 className="text-6xl font-black">
            {t("pages.keyfeatures.subtitle")}
          </h2>
          <p className="text-2xl font-normal">
            {t("pages.keyfeatures.description")}
          </p>
          <div className="flex gap-10">
            {features.map((feature, index) => (
              <Card key={index} className="w-[176px]">
                <CardHeader className="flex flex-col gap-2">
                  <CardTitle>{feature.icon}</CardTitle>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
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
