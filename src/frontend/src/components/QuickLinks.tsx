import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import type { Page } from "../App";

interface QuickLinksProps {
  onNavigate: (page: Page) => void;
}

const cards = [
  {
    title: "Products",
    description:
      "MVR Fan Systems – Radial Fans – Ex-Proof Fans – Turbo Compressors",
    image: "/assets/generated/products-radial-fans.dim_600x400.jpg",
    page: "products" as Page,
  },
  {
    title: "Solutions",
    description: "Oil & Gas – Chemical – Cement – Recycling – Food – Mining",
    image: "/assets/generated/solution-oil-gas.dim_600x400.jpg",
    page: "solutions" as Page,
  },
  {
    title: "Projects",
    description: "Ongoing Projects – Completed Projects – References",
    image: "/assets/generated/solution-power.dim_600x400.jpg",
    page: "projects" as Page,
  },
  {
    title: "Services",
    description: "Engineering – Maintenance – Assembly – Test & Measurement",
    image: "/assets/generated/about-factory.dim_700x500.jpg",
    page: "services" as Page,
  },
];

export default function QuickLinks({ onNavigate }: QuickLinksProps) {
  return (
    <section id="products" className="relative z-10 -mt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <motion.button
              key={card.title}
              type="button"
              onClick={() => onNavigate(card.page)}
              data-ocid={`quicklinks.item.${i + 1}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer text-left w-full"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {card.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                <p className="text-xs font-body text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Orange bottom line */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
