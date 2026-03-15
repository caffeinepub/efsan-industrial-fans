import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import type { Page } from "../App";

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-fans.dim_1400x700.jpg')",
        }}
      />
      {/* Dark overlay — strong enough to keep text readable on white bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/80" />
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-body uppercase tracking-widest text-primary border border-primary/60 bg-primary/20">
            25 Years of Excellence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-6 max-w-5xl mx-auto"
        >
          25 Years of Experience{" "}
          <span className="text-primary">and Engineering</span> to Manage the
          Air
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-body text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
        >
          Industrial Fans and Fan Systems — Efsan Machine Industry
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => onNavigate("solutions")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold uppercase tracking-widest text-sm px-8 py-6 w-full sm:w-auto"
            data-ocid="hero.solutions_button"
          >
            Our Solutions
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => onNavigate("products")}
            className="border-white/60 text-white bg-white/10 hover:bg-white/20 hover:text-white font-body font-semibold uppercase tracking-widest text-sm px-8 py-6 w-full sm:w-auto"
            data-ocid="hero.products_button"
          >
            Our Products
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-white/20 pt-10"
        >
          {[
            { value: "1,800,000", unit: "m³/h", label: "Max Flow Rate" },
            { value: "45", unit: "kPa", label: "Max Pressure" },
            { value: "25+", unit: "yrs", label: "Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl sm:text-3xl text-primary">
                {stat.value}
                <span className="text-base text-white/60 ml-1">
                  {stat.unit}
                </span>
              </div>
              <div className="text-xs font-body uppercase tracking-widest text-white/60 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
