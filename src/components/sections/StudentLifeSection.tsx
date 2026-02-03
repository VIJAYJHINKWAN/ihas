import { Users, Calendar, Heart, Music, BookOpen, Trophy } from "lucide-react";

const activities = [
  {
    icon: Heart,
    title: "Health Camps",
    description: "Regular community health camps and awareness programs",
  },
  {
    icon: Music,
    title: "Cultural Events",
    description: "Annual cultural fest and inter-college competitions",
  },
  {
    icon: Trophy,
    title: "Sports Events",
    description: "Inter-departmental and inter-college sports tournaments",
  },
  {
    icon: BookOpen,
    title: "Guest Lectures",
    description: "Regular lectures by industry experts and academicians",
  },
  {
    icon: Calendar,
    title: "Workshops",
    description: "Skill development and hands-on training workshops",
  },
];

const StudentLifeSection = () => {
  return (
    <section className="py-16 section-amber">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Student Life & Activities</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A vibrant campus experience beyond academics
          </p>
        </div>

        {/* Custom creative layout for 5 cards */}
        <div className="grid lg:grid-cols-6 gap-6">
          {/* Top row: 3 cards, each taking 2 columns */}
          <div className="lg:col-span-2">
            <ActivityCard activity={activities[0]} />
          </div>
          <div className="lg:col-span-2">
            <ActivityCard activity={activities[1]} />
          </div>
          <div className="lg:col-span-2">
            <ActivityCard activity={activities[2]} />
          </div>

          {/* Bottom row: 2 larger cards, each taking 3 columns */}
          <div className="lg:col-span-3">
            <ActivityCard activity={activities[3]} featured />
          </div>
          <div className="lg:col-span-3">
            <ActivityCard activity={activities[4]} featured />
          </div>
        </div>

        {/* Fallback for mobile/small screens */}
        <div className="grid sm:grid-cols-2 gap-6 lg:hidden">
          {activities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Reusable card component
const ActivityCard = ({ activity, featured = false }) => {
  return (
    <div
      className={`card-institution p-6 md:p-8 group hover:border-primary/30 transition-all duration-300 h-full flex flex-col ${
        featured ? "lg:p-10" : ""
      }`}
    >
      <div
        className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
      >
        <activity.icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="font-semibold text-foreground mb-3 text-lg">
        {activity.title}
      </h3>
      <p className="text-sm md:text-base text-muted-foreground flex-1">
        {activity.description}
      </p>
    </div>
  );
};

export default StudentLifeSection;