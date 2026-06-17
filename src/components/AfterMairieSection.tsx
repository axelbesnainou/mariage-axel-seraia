import { MapPin } from "lucide-react";

const AfterMairieSection = () => {
  return (
    <section id="after" className="bg-cream py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-4 text-foreground">
          <span className="italic font-body text-2xl">After</span> Mairie & Henné
        </h2>
        <div className="w-24 h-px bg-foreground/20 mx-auto mb-8" />
        <p className="font-body text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto">
          Après la cérémonie à la mairie, venez célébrer avec nous
          un moment convivial et festif, entre traditions et partage.
        </p>
        <p className="font-body text-base text-foreground mt-4 font-bold uppercase tracking-wider">
          Espace Bernard Palissy
        </p>
        <p className="font-body text-sm text-muted-foreground font-semibold">
          1 Pl. Bernard Palissy, 92100 Boulogne-Billancourt
        </p>
        <div className="mt-6">
          <a
            href="https://maps.app.goo.gl/h9NASoHABqHWVFB4A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.15em] uppercase border border-foreground/30 rounded-full hover:bg-foreground/5 transition-colors text-foreground"
          >
            <MapPin className="w-4 h-4" />
            Itinéraire
          </a>
        </div>
      </div>
    </section>
  );
};

export default AfterMairieSection;
