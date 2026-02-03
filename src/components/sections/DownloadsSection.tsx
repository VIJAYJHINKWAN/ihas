import { Download, FileText, Book, Calendar, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

const downloads = [
  { icon: FileText, name: "Admission Prospectus 2026-27", size: "4.2 MB" },
  { icon: Book, name: "Academic Calendar 2025-26", size: "1.8 MB" },
  { icon: ClipboardList, name: "Examination Schedule", size: "520 KB" },
  { icon: Calendar, name: "Fee Structure", size: "380 KB" },
  { icon: FileText, name: "BPT Syllabus", size: "2.1 MB" },
  { icon: FileText, name: "MPT Syllabus", size: "1.9 MB" },
    { icon: FileText, name: "Previous Year Question Papers", size: "6.5 MB" },
  { icon: Book, name: "E-Books & Study Material", size: "12.3 MB" },
];

const DownloadsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Downloads</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Access important documents and resources
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {downloads.map((item, index) => (
            <div key={index} className="card-institution p-4 flex items-center gap-3 group hover:border-primary/30 transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded bg-primary-light flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-foreground truncate">{item.name}</h4>
                <p className="text-xs text-muted-foreground">{item.size}</p>
              </div>
              <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;
