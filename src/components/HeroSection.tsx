import { useState, useEffect } from "react";
import heroCouple from "@/assets/hero-couple.jpg";

const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calculateTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return timeLeft;
};

function calculateTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    jours: Math.floor(diff / (1000 * 60 * 60 * 24)),
    heures: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    secondes: Math.floor((diff / 1000) % 60),
  };
}

const HeroSection = () => {
  const countdown = useCountdown(new Date("2026-10-06T00:00:00"));
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroCouple}
        alt="Axel and Seraïa"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-cream">
        <h1 className="font-display text-6xl md:text-8xl tracking-wider leading-tight text-center">
          <span className="block">Axel</span>
          <span className="block italic font-body text-4xl md:text-5xl my-2">&</span>
          <span className="block">Seraïa</span>
        </h1>
        <p className="mt-6 text-lg tracking-[0.3em] uppercase font-body">06.10.2026</p>
        <div className="mt-8 flex gap-6 md:gap-10">
          {Object.entries(countdown).map(([label, value]) => (
            <div key={label} className="flex flex-col items-center">
              <span className="font-display text-4xl md:text-5xl">{String(value).padStart(2, "0")}</span>
              <span className="font-body text-xs md:text-sm uppercase tracking-widest mt-1">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
