import { ChevronRight } from "lucide-react";

interface MenuLink {
  label: string;
  children?: string[];
}

interface MegaMenuColumn {
  heading: string;
  links: MenuLink[];
}

interface MegaMenuProps {
  columns: MegaMenuColumn[];
}

const MegaMenu = ({ columns }: MegaMenuProps) => {
  return (
    <div className="mega-menu-container">
      {/* Panel root - overflow-visible to allow submenus */}
      <div className="mega-menu-panel relative overflow-visible">
        <div className="container mx-auto px-8 py-8">
          <div
            className={`grid gap-8 ${
              columns.length === 1
                ? "grid-cols-1 max-w-2xl"
                : columns.length === 2
                ? "grid-cols-2 max-w-3xl"
                : columns.length === 3
                ? "grid-cols-3 max-w-5xl"
                : "grid-cols-4 max-w-6xl"
            }`}
          >
            {columns.map((column) => (
              <div key={column.heading} className="mega-menu-column relative">
                <h3 className="mega-menu-heading">{column.heading}</h3>

                <ul className="space-y-1">
                  {column.links.map((item) =>
                    item.children ? (
                      <li key={item.label} className="relative group">
                        {/* Parent column link */}
                        <div className="mega-menu-link group flex items-center justify-between py-2 px-3 text-black hover:bg-[#800000] hover:text-white rounded-md transition-colors duration-200 cursor-pointer">
                          <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-white" />
                            {item.label}
                          </span>
                          <ChevronRight size={14} />
                        </div>

                        {/* RIGHT-CENTER SUBMENU */}
                        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 hidden group-hover:block z-50">
                          <div className="bg-white shadow-xl border rounded-md w-[260px] p-4">
                            <ul className="space-y-1">
                              {item.children.map((child) => (
                                <li key={child}>
                                  <a
                                    href="#"
                                    className="block text-sm text-gray-700 hover:text-primary py-1"
                                  >
                                    <span className="flex items-center gap-2">
                                      <span className="w-1 h-1 rounded-full bg-primary/30" />
                                      {child}
                                    </span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </li>
                    ) : (
                      <li key={item.label}>
                        {/* Normal column link */}
                        <a
                          href="#"
                          className="mega-menu-link group flex items-center py-2 px-3 text-black hover:bg-[#800000] hover:text-white rounded-md transition-colors duration-200"
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-white" />
                            {item.label}
                          </span>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
