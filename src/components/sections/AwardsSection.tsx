import { Trophy, Star, Medal, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Best Physiotherapy College Award",
    year: "2025",
    body: "Awarded by Association of Physiotherapists of India",
  },
  {
    icon: Star,
    title: "NAAC Accreditation",
    year: "2024",
    body: "National Assessment and Accreditation Council",
  },
  {
    icon: Award,
    title: "Faculty Achievement Award",
    year: "2024",
    body: "Recognized for outstanding contributions to teaching, research, and academic excellence",
  },
  {
    icon: Trophy,
    title: "Outstanding Placement Record",
    year: "2024",
    body: "Healthcare Education Excellence Forum",
  },
];

const AwardsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-800 mb-4">
            Recognition
          </span>
          <h2 className="section-title mt-4">Awards & Achievements</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Celebrating our commitment to excellence in healthcare education
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="card-institution p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-medium text-primary">{achievement.year}</span>
                  <h3 className="font-semibold text-foreground mt-1 mb-1">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;