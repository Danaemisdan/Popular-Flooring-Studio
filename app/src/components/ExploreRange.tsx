import { motion } from 'framer-motion';

const categories = [
  { id: 'anti-skid', title: 'Anti Skid Tiles', image: '/images/extracted/img_22.jpg' },
  { id: 'flexi', title: 'Flexi Tiles', image: '/images/extracted/img_2.jpg' },
  { id: 'subway', title: 'Subway Tiles', image: '/images/extracted/img_43.jpg' },
  { id: 'highlighter', title: 'Highlighter Tiles', image: '/images/extracted/img_0.jpg' },
  { id: 'large-slab', title: 'Large Slab Tiles', image: '/images/extracted/img_36.jpg' },
];

export default function ExploreRange() {
  return (
    <section className="w-full py-32 bg-zinc-50 relative z-30 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-950 mb-4"
          >
            Explore Our Range
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-600 font-medium tracking-wide"
          >
            Tiles for your home decor
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category, idx) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative cursor-pointer flex flex-col"
            >
              {/* Image Container with premium glassmorphic hover effect */}
              <div className="w-full aspect-[4/5] overflow-hidden bg-zinc-200 mb-6 shadow-xl shadow-zinc-200/50 relative border-[0.5px] border-zinc-200/50 rounded-sm">
                <motion.img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                
                {/* Sexy Glassmorphic Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-[#3A0C16]/40 transition-colors duration-500 flex items-center justify-center backdrop-blur-0 group-hover:backdrop-blur-[2px] opacity-0 group-hover:opacity-100">
                  <span className="text-white border border-white/40 bg-black/20 backdrop-blur-md px-6 py-3 rounded-full font-bold uppercase tracking-[0.2em] text-xs transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    View Range
                  </span>
                </div>
              </div>
              
              <h3 className="text-center text-zinc-900 font-extrabold text-xl tracking-tight transition-colors duration-300 group-hover:text-[#3A0C16]">
                {category.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
