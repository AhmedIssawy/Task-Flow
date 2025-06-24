import React from "react";
import {
    Microscope,
    Calculator,
    Palette,
    Briefcase,
    Stethoscope,
    Code,
    ArrowRight,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const ProgramsSection = () => {
    const { t } = useTranslation();
    
    const programs = [
        {
            icon: <Microscope className="h-10 w-10 text-green-500" />,
            title: t("pages.programs.schools.sciences.title"),
            description: t("pages.programs.schools.sciences.description"),
            courses: [
                t("pages.programs.schools.sciences.courses.biology"),
                t("pages.programs.schools.sciences.courses.chemistry"),
                t("pages.programs.schools.sciences.courses.physics"),
                t("pages.programs.schools.sciences.courses.environmental")
            ],
        },
        {
            icon: <Calculator className="h-10 w-10 text-blue-500" />,
            title: t("pages.programs.schools.engineering.title"),
            description: t("pages.programs.schools.engineering.description"),
            courses: [
                t("pages.programs.schools.engineering.courses.computer"),
                t("pages.programs.schools.engineering.courses.mechanical"),
                t("pages.programs.schools.engineering.courses.electrical"),
                t("pages.programs.schools.engineering.courses.civil")
            ],
        },
        {
            icon: <Briefcase className="h-10 w-10 text-purple-500" />,
            title: t("pages.programs.schools.business.title"),
            description: t("pages.programs.schools.business.description"),
            courses: [
                t("pages.programs.schools.business.courses.mba"),
                t("pages.programs.schools.business.courses.finance"),
                t("pages.programs.schools.business.courses.marketing"),
                t("pages.programs.schools.business.courses.international")
            ],
        },
        {
            icon: <Palette className="h-10 w-10 text-pink-500" />,
            title: t("pages.programs.schools.arts.title"),
            description: t("pages.programs.schools.arts.description"),
            courses: [
                t("pages.programs.schools.arts.courses.finearts"),
                t("pages.programs.schools.arts.courses.music"),
                t("pages.programs.schools.arts.courses.theater"),
                t("pages.programs.schools.arts.courses.writing")
            ],
        },
        {
            icon: <Stethoscope className="h-10 w-10 text-red-500" />,
            title: t("pages.programs.schools.medicine.title"),
            description: t("pages.programs.schools.medicine.description"),
            courses: [
                t("pages.programs.schools.medicine.courses.medicine"),
                t("pages.programs.schools.medicine.courses.nursing"),
                t("pages.programs.schools.medicine.courses.publichealth"),
                t("pages.programs.schools.medicine.courses.biomedical")
            ],
        },
        {
            icon: <Code className="h-10 w-10 text-indigo-500" />,
            title: t("pages.programs.schools.technology.title"),
            description: t("pages.programs.schools.technology.description"),
            courses: [
                t("pages.programs.schools.technology.courses.computerscience"),
                t("pages.programs.schools.technology.courses.datascience"),
                t("pages.programs.schools.technology.courses.cybersecurity"),
                t("pages.programs.schools.technology.courses.aiml")
            ],
        },
    ];

    return (
        <section id="programs" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className=" mb-16">
                    <h2 className="text-5xl font-black mb-6">{t("pages.programs.title")}</h2>
                    <p className="text-2xl font-normal text-gray-600 max-w-3xl ">
                        {t("pages.programs.description")}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {programs.map((program, index) => (
                        <Card key={index} className="w-full shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                            <CardHeader className="flex flex-col items-center gap-4 py-8">
                                <div>{program.icon}</div>
                                <CardTitle className="text-xl font-bold text-center">{program.title}</CardTitle>
                                <CardDescription className="text-center text-base text-gray-600">
                                    {program.description}
                                </CardDescription>
                                <div className="flex flex-wrap gap-2 justify-center mt-4">
                                    {program.courses.map((course, courseIndex) => (
                                        <span
                                            key={courseIndex}
                                            className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-16">
                    <Button size="lg" className="bg-primary hover:bg-primary-hover px-8 py-4 text-lg font-semibold rounded">
                        {t("pages.programs.button")}
                    </Button>
                </div>
            </div>
        </section>
    );
};
