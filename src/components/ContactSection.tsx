import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactSectionProps {
  prefilledMessage?: string;
  selectedService?: string;
  selectedPricing?: string;
}

const serviceOptions = [
  "Exterior Car Detailing",
  "Interior Car Detailing",
  "Full Car Detailing",
  "Engine Bay Cleaning",
  "Paint Protection",
];

const pricingOptions = ["Basic Detail", "Deluxe Detail", "Premium Ceramic"];

const ContactSection = ({ prefilledMessage, selectedService, selectedPricing }: ContactSectionProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: selectedService || "",
    pricingPlan: selectedPricing || "",
    message: prefilledMessage || "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: selectedService || prev.service,
      pricingPlan: selectedPricing || prev.pricingPlan,
      message: prefilledMessage || prev.message,
    }));
  }, [selectedService, selectedPricing, prefilledMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      pricingPlan: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Detailing Appointment
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get in touch with us today and give your vehicle the care it deserves.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 gradient-primary rounded-lg">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+17373349997"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 737-334-9997
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 gradient-primary rounded-lg">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:alimoe654@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      alimoe654@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 gradient-primary rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Service Area</h3>
                    <p className="text-muted-foreground">
                      Round Rock, TX & Austin, TX
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.instagram.com/moe.mobile.detailing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>@moe.mobile.detailing</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@moe.mobile.detailing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                    <span>@moe.mobile.detailing</span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61571103112833"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Moe's Mobile Detailing</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Select value={formData.service} onValueChange={(val) => setFormData({ ...formData, service: val })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={formData.pricingPlan} onValueChange={(val) => setFormData({ ...formData, pricingPlan: val })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pricing Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {pricingOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your vehicle and any specific requests..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gradient-primary shadow-glow"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
