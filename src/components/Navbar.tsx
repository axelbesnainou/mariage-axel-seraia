const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-cream/90 backdrop-blur-sm">
      <span className="font-display text-lg tracking-widest text-foreground">Laura & David</span>
      <div className="flex gap-8">
        <a href="#rsvp" className="text-sm tracking-[0.25em] uppercase text-foreground hover:text-olive transition-colors">RSVP</a>
        <a href="#gift" className="text-sm tracking-[0.25em] uppercase text-foreground hover:text-olive transition-colors">Gift</a>
        <a href="#locations" className="text-sm tracking-[0.25em] uppercase text-foreground hover:text-olive transition-colors">Locations</a>
      </div>
    </nav>
  );
};

export default Navbar;
