import { MapPin } from "lucide-react";
import fleursIcon from "@/assets/fleurs.svg";
import handIcon from "@/assets/hand.svg";
import houppaIcon from "@/assets/houppa.svg";

const programItems = [
  { time: "Jeudi 17 septembre à 15h30", label: "MAIRIE", icon: fleursIcon, mapsUrl: "https://maps.app.goo.gl/XVCbTGQ4N12B6L149" },
  { time: "Jeudi 17 septembre à\u00a017h30", label: "AFTER MAIRIE & HENNÉ", icon: handIcon, mapsUrl: "https://maps.app.goo.gl/h9NASoHABqHWVFB4A" },
  { time: "Mardi 06 octobre à 17h00", label: "HOUPPA & SOIRÉE", icon: houppaIcon, mapsUrl: "https://maps.app.goo.gl/K61714KWRcm2GDpS6" },
];

const ProgrammeSection = () => {
  return (
    <section className="bg-olive-dark py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-4 text-cream">
          <span className="italic font-body text-2xl">Infos</span> Utiles
        </h2>
        <div className="w-24 h-px bg-cream/40 mx-auto mb-12" />
        
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
          {programItems.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-4">
              <img src={item.icon} alt="" className="w-20 h-20 opacity-80" />
              <div className="w-px h-6 bg-cream/30" />
              <p className="font-body text-lg text-cream">{item.time}</p>
              <p className="text-xs tracking-[0.2em] uppercase text-cream/70">{item.label}</p>
              <a
                href={item.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-1 px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase text-cream/80 border border-cream/30 rounded-full hover:bg-cream/10 transition-colors"
              >
                <MapPin className="w-3 h-3" />
                Itinéraire
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
