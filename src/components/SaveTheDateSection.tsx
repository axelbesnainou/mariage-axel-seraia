import chateau from "@/assets/chateau.jpg";

const SaveTheDateSection = () => {
  return (
    <section className="relative py-32 px-6">
      <img src={chateau} alt="Château venue" loading="lazy" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-10 flex items-center justify-center">
        <div className="bg-cream/95 p-12 md:p-16 max-w-lg text-center shadow-2xl">
          <h2 className="font-display text-3xl md:text-4xl mb-6 text-foreground">
            <span className="italic font-body text-2xl">La</span> Houppa & Soirée
          </h2>
          <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
            We would be honored and overjoyed to celebrate
            this special moment with the people we love
            most.
          </p>
          <p className="font-display text-xl tracking-widest text-foreground mb-6">
            07 SEPTEMBRE 2026
          </p>
          <p className="font-body text-base leading-relaxed text-muted-foreground mb-8">
            For a life full of love, laughter, and
            unforgettable moments,<br />
            we can't wait to celebrate with you.
          </p>
          <p className="font-display text-2xl italic text-foreground">
            Axel & Seraïa
          </p>
        </div>
      </div>
    </section>
  );
};

export default SaveTheDateSection;
