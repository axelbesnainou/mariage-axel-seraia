import coupleWalking from "@/assets/couple-walking.jpg";
import coupleSteps from "@/assets/couple-steps.jpg";

const SheSaidYesSection = () => {
  return (
    <section className="bg-cream py-20 px-6 md:px-16">
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
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="font-display text-4xl md:text-5xl mb-6 text-foreground">
            <span className="italic font-body text-3xl">La</span> Mairie
          </h2>
          <p className="font-body text-lg leading-relaxed text-muted-foreground">
            It all started with a smile.<br />
            From the very first moment, we knew<br />
            something magical was happening —<br />
            and, celebrating our journey,<br />
            through adventures big and small, whispers,<br />
            laughter, and shared sunsets everywhere, from<br />
            Paris streets to hidden trails.<br /><br />
            After years of love, shared dreams, and joy,<br />
            we're thrilled to share that two lives become<br />
            one — forever — together.<br />
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-6 text-foreground">
            <span className="italic font-body text-3xl">L'</span> After Mairie & Henné
          </h2>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
            It all started with a smile.<br />
            From the very first moment, we knew<br />
            something magical was happening —<br />
            After years of love, shared dreams, and joy,<br />
            we're thrilled to share that two lives become<br />
            one — forever — together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SheSaidYesSection;
