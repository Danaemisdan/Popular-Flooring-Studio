import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Box, Play, Map, X } from 'lucide-react';

const ZONES = [
  { id: 'entrance', label: 'Main Entrance', x: '20%', y: '80%' },
  { id: 'living', label: 'Living Room', x: '50%', y: '60%' },
  { id: 'kitchen', label: 'Kitchen & Dining', x: '80%', y: '30%' },
  { id: 'bathroom', label: 'Master Bath', x: '20%', y: '30%' }
];

export default function VirtualShowroom() {
  const [isInteractive, setIsInteractive] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [activeZone, setActiveZone] = useState(ZONES[1]);

  return (
    <section className="w-full py-24 bg-zinc-950 text-white relative overflow-hidden z-30">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="tracking-[0.4em] uppercase text-xs font-bold text-zinc-500 block mb-4">Walk-in Experience Center</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
            >
              Virtual Showroom
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg md:text-xl font-light"
            >
              Explore our architectural layouts in a high-fidelity digital twin. Jump between rooms using the interactive dollhouse map.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <button 
              onClick={() => setShowMap(!showMap)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-colors ${showMap ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20 backdrop-blur-md'}`}
            >
              <Map size={18} />
              Dollhouse Map
            </button>
            <button 
              onClick={() => setIsInteractive(true)}
              className="flex items-center gap-2 bg-white text-zinc-950 hover:bg-zinc-200 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-colors"
            >
              <Box size={18} />
              Enter 3D Space
            </button>
          </motion.div>
        </div>

        {/* 3D Viewer Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full aspect-video md:aspect-[21/9] bg-zinc-900 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group"
        >
          {isInteractive ? (
            <iframe 
              key={activeZone.id} // Re-render iframe on zone change for mock purposes
              src="https://my.matterport.com/show/?m=JRWzjSo1Bqd&play=1" 
              title="Virtual Showroom"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          ) : (
            <div 
              onClick={() => setIsInteractive(true)}
              className="absolute inset-0 cursor-pointer"
            >
              <img 
                src="/images/1bathroom.jpg" 
                alt="Virtual Showroom Preview" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-center">
                <div className="bg-white text-black w-24 h-24 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-500">
                  <Play size={40} className="ml-2" />
                </div>
                <p className="text-white font-medium tracking-widest uppercase text-sm drop-shadow-md">Click to load Interactive 3D</p>
                <p className="text-white/50 text-xs mt-2">Powered by Matterport</p>
              </div>
            </div>
          )}

          {/* Interactive Dollhouse Map Overlay */}
          <AnimatePresence>
            {showMap && (
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="absolute top-8 left-8 w-64 md:w-80 bg-black/80 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl"
              >
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <h4 className="font-bold text-sm uppercase tracking-widest flex items-center gap-2"><Eye size={16} /> Map Navigation</h4>
                  <button onClick={() => setShowMap(false)} className="text-white/50 hover:text-white transition-colors"><X size={18} /></button>
                </div>
                
                <div className="relative w-full aspect-square bg-zinc-900 rounded-xl border border-white/10 overflow-hidden mb-4">
                  {/* Mock Floorplan Graphic */}
                  <div className="absolute inset-4 border-2 border-dashed border-white/20 grid grid-cols-2 grid-rows-2 gap-2 p-2">
                    <div className="border border-white/10 bg-white/5" />
                    <div className="border border-white/10 bg-white/5" />
                    <div className="border border-white/10 bg-white/5" />
                    <div className="border border-white/10 bg-white/5" />
                  </div>
                  
                  {/* Map Hotspots */}
                  {ZONES.map(zone => (
                    <button
                      key={zone.id}
                      onClick={() => {
                        setActiveZone(zone);
                        setIsInteractive(true);
                      }}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group"
                      style={{ left: zone.x, top: zone.y }}
                    >
                      <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${activeZone.id === zone.id ? 'bg-white border-white scale-125' : 'bg-transparent border-white/50 group-hover:border-white'}`} />
                      <span className={`absolute top-6 whitespace-nowrap text-[10px] font-bold tracking-widest uppercase transition-colors ${activeZone.id === zone.id ? 'text-white' : 'text-white/50 group-hover:text-white'}`}>
                        {zone.label}
                      </span>
                    </button>
                  ))}
                </div>
                
                <p className="text-xs text-white/50 text-center">Select a zone to jump directly to that space in 3D.</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Persistent Interactive Navigation Hint */}
          <div className="absolute bottom-8 right-8 flex items-center gap-4 pointer-events-none">
            <div className={`backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-xs font-medium transition-all duration-500 ${isInteractive ? 'bg-green-500/20 text-green-400' : 'bg-black/50 text-white/80'}`}>
              <span className={`w-2 h-2 rounded-full ${isInteractive ? 'bg-green-400 animate-pulse' : 'bg-zinc-500'}`} />
              {isInteractive ? `Viewing: ${activeZone.label}` : 'Virtual Space Idle'}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
