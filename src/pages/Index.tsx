import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/700.css";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SheSaidYesSection from "@/components/SheSaidYesSection";
import SaveTheDateSection from "@/components/SaveTheDateSection";
import ProgrammeSection from "@/components/ProgrammeSection";
import DressCodeSection from "@/components/DressCodeSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SheSaidYesSection />
      <SaveTheDateSection />
      <ProgrammeSection />
      <DressCodeSection />
    </div>
  );
};

export default Index;
