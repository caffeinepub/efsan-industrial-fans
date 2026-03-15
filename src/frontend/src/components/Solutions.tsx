import { motion } from "motion/react";
import type { Page } from "../App";

interface SolutionsProps {
  onNavigate: (page: Page) => void;
}

const solutions = [
  {
    title: "Oil & Gas",
    image: "/assets/generated/solution-oil-gas.dim_600x400.jpg",
    description:
      "Custom fan systems for hazardous area classification and explosive atmospheres.",
  },
  {
    title: "Chemical Industry",
    image: "/assets/generated/solution-chemical.dim_600x400.jpg",
    description:
      "Corrosion-resistant fans for aggressive chemicals and toxic gas handling.",
  },
  {
    title: "Cement Factories",
    image: "/assets/generated/solution-cement.dim_600x400.jpg",
    description:
      "High-temperature, dust-laden air handling with robust wear protection.",
  },
  {
    title: "Recycling Facilities",
    image: "/assets/generated/solution-recycling.dim_600x400.jpg",
    description:
      "Dust control and odor management fans for modern recycling operations.",
  },
  {
    title: "Food Sector",
    image: "/assets/generated/solution-food.dim_600x400.jpg",
    description:
      "Hygienic stainless steel fans meeting strict food safety standards.",
  },
  {
    title: "Mining & Metallurgy",
    image: "/assets/generated/solution-mining.dim_600x400.jpg",
    description:
      "Heavy-duty mine ventilation and metallurgical process gas fans.",
  },
  {
    title: "Maritime & Ship",
    image: "/assets/generated/solution-maritime.dim_600x400.jpg",
    description:
      "Marine-grade fans for ship engine rooms, cargo holds and offshore platforms.",
  },
  {
    title: "Power Plants",
    image: "/assets/generated/solution-power.dim_600x400.jpg",
    description:
      "Forced draft and induced draft fans for thermal and combined cycle power plants.",
  },
];

export default function Solutions({ onNavigate }: SolutionsProps) {
  return (
    <section id="solutions" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="font-body text-xs uppercase tracking-widest text-primary">
              Industries We Serve
            </span>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mt-2">
              Our Solutions
            </h2>
          </div>
          <p className="font-body text-sm text-muted-foreground max-w-sm">
            Specialized fan engineering for the most demanding industrial
            environments across the globe.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              data-ocid={`solutions.item.${i + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              onClick={() => onNavigate("solutions")}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-52 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Default dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <h3 className="font-display font-bold text-lg text-white text-center">
                    {solution.title}
                  </h3>
                  <p className="font-body text-xs text-white/90 text-center mt-2 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
              {/* Title always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="font-display font-bold text-sm text-white group-hover:opacity-0 transition-opacity duration-300">
                  {solution.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
