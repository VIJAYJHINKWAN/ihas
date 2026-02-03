import { Briefcase, TrendingUp, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "95%", label: "Placement Rate", icon: TrendingUp },
  { value: "50+", label: "Recruiting Partners ", icon: Building2 },
  { value: "₹6 LPA", label: "Average Package", icon: Briefcase },
  { value: "200+", label: "Placed Students (2025)", icon: Users },
];

import indata from "@/assets/partners/ino.png";
import coarseHealth from "@/assets/partners/corro.png";
import kinetic from "@/assets/partners/kini.png";
import nivaBupa from "@/assets/partners/niva.png";

const partners = [
  { name: "Indata", logo: indata },
  { name: "Coarse Health", logo: coarseHealth },
  { name: "Kinetic", logo: kinetic },
  { name: "Niva Bupa", logo: nivaBupa },
];

const PlacementSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">

        {/* Header + CTA */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-800 mb-4">
            Career Excellence
          </span>

          <h2 className="section-title mt-4">
            Placements & Industry Partners
          </h2>

          <p className="section-subtitle mt-3">
            Strong collaborations with trusted healthcare and insurance partners,
            supporting career growth and professional exposure.
          </p>

          <div className="mt-6">
            <Button variant="primary" size="lg" className="gap-2">
              View Placement Statistics
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 text-center bg-card rounded-xl border border-border-light border-l-4 border-primary hover:shadow-md transition-shadow"
            >
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="card-institution p-10">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-8 text-center">
            Our Partners
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-card rounded-xl border border-border-light 
                           grayscale hover:grayscale-0 hover:shadow-lg transition-all"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-14 object-contain"
                />
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Partnerships focused on clinical exposure, insurance support, and
            healthcare technology collaboration.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PlacementSection;