import { Facebook, Youtube, Twitter, Linkedin, Instagram, ExternalLink } from "lucide-react";

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
    <footer className="py-8 lg:py-12 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 py-4 lg:py-6">
          {/* About */}
          <div>
            <h3 className="font-display text-xl font-bold mb-3 text-primary" style={{ color: 'maroon' }}>
              I.T.S Institute of Health & Allied Sciences
            </h3>
            <p className="text-foreground text-sm mb-6 leading-relaxed">
              A premier institution for healthcare education, affiliated with Atal Bihari Vajpayee Medical University, Lucknow.
            </p>
            <div className="flex gap-3">
              {[Facebook, Youtube, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 text-primary transition-colors duration-200"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary" style={{ color: 'maroon' }}>Quick Links</h4>
            <ul className="space-y-1.5 text-sm text-foreground">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary" style={{ color: 'maroon' }}>Resources</h4>
            <ul className="space-y-1.5 text-sm text-foreground">
              {resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary" style={{ color: 'maroon' }}>Academics</h4>
            <ul className="space-y-1.5 text-sm text-foreground">
              {academics.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Affiliations Bar */}
        <div className="border-t border-primary/20 mt-8 pt-5" style={{ color: 'maroon' }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground">
              <span className="flex items-center gap-2">
                <ExternalLink size={14} className="text-primary" />
                Affiliated to ABVMU, Lucknow
              </span>
              <span className="hidden sm:inline">•</span>
              <span>NAAC Accredited Institute</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="border-t border-primary/20 mt-8 pt-5 text-center text-sm text-foreground" >
          <p>© {new Date().getFullYear()} I.T.S Institute of Health & Allied Sciences. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-6">
            <a href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-200">Terms of Use</a>
            <a href="#" className="hover:text-primary transition-colors duration-200">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;