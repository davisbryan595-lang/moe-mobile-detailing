import { useState, useEffect } from "react";
import { MessageCircle, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/17373349997", "_blank");
  };

  return (
    <>
      {/* Contact Bubble */}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end space-y-2">
        <div className="relative rounded-2xl border border-primary/30 bg-secondary/80 px-5 py-3 shadow-glow backdrop-blur">
          <p className="text-sm font-semibold text-primary">Need an instant quote?</p>
          <p className="text-xs text-muted-foreground">Tap to message Moe&apos;s Mobile Detailing.</p>
          <span className="absolute -bottom-2 right-10 h-4 w-4 rotate-45 border-r border-b border-primary/30 bg-secondary/80" aria-hidden="true" />
        </div>
      </div>

      {/* WhatsApp/Message Button - Bottom Right */}
      <Button
        onClick={handleWhatsApp}
        size="icon"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-primary shadow-glow hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Scroll to Top Button - Bottom Left */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          variant="outline"
          className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-card border-border hover:bg-primary hover:border-primary hover:shadow-glow transition-all animate-fade-up"
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      )}
    </>
  );
};

export default FloatingButtons;
