import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import itsLogo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
  Landmark,
  GraduationCap,
  Building2,
  Briefcase,
  Users,
  BookOpen,
  Award,
  CalendarCheck,
  ClipboardList,
  Projector,
  FileText,
  PhoneCall,
  DollarSign,
  Percent,
  UsersRound,
  Stethoscope,
  Home,
  Scroll,
  Newspaper as NewspaperIcon,
  Activity,
  Theater,
  Trophy as TrophyIcon,
  Handshake as HandshakeIcon,
  MessageSquare,
  Target,
  MapPin,
  ChevronDown,
  Menu,
  X,
  IndianRupee,
} from "lucide-react";

/* -------------------- MAIN NAV -------------------- */
const navigationItems = [
  { label: "About Us", href: "#" },
  { label: "Academics", href: "#" },
  { label: "Admissions", href: "#" },
  { label: "Faculty", href: "#" },
  { label: "Infrastructure", href: "#" },
  { label: "Research", href: "#" },
  { label: "Student Life", href: "#" },
  { label: "Alumni", href: "#" },
  { label: "Career & Placement", href: "#" },
  { label: "NAAC", href: "#" },
  { label: "Our Partner", href: "#" },
];

/* -------------------- MEGA MENU DATA WITH PERFECT ICONS -------------------- */
const megaMenus = {
  "About Us": {
    icon: Landmark,
    leftLabel: "About Us",
    sections: [
      {
        title: "College Overview",
        items: [
          { label: "About College", href: "#", icon: Landmark },
          { label: "Vision & Mission", href: "#", icon: Target },
          { label: "Campus Map", href: "#", icon: MapPin },
        ],
      },
      {
        title: "Our Administration",
        items: [{ label: "Our Administration", href: "#", icon: UsersRound }],
      },
      {
        title: "Message",
        items: [
          { label: "Chairman Message", href: "#", icon: MessageSquare },
          { label: "Vice-Chairman Message", href: "#", icon: MessageSquare },
          { label: "Secretary Message", href: "#", icon: MessageSquare },
          { label: "Director-PR Message", href: "#", icon: MessageSquare },
          {
            label: "Principal Physiotherapy Message",
            href: "#",
            icon: MessageSquare,
          },
        ],
      },
    ],
  },

  Academics: {
    icon: GraduationCap,
    leftLabel: "Academics Process",
    columns: [
      {
        items: [
          { label: "Academic Calendar", href: "#", icon: CalendarCheck },
          { label: "Syllabus", href: "#", icon: BookOpen },
        ],
      },
      {
        items: [
          { label: "Sanctioned Intake", href: "#", icon: ClipboardList },
          { label: "Workshops", href: "#", icon: Projector },
        ],
      },
    ],
  },
  Admissions: {
    icon: GraduationCap,
    leftLabel: "Admission Process",
    columns: [
      {
        items: [
          { label: "Programmes", href: "#", icon: BookOpen },
          { label: "Admission Brochure", href: "#", icon: FileText },
        ],
      },
      {
        items: [
          { label: "Inquiry Form", href: "#", icon: PhoneCall },
          { label: "Fee Structure", href: "#", icon: IndianRupee },
          { label: "Scholarships", href: "#", icon: Award },
        ],
      },
    ],
  },
  Faculty: {
    icon: Briefcase,
    leftLabel: "Faculty Details",
    left: [{ label: "Faculty Details", href: "#", icon: UsersRound }],
  },
  Infrastructure: {
    icon: Building2,
    leftLabel: "Our Facilities",
    columns: [
      {
        title: "Physiotherapy Labs",
        items: [
          { label: "Exercise Therapy Lab", href: "#", icon: Activity },
          { label: "Electro Therapy Lab", href: "#", icon: Activity },
          {
            label: "Bio-mechanics & Kinesiology Lab",
            href: "#",
            icon: Activity,
          },
          {
            label: "Physiotherapy in Orthopedics Lab",
            href: "#",
            icon: Stethoscope,
          },
          {
            label: "Physiotherapy in Neurology Lab",
            href: "#",
            icon: Stethoscope,
          },
          {
            label: "Physiotherapy in Cardiopulmonary Lab",
            href: "#",
            icon: Stethoscope,
          },
          { label: "Physiotherapy in Sports Lab", href: "#", icon: TrophyIcon },
        ],
      },
      {
        title: "General Structure",
        items: [
          { label: "Lecture Halls", href: "#", icon: Projector },
          { label: "Library", href: "#", icon: BookOpen },
          { label: "Sports Complex", href: "#", icon: TrophyIcon },
          { label: "Auditorium", href: "#", icon: Theater },
          { label: "Gymnasium", href: "#", icon: Activity },
          { label: "Medical Facilities", href: "#", icon: Stethoscope },
          { label: "I.T Labs", href: "#", icon: Building2 },
          { label: "Canteen", href: "#", icon: Home },
          { label: "Hostel", href: "#", icon: Home },
        ],
      },
    ],
  },
  Research: {
    icon: BookOpen,
    leftLabel: "Research",
    left: [
      { label: "Patent", href: "#", icon: Scroll },
      { label: "Faculty Publications", href: "#", icon: NewspaperIcon },
      { label: "Students Publications", href: "#", icon: FileText },
      { label: "FDP", href: "#", icon: GraduationCap },
    ],
  },
  "Student Life": {
    icon: Users,
    leftLabel: "Students",
    left: [
      { label: "Health Events", href: "#", icon: Activity },
      { label: "Cultural Events", href: "#", icon: Theater },
      { label: "Sports Events", href: "#", icon: TrophyIcon },
    ],
  },
  Alumni: {
    icon: Users,
    leftLabel: "Alumni",
    left: [
      { label: "Alumni Meet", href: "#", icon: HandshakeIcon },
      { label: "Placement", href: "#", icon: Briefcase },
      { label: "Testimonial", href: "#", icon: MessageSquare },
    ],
  },

  "Career & Placement": {
    icon: Briefcase,
    leftLabel: "Career Development",
    left: [
      { label: "Placements", href: "#", icon: TrophyIcon },
      { label: "Placement Partners", href: "#", icon: TrophyIcon },
    ],
  },

  "Our Partner": {
    icon: Users,
    leftLabel: "Our Partners",
    left: [
      { label: "BLK Superspeciality Hospital", href: "#", icon: Building2 },
      { label: "EXL (Go Next Now)", href: "#", icon: Building2 },
      { label: "Fortis Exorts", href: "#", icon: Building2 },
      { label: "Genpact", href: "#", icon: Building2 },
      { label: "VLCC", href: "#", icon: Building2 },
      { label: "QI,Spine Clinic", href: "#", icon: Stethoscope },
      { label: "Yashoda Superspeciality Hospital", href: "#", icon: Building2 },
      { label: "Apollo", href: "#", icon: Building2 },
      { label: "United Health Group", href: "#", icon: Building2 },
      { label: "MAX", href: "#", icon: Building2 },
    ],
  },
};

