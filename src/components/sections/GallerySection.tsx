import { motion } from "framer-motion";
import { Image as ImageIcon, Video } from "lucide-react";

import heroLab from "@/assets/hero-lab.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import heroResearch from "@/assets/hero-research.jpg";
import heroPhysio from "@/assets/infra-lab.jpg";
import physo from "@/assets/physiotherapy-lab.jpg";

const galleryImages = [
  { src: heroLab, alt: "Pharmacy Laboratory" },
  { src: heroPhysio, alt: "Infrastructure Lab" },
  { src: heroResearch, alt: "Research Activities" },
  { src: heroLab, alt: "Student Research" },
  { src: physo, alt: "Physiotherapy Laboratory" },
  { src: heroResearch, alt: "Modern Equipment" },
];

const GallerySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-50 text-red-800 mb-4">
            Gallery Explore
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Gallery
          </h2>

          <p className="text-muted-foreground">
            Explore our vibrant campus, modern infrastructure, academic
            facilities, and student activities at I.T.S College of Pharmacy.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative aspect-video rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-shadow group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-3">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-border shadow-sm hover:shadow-md transition-all font-medium"
          >
            <ImageIcon className="h-5 w-5 text-primary" />
            Photo Gallery
          </motion.a>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-border shadow-sm hover:shadow-md transition-all font-medium"
          >
            <Video className="h-5 w-5 text-primary" />
            Video Gallery
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;