import React from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  selectIsAuthenticated,
  selectCurrentUser,
} from "@/store/slices/authSlice";
import { selectCurrentTheme, toggleTheme } from "@/store/slices/themeSlice";
import {
  selectCurrentLanguage,
  setLanguage,
} from "@/store/slices/languageSlice";
import Header from "@/components/layout/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import KeyFeatures from "@/components/landing/KeyFeatures";
import Benefits from "@/components/landing/Benefits";
import { AboutSection } from "@/components/landing/AboutSection";
import { ProgramsSection } from "@/components/landing/ProgramsSection";
import { NewsSection } from "@/components/landing/NewsSection";
import { CTASection } from "@/components/landing/CTASection";

export default function IndexPage() {
  const dispatch = useAppDispatch();

  // Redux state
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const currentUser = useAppSelector(selectCurrentUser);
  const currentTheme = useAppSelector(selectCurrentTheme);
  const currentLanguage = useAppSelector(selectCurrentLanguage);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleLanguageToggle = () => {
    dispatch(setLanguage(currentLanguage === "en" ? "ar" : "en"));
  };

  return (
    <div className="min-h-screen bg-theme text-theme">
    <div className="max-w-7xl mx-auto space-y-6">
      <Header />
      <HeroSection />
      <KeyFeatures />
      <Benefits />
      <AboutSection />
      <ProgramsSection />
      <NewsSection />
      <CTASection />
  </div>
    </div>
  );
}
