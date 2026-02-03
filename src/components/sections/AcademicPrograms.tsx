import { Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import physioLab from "@/assets/physio-lab.jpg";

const programs = [
  {
    short: "BPT",
    title: "Bachelor of Physiotherapy",
    image: physioLab,
    duration: "4.5 Years",
    seats: "60 Seats",
    highlights: [
      "Clinical Rotations",
      "Hospital Internship",
      "Sports Rehabilitation",
    ],
  },
  {
    short: "MPT",
    title: "Master of Physiotherapy",
    image: physioLab,
    duration: "2 Years",
    seats: "20 Seats",
    highlights: [
      "Specialization Tracks",
      "Research Thesis",
      "Advanced Clinical Training",
    ],
  },
];

const AcademicPrograms = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-800 mb-4">
            Academic Programs
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Our Programs
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
            Carefully structured undergraduate and postgraduate programs
            designed to build strong clinical competence and professional
            excellence.
          </p>
        </div>

        {/* Programs */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border-light overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-56">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />

                {/* Program badge */}
                <span className="absolute top-4 left-4 bg-card px-4 py-1 rounded-full text-sm font-bold text-foreground shadow">
                  {program.short}
                </span>

                {/* Title */}
                <h3 className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xl md:text-2xl font-heading font-bold text-white text-center px-4">
                  {program.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 text-center space-y-5">
                {/* Meta */}
                <div className="flex justify-center gap-8 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock size={15} className="text-primary" />
                    {program.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={15} className="text-primary" />
                    {program.seats}
                  </span>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap justify-center gap-2">
                  {program.highlights.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-background-subtle border border-border-light text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button variant="primary" className="w-full gap-2 mt-4">
                  View Program Details <ArrowRight size={16} className="text-primary" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;