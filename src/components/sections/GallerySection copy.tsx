import { motion } from 'framer-motion';
import { Image as ImageIcon, Video, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

import heroCampus from '@/assets/campus-building.jpg';
import heroLab from '@/assets/hero-lab.jpg';
import library from '@/assets/library.jpg';
import pharmaLab from '@/assets/pharma-lab.jpg';

const galleryImages = [
  { src: heroCampus, title: 'Main Campus', alt: 'Beautiful panoramic view of the main campus' },
  { src: heroLab, title: 'Research Lab', alt: 'State-of-the-art research laboratory' },
  { src: library, title: 'Central Library', alt: 'Modern and spacious central library' },
  { src: pharmaLab, title: 'Pharma Lab', alt: 'Advanced pharmaceutical research facility' },
];

const GallerySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Clean & Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-orange-100 text-orange-800 mb-4">
            Campus Life
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Gallery 
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our world-class facilities and inspiring campus environment.
          </p>
        </motion.div>

        {/* Compact, Clean Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm ring-1 ring-border bg-white transition-all duration-300 hover:shadow-xl hover:ring-orange-200"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Elegant hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Title - subtle reveal */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-sm font-medium text-white text-center tracking-wide drop-shadow-md">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Compact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <Button
            variant="maroon"
            size="default" // Fixed: valid size prop
            className="font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <ImageIcon className="w-4 h-4 mr-2" />
            Photo Gallery
          </Button>
          <Button
            variant="outline"
            size="default"
            className="font-medium hover:bg-muted/50 transition-colors"
          >
            <Video className="w-4 h-4 mr-2" />
            Videos
          </Button>
          <Button
            variant="outline"
            size="default"
            className="font-medium hover:bg-muted/50 transition-colors"
          >
            <Play className="w-4 h-4 mr-2" />
            Virtual Tour
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;