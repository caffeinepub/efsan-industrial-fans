import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  "Flow rates up to 1,800,000 m³/h",
  "Pressures up to 45 kPa",
  "Custom-engineered solutions",
  "ISO 9001 certified manufacturing",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Factory Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src="/assets/generated/about-factory.dim_700x500.jpg"
                alt="Efsan factory"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-primary/40" />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-6 left-8 bg-primary text-primary-foreground px-6 py-4">
              <div className="font-display font-bold text-3xl leading-none">
                25+
              </div>
              <div className="font-body text-xs uppercase tracking-widest mt-1">
                Years of Experience
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="font-body text-xs uppercase tracking-widest text-primary">
              About Us
            </span>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mt-3 mb-6 leading-tight">
              EFSAN Machine Industry –{" "}
              <span className="text-primary">Industrial Fans</span> and Fan
              Systems
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              EFSAN is a leading manufacturer of industrial fans and fan
              systems, providing custom-engineered ventilation solutions for the
              most demanding industrial applications worldwide. With over 25
              years of expertise, we design and manufacture fans with flow rates
              up to 1,800,000 m³/h and pressures up to 45 kPa.
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-8">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-body text-sm text-muted-foreground"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Tabs */}
            <Tabs defaultValue="vision" className="mt-6">
              <TabsList className="bg-secondary border border-border w-full grid grid-cols-3">
                <TabsTrigger
                  value="vision"
                  className="font-body text-xs uppercase tracking-wide data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  data-ocid="about.vision.tab"
                >
                  Our Vision
                </TabsTrigger>
                <TabsTrigger
                  value="mission"
                  className="font-body text-xs uppercase tracking-wide data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  data-ocid="about.mission.tab"
                >
                  Our Mission
                </TabsTrigger>
                <TabsTrigger
                  value="quality"
                  className="font-body text-xs uppercase tracking-wide data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  data-ocid="about.quality.tab"
                >
                  Quality Policy
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="vision"
                className="mt-4 text-sm font-body text-muted-foreground leading-relaxed"
              >
                To be the globally recognized leader in industrial fan
                engineering and manufacturing, setting the standard for
                performance, reliability, and sustainability in air management
                systems across all industrial sectors.
              </TabsContent>
              <TabsContent
                value="mission"
                className="mt-4 text-sm font-body text-muted-foreground leading-relaxed"
              >
                Our mission is to deliver superior industrial fan solutions
                through innovative engineering, precise manufacturing, and
                exceptional customer service — ensuring optimal air flow
                management that drives our clients' operational success.
              </TabsContent>
              <TabsContent
                value="quality"
                className="mt-4 text-sm font-body text-muted-foreground leading-relaxed"
              >
                We are committed to producing industrial fans that meet the
                highest standards of quality, safety, and performance. Our ISO
                9001 certified processes ensure every product undergoes rigorous
                testing before delivery.
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
