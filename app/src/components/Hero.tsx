import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const videos = [
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4'
];

export default function Hero() {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cinematic looping logic
  useEffect(() => {
    const currentVideo = videoRefs.current[activeVideo];
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(e => console.log("Video autoplay blocked:", e));
    }
  }, [activeVideo]);

  const handleVideoEnd = () => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // The sexy burgundy/white wipe transition from bottom to top
  const wipeHeight = useTransform(scrollYProgress, [0.3, 0.85], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="w-full relative h-[250vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black z-0 flex items-center justify-center">
        
        {/* Videos Engine - Seamless Crossfade */}
        {videos.map((src, index) => (
          <motion.video
            key={src}
            ref={el => { videoRefs.current[index] = el; }}
            src={src}
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeVideo === index ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}

        {/* Ambient Dark Overlay for Typography Readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Massive Logo Placement centered vertically and horizontally */}
        <div className="relative w-[85vw] md:w-[65vw] lg:w-[45vw] max-w-[900px] z-10 pointer-events-none">
           <img
              src="/images/logo_professional.svg"
              alt="Popular Flooring Studio Logo"
              className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              style={{ filter: 'brightness(0) invert(1) opacity(1)' }} 
           />
        </div>

        {/* Premium Glassmorphic Wipe Transition */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full z-20 pointer-events-none flex flex-col justify-end"
          style={{ height: wipeHeight }}
        >
           {/* Sexy Burgundy leading edge with blur */}
           <div className="w-full h-[30vh] bg-gradient-to-t from-[#3A0C16] to-transparent backdrop-blur-md opacity-90" />
           {/* Crisp white solid body to seamlessly connect the next section */}
           <div className="w-full h-full bg-zinc-50 flex-grow" />
        </motion.div>

      </div>
    </div>
  );
}
