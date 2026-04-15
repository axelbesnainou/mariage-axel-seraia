import { Church, Camera, Wine, PartyPopper } from "lucide-react";

const programItems = [
  { time: "10 am", label: "CHURCH CEREMONY", icon: Church },
  { time: "12 am", label: "SHOOTING PHOTO", icon: Camera },
  { time: "2 pm", label: "COCKTAIL", icon: Wine },
  { time: "5 pm", label: "LET'S PARTY !", icon: PartyPopper },
];

const ProgrammeSection = () => {
  return (
    <section className="bg-olive-dark py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-4 text-cream">
          <span className="italic font-body text-2xl">The</span> PROGRAMM
        </h2>
        <div className="w-24 h-px bg-cream/40 mx-auto mb-12" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {programItems.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-4">
              <item.icon className="w-10 h-10 text-cream/80" strokeWidth={1} />
              <div className="w-px h-6 bg-cream/30" />
              <p className="font-body text-lg text-cream">{item.time}</p>
              <p className="text-xs tracking-[0.2em] uppercase text-cream/70">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
