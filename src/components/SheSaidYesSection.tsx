import { MapPin } from "lucide-react";
import coupleWalkingAsset from "@/assets/039A6603.jpg";
import coupleSteps from "@/assets/c4b0cd2f-d1f7-4007-ab9c-3ce1eccad2ae.jpg";
const coupleWalking = coupleWalkingAsset.url;

const SheSaidYesSection = () => {
  return (
    <section id="mairie" className="bg-cream py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Polaroid photos */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="bg-cream-dark p-3 shadow-lg rotate-[-6deg] z-10">
            <img src={coupleWalking} alt="Couple walking" loading="lazy" width={300} height={375} className="w-60 h-72 object-cover" />
          </div>
          <div className="bg-cream-dark p-3 shadow-lg rotate-[4deg] -ml-16 mt-8">
            <img src={coupleSteps} alt="Couple on steps" loading="lazy" width={300} height={375} className="w-60 h-72 object-cover" />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6 text-foreground">
            <span className="italic font-body text-3xl">La</span> Mairie
          </h2>
          <div className="font-body text-lg leading-relaxed text-muted-foreground">
            <p className="font-display text-3xl text-foreground italic mb-1 md:text-3xl">Axel & Seraïa</p>
            <p className="text-lg text-muted-foreground mb-1">se diront</p>
            <p className="font-display text-3xl text-foreground italic mb-6 md:text-3xl">"Oui"</p>
            <span className="text-foreground">Jeudi 17 septembre à 15h30 précise</span>
            <p className="font-body text-base text-foreground mt-4 font-bold uppercase tracking-wider">
              MAIRIE DE BOULOGNE-BILLANCOURT
            </p>
            <p className="font-body text-sm text-muted-foreground font-semibold mb-4">
              26 Av. André Morizet, 92100 Boulogne-Billancourt
            </p>
            <span className="italic">La cérémonie sera suivie d'un After Mairie & Henné</span>
            <div className="mt-6">
              <a
                href="https://maps.app.goo.gl/XVCbTGQ4N12B6L149"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.15em] uppercase border border-foreground/30 rounded-full hover:bg-foreground/5 transition-colors text-foreground"
              >
                <MapPin className="w-4 h-4" />
                ITINÉRAIRE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SheSaidYesSection;
