import weddingDetails from "@/assets/wedding-details.jpg";
import venueEntrance from "@/assets/venue-entrance.jpg";

const colorSwatches = [
  { color: "bg-[hsl(40,25%,93%)]", label: "Cream" },
  { color: "bg-[hsl(40,20%,78%)]", label: "Sand" },
  { color: "bg-[hsl(55,25%,35%)]", label: "Olive" },
];

const DressCodeSection = () => {
  return (
    <section className="bg-cream py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl mb-2 text-center text-foreground">
          <span className="italic font-body text-2xl">Dress</span> CODE
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mt-10">
          <div className="w-full md:w-2/3 text-center">
            <p className="font-body text-lg text-foreground mb-6">
              The wedding theme is <strong>nature</strong>.
            </p>
            
            {/* Color swatches */}
            <div className="flex justify-center gap-4 mb-8">
              {colorSwatches.map((s) => (
                <div key={s.label} className={`w-14 h-14 rounded-full ${s.color} border border-border shadow-sm`} title={s.label} />
              ))}
            </div>
            
            <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-md mx-auto">
              We invite you to dress in colors that reflect the natural palette —
              cream, sage green, soft taupe, or olive hues, reminding us of the
              landscapes we love. <br /><br />
              Fine elegant, natural, and breathable fabrics.
              Feel free to add a floral accent — everything to embrace style and be
              naturally you.
            </p>
          </div>
          
          {/* Polaroid photos */}
          <div className="relative w-full md:w-1/3 flex justify-center">
            <div className="bg-cream-dark p-3 shadow-lg rotate-[5deg]">
              <img src={weddingDetails} alt="Wedding details" loading="lazy" width={240} height={300} className="w-48 h-56 object-cover" />
            </div>
            <div className="bg-cream-dark p-3 shadow-lg rotate-[-4deg] -ml-10 mt-12">
              <img src={venueEntrance} alt="Venue" loading="lazy" width={240} height={300} className="w-48 h-56 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;
