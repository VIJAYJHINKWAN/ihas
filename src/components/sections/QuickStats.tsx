import { GraduationCap, Building2, Users, Award, BookOpen, Microscope } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "30+", label: "Years of Excellence" },
  { icon: Users, value: "5000+", label: "Alumni Network" },
  { icon: Building2, value: "50+", label: "Partner Hospitals" },
  { icon: Award, value: "100%", label: "Placement Record" },
  { icon: BookOpen, value: "2", label: "Academic Programs" },
  { icon: Microscope, value: "12+", label: "Labs" },
];

const QuickStats = () => {
  return (
    <section className="py-8 bg-card border-y border-border-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;