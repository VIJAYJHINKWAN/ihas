import { motion } from "framer-motion";
import {
  Award,
  Users,
  FlaskConical,
  Building,
  Briefcase,
  Lightbulb,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "NAAC Approved & UPSMF Recognized",
    description:
      "Accredited by NAAC and recognized by Uttar Pradesh State Medical Faculty for quality healthcare education",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description:
      "Learn from highly qualified academicians and clinical professionals",
  },
  {
    icon: FlaskConical,
    title: "Modern Laboratories",
    description:
      "Well-equipped laboratories supporting hands-on learning and research",
  },
  {
    icon: Building,
    title: "Hospital Exposure",
    description:
      "Practical training through hospital postings and real-world clinical exposure",
  },
  {
    icon: Briefcase,
    title: "Strong Placement Support",
    description:
      "Dedicated placement assistance with reputed healthcare organizations",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation Culture",
    description:
      "Encouraging research, innovation, and evidence-based healthcare practices",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 section-amber">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-800 mb-4">
            Our Strengths
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Why Choose I.T.S IHAS?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-card p-6 rounded-xl border border-border-light text-center hover:shadow-lg transition-all group"
            >
              <div
                className={`w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110`}
              >
                <reason.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;