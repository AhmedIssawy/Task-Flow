import React from "react";
import { GraduationCap, SquareUserRound, User } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const { t } = useTranslation();

  const benifits = [
    {
      icon: <GraduationCap />,
      title: t("pages.benefits.users.students.title"),
      description: t("pages.benefits.users.students.description"),
    },
    {
      icon: <SquareUserRound />,
      title: t("pages.benefits.users.teachers.title"),
      description: t("pages.benefits.users.teachers.description"),
    },
    {
      icon: <User />,
      title: t("pages.benefits.users.administrators.title"),
      description: t("pages.benefits.users.administrators.description"),
    },
  ];
  return (
    <section id="features" className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black pb-12 sm:pb-16 lg:pb-20 text-center sm:text-left">{t("pages.benefits.title")}</h3>
        <div className="flex flex-col gap-8 sm:gap-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center sm:text-left">
            {t("pages.benefits.subtitle")}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-normal text-center sm:text-left max-w-4xl">
            {t("pages.benefits.description")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
            {benifits.map((benefit, index) => (
              <Card key={index} className="w-full max-w-sm hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-col gap-3 sm:gap-4 text-center p-6">
                  <CardTitle className="flex justify-center text-primary text-3xl sm:text-4xl">{benefit.icon}</CardTitle>
                  <CardTitle className="text-lg sm:text-xl font-bold">{benefit.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-muted leading-relaxed">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
