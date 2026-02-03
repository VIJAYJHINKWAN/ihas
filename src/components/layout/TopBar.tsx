import { Phone, CreditCard, Facebook, Youtube, Search, X } from "lucide-react";
import { useState } from "react";

const TopBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Height locked to prevent layout jump */}
        <div className="flex flex-wrap items-center justify-between py-2 text-sm min-h-[36px]">
          <div className="flex items-center gap-4 ml-auto">

            <a
              href="tel:+918447753524"
              className="flex items-center gap-1.5 hover:text-primary-light transition-colors"
            >
              <Phone size={14} />
              <span className="hidden sm:inline">+91-8447753524</span>
            </a>

            <span className="opacity-40 hidden sm:inline">|</span>

            <a
              href="#"
              className="flex items-center gap-1.5 hover:text-primary-light transition-colors"
            >
              <CreditCard size={14} />
              <span className="hidden sm:inline">Pay Fee Online</span>
            </a>

            <span className="opacity-40 hidden sm:inline">|</span>

            <div className="flex items-center gap-2">
              <a href="#" className="hover:text-primary-light transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-primary-light transition-colors">
                <Youtube size={16} />
              </a>
            </div>

            <span className="opacity-40 hidden sm:inline">|</span>

            {/* Search Section */}
            <div className="flex items-center gap-2">
              {open && (
                <input
                  autoFocus
                  type="text"
                  placeholder="Search..."
                  className="
                    h-7
                    px-2
                    text-sm
                    rounded
                    text-foreground
                    focus:outline-none
                    focus:ring-1
                    focus:ring-primary
                    w-40
                    sm:w-48
                  "
                />
              )}

              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1.5 hover:text-primary-light transition-colors"
              >
                {open ? <X size={14} /> : <Search size={14} />}
                <span className="hidden lg:inline">
                  {open ? "Close" : "Search"}
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
