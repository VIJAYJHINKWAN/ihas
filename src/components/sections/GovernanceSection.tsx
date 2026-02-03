import { Shield, Users, FileCheck, Scale, HeartHandshake, GraduationCap } from "lucide-react";

const committees = [
  {
    name: "IQAC",
    fullName: "Internal Quality Assurance Cell",
    icon: Shield,
    description: "Ensures quality standards in academic and administrative processes",
  },
  {
    name: "Anti-Ragging Committee",
    fullName: "Student Safety & Anti-Ragging",
    icon: HeartHandshake,
    description: "Maintains a ragging-free environment on campus",
  },
  {
    name: "Gender Equality Committee",
    fullName: "Women's Cell & Gender Equality",
    icon: Users,
    description: "Promotes gender equality and addresses related concerns",
  },
  {
    name: "Research Committee",
    fullName: "Research & Ethics Committee",
    icon: FileCheck,
    description: "Oversees research activities and ethical compliance",
  },
  {
    name: "Grievance Redressal",
    fullName: "Student Grievance & Redressal",
    icon: Scale,
    description: "Addresses student concerns and complaints effectively",
  },
  {
    name: "Academic Committee",
    fullName: "Curriculum & Academic Committee",
    icon: GraduationCap,
    description: "Reviews and enhances academic curriculum regularly",
  },
];

const GovernanceSection = () => {
  return (
    <section className="py-16 section-amber">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Governance & Committees</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Transparent governance ensuring quality education and student welfare
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {committees.map((committee, index) => (
            <div key={index} className="card-institution p-6">
              <div className="flex items-center gap-3 mb-3">
                <committee.icon className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-foreground">{committee.name}</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{committee.fullName}</p>
              <p className="text-sm text-muted-foreground">{committee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;
