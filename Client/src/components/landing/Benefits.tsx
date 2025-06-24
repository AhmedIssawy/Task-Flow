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
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-5xl font-black pb-20">{t("pages.benefits.title")}</h3>
        <div className="flex flex-col gap-10">
          <h2 className="text-6xl font-black">
            {t("pages.benefits.subtitle")}
          </h2>
          <p className="text-2xl font-normal">
            {t("pages.benefits.description")}
          </p>
          <div className="flex justify-center gap-10">
            {benifits.map((benefit, index) => (
              <Card key={index} className="w-[300px]">
                <CardHeader className="flex flex-col gap-2">
                  <CardTitle>{benefit.icon}</CardTitle>
                  <CardTitle>{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
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
