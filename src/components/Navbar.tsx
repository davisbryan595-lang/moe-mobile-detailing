import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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
        scrolled ? "shadow-md" : ""
      }`}
      style={{
        backgroundColor: "#000", // solid black background
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img
            src="/logo.png"
            alt="Moe's Mobile Detailing"
            className="h-10 w-auto"
          />
          <span className="text-white font-bold text-lg">
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
                  active === link.id ? "text-yellow-400" : "text-white"
                } hover:text-yellow-400`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="text-black font-semibold hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #FFD700, #FFB700)",
              border: "none",
            }}
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
