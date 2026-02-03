import { Bell, ChevronRight } from "lucide-react";

const announcements = [
  "Guest Lecture by Dr. V.P. Gupta on Neurological Rehabilitation – Jan 15, 2026",
  "Academic Collaboration MoU signed with Max Healthcare Group",
  "Faculty Achievement: Dr. Priya Sharma receives Best Research Paper Award",
  "Ministry of Health delegation visits campus for infrastructure review",
  "Admission Open for BPT & MPT 2026-27 Session – Apply Now",
];

const AnnouncementBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2.5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 shrink-0 bg-primary-foreground/10 px-3 py-1 rounded">
            <Bell size={14} />
            <span className="text-sm font-semibold uppercase tracking-wide">Announcements</span>
          </div>
          <div className="announcement-ticker flex-1">
            <div className="announcement-ticker-content flex items-center gap-8">
              {announcements.map((announcement, index) => (
                <span key={index} className="flex items-center gap-2 text-sm whitespace-nowrap">
                  <ChevronRight size={14} className="text-primary-foreground/60" />
                  {announcement}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {announcements.map((announcement, index) => (
                <span key={`dup-${index}`} className="flex items-center gap-2 text-sm whitespace-nowrap">
                  <ChevronRight size={14} className="text-primary-foreground/60" />
                  {announcement}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
