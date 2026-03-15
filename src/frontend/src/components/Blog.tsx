import { Badge } from "@/components/ui/badge";
import { useBlogPosts } from "@/hooks/useQueries";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "motion/react";

const samplePosts = [
  {
    title:
      "What is API 673? Centrifugal Fan Standards in the Oil and Gas Industry",
    category: "Standards",
    date: "Mar 13, 2026",
    excerpt:
      "API 673 is the industry standard governing special-purpose centrifugal fans for petroleum, chemical, and gas industry services.",
    imageUrl: "/assets/generated/products-radial-fans.dim_600x400.jpg",
  },
  {
    title: "Power Plant Fan Systems: The Definitive Guide",
    category: "Power Generation",
    date: "Mar 6, 2026",
    excerpt:
      "A comprehensive overview of forced draft, induced draft, and primary air fans used in thermal power generation.",
    imageUrl: "/assets/generated/solution-power.dim_600x400.jpg",
  },
  {
    title: "Field Observations in MVR Evaporator Applications",
    category: "MVR Technology",
    date: "Feb 27, 2026",
    excerpt:
      "Mechanical vapor recompression fans face unique challenges in evaporation processes. We share key field observations.",
    imageUrl: "/assets/generated/about-factory.dim_700x500.jpg",
  },
  {
    title: "High Pressure Fan in Industrial Facilities",
    category: "Engineering",
    date: "Feb 21, 2026",
    excerpt:
      "High-pressure fans are critical for processes requiring significant static pressure rise. Selection criteria and installation.",
    imageUrl: "/assets/generated/solution-oil-gas.dim_600x400.jpg",
  },
];

export default function Blog() {
  const { data: posts, isLoading } = useBlogPosts();
  const displayPosts =
    posts && posts.length > 0
      ? posts.slice(0, 4).map((p) => ({
          title: p.title,
          category: p.category,
          date: new Date(Number(p.date) / 1_000_000).toLocaleDateString(
            "en-US",
            { month: "short", day: "numeric", year: "numeric" },
          ),
          excerpt: p.excerpt,
          imageUrl: p.imageUrl,
        }))
      : samplePosts;

  return (
    <section id="blog" className="py-20 lg:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="font-body text-xs uppercase tracking-widest text-primary">
              Latest Updates
            </span>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mt-2">
              Blog Posts and News
            </h2>
          </div>
          <a
            href="#blog"
            className="flex items-center gap-2 font-body text-sm text-primary hover:text-primary/80 transition-colors"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {isLoading ? (
          <div
            data-ocid="blog.loading_state"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card animate-pulse h-80" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayPosts.map((post, i) => (
              <motion.article
                key={post.title}
                data-ocid={`blog.item.${i + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card border border-border hover:border-primary/40 transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-body uppercase tracking-wide">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-body mb-3">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <h3 className="font-display font-bold text-sm text-foreground leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs text-primary font-body font-semibold">
                    Read More
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