/* -------------------- HEADER COMPONENT -------------------- */
const Header = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const openMenu = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  useEffect(() => {
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  const isCardMenu = activeMenu !== "About Us";
  const hasNaacLogo = false;

  return (
    <header className="bg-card shadow-md sticky top-0 z-50 w-full">
      {/* LOGO & TOP BAR */}
      <div className="w-full">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-4" style={{ marginLeft: 15 }}>
            <img
              src={itsLogo}
              alt="I.T.S Institute Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <div className="flex flex-col relative pl-5">
              <span className="absolute left-0 top-2 h-9 w-[3px] rounded-full bg-[#7A1F1F]" />
              <h1 className="text-xl md:text-2xl lg:text-[30px] font-heading font-extrabold leading-snug tracking-tight text-[#7A1F1F]">
                <span className="tracking-widest font-semibold">I.T.S</span>{" "}
                Institute of Health & Allied Sciences
              </h1>
              <span className="mt-1 text-sm md:text-base font-medium text-gray-600">
                Affiliated to Atal Bihari Vajpayee Medical University, Lucknow
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-gold-light rounded-lg border border-gold/20">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                {hasNaacLogo ? (
                  <img
                    src=""
                    alt="NAAC Accreditation"
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  <span className="text-gold-foreground font-bold text-sm">
                    NAAC
                  </span>
                )}
              </div>
              <div className="text-center">
                <span className="text-xs text-muted-foreground block">
                  Accredited
                </span>
                <span className="text-sm font-semibold text-foreground block -mt-1">
                  Institute
                </span>
              </div>
            </div>
            <Button
              asChild
              className="hidden md:flex bg-[#800000] hover:bg-[#660000] text-white font-semibold px-6 py-2.5 rounded-md shadow-md"
            >
              <a href="#virtual-tour" className="flex items-center gap-2">
                Virtual Tour
              </a>
            </Button>

            <Button
              variant="primary"
              size="lg"
              className="font-semibold"
              style={{ marginRight: 20 }}
            >
              Apply Now
            </Button>
          </div>

          <button
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <nav className="hidden lg:block bg-primary">
        <div className="max-w-[1800px] mx-auto px-4">
          <div className="flex justify-between items-center whitespace-nowrap overflow-hidden">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() =>
                  megaMenus[item.label] && openMenu(item.label)
                }
                onMouseLeave={closeMenu}
                className="relative"
              >
                <Link
                  to={item.href}
                  className="px-4 py-4 flex items-center gap-1 text-white uppercase text-[13px] font-semibold tracking-wide hover:bg-primary/80 transition-colors whitespace-nowrap"
                >
                  {item.label}
                  {megaMenus[item.label] && (
                    <ChevronDown size={16} className="text-white" />
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ELITE PREMIUM MEGA MENU */}
        <AnimatePresence>
          {activeMenu && megaMenus[activeMenu] && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 bg-white shadow-2xl border-t-4 border-primary"
              onMouseEnter={() => openMenu(activeMenu)}
              onMouseLeave={closeMenu}
            >
              <div className="container mx-auto px-8 py-6">
                <div className="flex items-center gap-3 mb-5">
                  {megaMenus[activeMenu].icon &&
                    (() => {
                      const Icon = megaMenus[activeMenu].icon;
                      return <Icon className="w-8 h-8 text-primary" />;
                    })()}
                  <h3 className="text-xl font-extrabold text-primary uppercase tracking-wider">
                    {megaMenus[activeMenu].leftLabel || activeMenu}
                  </h3>
                </div>

                {/* CARD MENUS */}
                {isCardMenu && (
                  <>
                    {/* ACADEMICS & ADMISSIONS */}
                    {(activeMenu === "Academics" ||
                      activeMenu === "Admissions") && (
                      <div className="max-w-6xl mx-auto relative">
                        <div className="absolute left-1/2 top-8 bottom-0 w-px bg-gray-300 -translate-x-1/2"></div>
                        <div className="grid grid-cols-2 gap-10">
                          {(megaMenus[activeMenu] as any).columns.map(
                            (column: any, colIndex: number) => (
                              <div key={colIndex} className="space-y-4">
                                {column.title && (
                                  <h4 className="text-base font-bold text-primary uppercase tracking-wide text-center pb-2 border-b border-primary/30">
                                    {column.title}
                                  </h4>
                                )}
                                <div className="grid grid-cols-1 gap-2.5">
                                  {column.items.map((item: any) => {
                                    const Icon = item.icon;
                                    return (
                                      <div
                                        key={item.label}
                                        className="bg-gray-50 hover:bg-primary rounded-md p-2.5 transition-all duration-300 group shadow-sm border border-gray-200 hover:shadow"
                                      >
                                        <Link
                                          to={item.href}
                                          className="flex flex-col items-center text-center"
                                        >
                                          <div className="p-1.5 bg-white rounded-full shadow-sm group-hover:bg-white/20 mb-1">
                                            <Icon className="w-4 h-4 text-primary group-hover:text-white" />
                                          </div>
                                          <span className="text-sm font-medium leading-tight text-gray-700 group-hover:text-white">
                                            {item.label}
                                          </span>
                                        </Link>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    )}

                    {/* INFRASTRUCTURE */}
                    {activeMenu === "Infrastructure" && (
                      <div
                        className="mx-auto relative"
                        style={{ width: "60vw" }}
                      >
                        <div className="absolute left-1/2 top-12 bottom-2 w-px bg-gray-300 -translate-x-1/2"></div>
                        <div className="grid grid-cols-4 gap-8">
                          <div className="col-span-2 space-y-4 pr-6">
                            <h4 className="text-base font-bold text-primary uppercase tracking-wide text-center pb-2 border-b border-primary/30">
                              Physiotherapy Labs
                            </h4>
                            <div className="grid grid-cols-2 gap-2.5">
                              {megaMenus["Infrastructure"].columns[0].items.map(
                                (item: any) => {
                                  const Icon = item.icon;
                                  return (
                                    <div
                                      key={item.label}
                                      className="bg-gray-50 hover:bg-primary rounded-md p-2.5 transition-all group shadow-sm border"
                                    >
                                      <Link
                                        to={item.href}
                                        className="flex flex-col items-center text-center"
                                      >
                                        <div className="p-1.5 bg-white rounded-full shadow-sm group-hover:bg-white/20 mb-1">
                                          <Icon className="w-4 h-4 text-primary group-hover:text-white" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-white">
                                          {item.label}
                                        </span>
                                      </Link>
                                    </div>
                                  );
                                },
                              )}
                            </div>
                          </div>

                          <div className="col-span-2 space-y-4 pl-6">
                            <h4 className="text-base font-bold text-primary uppercase tracking-wide text-center pb-2 border-b border-primary/30">
                              General Structure
                            </h4>
                            <div className="grid grid-cols-2 gap-2.5">
                              {megaMenus["Infrastructure"].columns[1].items.map(
                                (item: any) => {
                                  const Icon = item.icon;
                                  return (
                                    <div
                                      key={item.label}
                                      className="bg-gray-50 hover:bg-primary rounded-md p-2.5 transition-all group shadow-sm border"
                                    >
                                      <Link
                                        to={item.href}
                                        className="flex flex-col items-center text-center"
                                      >
                                        <div className="p-1.5 bg-white rounded-full shadow-sm group-hover:bg-white/20 mb-1">
                                          <Icon className="w-4 h-4 text-primary group-hover:text-white" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-white">
                                          {item.label}
                                        </span>
                                      </Link>
                                    </div>
                                  );
                                },
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* RESEARCH */}
                    {activeMenu === "Research" && (
                      <div className="max-w-4xl mx-auto relative">
                        <div className="absolute left-1/2 top-6 bottom-2 w-px bg-gray-300 -translate-x-1/2"></div>
                        <div className="grid grid-cols-2 gap-10">
                          <div className="space-y-3 pr-6">
                            {megaMenus["Research"].left
                              .slice(0, 2)
                              .map((item: any) => {
                                const Icon = item.icon;
                                return (
                                  <div
                                    key={item.label}
                                    className="bg-gray-50 hover:bg-primary rounded-md p-3 transition-all group shadow-sm border"
                                  >
                                    <Link
                                      to={item.href}
                                      className="flex items-center gap-3"
                                    >
                                      <div className="p-2 bg-white rounded-full shadow-sm group-hover:bg-white/20">
                                        <Icon className="w-5 h-5 text-primary group-hover:text-white" />
                                      </div>
                                      <span className="text-sm font-medium text-gray-700 group-hover:text-white">
                                        {item.label}
                                      </span>
                                    </Link>
                                  </div>
                                );
                              })}
                          </div>

                          <div className="space-y-3 pl-6">
                            {megaMenus["Research"].left
                              .slice(2, 4)
                              .map((item: any) => {
                                const Icon = item.icon;
                                return (
                                  <div
                                    key={item.label}
                                    className="bg-gray-50 hover:bg-primary rounded-md p-3 transition-all group shadow-sm border"
                                  >
                                    <Link
                                      to={item.href}
                                      className="flex items-center gap-3"
                                    >
                                      <div className="p-2 bg-white rounded-full shadow-sm group-hover:bg-white/20">
                                        <Icon className="w-5 h-5 text-primary group-hover:text-white" />
                                      </div>
                                      <span className="text-sm font-medium text-gray-700 group-hover:text-white">
                                        {item.label}
                                      </span>
                                    </Link>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STUDENT LIFE */}
                    {activeMenu === "Student Life" && (
                      <div className="max-w-sm ml-2">
                        <div className="space-y-[6px]">
                          {megaMenus["Student Life"].left.map((item: any) => {
                            const Icon = item.icon;
                            return (
                              <div
                                key={item.label}
                                className="bg-gray-50 hover:bg-primary rounded-md px-3 py-1.5 transition-all group shadow-sm border"
                              >
                                <Link
                                  to={item.href}
                                  className="flex items-center gap-2"
                                >
                                  <div className="p-1 bg-white rounded-full shadow-sm group-hover:bg-white/20">
                                    <Icon className="w-4.5 h-4.5 text-primary group-hover:text-white" />
                                  </div>
                                  <span className="text-sm font-medium text-gray-700 group-hover:text-white leading-tight">
                                    {item.label}
                                  </span>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* ALUMNI */}
                    {activeMenu === "Alumni" && (
                      <div className="max-w-4xl mx-auto relative">
                        <div className="absolute left-1/3 top-4 bottom-2 w-px bg-gray-300"></div>
                        <div className="absolute left-2/3 top-4 bottom-2 w-px bg-gray-300"></div>
                        <div className="grid grid-cols-3 gap-8 text-center">
                          {megaMenus["Alumni"].left.map(
                            (item: any, i: number) => {
                              const Icon = item.icon;
                              return (
                                <div
                                  key={item.label}
                                  className={`${i === 0 ? "pr-6" : i === 1 ? "px-6" : "pl-6"}`}
                                >
                                  <div className="bg-gray-50 hover:bg-primary rounded-md p-3 transition-all group shadow-sm border">
                                    <Link
                                      to={item.href}
                                      className="flex flex-col items-center gap-2"
                                    >
                                      <div className="p-2 bg-white rounded-full shadow-sm group-hover:bg-white/20">
                                        <Icon className="w-5 h-5 text-primary group-hover:text-white" />
                                      </div>
                                      <span className="text-sm font-medium text-gray-700 group-hover:text-white">
                                        {item.label}
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    )}

                    {/* CAREER & PLACEMENT - NOW WITH VERTICAL DIVIDER */}
                    {activeMenu === "Career & Placement" && (
                      <div className="max-w-4xl mx-auto relative">
                        <div className="absolute left-1/2 top-6 bottom-2 w-px bg-gray-300 -translate-x-1/2"></div>
                        <div className="grid grid-cols-2 gap-10">
                          <div className="space-y-4 pr-8">
                            {megaMenus["Career & Placement"].left
                              .slice(0, 1)
                              .map((item: any) => {
                                const Icon = item.icon;
                                return (
                                  <div
                                    key={item.label}
                                    className="bg-gray-50 hover:bg-primary rounded-md p-4 transition-all group shadow-sm border"
                                  >
                                    <Link
                                      to={item.href}
                                      className="flex items-center gap-4"
                                    >
                                      <div className="p-3 bg-white rounded-full shadow-sm group-hover:bg-white/20">
                                        <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                                      </div>
                                      <span className="text-sm font-medium text-gray-700 group-hover:text-white">
                                        {item.label}
                                      </span>
                                    </Link>
                                  </div>
                                );
                              })}
                          </div>
                          <div className="space-y-4 pl-8">
                            {megaMenus["Career & Placement"].left
                              .slice(1, 2)
                              .map((item: any) => {
                                const Icon = item.icon;
                                return (
                                  <div
                                    key={item.label}
                                    className="bg-gray-50 hover:bg-primary rounded-md p-4 transition-all group shadow-sm border"
                                  >
                                    <Link
                                      to={item.href}
                                      className="flex items-center gap-4"
                                    >
                                      <div className="p-3 bg-white rounded-full shadow-sm group-hover:bg-white/20">
                                        <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                                      </div>
                                      <span className="text-sm font-medium text-gray-700 group-hover:text-white">
                                        {item.label}
                                      </span>
                                    </Link>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* OUR PARTNER */}
                    {activeMenu === "Our Partner" && (
                      <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-2 gap-6">
                          {megaMenus["Our Partner"].left.map((item: any) => {
                            const Icon = item.icon;
                            return (
                              <div
                                key={item.label}
                                className="bg-gray-50 hover:bg-primary rounded-md px-4 py-3 transition-all duration-300 group shadow-sm border"
                              >
                                <Link
                                  to={item.href}
                                  className="flex items-center gap-3"
                                >
                                  <div className="p-2 bg-white rounded-full shadow-sm group-hover:bg-white/20">
                                    <Icon className="w-5 h-5 text-primary group-hover:text-white" />
                                  </div>
                                  <span className="text-sm font-medium text-gray-700 group-hover:text-white">
                                    {item.label}
                                  </span>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* DEFAULT CARD MENU FALLBACK */}
                    {![
                      "Academics",
                      "Admissions",
                      "Infrastructure",
                      "Research",
                      "Student Life",
                      "Alumni",
                      "Career & Placement",
                      "Our Partner",
                    ].includes(activeMenu!) && (
                      <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {(megaMenus[activeMenu] as any).left.map(
                          (item: any) => {
                            const Icon = item.icon;
                            return (
                              <div
                                key={item.label}
                                className="bg-gray-50 hover:bg-primary rounded-md p-3 transition-all group shadow-sm border"
                              >
                                <Link
                                  to={item.href}
                                  className="flex flex-col items-center text-center"
                                >
                                  <div className="p-2 bg-white rounded-full shadow-sm group-hover:bg-white/20 mb-2">
                                    <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                                  </div>
                                  <span className="text-sm font-medium text-gray-700 group-hover:text-white">
                                    {item.label}
                                  </span>
                                </Link>
                              </div>
                            );
                          },
                        )}
                      </div>
                    )}
                  </>
                )}

                {/* ABOUT US MENU - 3 COLUMN SECTIONS */}
                {!isCardMenu && "sections" in megaMenus[activeMenu] && (
                  <div className="grid grid-cols-3 gap-12 max-w-6xl mx-auto relative">
                    <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-300"></div>
                    <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-300"></div>

                    {(megaMenus[activeMenu] as any).sections.map(
                      (section: any, index: number) => (
                        <div
                          key={section.title}
                          className={`space-y-4 ${index === 0 ? "pr-8" : index === 1 ? "px-8" : "pl-8"}`}
                        >
                          <h4 className="text-xl font-extrabold text-primary uppercase tracking-wider pb-2 border-b-2 border-primary/30">
                            {section.title}
                          </h4>
                          <div className="space-y-2">
                            {section.items.map((item: any) => {
                              const Icon = item.icon;
                              return (
                                <div
                                  key={item.label}
                                  className="bg-gray-50/80 rounded-lg px-4 py-3 hover:bg-primary hover:text-white transition-all duration-300 group flex items-center gap-4 shadow-sm border border-gray-100"
                                >
                                  <div className="p-2 bg-white rounded-full shadow group-hover:bg-white/20 flex-shrink-0">
                                    <Icon className="w-5 h-5 text-primary group-hover:text-white" />
                                  </div>
                                  <span className="text-sm font-medium">
                                    {item.label}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
