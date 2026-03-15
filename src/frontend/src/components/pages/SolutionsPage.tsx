import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import type { Page } from "../../App";

interface SolutionsPageProps {
  onNavigate: (page: Page) => void;
}

const solutions = [
  {
    id: 1,
    title: "Oil & Gas",
    image: "/assets/generated/solution-oil-gas.dim_600x400.jpg",
    description:
      "Efsan supplies ATEX-certified fan systems for the oil & gas sector, covering everything from upstream extraction to downstream refining. Our fans handle hazardous gas atmospheres with full zone classification compliance.",
    applications: [
      "Flare gas blowers",
      "Combustion air fans",
      "Offshore platform ventilation",
      "Refinery process fans",
      "Vapor recovery units",
    ],
  },
  {
    id: 2,
    title: "Chemical Industry",
    image: "/assets/generated/solution-chemical.dim_600x400.jpg",
    description:
      "Corrosion-resistant fan solutions for chemical manufacturing. We use special alloys, coatings, and plastic construction to ensure longevity in aggressive chemical atmospheres including acids, alkalis, and organic solvents.",
    applications: [
      "Acid fume extraction",
      "Solvent vapor handling",
      "Process gas compression",
      "Scrubber system fans",
      "Reactor ventilation",
    ],
  },
  {
    id: 3,
    title: "Cement Factories",
    image: "/assets/generated/solution-cement.dim_600x400.jpg",
    description:
      "Heavy-duty fans engineered for the extreme conditions found in cement production — high temperatures, abrasive dust, and continuous 24/7 operation demands. Wear-resistant impeller treatments and hard-facing ensure extended service life.",
    applications: [
      "Kiln ID fans",
      "Raw mill circulation fans",
      "Clinker cooler fans",
      "Preheater exhaust fans",
      "Coal mill fans",
    ],
  },
  {
    id: 4,
    title: "Recycling Facilities",
    image: "/assets/generated/solution-recycling.dim_600x400.jpg",
    description:
      "Specialized ventilation and dust control fan systems for modern recycling and waste processing operations. Our fans are designed to handle challenging airstreams containing fibres, particles, and odorous gases.",
    applications: [
      "Dust collection systems",
      "Shredder exhaust fans",
      "Biogas handling blowers",
      "Compost odor control",
      "Sorting facility ventilation",
    ],
  },
  {
    id: 5,
    title: "Food Sector",
    image: "/assets/generated/solution-food.dim_600x400.jpg",
    description:
      "Hygienic stainless steel fans meeting the strict food safety and cleanability requirements of the food and beverage industry. All contact surfaces are FDA-compliant and designed for CIP/SIP cleaning processes.",
    applications: [
      "Drying & cooling fans",
      "Freezer tunnel air supply",
      "Spray drying fans",
      "Yeast plant ventilation",
      "Grain handling fans",
    ],
  },
  {
    id: 6,
    title: "Mining & Metallurgy",
    image: "/assets/generated/solution-mining.dim_600x400.jpg",
    description:
      "Extremely robust fan solutions for underground mining ventilation and surface metallurgical process applications. Designed to operate continuously in the most demanding conditions with minimal maintenance requirements.",
    applications: [
      "Main mine ventilation fans",
      "Auxiliary tunnel fans",
      "Sinter plant fans",
      "Blast furnace blowers",
      "Fume extraction systems",
    ],
  },
  {
    id: 7,
    title: "Maritime & Ship",
    image: "/assets/generated/solution-maritime.dim_600x400.jpg",
    description:
      "Marine-grade fan systems engineered for the unique challenges of shipbuilding and offshore applications. Salt-resistant materials, vibration-dampened mountings, and compliance with major classification societies (DNV, Lloyd's, BV).",
    applications: [
      "Engine room ventilation",
      "Cargo hold fans",
      "Accommodation HVAC",
      "Machinery space exhaust",
      "LNG carrier fans",
    ],
  },
  {
    id: 8,
    title: "Power Plants",
    image: "/assets/generated/solution-power.dim_600x400.jpg",
    description:
      "Forced draft (FD) and induced draft (ID) fans for thermal power stations, combined-cycle plants and industrial boilers. High reliability and availability are paramount — our power plant fans are built to run for years between overhauls.",
    applications: [
      "FD combustion air fans",
      "ID flue gas fans",
      "Primary air fans",
      "Gas recirculation fans",
      "Cooling tower fans",
    ],
  },
  {
    id: 9,
    title: "Industrial Steam Recovery",
    image: "/assets/generated/about-factory.dim_700x500.jpg",
    description:
      "MVR (Mechanical Vapor Recompression) and TVR (Thermal Vapor Recompression) systems for industrial steam recovery and energy optimization. Dramatically reduce energy consumption in evaporation-intensive processes.",
    applications: [
      "Evaporator systems",
      "Concentration plants",
      "Crystallization units",
      "Distillation columns",
      "Wastewater treatment",
    ],
  },
];

export default function SolutionsPage({ onNavigate }: SolutionsPageProps) {
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
              data-ocid="solutions.back_button"
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
              <span className="text-foreground">Solutions</span>
            </div>
          </div>
          <span className="font-body text-xs uppercase tracking-widest text-primary">
            Industries We Serve
          </span>
          <h1 className="font-display font-bold text-3xl lg:text-5xl text-foreground mt-1">
            Our Solutions
          </h1>
          <p className="font-body text-muted-foreground mt-3 max-w-2xl">
            Specialized fan engineering expertise for the most demanding
            industrial environments. Each solution is tailored to the unique
            requirements of the industry it serves.
          </p>
        </div>
      </div>

      {/* Solutions List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.id}
              data-ocid={`solutions.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
              className="group bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg overflow-hidden flex flex-col sm:flex-row"
            >
              {/* Image */}
              <div className="relative w-full sm:w-48 h-44 sm:h-auto flex-shrink-0 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {solution.applications.slice(0, 3).map((app) => (
                      <span
                        key={app}
                        className="text-xs font-body bg-muted text-muted-foreground px-2 py-1 rounded-sm"
                      >
                        {app}
                      </span>
                    ))}
                    {solution.applications.length > 3 && (
                      <span className="text-xs font-body bg-primary/10 text-primary px-2 py-1 rounded-sm">
                        +{solution.applications.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="self-start border-primary/40 text-primary hover:bg-primary hover:text-white transition-colors font-body text-xs uppercase tracking-wider"
                  onClick={() => onNavigate("contact" as Page)}
                  data-ocid={`solutions.contact_button.${i + 1}`}
                >
                  Get a Quote
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
