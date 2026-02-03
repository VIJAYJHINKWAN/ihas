import { BookOpen, FileText, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const researchAreas = [
  "Neurological Rehabilitation",
  "Sports Medicine",
  "Community Health",
  "Geriatric Care",
  "Pediatric Physiotherapy",
];

const publications = [
  {
    title: "Efficacy of Manual Therapy in Chronic Low Back Pain",
    authors: "Dr. Amit Sharma, Dr. Priya Singh",
    journal: "Indian Journal of Physiotherapy",
    year: "2025",
  },
  {
    title: "Gene Expression Analysis in Cancer Biomarkers",
    authors: "Dr. Neha Gupta, Dr. Rajesh Kumar",
    journal: "Journal of Biotechnology Research",
    year: "2025",
  },
  {
    title: "Telerehabilitation in Post-COVID Recovery",
    authors: "Dr. Vikram Mehta, Dr. Anjali Verma",
    journal: "International Journal of Rehabilitation",
    year: "2024",
  },
];

const ResearchSection = () => {
  return (
    <section className="py-16 section-amber">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-800 mb-4">
            Innovation & Discovery
          </span>
          <h2 className="section-title mt-4">Research & Publications</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Contributing to healthcare advancement through quality research
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Research Areas */}
          <div className="p-6 bg-card rounded-xl border border-border-light border-l-4 border-primary">
            <BookOpen className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-4">Focus Areas</h3>
            <div className="flex flex-wrap gap-2">
              {researchAreas.map((area, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary border border-primary/20"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="p-6 bg-card rounded-xl border border-border-light border-l-4 border-primary">
            <Award className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-4">Research Output</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border-light">
                <span className="text-muted-foreground">Publications (2024-25)</span>
                <span className="font-bold text-foreground">45+</span>
              </div>
             
              <div className="flex justify-between items-center py-2 border-b border-border-light">
                <span className="text-muted-foreground">Patents Filed</span>
                <span className="font-bold text-foreground">3</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Industry Collaborations</span>
                <span className="font-bold text-foreground">8</span>
              </div>
            </div>
          </div>

          {/* Collaborations (commented out - unchanged) */}
          {/* <div className="card-plum p-6">
            <Users className="w-10 h-10 text-plum mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-4">Collaborations</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• ABVMU Research Projects</li>
              <li>• ICMR Sponsored Studies</li>
              <li>• Industry-Academia Partnerships</li>
              <li>• International Exchange Programs</li>
              <li>• Multi-center Clinical Trials</li>
            </ul>
          </div> */}
        </div>

        {/* Recent Publications */}
        <div className="mt-8 card-institution p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-heading font-semibold text-foreground">Recent Publications</h3>
            <Button variant="primary" size="sm">View All</Button>
          </div>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div key={index} className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-medium text-foreground mb-1">{pub.title}</h4>
                <p className="text-sm text-muted-foreground">{pub.authors}</p>
                <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                  <span>{pub.journal}</span>
                  <span>•</span>
                  <span>{pub.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;