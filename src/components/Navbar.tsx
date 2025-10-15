import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F7f3a261a364e4e158e176b65dc7b168f%2F317249e08236408e868e81f545823fa9?format=webp&width=800";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "pricing", label: "Pricing" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 100;
      let current = "home";
      for (const link of links) {
        const el = document.getElementById(link.id);
        if (el && scrollPos >= el.offsetTop) current = link.id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "shadow-md backdrop-blur-sm" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0.6)",
        borderBottom: "1px solid hsla(var(--accent), 0.25)", // subtle blue line
      }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img
            src={LOGO_URL}
            alt="Moe's Mobile Detailing logo"
            className="h-10 w-10 rounded-full bg-black/60 ring-1 ring-accent/40 object-contain"
          />
          <span className="font-bold text-lg tracking-wide" style={{ color: "hsl(var(--metallic))" }}>
            Moe's Mobile Detailing
          </span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  active === link.id ? "text-accent" : "text-white"
                } hover:text-accent`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="font-semibold text-primary-foreground hover:opacity-95 shadow-glow gradient-primary border-0"
            onClick={() => scrollToSection("contact")}
          >
            Get Quote
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
