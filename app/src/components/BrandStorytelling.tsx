import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const VIDEOS = [
  { id: 'v1', title: 'Client Diaries: Modern Villa', category: 'Testimonial', image: '/images/extracted/img_0.jpg' },
  { id: 'v2', title: 'Design Tips: Lighting & Tiles', category: 'Guide', image: '/images/extracted/img_2.jpg' },
  { id: 'v3', title: 'Client Diaries: Office Space', category: 'Testimonial', image: '/images/extracted/img_36.jpg' }
];

export default function BrandStorytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0.1, 0.9], [0.95, 1.05]);

  return (
    <section ref={containerRef} className="w-full relative py-32 bg-zinc-950 text-white overflow-hidden z-30">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        
        <div className="mb-16">
          <span className="tracking-[0.4em] uppercase text-xs md:text-sm font-semibold text-zinc-400">
            Craftsmanship & Innovation
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mt-4">
            Where Innovation Meets Art.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Featured Hero Video */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <div 
              className="relative w-full aspect-video rounded-[2rem] overflow-hidden bg-zinc-900 shadow-2xl border border-white/10 group cursor-pointer"
              onClick={() => setActiveVideo('hero')}
            >
              <motion.div style={{ scale: heroScale }} className="absolute inset-0">
                <img 
                  src="/images/1bathroom.jpg" 
                  alt="Manufacturing Video" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:scale-110 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                  <Play fill="currentColor" size={32} className="ml-2" />
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-[#3A0C16] rounded-full text-xs font-bold uppercase tracking-widest text-white">Featured</span>
                  <span className="text-xs text-white/70 font-medium">4:25 MIN</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">The Manufacturing Journey</h3>
                <p className="text-white/70 text-sm mt-2 max-w-lg line-clamp-2">Witness high-performance kilns, laser-guided polishers, and the absolute precision of our production phase.</p>
              </div>
            </div>
          </div>

          {/* Sub Grid Gallery */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {VIDEOS.map((video) => (
              <div 
                key={video.id}
                className="relative w-full aspect-video md:aspect-auto md:flex-1 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 group cursor-pointer"
                onClick={() => setActiveVideo(video.id)}
              >
                <img 
                  src={video.image} 
                  alt={video.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
                
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-colors pointer-events-none">
                  <Play fill="currentColor" size={16} className="ml-1" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1">{video.category}</span>
                  <h4 className="text-lg font-bold leading-tight">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Video Modal Placeholder */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X size={40} />
            </button>
            <div className="w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
                {/* Embedded YouTube Player Placeholder */}
                <iframe 
                    src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1`} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
