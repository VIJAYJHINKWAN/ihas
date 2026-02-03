import { Stethoscope, Book, Dumbbell, Wifi, Accessibility, Building } from "lucide-react";
import libraryImg from "@/assets/library.jpg";
import sportsImg from "@/assets/sports.jpg";
import infraImg from "@/assets/infra-library.jpg";

const facilities = [
  {
    category: "Physiotherapy Labs",
    icon: Stethoscope,
    items: [
      "Exercise Therapy Lab",
      "Electro Therapy Lab",
      "Biomechanics & Kinesiology Lab",
      "Physiotherapy in Orthopaedic Lab",
      "Physiotherapy in Neuro-Rehabilitation Lab",
      "Physiotherapy in Cardio-pulmonary Lab",
      "Physiotherapy in Sports Lab",
    ],
  },
  {
    category: "Academic Facilities",
    icon: Book,
    items: [
      "Central Library",
      "Digital Library",
      "Computer Centers",
      "Smart Classrooms",
      "Lecture Halls",
      "Seminar Rooms",
    ],
  },
  {
    category: "Infrastructure Highlights",
    icon: Building,
    items: [
      "Green & Eco-Friendly Campus",
      "Auditorium & Seminar Halls",
      "Research & Innovation Spaces",
      "Student Activity Areas",
      "Modern Campus Planning",
      "Safe & Secure Premises",
    ],
  },
];

const highlights = [
  { icon: Dumbbell, label: "Sports & Fitness Facilities", image: sportsImg },
  { icon: Book, label: "Central & Digital Library", image: libraryImg },
  { icon: Building, label: "Modern Campus Infrastructure", image: infraImg },
];

const InfrastructureSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-800 mb-3">
            World-Class Facilities
          </span>
          <h2 className="section-title mt-3">Our Infrastructure</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            State-of-the-art facilities designed to provide the best learning environment
          </p>
        </div>

        {/* Facility Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="p-5 bg-card rounded-xl border border-border-light border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow"
            >
              <facility.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                {facility.category}
              </h3>
              <ul className="space-y-1.5">
                {facility.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Image Highlights */}
        <div className="grid md:grid-cols-3 gap-5">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="relative h-56 rounded-lg overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 text-card">
                <item.icon size={18} className="text-white" />
                <span className="font-semibold text-sm">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {[
            { icon: Wifi, label: "Wi-Fi Enabled Campus" },
            { icon: Accessibility, label: "Disabled-Friendly Infrastructure" },
            { icon: Building, label: "Sustainable Campus Practices" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-full border border-primary/20"
            >
              <feature.icon size={14} className="text-primary" />
              <span className="text-sm font-medium text-foreground">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;