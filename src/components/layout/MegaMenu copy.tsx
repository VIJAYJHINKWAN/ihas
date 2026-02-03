interface MegaMenuColumn {
  heading: string;
  links: string[];
}

interface MegaMenuProps {
  columns: MegaMenuColumn[];
}

const MegaMenu = ({ columns }: MegaMenuProps) => {
  return (
    <div className="mega-menu-container">
      <div className="mega-menu-panel">
        <div className="container mx-auto px-8 py-8">
          <div className={`grid gap-8 ${
            columns.length === 2 ? 'grid-cols-2 max-w-3xl' : 
            columns.length === 3 ? 'grid-cols-3 max-w-5xl' : 
            'grid-cols-4 max-w-6xl'
          }`}>
            {columns.map((column) => (
              <div key={column.heading} className="mega-menu-column">
                <h3 className="mega-menu-heading">{column.heading}</h3>
                <ul className="space-y-1">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="mega-menu-link">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                          {link}
                        </span>
                      </a>
                    </li>
                  ))}
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
