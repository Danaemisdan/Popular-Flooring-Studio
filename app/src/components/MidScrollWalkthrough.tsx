import { ArrowRight } from 'lucide-react';

export default function MidScrollWalkthrough() {
  return (
    <section className="w-full bg-zinc-950 flex flex-col items-center py-24 gap-24">
      
      {/* Scene 1 */}
      <div className="relative w-full flex flex-col items-center justify-center perspective-[1000px]">
        <div className="relative w-[80vw] h-[80vh] flex items-center justify-center">
          <img src="/images/1livingroom.jpg" alt="Living Room Walkthrough" className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10" />
          <div className="absolute inset-0 bg-black/40 rounded-3xl" />
          
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <span className="text-white/80 uppercase tracking-widest text-xs font-bold mb-4">Step 1</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl">Elevate The Entrance</h2>
            <button className="bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:scale-105 transition-transform">
              View Hallway Collections <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Scene 2 */}
      <div className="relative w-full flex flex-col items-center justify-center perspective-[1000px]">
        <div className="relative w-[80vw] h-[80vh] flex items-center justify-center">
          <img src="/images/1bathroom.jpg" alt="Bathroom Walkthrough" className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10" />
          <div className="absolute inset-0 bg-black/40 rounded-3xl" />
          
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <span className="text-white/80 uppercase tracking-widest text-xs font-bold mb-4">Step 2</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl">Refine The Private Spaces</h2>
            <button className="bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:scale-105 transition-transform">
              View Bathware Collections <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
