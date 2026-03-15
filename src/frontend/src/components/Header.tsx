import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import type { Page } from "../App";

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const navLinks = [
  { label: "About Us", href: "#about", page: null as Page | null },
  {
    label: "Products",
    href: "#products",
    page: "products" as Page,
    dropdown: [
      { label: "MVR Fan Systems", page: "products" as Page },
      { label: "Radial Fans", page: "products" as Page },
      { label: "Axial Fans", page: "products" as Page },
      { label: "Ex-Proof Fans", page: "products" as Page },
      { label: "Turbo Compressors", page: "products" as Page },
    ],
  },
  {
    label: "Solutions",
    href: "#solutions",
    page: "solutions" as Page,
    dropdown: [
      { label: "Oil & Gas", page: "solutions" as Page },
      { label: "Chemical Industry", page: "solutions" as Page },
      { label: "Cement Factories", page: "solutions" as Page },
      { label: "Recycling Facilities", page: "solutions" as Page },
      { label: "Food Sector", page: "solutions" as Page },
      { label: "Mining & Metallurgy", page: "solutions" as Page },
    ],
  },
  { label: "Projects", href: "#projects", page: "projects" as Page },
  {
    label: "Services",
    href: "#services",
    page: "services" as Page,
    dropdown: [
      { label: "Engineering", page: "services" as Page },
      { label: "Maintenance", page: "services" as Page },
      { label: "Assembly", page: "services" as Page },
      { label: "Test & Measurement", page: "services" as Page },
    ],
  },
  { label: "Blog", href: "#blog", page: null as Page | null },
  { label: "Contact", href: "#contact", page: null as Page | null },
];

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link: (typeof navLinks)[0]) => {
    setMobileOpen(false);
    if (link.page) {
      onNavigate(link.page);
    } else {
      if (currentPage !== "home") {
        onNavigate("home");
        setTimeout(() => {
          const el = document.querySelector(link.href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || currentPage !== "home"
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 group cursor-pointer"
            data-ocid="nav.home_link"
          >
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl lg:text-3xl text-foreground tracking-widest">
                EFSAN
              </span>
              <span className="text-xs text-primary tracking-widest uppercase font-body">
                Industrial Fans
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => handleNavClick(link)}
                  data-ocid={`nav.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-body font-medium transition-colors duration-200 ${
                    link.page && currentPage === link.page
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-3 h-3" />}
                </button>

                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-52 bg-card border border-border rounded shadow-xl overflow-hidden"
                    >
                      {link.dropdown.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => {
                            onNavigate(item.page);
                            setActiveDropdown(null);
                          }}
                          className="w-full text-left block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors duration-150"
                        >
                          {item.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              onClick={() => {
                if (currentPage !== "home") {
                  onNavigate("home");
                  setTimeout(() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                } else {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hidden lg:flex bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold tracking-wide text-xs uppercase px-5"
              data-ocid="nav.contact_button"
            >
              Get a Quote
            </Button>

            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              type="button"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link)}
                  className="py-2 text-left text-sm font-body text-muted-foreground hover:text-primary transition-colors border-b border-border/30 last:border-0"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onNavigate("home");
                  setTimeout(() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="mt-3 inline-flex items-center justify-center bg-primary text-primary-foreground font-body text-xs uppercase tracking-wide px-4 py-2.5 hover:bg-primary/90 transition-colors"
                data-ocid="nav.mobile_contact_button"
              >
                Get a Quote
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
