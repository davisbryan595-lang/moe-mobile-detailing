import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Basic Detail",
    price: "$99",
    features: [
      "Exterior hand wash",
      "Interior vacuum",
      "Tire shine",
      "Basic polish",
      "Window cleaning",
    ],
  },
  {
    name: "Deluxe Detail",
    price: "$149",
    popular: true,
    features: [
      "Full interior & exterior clean",
      "Deep shampoo & conditioning",
      "Polish & wax protection",
      "Engine bay cleaning",
      "Odor removal treatment",
    ],
  },
  {
    name: "Premium Ceramic",
    price: "$249",
    features: [
      "Complete full detailing",
      "Ceramic coating application",
      "3-month gloss retention",
      "UV & scratch protection",
      "Hydrophobic finish",
    ],
  },
];

interface PricingSectionProps {
  onSelectPlan?: (planName: string) => void;
}

const PricingSection = ({ onSelectPlan }: PricingSectionProps) => {
  const handleSelectPlan = (planName: string) => {
    if (onSelectPlan) {
      onSelectPlan(planName);
    }
    const contactSection = document.querySelector("#contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Detailing Plan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional detailing packages designed to fit your needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-up ${
                plan.popular ? "border-primary border-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="gradient-primary px-4 py-1 rounded-full text-sm text-primary-foreground font-medium shadow-glow">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-4">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full ${
                    plan.popular ? "gradient-primary shadow-glow" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Select Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
