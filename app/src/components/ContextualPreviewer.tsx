import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AREAS = [
  { id: 'entrance', label: 'Entrance', defaultImage: '/images/1livingroom.jpg' },
  { id: 'living', label: 'Living Room', defaultImage: '/images/3livingroom.jpg' },
  { id: 'kitchen', label: 'Kitchen', defaultImage: '/images/extracted/img_2.jpg' },
  { id: 'washroom', label: 'Washroom', defaultImage: '/images/1bathroom.jpg' },
  { id: 'balcony', label: 'Balcony', defaultImage: '/images/extracted/img_36.jpg' },
  { id: 'terrace', label: 'Terrace', defaultImage: '/images/extracted/img_43.jpg' },
  { id: 'garden', label: 'Garden', defaultImage: '/images/extracted/img_22.jpg' }
];

const DESIGNS = [
  { id: 'd1', label: 'Statvario Marble', color: 'bg-zinc-100' },
  { id: 'd2', label: 'Rustic Wood', color: 'bg-amber-900' },
  { id: 'd3', label: 'Urban Concrete', color: 'bg-zinc-500' },
  { id: 'd4', label: 'Terrazzo Blend', color: 'bg-stone-300' }
];

export default function ContextualPreviewer() {
  const [activeArea, setActiveArea] = useState(AREAS[0]);
  const [activeDesign, setActiveDesign] = useState(DESIGNS[0]);

  return (
    <section className="w-full py-32 bg-white relative z-30">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="mb-16">
          <span className="tracking-[0.4em] uppercase text-xs font-bold text-zinc-400">Contextual Previewer</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-950 mt-4">Design On The Fly</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 h-auto lg:h-[700px]">
          
          {/* Controls Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-12">
            
            {/* Area Selector */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-6 border-b border-zinc-200 pb-2">Select Space</h3>
              <div className="flex flex-wrap gap-3">
                {AREAS.map(area => (
                  <button
                    key={area.id}
                    onClick={() => setActiveArea(area)}
                    className={`px-5 py-3 rounded-full text-sm font-bold transition-all ${activeArea.id === area.id ? 'bg-[#3A0C16] text-white shadow-lg' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}
                  >
                    {area.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Design Selector */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-6 border-b border-zinc-200 pb-2">Apply Tile Design</h3>
              <div className="grid grid-cols-2 gap-4">
                {DESIGNS.map(design => (
                  <button
                    key={design.id}
                    onClick={() => setActiveDesign(design)}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${activeDesign.id === design.id ? 'border-[#3A0C16] bg-[#3A0C16]/5' : 'border-zinc-200 hover:border-zinc-300 bg-white'}`}
                  >
                    <span className={`w-8 h-8 rounded-full shadow-inner ${design.color}`} />
                    <span className="text-xs font-bold text-left">{design.label}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Dynamic Preview Area */}
          <div className="w-full lg:w-2/3 h-[500px] lg:h-full relative rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeArea.id}-${activeDesign.id}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* 
                  In a real app, these would be masked images or rendered 3D frames dynamically applying textures.
                  Here we mock it by overlaying a blend mode color over the base image to simulate a change in texture tone.
                */}
                <img 
                  src={activeArea.defaultImage} 
                  alt={activeArea.label} 
                  className="w-full h-full object-cover"
                />
                
                {/* Mock Texture Overlay */}
                <div 
                  className={`absolute inset-0 mix-blend-multiply opacity-30 ${activeDesign.color}`} 
                />
                
                {/* Info Tag */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${activeDesign.color}`} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{activeArea.label}</p>
                    <p className="text-lg font-extrabold text-zinc-950 leading-tight">{activeDesign.label}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
