import { useRef, type MouseEvent } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Ruler, Shield, Sparkles, Layers } from 'lucide-react';

export default function ProductDetailer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <section className="w-full py-32 bg-zinc-50 relative z-30 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* 3D Tile Interactive Area */}
          <div className="w-full lg:w-1/2 flex items-center justify-center perspective-[1200px]">
            <motion.div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-[300px] h-[600px] md:w-[400px] md:h-[800px] cursor-crosshair transition-all duration-200 ease-linear"
            >
              {/* Tile Base */}
              <div className="absolute inset-0 bg-stone-200 rounded-lg shadow-2xl border-4 border-white/50" />
              
              {/* Tile Texture Image */}
              <img 
                src="/images/extracted/img_36.jpg" 
                alt="Product Texture" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg mix-blend-multiply opacity-80"
              />

              {/* Fake Gloss/Reflection Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/20 rounded-lg pointer-events-none"
                style={{
                  backgroundPosition: useTransform(x, [0, 1], ["0% 0%", "100% 100%"])
                }}
              />
              
              {/* Hotspots */}
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10" style={{ transform: 'translateZ(50px)' }}>
                <div className="relative group">
                  <span className="flex w-6 h-6 items-center justify-center bg-white rounded-full shadow-lg border border-zinc-200 text-[#3A0C16] cursor-pointer hover:scale-125 transition-transform">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                     <div className="w-2 h-2 rounded-full bg-[#3A0C16]" />
                  </span>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 bg-black text-white text-xs p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-2xl">
                    <p className="font-bold mb-1 uppercase tracking-widest text-zinc-400">Surface Finish</p>
                    <p>High-gloss polished surface engineered for maximum light reflection and scratch resistance.</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 z-10" style={{ transform: 'translateZ(50px)' }}>
                <div className="relative group">
                  <span className="flex w-6 h-6 items-center justify-center bg-white rounded-full shadow-lg border border-zinc-200 text-[#3A0C16] cursor-pointer hover:scale-125 transition-transform">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                     <div className="w-2 h-2 rounded-full bg-[#3A0C16]" />
                  </span>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 bg-black text-white text-xs p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-2xl">
                    <p className="font-bold mb-1 uppercase tracking-widest text-zinc-400">Edge Precision</p>
                    <p>Rectified edges allowing for minimal grout lines (1-2mm) creating a seamless monolith look.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Specs Panel */}
          <div className="w-full lg:w-1/2">
            <span className="tracking-[0.4em] uppercase text-xs font-bold text-[#3A0C16]">Product Detailer</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-950 mt-4 mb-8">Statvario Signature Slab</h2>
            <p className="text-zinc-600 font-medium text-lg max-w-xl mb-12">
              Our flagship large-format porcelain slab. Experience the intricate veining of natural marble combined with the technical superiority of engineered ceramics. Hover over the tile to interact with the 3D surface.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-zinc-100 rounded-xl text-[#3A0C16]"><Ruler size={24} /></div>
                <div>
                  <h4 className="font-bold text-zinc-950 uppercase tracking-widest text-xs mb-1">Dimensions</h4>
                  <p className="text-zinc-600 text-sm">800mm x 2400mm</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-zinc-100 rounded-xl text-[#3A0C16]"><Layers size={24} /></div>
                <div>
                  <h4 className="font-bold text-zinc-950 uppercase tracking-widest text-xs mb-1">Thickness</h4>
                  <p className="text-zinc-600 text-sm">9mm Solid Core</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-zinc-100 rounded-xl text-[#3A0C16]"><Sparkles size={24} /></div>
                <div>
                  <h4 className="font-bold text-zinc-950 uppercase tracking-widest text-xs mb-1">Finish</h4>
                  <p className="text-zinc-600 text-sm">High-Gloss Polished</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-zinc-100 rounded-xl text-[#3A0C16]"><Shield size={24} /></div>
                <div>
                  <h4 className="font-bold text-zinc-950 uppercase tracking-widest text-xs mb-1">Durability</h4>
                  <p className="text-zinc-600 text-sm">Scratch & Stain Resistant</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <button className="bg-zinc-950 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-zinc-800 transition-colors shadow-2xl">
                Order Sample
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
