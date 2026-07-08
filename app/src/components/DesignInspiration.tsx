import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Layout, FileText, Smartphone } from 'lucide-react';

const TREND_BLOGS = [
  { id: 'b1', title: 'Popular Floor Tile Patterns for Stylish Homes', image: '/images/extracted/img_43.jpg' },
  { id: 'b2', title: "What's Trending in Tiles: Kajaria's Guide to Finishes", image: '/images/extracted/img_0.jpg' },
  { id: 'b3', title: 'Embracing Terrazzo in Modern Spaces', image: '/images/2bathroom.jpg' }
];

const WEB_STORIES = [
  { id: 's1', title: 'Minimalist Bathrooms', image: '/images/1bathroom.jpg' },
  { id: 's2', title: 'Cozy Living Areas', image: '/images/3livingroom.jpg' },
  { id: 's3', title: 'Industrial Kitchens', image: '/images/extracted/img_2.jpg' },
  { id: 's4', title: 'Outdoor Patios', image: '/images/extracted/img_22.jpg' },
  { id: 's5', title: 'Luxury Commercial', image: '/images/3bathroom.jpg' }
];

export default function DesignInspiration() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="w-full py-32 bg-zinc-50 relative z-30 overflow-hidden">
      
      {/* 1. Large-Format Showcases (High-Impact Photography) */}
      <div className="w-full h-[70vh] md:h-[90vh] relative mb-32 overflow-hidden group">
        <motion.div style={{ y: parallaxY }} className="absolute inset-0">
          <img 
            src="/images/extracted/img_36.jpg" 
            alt="Large Format Showcase" 
            className="absolute inset-0 w-full h-full object-cover scale-110"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
          <div className="max-w-[1800px] mx-auto w-full">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-white mb-6 inline-flex items-center gap-2 border border-white/30">
              <Layout size={16} /> Large-Format Showcases
            </span>
            <h2 className="text-5xl md:text-8xl font-extrabold tracking-tight text-white mb-4">
              Slab Tiles & Granalt
            </h2>
            <p className="text-xl md:text-3xl text-white/80 font-light max-w-3xl mb-8">
              Experience the seamless beauty of 800x2400 mm collections. Minimal grout lines, maximum impact.
            </p>
            <button className="bg-white text-zinc-950 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors inline-flex items-center gap-2">
              Explore Collection
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col gap-32">
        
        {/* 2. Trend Blogs Grid */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 text-[#3A0C16] mb-4">
                <FileText size={24} />
                <span className="font-bold uppercase tracking-widest text-sm">Trend Blogs</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950">
                Latest Design Insights
              </h2>
            </div>
            <button className="group flex items-center gap-2 text-zinc-600 font-bold uppercase tracking-widest text-sm hover:text-[#3A0C16] transition-colors">
              View All Articles
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TREND_BLOGS.map((blog, idx) => (
              <motion.article 
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="w-full aspect-video rounded-3xl overflow-hidden mb-6 relative bg-zinc-200 border border-zinc-200">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-[#3A0C16] transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <span className="text-sm font-medium text-zinc-500 mt-4 uppercase tracking-widest block">Read Article</span>
              </motion.article>
            ))}
          </div>
        </div>

        {/* 3. Web Stories Carousel (Mobile Friendly) */}
        <div>
          <div className="flex items-center gap-3 text-[#3A0C16] mb-4">
            <Smartphone size={24} />
            <span className="font-bold uppercase tracking-widest text-sm">Web Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 mb-12">
            Quick Visual Ideas
          </h2>

          {/* Horizontal scroll container */}
          <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 gap-6 snap-x snap-mandatory hide-scrollbar">
            {WEB_STORIES.map((story, idx) => (
              <motion.div 
                key={story.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="snap-start shrink-0 relative w-64 md:w-72 aspect-[9/16] rounded-3xl overflow-hidden bg-zinc-900 group cursor-pointer border border-zinc-200 shadow-xl"
              >
                <img src={story.image} alt={story.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Progress bar mock */}
                <div className="absolute top-4 left-4 right-4 flex gap-1">
                  <div className="h-1 bg-white/40 flex-1 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-0 group-hover:w-full transition-all duration-[3000ms] ease-linear" />
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <h4 className="text-white font-bold text-xl drop-shadow-md">{story.title}</h4>
                  <span className="text-white/80 text-xs uppercase tracking-widest mt-2 block font-medium">Tap to view</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>

      </div>
    </section>
  );
}
