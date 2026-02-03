import { motion } from "framer-motion";
import { Dumbbell, Zap, Activity, Bone, Brain, HeartPulse } from "lucide-react";

import infraLab from "@/assets/infra-lab.jpg";

const facilities = [
  {
    // icon: Dumbbell,
    title: "Exercise Therapy Lab",
    description:
      "Therapeutic exercise training for strength, mobility, and rehabilitation",
    image: infraLab,
  },
  {
    // icon: Zap,
    title: "Electrotherapy Lab",
    description:
      "Electro-physical agents for pain management and tissue healing",
    image: infraLab,
  },
  {
    // icon: Activity,
    title: "Biomechanics & Kinesiology Lab",
    description: "Study of human movement, posture, and functional mechanics",
    image: infraLab,
  },
  {
    // icon: Bone,
    title: "Physiotherapy in Orthopaedics Lab",
    description: "Assessment and rehabilitation of musculoskeletal conditions",
    image: infraLab,
  },
  {
    // icon: Brain,
    title: "Physiotherapy in Neurology Lab",
    description: "Neuro-rehabilitation for stroke and neurological disorders",
    image: infraLab,
  },
  {
    // icon: HeartPulse,
    title: "Physiotherapy in Cardio-Pulmonary Lab",
    description: "Cardiac and respiratory rehabilitation training",
    image: infraLab,
  },
];

const InfrastructureSection = () => {
  return (
    <section id="infrastructure" className="py-16 section-amber">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-800 mb-4">
            Facilities
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Physiotherapy Laboratory Infrastructure
          </h2>
          <p className="text-muted-foreground">
            Specialized laboratories designed to provide hands-on clinical
            training and practical exposure in physiotherapy education.
          </p>
        </motion.div>

        {/* Labs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="bg-card rounded-xl overflow-hidden border border-border-light hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div
                  className="absolute bottom-2 left-2 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                >
                  {/* <facility.icon className="w-5 h-5 text-primary" /> */}
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                <h3 className="font-semibold text-sm text-foreground mb-1">
                  {facility.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;