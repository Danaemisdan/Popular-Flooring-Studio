import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import stencilMask from '../../public/logos/Professional.svg';

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  const wrapperControls = useAnimation();
  const logoControls = useAnimation();
  const baseLogoControls = useAnimation();
  const tile1Controls = useAnimation();
  const tile2Controls = useAnimation();
  const tile3Controls = useAnimation();
  
  useEffect(() => {
    let isMounted = true;

    async function sequence() {
      // Setup initial positions
      baseLogoControls.set({ rotateX: 0, opacity: 1 });
      tile1Controls.set({ rotateX: 90, opacity: 0 });
      tile2Controls.set({ rotateX: 90, opacity: 0 });
      tile3Controls.set({ rotateX: 90, opacity: 0 });

      // Step 1: Plunge Entire Logo Container In
      await logoControls.start({ opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" }});
      if (!isMounted) return;
      await new Promise(r => setTimeout(r, 400));

      // Step 2: Base Logo folds away, Tile 1 folds in
      baseLogoControls.start({ rotateX: -90, opacity: 0, transition: { duration: 0.4, ease: "easeInOut" }});
      await tile1Controls.start({ rotateX: 0, opacity: 1, transition: { duration: 0.4, ease: "easeInOut" }});
      if (!isMounted) return;
      await new Promise(r => setTimeout(r, 600));
      
      // Step 3: Tile 1 folds away, Tile 2 folds in
      tile1Controls.start({ rotateX: -90, opacity: 0, transition: { duration: 0.4, ease: "easeInOut" }});
      await tile2Controls.start({ rotateX: 0, opacity: 1, transition: { duration: 0.4, ease: "easeInOut" }});
      if (!isMounted) return;
      await new Promise(r => setTimeout(r, 600));
      
      // Step 4: Tile 2 folds away, Tile 3 folds in
      tile2Controls.start({ rotateX: -90, opacity: 0, transition: { duration: 0.4, ease: "easeInOut" }});
      await tile3Controls.start({ rotateX: 0, opacity: 1, transition: { duration: 0.4, ease: "easeInOut" }});
      if (!isMounted) return;
      await new Promise(r => setTimeout(r, 600));

      // Step 5: Tile 3 folds away, Base solid logo folds back in
      tile3Controls.start({ rotateX: -90, opacity: 0, transition: { duration: 0.4, ease: "easeInOut" }});
      await baseLogoControls.start({ rotateX: 0, opacity: 1, transition: { duration: 0.4, ease: "easeInOut" }});
      if (!isMounted) return;
      await new Promise(r => setTimeout(r, 300));
      
      // Final Step: Slide out Splash smoothly
      await wrapperControls.start({ y: '-100vh', transition: { duration: 0.9, ease: [0.77, 0, 0.175, 1] }});
      if (isMounted) onComplete();
    }

    sequence();

    return () => {
      isMounted = false;
    };
  }, [wrapperControls, logoControls, baseLogoControls, tile1Controls, tile2Controls, tile3Controls, onComplete]);

  return (
    <motion.div 
      initial={{ y: 0 }}
      animate={wrapperControls}
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none overflow-hidden"
      style={{ backgroundColor: '#e8e1d5' }}
    >
      {/* Left Tracker Text */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left whitespace-nowrap"
      >
        <p className="text-[10px] tracking-[0.3em] text-zinc-800 font-medium uppercase">
          Extraordinary Surfaces
        </p>
      </motion.div>

      {/* Dynamic Master Logo Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.85 }}
        animate={logoControls}
        // Added perspective so the 3D 'fold' looks authentic
        className="relative perspective-1000 w-[85vw] h-[85vw] md:w-[60vw] md:h-[60vw] lg:w-[45vw] lg:h-[45vw] max-w-[800px] max-h-[800px]"
        style={{
          perspective: "1000px",
          WebkitMaskImage: `url('${stencilMask}')`,
          WebkitMaskSize: "contain",
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          maskImage: `url('${stencilMask}')`,
          maskSize: "contain",
          maskPosition: "center",
          maskRepeat: "no-repeat"
        }}
      >
        {/* Base Layer: Original SVG Graphics (Now Animated to fold) */}
        <motion.img 
          animate={baseLogoControls}
          src={stencilMask}
          alt="Popular Logo Background Base" 
          className="absolute inset-0 w-full h-full object-contain opacity-90 origin-bottom"
        />

        {/* Texture Mask 1 */}
        <motion.div 
          animate={tile1Controls}
          className="absolute inset-0 w-full h-full bg-cover bg-center origin-bottom"
          style={{ backgroundImage: "url('/images/marble_black_white_veins.png')" }}
        />

        {/* Texture Mask 2 */}
        <motion.div 
          animate={tile2Controls}
          className="absolute inset-0 w-full h-full bg-cover bg-center origin-bottom"
          style={{ backgroundImage: "url('/images/marble_red.png')" }}
        />

        {/* Texture Mask 3 */}
        <motion.div 
          animate={tile3Controls}
          className="absolute inset-0 w-full h-full bg-cover bg-center origin-bottom"
          style={{ backgroundImage: "url('/images/marble_dark_blue.png')" }}
        />
      </motion.div>

      {/* Right Tracker Text */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 rotate-90 origin-right whitespace-nowrap"
      >
        <p className="text-[10px] tracking-[0.3em] text-zinc-800 font-medium uppercase">
          Architectural Visions
        </p>
      </motion.div>
    </motion.div>
  );
}
