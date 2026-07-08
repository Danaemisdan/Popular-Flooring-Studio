import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function MidScrollWalkthrough() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a tall scrolling container to drive the 3D sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animation Sequence: 
  // 0% - 30%: Image 1 scales up & rotates into view
  // 30% - 40%: Text 1 appears
  // 40% - 70%: Image 1 fades/scales past camera, Image 2 rotates in
  // 70% - 80%: Text 2 appears
  
  // Image 1 Transforms (The Entrance/Hallway)
  const img1Scale = useTransform(scrollYProgress, [0, 0.4, 0.6], [0.8, 1, 3]);
  const img1Opacity = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
  const img1RotateX = useTransform(scrollYProgress, [0, 0.4], [20, 0]);
  
  // Text 1 Transforms
  const text1Opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.2, 0.3], [50, 0]);

  // Image 2 Transforms (The Master Bathroom/Living)
  const img2Scale = useTransform(scrollYProgress, [0.4, 0.8, 1], [0.8, 1, 2]);
  const img2Opacity = useTransform(scrollYProgress, [0.4, 0.6, 0.9, 1], [0, 1, 1, 0]);
  const img2RotateY = useTransform(scrollYProgress, [0.4, 0.8], [-20, 0]);

  // Text 2 Transforms
  const text2Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.7, 0.8], [50, 0]);

  return (
    <section ref={containerRef} className="h-[300vh] relative bg-zinc-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-[1000px]">
        
        {/* Scene 1 */}
        <motion.div 
          style={{ 
            scale: img1Scale, 
            opacity: img1Opacity, 
            rotateX: img1RotateX,
            transformStyle: "preserve-3d"
          }}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
          <img src="/images/1livingroom.jpg" alt="Living Room Walkthrough" className="w-[80vw] h-[80vh] object-cover rounded-3xl shadow-2xl border border-white/10" />
          <div className="absolute inset-0 bg-black/40 rounded-3xl" />
        </motion.div>

        {/* Text 1 */}
        <motion.div 
          style={{ opacity: text1Opacity, y: text1Y }}
          className="absolute z-10 flex flex-col items-center text-center px-6"
        >
          <span className="text-white/80 uppercase tracking-widest text-xs font-bold mb-4">Step 1</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl">Elevate The Entrance</h2>
          <button className="bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:scale-105 transition-transform">
            View Hallway Collections <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* Scene 2 */}
        <motion.div 
          style={{ 
            scale: img2Scale, 
            opacity: img2Opacity, 
            rotateY: img2RotateY,
            transformStyle: "preserve-3d"
          }}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
          <img src="/images/1bathroom.jpg" alt="Bathroom Walkthrough" className="w-[80vw] h-[80vh] object-cover rounded-3xl shadow-2xl border border-white/10" />
          <div className="absolute inset-0 bg-black/40 rounded-3xl" />
        </motion.div>

        {/* Text 2 */}
        <motion.div 
          style={{ opacity: text2Opacity, y: text2Y }}
          className="absolute z-10 flex flex-col items-center text-center px-6"
        >
          <span className="text-white/80 uppercase tracking-widest text-xs font-bold mb-4">Step 2</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl">Refine The Private Spaces</h2>
          <button className="bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:scale-105 transition-transform">
            View Bathware Collections <ArrowRight size={16} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
