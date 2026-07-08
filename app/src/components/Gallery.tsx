import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const images = [
  "WhatsApp Image 2026-04-10 at 11.23.16.jpeg",
  "WhatsApp Image 2026-04-10 at 11.23.17.jpeg",
  "WhatsApp Image 2026-04-10 at 11.23.18.jpeg",
  "WhatsApp Image 2026-04-10 at 11.23.19.jpeg"
];

// Each layer is a sticky fullscreen component.
function SequenceLayer({ 
  src, 
  index, 
  totalProgress 
}: { 
  src: string; 
  index: number; 
  totalProgress: MotionValue<number>;
}) {
  const layerTarget = index / images.length;
  // Calculate when this specific layer should start scaling down 
  // (when the next layer begins covering it)
  const scaleDown = useTransform(
    totalProgress, 
    [layerTarget, layerTarget + (1 / images.length)], 
    [1, 0.85]
  );
  
  // Calculate pure fade output behind the next layers
  const opacity = useTransform(
    totalProgress, 
    [layerTarget, layerTarget + (1 / images.length)], 
    [1, 0.3]
  );

  return (
    <div className="h-screen w-full sticky top-0 flex items-center justify-center bg-black overflow-hidden origin-top">
      <motion.div 
        style={{ scale: scaleDown, opacity }}
        className="relative w-full h-full md:w-[90vw] md:h-[90vh] md:rounded-[40px] overflow-hidden shadow-2xl border border-zinc-800/50"
      >
        <img 
          src={`/images/${src}`} 
          alt={`Sequence Frame ${index}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
          <div>
            <h3 className="text-white text-5xl font-serif tracking-widest uppercase">Layer 0{index + 1}</h3>
            <p className="text-zinc-400 font-light mt-2 tracking-widest uppercase text-sm">Architectural Core</p>
          </div>
          <div className="text-zinc-500 font-mono text-sm border border-zinc-700 px-4 py-2 rounded-full backdrop-blur-md bg-black/20">
            FRAME SEQUENCE
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll across this massive container (400vh for 4 images)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      id="collections" 
      ref={containerRef} 
      className="relative z-10 w-full"
      style={{ height: `${images.length * 100}vh` }} // Make container extremely tall
    >
      <div className="absolute top-0 left-0 w-full font-serif text-white z-50 pointer-events-none px-6 pt-32 text-center mix-blend-difference">
        <h2 className="text-4xl md:text-6xl tracking-widest uppercase opacity-80">Full Immersion</h2>
      </div>

      {images.map((src, i) => (
        <SequenceLayer 
          key={src} 
          src={src} 
          index={i} 
          totalProgress={scrollYProgress} 
        />
      ))}
    </section>
  );
}
