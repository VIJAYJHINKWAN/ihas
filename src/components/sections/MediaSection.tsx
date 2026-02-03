import { motion } from "framer-motion";
import { Newspaper, Image as ImageIcon, ArrowRight } from "lucide-react";

import mediaPress from "@/assets/media-press.jpg";
import heroResearch from "@/assets/hero-research.jpg";

const mediaBlocks = [
  {
    title: "Media Coverage",
    description: "Coverage across print, digital, and electronic media platforms",
    icon: ImageIcon,
    count: "50+",
    image: mediaPress,
  },
  {
    title: "News",
    description: "Latest announcements, achievements, and campus updates",
    icon: Newspaper,
    count: "100+",
    image: heroResearch,
  },
];

const MediaSection = () => {
  return (
    <section className="py-16 section-amber">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-800 mb-4">
            Media & Updates
          </span>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Media Coverage
          </h2>
        </motion.div>

        {/* Compact Two Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {mediaBlocks.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="flex gap-4 p-5">
                
                {/* Image */}
                <div className="w-28 h-20 rounded-lg overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary"
                    >
                      <item.icon className="w-3 h-3" />
                      {item.count}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-2">
                    {item.description}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all"
                  >
                    View All <ArrowRight className="w-3 h-3 text-primary" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;