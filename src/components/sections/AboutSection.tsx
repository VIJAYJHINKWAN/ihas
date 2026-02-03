import { Target, Eye, Award, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">About the Institute</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            I.T.S Institute of Health & Allied Sciences (IHAS) is a premier institution under I.T.S – The Education Group, dedicated to excellence in healthcare education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Established with a vision to produce competent healthcare professionals, IHAS offers comprehensive programs in Physiotherapy and Biotechnology. Affiliated with Atal Bihari Vajpayee Medical University, Lucknow, and accredited with NAAC Grade "B", we maintain the highest standards of academic excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Located at Murad Nagar, Ghaziabad, our campus provides state-of-the-art infrastructure, including modern laboratories, a well-stocked library, and clinical training facilities. Our dedicated faculty, comprising experienced academicians and industry experts, ensures holistic development of students.
            </p>
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Safe Campus</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">NAAC Accredited</span>
              </div>
            </div>
          </div>

          {/* Right Column - Vision & Mission Cards */}
          <div className="space-y-4">
            <div className="card-institution p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground text-sm">
                    To be a globally recognized center of excellence in health sciences education, producing competent professionals who contribute to healthcare advancement and community well-being.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-institution p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground text-sm">
                    To provide quality education through innovative teaching methodologies, hands-on clinical training, and research opportunities that prepare students for successful careers in healthcare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why ITS Grid remains commented out – unchanged */}
        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Expert Faculty", desc: "Experienced academicians and industry practitioners" },
            { 
      title: "Why Choose Us – I.T.S", 
      desc: "Quality education with strong academic and clinical support" 
    },
            { title: "Industry Connect", desc: "Strong tie-ups with leading hospitals" },
            { title: "Holistic Development", desc: "Focus on academics, sports, and cultural activities" },
          ].map((item, index) => (
            <div key={index} className="p-5 bg-background-subtle rounded-lg border border-border-light hover:border-primary/30 transition-colors">
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;