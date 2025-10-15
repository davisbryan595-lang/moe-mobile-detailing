import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Package, Shield, Sparkles } from "lucide-react";

const services = [
  {
    id: "exterior-detail",
    icon: Sparkles,
    name: "Exterior Car Detailing",
    headline: "Thorough exterior wash and shine",
    description:
      "Foam pre-wash, contact wash, wheel clean, and protection for a glossy finish.",
    highlights: ["Foam cannon wash", "Wheel & tire care", "Paint-safe drying", "Sealant application"],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F7581a06fc8b74f88835e2ef9b4b9e065?format=webp&width=800",
  },
  {
    id: "interior-reset",
    icon: Package,
    name: "Interior Car Detailing",
    headline: "Deep interior cleaning and conditioning",
    description:
      "Vacuum, steam clean, wipe-down, and conditioning for a fresh cabin.",
    highlights: ["Vacuum & shampoo", "Leather conditioning", "Steam sanitization", "Glass cleaned"],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F870dc5147d0740b6936438695e235df3?format=webp&width=800",
  },
  {
    id: "full-detail",
    icon: CheckCircle,
    name: "Full Car Detailing",
    headline: "Complete inside and out renewal",
    description:
      "Bundle of interior and exterior detailing for a showroom-ready vehicle.",
    highlights: ["Exterior + interior", "Trim dressed", "Glass polished", "Odor neutralization"],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F0e919887180c4c8c8008aecdfc511732?format=webp&width=800",
  },
  {
    id: "engine-bay",
    icon: Package,
    name: "Engine Bay Cleaning",
    headline: "Degrease and dress for a clean bay",
    description:
      "Careful cleaning and dressing to rejuvenate the engine bay.",
    highlights: ["Safe degreasing", "Plastics dressed", "Metal detailed", "Low-moisture process"],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F1b5b4f3ebc11493ea2245b0adb5697ef?format=webp&width=800",
  },
  {
    id: "paint-protection",
    icon: Shield,
    name: "Paint Protection",
    headline: "Protective film and coatings",
    description:
      "Safeguard your paint with professional protection solutions.",
    highlights: ["PPF application", "Ceramic/graphene", "UV protection", "Enhanced gloss"],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F3c5c67b5d006477ebc2a62a67430b19d?format=webp&width=800",
  },
];

interface ServicesSectionProps {
  onBookService?: (serviceName: string) => void;
}

const ServicesSection = ({ onBookService }: ServicesSectionProps) => {
  const [api, setApi] = useState<any>(null);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleBook = (serviceName: string) => {
    onBookService?.(serviceName);
    const contactSection = document.querySelector("#contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="uppercase tracking-[0.4em] text-primary text-sm mb-2">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Detailing perfected for every vehicle.</h2>
        </div>

        <Carousel className="relative" setApi={setApi}>
          <CarouselContent>
            {services.map((service) => (
              <CarouselItem key={service.id}>
                <Card className="bg-card border-border overflow-hidden shadow-card">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-stretch min-h-[360px]">
                      <div className="p-8 md:p-12 space-y-6 flex flex-col justify-between min-h-[360px]">
                        <div className="space-y-6">
                          <div className="inline-flex items-center space-x-3">
                            <service.icon className="h-6 w-6 text-primary" />
                            <span className="uppercase tracking-[0.4em] text-xs text-muted-foreground">{service.name}</span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-semibold text-primary">{service.headline}</h3>
                          <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
                          <ul className="grid sm:grid-cols-2 gap-3">
                            {service.highlights.map((highlight) => (
                              <li key={highlight} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button onClick={() => handleBook(service.name)} className="gradient-primary shadow-glow self-start">
                          Book this service
                        </Button>
                      </div>
                      <div className="relative h-full min-h-[360px]">
                        <img src={service.image} alt={service.name} className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/70 via-secondary/20 to-transparent" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-secondary/80 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex bg-secondary/80 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground" />
        </Carousel>

        <div className="mt-6 flex items-center justify-center gap-2">
          <Button variant="outline" size="sm" onClick={() => api?.scrollPrev()} className="h-8 px-3">Prev</Button>
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`${selected === i ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"} h-8 w-8 rounded-full text-sm font-semibold flex items-center justify-center border border-border`}
              aria-label={`Go to slide ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}
          <Button variant="outline" size="sm" onClick={() => api?.scrollNext()} className="h-8 px-3">Next</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
