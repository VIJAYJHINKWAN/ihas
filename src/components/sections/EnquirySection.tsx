import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EnquirySection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Have questions about admissions or our programs? Our counseling
              team is here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Campus Address</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    I.T.S Institute of Health & Allied Sciences
                    <br />
                    Murad Nagar, Ghaziabad
                    <br />
                    Uttar Pradesh - 201206
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Admissions: +91-8447753524
                    <br />
                    General: +91-120-2675602
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    admissions@ihas.edu.in
                    <br />
                    info@ihas.edu.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form + Newsletter */}
          <div className="space-y-8">
            {/* Enquiry Form - Now with white card background */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-white/20 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                Send an Enquiry
              </h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500"
                  />
                  <Input
                    placeholder="Phone Number"
                    className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500"
                  />
                </div>
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500"
                />
                <select className="w-full h-10 px-3 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm">
                  <option value="">Select Program of Interest</option>
                  <option value="bpt">Bachelor of Physiotherapy (BPT)</option>
                  <option value="mpt">Master of Physiotherapy (MPT)</option>
                  <option value="bsc">B.Sc Biotechnology</option>
                  <option value="msc">M.Sc Biotechnology</option>
                </select>
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500"
                />
                {/* CTA button now uses primary theme color */}
                <Button variant="primary" className="w-full gap-2">
                  <Send size={16} />
                  Submit Enquiry
                </Button>
              </form>
            </div>

            {/* Newsletter (still commented out as in your original) */}
            {/* <div className="bg-card/5 rounded-xl p-8 border border-card/10">
              <h3 className="font-display text-xl font-bold text-card mb-2">
                Physio & Biotech Newsletter
              </h3>
              <p className="text-card/80 text-sm mb-6">
                Stay updated with latest news, events and academic updates.
              </p>
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="h-12 bg-card/10 border-card/20 text-card placeholder:text-card/50"
                />
                <Button variant="hero" className="h-12 shrink-0 border-0">
                  Subscribe
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;