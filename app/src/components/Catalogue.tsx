import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const CATALOGUES = [
  { id: 'c1', title: 'Grand Master Collection 2026', type: 'PDF', size: '24 MB', image: '/images/extracted/img_36.jpg' },
  { id: 'c2', title: 'Slab Tiles Architecture Series', type: 'PDF', size: '18 MB', image: '/images/extracted/img_43.jpg' },
  { id: 'c3', title: 'Bathware & Sanitary Essentials', type: 'PDF', size: '12 MB', image: '/images/1bathroom.jpg' },
  { id: 'c4', title: 'Outdoor & Elevation Facades', type: 'PDF', size: '32 MB', image: '/images/extracted/img_22.jpg' },
];

export default function Catalogue() {
  return (
    <section id="catalogues" className="w-full py-32 bg-zinc-900 relative z-30 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-zinc-400 mb-4">
              <FileText size={24} />
              <span className="font-bold uppercase tracking-widest text-sm">Download Centre</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              E-Catalogues
            </h2>
          </div>
          <p className="text-zinc-400 font-medium max-w-md">
            Explore our comprehensive range of products in detail. Download our latest digital brochures and technical spec sheets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATALOGUES.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group flex flex-col"
            >
              <div className="w-full aspect-[3/4] relative rounded-2xl overflow-hidden bg-zinc-800 mb-6 border border-white/5 shadow-2xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                
                {/* Download Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                  <button className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:scale-110 shadow-xl">
                    <Download size={24} />
                  </button>
                  <span className="text-white mt-4 font-bold tracking-widest uppercase text-xs">Download {item.type}</span>
                </div>

                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-[10px] font-bold text-white tracking-widest uppercase">
                    {item.size}
                  </span>
                </div>
              </div>
              
              <h3 className="text-white font-bold text-lg leading-tight group-hover:text-zinc-300 transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
