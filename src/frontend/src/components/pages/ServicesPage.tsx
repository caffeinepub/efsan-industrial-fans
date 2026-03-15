import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ChevronRight,
  Cog,
  FlaskConical,
  Settings,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import type { Page } from "../../App";

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
}

const services = [
  {
    id: 1,
    title: "Engineering / Design / Optimization",
    icon: Cog,
    color: "bg-blue-50 text-blue-600",
    description:
      "Our in-house engineering team provides complete fan system design from initial concept through detailed manufacturing drawings. We use advanced CFD simulation and FEA structural analysis to optimize every design for maximum performance and reliability.",
    features: [
      "CFD (Computational Fluid Dynamics) simulation",
      "FEA structural and modal analysis",
      "Custom impeller design and aerodynamic optimization",
      "Noise and vibration analysis",
      "Performance curve testing and validation",
      "3D CAD models and detailed manufacturing drawings",
      "Fan system layout and ductwork design",
      "Energy optimization studies",
    ],
  },
  {
    id: 2,
    title: "Maintenance / Service / Spare Parts",
    icon: Wrench,
    color: "bg-orange-50 text-orange-600",
    description:
      "Comprehensive maintenance and service support to keep your fan systems running at peak performance. Our service network covers all of Turkey and we provide international service through certified partners. Genuine spare parts are available from stock for all Efsan products.",
    features: [
      "Planned preventive maintenance programs",
      "Emergency breakdown response",
      "Impeller balancing (on-site and workshop)",
      "Bearing and seal replacement",
      "Shaft and impeller refurbishment",
      "Genuine spare parts from stock",
      "Performance re-testing and certification",
      "Maintenance contracts with guaranteed response times",
    ],
  },
  {
    id: 3,
    title: "Assembly / Commissioning",
    icon: Settings,
    color: "bg-green-50 text-green-600",
    description:
      "Professional assembly and commissioning services by our trained technicians. We manage the complete installation process from site preparation through final performance verification, ensuring your fan system is correctly installed and fully operational from day one.",
    features: [
      "Site survey and installation planning",
      "Foundation design and preparation",
      "Mechanical assembly and alignment",
      "Motor and drive commissioning",
      "Vibration measurement and balancing",
      "Performance verification testing",
      "Operator training",
      "As-built documentation",
    ],
  },
  {
    id: 4,
    title: "Test / Measurement",
    icon: FlaskConical,
    color: "bg-purple-50 text-purple-600",
    description:
      "In-house testing and field measurement services to verify performance and diagnose problems. Our test lab is equipped to perform full performance tests according to ISO 5801 and other international standards. Field vibration analysis and acoustic measurement services are also available.",
    features: [
      "Factory performance tests to ISO 5801",
      "Sound pressure and power level measurements",
      "Vibration analysis and balancing",
      "Field performance measurements",
      "Third-party witnessed testing",
      "ATEX compliance verification",
      "Endurance and reliability testing",
      "Full test reports and certification",
    ],
  },
];

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
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
              data-ocid="services.back_button"
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
              <span className="text-foreground">Services</span>
            </div>
          </div>
          <span className="font-body text-xs uppercase tracking-widest text-primary">
            Full-Cycle Support
          </span>
          <h1 className="font-display font-bold text-3xl lg:text-5xl text-foreground mt-1">
            Our Services
          </h1>
          <p className="font-body text-muted-foreground mt-3 max-w-2xl">
            From engineering design to commissioning and ongoing maintenance,
            Efsan provides complete lifecycle support for all industrial fan
            systems.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                data-ocid={`services.item.${i + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
                className="bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg p-8"
              >
                <div className="flex items-start gap-5 mb-5">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-sm flex-shrink-0 ${service.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="sm"
                  className="bg-primary text-white hover:bg-primary/90 font-body text-xs uppercase tracking-wider"
                  onClick={() => onNavigate("contact" as Page)}
                  data-ocid={`services.contact_button.${i + 1}`}
                >
                  Request This Service
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
