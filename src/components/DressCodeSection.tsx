import weddingDetails from "@/assets/2337f58a-1bcf-40fa-8214-0d9b0217b984.jpg";
import venueEntrance from "@/assets/cda103c6-b301-4db6-8752-9a4a2650d9c3.jpg";

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
          <span className="italic font-body text-2xl">Votre</span> Réponse
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mt-10">
          <div className="w-full md:w-2/3 text-center">
            <p className="font-body text-lg text-foreground mb-6">
              Pour répondre merci de renseigner le formulaire ci-dessous SVP.
            </p>
            
            {/* Google Form */}
            <div className="w-full mb-8">
              <iframe
                key="google-form-stable"
                src="https://docs.google.com/forms/d/e/1FAIpQLSe1cUYhtqcrnD8h8uXRWkxdgl3utHzS3_wWqoyFBEs6Py7zaA/viewform?embedded=true"
                width="100%"
                height="600"
                className="border-0 rounded-lg"
                title="Google Form"
                loading="lazy"
              >
                Chargement…
              </iframe>
            </div>
            
            <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-md mx-auto">
              Merci d'avance pour vos réponses.
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
