import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#mairie", label: "LA MAIRIE" },
  { href: "#after", label: "AFTER MAIRIE & HENNÉ" },
  { href: "#houppa", label: "HOUPPA" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-cream/90 backdrop-blur-sm">
        <span className="font-display text-lg tracking-widest text-foreground">Axel & Seraïa</span>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-[0.25em] uppercase text-foreground hover:text-olive transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile burger button */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="md:hidden text-foreground hover:text-olive transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile side drawer */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-foreground/40"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-72 max-w-[80%] bg-cream shadow-xl flex flex-col transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-foreground/10">
            <span className="font-display text-base tracking-widest text-foreground">Menu</span>
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
              className="text-foreground hover:text-olive transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-6 px-6 py-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.25em] uppercase text-foreground hover:text-olive transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
