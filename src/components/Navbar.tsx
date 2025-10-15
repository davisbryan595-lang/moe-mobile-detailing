import { useEffect, useState } from "react";
import { Facebook, Instagram } from "lucide-react";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F7f3a261a364e4e158e176b65dc7b168f%2F72e59671bb5749f38dbd7cc0b83451c0?format=webp&width=800";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "pricing", label: "Pricing" },
    { id: "gallery", label: "Gallery" },
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
        backgroundColor: scrolled ? "hsla(var(--background), 0.85)" : "hsla(var(--background), 0.7)",
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
            className="h-12 w-12 rounded-full bg-black/60 ring-1 ring-accent/40 object-contain"
          />
          <span className="font-bold text-lg tracking-wide text-white">
            Moe's Mobile Detailing
          </span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${active === link.id ? "text-accent" : "text-white"} hover:text-accent`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://www.facebook.com/profile.php?id=61571103112833"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-2 rounded-full text-white/90 hover:text-primary hover:bg-white/10 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/moe.mobile.detailing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-full text-white/90 hover:text-primary hover:bg-white/10 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.tiktok.com/@moe.mobile.detailing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="p-2 rounded-full text-white/90 hover:text-primary hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
