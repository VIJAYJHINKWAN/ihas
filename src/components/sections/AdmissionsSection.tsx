import { FileText, Calendar, CreditCard, GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: FileText,
    title: "Online Application",
    description: "Submit your application form with required documents",
  },
  {
    icon: Calendar,
    title: "Entrance Exam",
    description: "Appear for the entrance examination (for eligible candidates)",
  },
  {
    icon: GraduationCap,
    title: "Counseling",
    description: "Attend counseling session for seat allocation",
  },
  {
    icon: CreditCard,
    title: "Fee Payment",
    description: "Complete fee payment to confirm admission",
  },
];

const eligibilityBPT = [
  "10+2 with Physics, Chemistry, and Biology with minimum 50% marks",
  "Age limit as per university and regulatory body norms",
  "Qualifying entrance examination (if applicable)",
  "Medical fitness certificate",
];

const eligibilityMPT = [
  "Bachelor of Physiotherapy (BPT) from a recognized institution",
  "Minimum qualifying marks as per university norms",
  "Completion of compulsory internship",
  "Valid entrance examination score (if applicable)",
];

const AdmissionsSection = () => {
  return (
    <section className="py-16 section-amber">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-800 mb-4">
            Admissions 2026-27
          </span>
          <h2 className="section-title mt-4">Join Our Academic Community</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Begin your journey towards a rewarding career in healthcare
          </p>
        </div>

        {/* Admission Steps */}
        {/* (remains commented out - unchanged) */}

        {/* Eligibility & CTA */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Eligibility */}
          <div className="card-institution p-8 space-y-6">
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Eligibility Criteria
            </h3>

            <div>
              <h4 className="font-semibold text-foreground mb-3">
                Bachelor of Physiotherapy (BPT)
              </h4>
              <ul className="space-y-2">
                {eligibilityBPT.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">
                Master of Physiotherapy (MPT)
              </h4>
              <ul className="space-y-2">
                {eligibilityMPT.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="card-institution p-8 bg-gradient-to-br from-amber-light to-gold-light flex flex-col">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
              Apply Now
            </h3>

            <p className="text-muted-foreground mb-6">
              Admissions are now open for the 2026–27 academic session. Limited seats are available for the Bachelor and Master of Physiotherapy programs.
            </p>

            <div className="space-y-3 mb-6">
              <Button variant="primary" className="w-full gap-2">
                Apply for Physiotherapy <ArrowRight size={16} className="text-primary-foreground" />
              </Button>
              <Button variant="outline" className="w-full gap-2">
                Download Prospectus <ArrowRight size={16} className="text-primary" />
              </Button>
            </div>

            {/* Added Content (Balanced Footer) */}
            <div className="mt-auto pt-5 border-t border-border-light text-sm text-muted-foreground space-y-2">
              <p className="font-medium text-foreground">
                Need guidance before applying?
              </p>
              <p>• Admission counseling support available</p>
              <p>• Transparent admission process</p>
              <p>• Assistance at every step</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;