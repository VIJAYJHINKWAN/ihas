import { Facebook, Youtube, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "#" },
  { label: "Admissions", href: "#" },
  { label: "Courses", href: "#" },
  { label: "Faculty", href: "#" },
  { label: "Infrastructure", href: "#" },
  { label: "Placements", href: "#" },
];

const resources = [
  { label: "Student Portal", href: "#" },
  { label: "Fee Payment", href: "#" },
  { label: "Downloads", href: "#" },
  { label: "Alumni Network", href: "#" },
  { label: "Career Opportunities", href: "#" },
];

const academics = [
  { label: "BPT Program", href: "#" },
  { label: "MPT Program", href: "#" },
  { label: "Syllabus", href: "#" },
  { label: "Academic Calendar", href: "#" },
];



const Footer = () => {
  return (
    <footer className="bg-foreground text-card">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-heading font-bold mb-1">I.T.S Institute of Health & Allied Sciences</h3>
              
            </div>
            <p className="text-sm text-card/80 mb-4">
              A premier institution for healthcare education, affiliated with Atal Bihari Vajpayee Medical University, Lucknow.
            </p>
            <div className="flex gap-3">
              {[Facebook, Youtube, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-card/70 hover:text-card transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
         
          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-card/70 hover:text-card transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
           <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Academics</h4>
            <ul className="space-y-2">
              {academics.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-card/70 hover:text-card transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Affiliations Bar */}
      <div className="border-t border-card/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-card/60">
            <span className="flex items-center gap-2">
              <ExternalLink size={12} />
              Affiliated to ABVMU, Lucknow
            </span>
            <span className="hidden sm:inline">•</span>
            <span>NAAC Accredited Institute</span>
            <span className="hidden sm:inline">•</span>
              
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-card/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-card/50">
            <p>© 2026 I.T.S Institute of Health & Allied Sciences. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-card transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-card transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-card transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
