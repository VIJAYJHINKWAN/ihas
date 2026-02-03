import { Stethoscope, Microscope, Book, Dumbbell, Wifi, Accessibility, Building } from "lucide-react";
import libraryImg from "@/assets/library.jpg";
import sportsImg from "@/assets/sports.jpg";
import infraImg from "@/assets/infra-library.jpg"; // use any clean campus/infra image

const facilities = [
  {
    category: "Physiotherapy Labs",
    icon: Stethoscope,
    color: "academic",
    items: [
      "Orthopaedic Lab",
      "Neuro Rehabilitation Lab",
      "Sports Physiotherapy Lab",
      "Cardio-Respiratory Lab",
      "Community Physiotherapy Center",
      "Satellite Clinic",
    ],
  },
 {
  category: "Advanced Physiotherapy Labs",
  icon: Microscope,
  color: "sage",
  items: [
    "Gait Analysis Lab",
    "Biomechanics & Kinesiology Lab",
    "Ergonomics & Posture Analysis Lab",
    "Pain Management & Manual Therapy Lab",
    "Clinical Skills & Simulation Lab",
  ],
},

  {
    category: "Academic Facilities",
    icon: Book,
    color: "plum",
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
    color: "teal",
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
    <section className="py-16 section-sage">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sage text-sage-foreground mb-4">
            World-Class Facilities
          </span>
          <h2 className="section-title mt-4">Our Infrastructure</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            State-of-the-art facilities designed to provide the best learning environment
          </p>
        </div>

        {/* Facility Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {facilities.map((facility, index) => (
            <div key={index} className={`card-${facility.color} p-6`}>
              <facility.icon className={`w-10 h-10 text-${facility.color} mb-4`} />
              <h3 className="font-semibold text-foreground mb-3">
                {facility.category}
              </h3>
              <ul className="space-y-2">
                {facility.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-${facility.color}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Image Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-card">
                <item.icon size={20} />
                <span className="font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {[
            { icon: Wifi, label: "Wi-Fi Enabled Campus" },
            { icon: Accessibility, label: "Disabled-Friendly Infrastructure" },
            { icon: Building, label: "Sustainable Campus Practices" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border-light"
            >
              <feature.icon size={16} className="text-sage" />
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
