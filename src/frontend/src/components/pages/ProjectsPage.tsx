import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import type { Page } from "../../App";

interface ProjectsPageProps {
  onNavigate: (page: Page) => void;
}

const ongoingProjects = [
  {
    id: 1,
    title: "MVR Evaporation System — Sugar Refinery",
    location: "Konya, Turkey",
    capacity: "3 × MVR Blowers, 120,000 m³/h each",
    status: "In Progress",
    description:
      "Design and supply of three large MVR (Mechanical Vapor Recompression) blower units for a major sugar refinery expansion project. Includes complete engineering documentation and factory acceptance tests.",
  },
  {
    id: 2,
    title: "Radial Fan Replacement — Cement Plant",
    location: "İzmir, Turkey",
    capacity: "2 × ID Fans, 950,000 m³/h",
    status: "In Progress",
    description:
      "Turnkey replacement of kiln induced draft fans at a large cement production facility. Scope includes dismantling, new fan installation, balancing, and commissioning.",
  },
  {
    id: 3,
    title: "ATEX Fan Systems — Chemical Complex",
    location: "Rotterdam, Netherlands",
    capacity: "12 × Ex-Proof Fans",
    status: "Engineering Phase",
    description:
      "Engineering and supply of twelve ATEX Zone 1 rated fan units for a petrochemical complex expansion. All fans certified to ATEX Directive 2014/34/EU.",
  },
];

const completedProjects = [
  {
    id: 4,
    title: "Power Plant FD/ID Fan Package",
    location: "Ankara, Turkey",
    capacity: "4 × FD Fans + 4 × ID Fans",
    year: "2024",
    description:
      "Complete supply of forced draft and induced draft fan packages for a 300 MW combined-cycle power plant. Included full skid assembly, motor drives, and control integration.",
  },
  {
    id: 5,
    title: "Mine Ventilation System",
    location: "Elazığ, Turkey",
    capacity: "Main fans + 24 auxiliary fans",
    year: "2023",
    description:
      "Design and installation of a complete underground mine ventilation system including main surface fans, auxiliary ventilation fans, and monitoring and control system.",
  },
  {
    id: 6,
    title: "Ship Ventilation Package",
    location: "Tuzla Shipyard, Istanbul",
    capacity: "86 marine fans, DNV certified",
    year: "2023",
    description:
      "Supply of 86 marine-grade ventilation fans for a series of container vessels. All fans certified by DNV classification society with full material traceability documentation.",
  },
  {
    id: 7,
    title: "MVR Blower — Dairy Processing",
    location: "Samsun, Turkey",
    capacity: "2 × 85,000 m³/h MVR Blowers",
    year: "2022",
    description:
      "Engineering and supply of two MVR blower units for the evaporation section of a major dairy processing plant, achieving 40% energy reduction in the evaporation process.",
  },
  {
    id: 8,
    title: "Recycling Facility Ventilation",
    location: "Bursa, Turkey",
    capacity: "Complete dust control system",
    year: "2022",
    description:
      "Turnkey dust control and ventilation system for a large plastics recycling facility, including dust collection fans, ductwork design, and bag filter integration.",
  },
];

export default function ProjectsPage({ onNavigate }: ProjectsPageProps) {
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
              data-ocid="projects.back_button"
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
              <span className="text-foreground">Projects</span>
            </div>
          </div>
          <span className="font-body text-xs uppercase tracking-widest text-primary">
            Global References
          </span>
          <h1 className="font-display font-bold text-3xl lg:text-5xl text-foreground mt-1">
            Our Projects
          </h1>
          <p className="font-body text-muted-foreground mt-3 max-w-2xl">
            A selection of ongoing and completed industrial fan projects
            delivered across Turkey and internationally. Each project is a
            testament to Efsan's engineering capabilities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Ongoing */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-display font-bold text-2xl text-foreground">
              Ongoing Projects
            </h2>
            <Badge className="bg-primary/15 text-primary border border-primary/30 font-body">
              {ongoingProjects.length} Active
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ongoingProjects.map((project, i) => (
              <motion.div
                key={project.id}
                data-ocid={`projects.item.${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <Badge className="bg-amber-50 text-amber-700 border border-amber-200 font-body text-xs">
                    {project.status}
                  </Badge>
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-body text-primary mb-2">
                  {project.location}
                </p>
                <p className="text-xs font-body text-muted-foreground mb-3">
                  {project.capacity}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Completed */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-display font-bold text-2xl text-foreground">
              Completed Projects
            </h2>
            <Badge className="bg-green-50 text-green-700 border border-green-200 font-body">
              {completedProjects.length} Delivered
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedProjects.map((project, i) => (
              <motion.div
                key={project.id}
                data-ocid={`projects.item.${i + ongoingProjects.length + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                className="bg-card border border-border p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300 flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="font-display font-bold text-primary text-sm">
                      {project.year}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-body text-primary mb-1">
                    {project.location}
                  </p>
                  <p className="text-xs font-body text-muted-foreground mb-2">
                    {project.capacity}
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
