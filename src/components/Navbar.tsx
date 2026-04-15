const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-cream/90 backdrop-blur-sm">
      <span className="font-display text-lg tracking-widest text-foreground">Axel & Seraïa</span>
      <div className="flex gap-8">
        <a href="#mairie" className="text-sm tracking-[0.25em] uppercase text-foreground hover:text-olive transition-colors">Mairie</a>
        <a href="#after" className="text-sm tracking-[0.25em] uppercase text-foreground hover:text-olive transition-colors">After Mairie & Henné</a>
        <a href="#houppa" className="text-sm tracking-[0.25em] uppercase text-foreground hover:text-olive transition-colors">Houppa & Soirée</a>
      </div>
    </nav>
  );
};

export default Navbar;
