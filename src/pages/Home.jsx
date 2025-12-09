import React from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AccueilSection from "@/components/landing/AccueilSection";
import SampZoneSection from "@/components/landing/SampZoneSection";
import TendancesSection from "@/components/landing/TendancesSection";
import ProfilSection from "@/components/landing/ProfilSection";
import NotificationsSection from "@/components/landing/NotificationsSection";
import ScreenshotsSection from "@/components/landing/ScreenshotsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import ContactSection from "@/components/landing/ContactSection";
import AmbassadorsSection from "@/components/landing/AmbassadorsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <div id="fonctionnalites">
        <FeaturesSection />
      </div>
      {/* 5 Pages principales de l'application */}
      <AccueilSection />
      <SampZoneSection />
      <TendancesSection />
      <ProfilSection />
      <NotificationsSection />
      <div id="apercu">
        <ScreenshotsSection />
      </div>
      <div id="ambassadeurs">
        <AmbassadorsSection />
      </div>
      <div id="temoignages">
        <TestimonialsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <CTASection />
      <Footer />
    </div>
  );
}
