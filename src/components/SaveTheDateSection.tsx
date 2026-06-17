import chateau from "@/assets/chateau.jpg";
import { Navigation } from "lucide-react";

const SaveTheDateSection = () => {
  return (
    <section id="houppa" className="relative py-32 px-6">
      <img src={chateau} alt="Château venue" loading="lazy" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-10 flex items-center justify-center">
        <div className="bg-cream/95 p-12 md:p-16 max-w-lg text-center shadow-2xl">
          <p className="font-display text-lg text-foreground/70 text-right mb-2">בסייד</p>
          <h2 className="font-display text-3xl md:text-4xl mb-4 text-foreground">
            <span className="italic font-body text-2xl">La</span> Houppa & Soirée
          </h2>
          <div className="w-24 h-px bg-foreground/20 mx-auto mb-8" />
          <p className="font-body text-base leading-relaxed text-foreground/80 mb-8">
            Nos familles ont la joie de vous faire part du mariage de leurs petits-enfants et enfants
          </p>

          <div className="mb-8">
            <p className="font-display text-3xl md:text-4xl text-foreground italic mb-1">
              Seraïa
            </p>
            <p className="font-display text-xl text-foreground/70 mb-2">
              סריה
            </p>
            <p className="font-display text-2xl text-foreground italic my-2">
              &
            </p>
            <p className="font-display text-3xl md:text-4xl text-foreground italic mb-1">
              Axel
            </p>
            <p className="font-display text-xl text-foreground/70">
              יצחק
            </p>
          </div>

          <p className="font-body text-base leading-relaxed text-foreground/80 mb-6">
            et seraient honorés de votre présence à la cérémonie religieuse qui sera célébrée
          </p>

          <p className="font-display text-lg text-foreground/70 mb-6">
            25 Tichri 5787
          </p>

          <p className="font-display text-xl tracking-widest text-foreground mb-2">
            Mardi 06 octobre à 17h00 précises
          </p>
          <p className="font-body text-base text-foreground mb-1 font-bold uppercase tracking-wider">
            au<br />Château Barthélemy
          </p>
          <p className="font-body text-sm text-muted-foreground mb-8 font-semibold">
            Route Nationale 191<br />78660 Paray-Douaville
          </p>

          <a
            href="https://maps.app.goo.gl/K61714KWRcm2GDpS6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-olive text-cream font-body text-sm tracking-widest uppercase hover:bg-olive/80 transition-colors mb-8"
          >
            <Navigation size={18} />
            Itinéraire
          </a>
        </div>
      </div>
    </section>
  );
};

export default SaveTheDateSection;
