import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-car.jpg";
import { Facebook, Instagram } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>


      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto rounded-3xl border border-primary/30 bg-secondary/60 backdrop-blur-xl shadow-glow px-6 py-10 sm:px-12 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Your Ride, Our Passion.
          </h1>
          <p
            className="text-xl md:text-2xl text-metallic mb-10 max-w-2xl mx-auto"
            style={{ animationDelay: "0.2s" }}
          >
            Moe's Mobile Detailing brings the shine to you — anywhere in Round Rock & Austin, TX.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="gradient-primary text-lg px-8 py-6 shadow-glow hover:scale-105 transition-transform"
            >
              Book Your Detail Now
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary/40 text-primary hover:bg-primary/15"
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
