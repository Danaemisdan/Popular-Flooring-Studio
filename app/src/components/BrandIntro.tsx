import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BrandIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Black texture slide-up effect simulating the FindRealEstate wipe
  // It sweeps up from 0 to 100vh right as the user naturally scrolls through the text
  const wipeHeight = useTransform(scrollYProgress, [0.3, 0.6], ["0vh", "100vh"]);

  return (
    <section ref={containerRef} className="w-full relative h-[150vh] bg-zinc-50 z-30">
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-50">
        
        {/* Mix-Blend Typography - Inverts gracefully as the dark texture passes beneath it */}
        <div className="max-w-5xl text-center flex flex-col items-center px-6 relative z-10 mix-blend-difference text-white">
          <span className="tracking-[0.4em] uppercase text-xs md:text-sm font-semibold mb-8 text-white/50">
            The Classics
          </span>
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
            That never go out of style.
          </h2>
          <p className="max-w-2xl text-lg md:text-2xl font-light leading-relaxed text-white/70">
            Explore our premium 600x1200 Double Carving Series. Featuring flawless Bookmatch finishes, Cadillac Onyx, and Madison Black, intricately designed for modern architectural spaces.
          </p>
        </div>

        {/* The sliding dark texture wipe block */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full bg-zinc-950 z-0"
          style={{ height: wipeHeight }}
        />
        
      </div>
    </section>
  );
}
