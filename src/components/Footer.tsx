import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram } from "lucide-react";

const logoUrl =
  "https://cdn.builder.io/api/v1/image/assets%2F7f3a261a364e4e158e176b65dc7b168f%2F72e59671bb5749f38dbd7cc0b83451c0?format=webp&width=800";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-16 border-t border-border/60">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src={logoUrl}
                alt="Moe's Mobile Detailing logo"
                className="h-20 w-20 object-contain drop-shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold text-primary uppercase tracking-[0.3em]">
                  Moe's Mobile Detailing
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional mobile detailing services in Round Rock & Austin, TX. We bring the studio finish directly to your driveway.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-[0.3em] text-primary">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-sm text-muted-foreground">
            <h4 className="font-semibold uppercase tracking-[0.3em] text-primary">Contact</h4>
            <p>
              📞 <a href="tel:+17373349997" className="hover:text-primary transition-colors">+1 737-334-9997</a>
            </p>
            <p>
              📧 <a href="mailto:alimoe654@gmail.com" className="hover:text-primary transition-colors">alimoe654@gmail.com</a>
            </p>
            <p>
              📍 Serving Round Rock, Cedar Park, Georgetown, and the greater Austin area.
            </p>
          </div>

          {/* Subscribe */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-[0.3em] text-primary">Subscribe</h4>
            <p className="text-sm text-muted-foreground">
              Drop your email to receive detailing tips, flash promotions, and appointment openings.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                required
                placeholder="Enter your email"
                className="bg-background/80 border-border/80 text-foreground placeholder:text-muted-foreground"
              />
              <Button type="submit" className="w-full gradient-primary shadow-glow hover:scale-[1.02] transition-transform">
                Subscribe
              </Button>
            </form>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61571103112833"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/20 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/moe.mobile.detailing"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/20 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@moe.mobile.detailing"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/20 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/60 pt-8">
          <div className="text-center text-sm text-muted-foreground mb-4">
            <p>© {currentYear} Moe's Mobile Detailing. All rights reserved.</p>
          </div>

          {/* Hashtags for SEO */}
          <div className="text-center text-xs text-muted-foreground">
            <p className="flex flex-wrap justify-center gap-2">
              <span>#austintx</span>
              <span>#cardetailing</span>
              <span>#viralvideos</span>
              <span>#foryou</span>
              <span>#mobilecarwash</span>
              <span>#detailing</span>
              <span>#luxurycars</span>
              <span>#truck</span>
              <span>#lakewaytx</span>
              <span>#lagovistatx</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
