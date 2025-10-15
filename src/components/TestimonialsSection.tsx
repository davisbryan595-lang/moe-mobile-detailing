import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alyssa R.",
    avatar: "https://i.pravatar.cc/100?img=12",
    text:
      "Absolutely incredible work. My SUV looks brand new again and the ceramic protection is unreal in the rain.",
  },
  {
    name: "Chris M.",
    avatar: "https://i.pravatar.cc/100?img=32",
    text:
      "Booked the full detail while working from home. Zero hassle and the results blew me away.",
  },
  {
    name: "Jordan P.",
    avatar: "https://i.pravatar.cc/100?img=7",
    text:
      "Stains on the seats I thought were permanent are gone. Interior smells fresh for weeks.",
  },
];

const Stars = () => (
  <div className="flex gap-1 text-primary">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-current" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real feedback from happy drivers across Round Rock and Austin.
          </p>
        </div>
        <Carousel className="relative max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((t, idx) => (
              <CarouselItem key={idx}>
                <Card className="border-border shadow-card">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-4">
                      <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold">{t.name}</p>
                        <Stars />
                      </div>
                    </div>
                    <p className="text-lg md:text-xl text-foreground leading-relaxed">“{t.text}”</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-secondary/80 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex bg-secondary/80 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
