import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import type { Page } from "../../App";

interface ProductsPageProps {
  onNavigate: (page: Page) => void;
}

const products = [
  {
    id: 1,
    title: "Radial Fans",
    subtitle: "Custom Centrifugal Fan Systems",
    image: "/assets/generated/products-radial-fans.dim_600x400.jpg",
    description:
      "Custom-engineered radial (centrifugal) fan systems designed for a wide range of industrial applications. Efsan radial fans are precision-manufactured to handle large volume flows at varying pressure levels, delivering reliable performance in demanding environments.",
    specs: [
      { label: "Flow Rate", value: "Up to 1,800,000 m³/h" },
      { label: "Pressure", value: "Up to 45 kPa" },
      { label: "Temperature", value: "Up to 600°C" },
      { label: "Standards", value: "ISO 5801, ISO 13349" },
    ],
    tags: ["Centrifugal", "High Capacity", "Custom Design"],
  },
  {
    id: 2,
    title: "Ex-Proof Fan / Blower",
    subtitle: "Explosion-Proof Fans for Hazardous Environments",
    image: "/assets/generated/solution-chemical.dim_600x400.jpg",
    description:
      "Explosion-proof fans certified to ATEX standards for operation in zones 1, 2, 21 and 22. Designed for chemical plants, refineries, and any environment where flammable gases or dust are present. All components are engineered to eliminate ignition sources.",
    specs: [
      { label: "Certification", value: "ATEX Zone 1 & 2" },
      { label: "Standard", value: "EN 13463, EN 14986" },
      { label: "Materials", value: "SS304, SS316L, Special Alloys" },
      { label: "Motor", value: "Ex-d, Ex-e, Ex-n" },
    ],
    tags: ["ATEX Certified", "Ex-Proof", "Hazardous Areas"],
  },
  {
    id: 3,
    title: "MVR Blower",
    subtitle: "Mechanical Vapor Recompression",
    image: "/assets/generated/about-factory.dim_700x500.jpg",
    description:
      "Mechanical Vapor Recompression (MVR) blowers for evaporation and concentration processes. These high-efficiency turbo blowers compress steam vapors to increase their temperature and pressure, recovering energy that would otherwise be wasted in evaporation systems.",
    specs: [
      { label: "Application", value: "Evaporation, Distillation" },
      { label: "Efficiency", value: "Up to 85% energy recovery" },
      { label: "Capacity", value: "500 – 150,000 m³/h" },
      { label: "Industries", value: "Food, Chemical, Pharma" },
    ],
    tags: ["Energy Recovery", "MVR", "High Efficiency"],
  },
  {
    id: 4,
    title: "CCR Blower Unit",
    subtitle: "Complete Industrial Blower Units",
    image: "/assets/generated/solution-oil-gas.dim_600x400.jpg",
    description:
      "Complete CCR (Continuous Catalytic Regeneration) blower units for catalytic reforming and industrial process applications. Supplied as fully integrated skid-mounted units with all auxiliary systems including lubrication, cooling, and control panels.",
    specs: [
      { label: "Type", value: "Centrifugal, Positive Displacement" },
      { label: "Supply", value: "Skid-mounted, complete unit" },
      { label: "Control", value: "PLC / SCADA ready" },
      { label: "Pressure", value: "Up to 10 bar" },
    ],
    tags: ["Complete Unit", "Skid-Mounted", "Process Industry"],
  },
  {
    id: 5,
    title: "Turbo Compressor / Blower",
    subtitle: "High-Efficiency Turbo Machines",
    image: "/assets/generated/solution-cement.dim_600x400.jpg",
    description:
      "High-efficiency turbo compressors and blowers for industrial gas compression and transport applications. Single and multi-stage configurations available. Suitable for aeration, pneumatic conveying, gas boosting and combustion air supply applications.",
    specs: [
      { label: "Stages", value: "Single & Multi-Stage" },
      { label: "Pressure Ratio", value: "1.1 – 8.0" },
      { label: "Flow", value: "1,000 – 500,000 m³/h" },
      { label: "Drive", value: "Electric, Steam Turbine, Gas Engine" },
    ],
    tags: ["Turbo", "High Pressure", "Multi-Stage"],
  },
  {
    id: 6,
    title: "Plastic Fans",
    subtitle: "Corrosion-Resistant Industrial Fans",
    image: "/assets/generated/solution-maritime.dim_600x400.jpg",
    description:
      "Corrosion-resistant plastic (PP, PE, FRP, GRP) fans for chemical processing, laboratory exhaust, acid fume handling and other applications where metal corrosion would be a problem. Available in polypropylene, polyethylene, and glass-reinforced plastic.",
    specs: [
      { label: "Materials", value: "PP, PE, FRP, GRP, PVC" },
      { label: "Temperature", value: "Up to 120°C" },
      { label: "Applications", value: "Chemical, Lab, Scrubbers" },
      { label: "Standards", value: "ISO 14695" },
    ],
    tags: ["Corrosion Resistant", "Plastic", "Chemical Duty"],
  },
];

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Page Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate("home")}
              className="flex items-center gap-2"
              data-ocid="products.back_button"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
              <button
                type="button"
                onClick={() => onNavigate("home")}
                className="hover:text-primary transition-colors"
              >
                Home
              </button>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground">Products</span>
            </div>
          </div>
          <span className="font-body text-xs uppercase tracking-widest text-primary">
            Industrial Fan Catalogue
          </span>
          <h1 className="font-display font-bold text-3xl lg:text-5xl text-foreground mt-1">
            Our Products
          </h1>
          <p className="font-body text-muted-foreground mt-3 max-w-2xl">
            Efsan designs and manufactures a comprehensive range of industrial
            fans and blowers for every application. Each product is
            custom-engineered to meet exact process requirements.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              data-ocid={`products.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {product.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-primary/90 text-white text-xs font-body px-2 py-0.5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-1">
                  {product.title}
                </h3>
                <p className="text-xs font-body text-primary uppercase tracking-wider mb-3">
                  {product.subtitle}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Specs grid */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="bg-muted/60 px-3 py-2 rounded-sm"
                    >
                      <div className="text-xs text-muted-foreground font-body">
                        {spec.label}
                      </div>
                      <div className="text-xs font-body font-semibold text-foreground mt-0.5">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-primary/40 text-primary hover:bg-primary hover:text-white transition-colors font-body text-xs uppercase tracking-wider"
                  onClick={() => onNavigate("contact" as Page)}
                  data-ocid={`products.contact_button.${i + 1}`}
                >
                  Request Quote
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
