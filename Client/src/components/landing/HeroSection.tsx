"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

export const HeroSection = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/login");
  };

  return (<section className="relative bg-background py-12 sm:py-16 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-x-8 items-center">
        <div className="flex-1 order-2 lg:order-1">
          <Image
            src={"./landing.svg"}
            alt={"landingImg"}
            width={1200}
            height={912}
            className="w-full h-auto max-w-md mx-auto lg:max-w-none"
          />
        </div>
        <div className="flex flex-col flex-1 order-1 lg:order-2 text-center lg:text-left">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              {t("pages.herosection.title")}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-normal text-muted max-w-xl mx-auto lg:mx-0">
              {t("pages.herosection.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center lg:justify-start mt-4">
              <Button
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 text-base sm:text-lg font-semibold"
                onClick={handleRedirect}
              >
                {t("pages.herosection.startbutton")}
              </Button>
              <Button
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 text-base sm:text-lg font-semibold"
                onClick={handleRedirect}
              >
                {t("pages.herosection.demobutton")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
