import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  const [formSelections, setFormSelections] = useState({
    message: "",
    service: "",
    pricingPlan: "",
  });

  const handleSelectPlan = (planName: string) => {
    setFormSelections((prev) => ({
      ...prev,
      message: `I'm interested in the ${planName} package.`,
      pricingPlan: planName,
    }));
  };

  const handleBookService = (serviceName: string) => {
    setFormSelections((prev) => ({
      ...prev,
      message: `I'd like to book the ${serviceName} service.`,
      service: serviceName,
    }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection onBookService={handleBookService} />
      <PricingSection onSelectPlan={handleSelectPlan} />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection
        prefilledMessage={formSelections.message}
        selectedService={formSelections.service}
        selectedPricing={formSelections.pricingPlan}
      />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
