import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Sparkles, Smartphone, Image as ImageIcon, Camera } from 'lucide-react';

type ActiveTool = 'photo' | 'ar' | 'ai';

export default function TileCustomizer() {
    const [activeTool, setActiveTool] = useState<ActiveTool>('photo');

    return (
        <section className="relative w-full py-32 px-6 md:px-12 bg-zinc-900 z-40">
            <div className="max-w-[1600px] mx-auto">
                
                <div className="text-center mb-16 flex flex-col items-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
                    >
                        Visualizer & AR Dashboard
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-400 font-medium tracking-wide max-w-2xl"
                    >
                        Bridge the gap between product images and your real-world space using our advanced visual tools.
                    </motion.p>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
                    
                    {/* Sidebar / Tools List */}
                    <div className="flex flex-col gap-4">
                        <button 
                            onClick={() => setActiveTool('photo')}
                            className={`flex flex-col items-start p-6 rounded-3xl transition-all duration-300 text-left border ${activeTool === 'photo' ? 'bg-[#3A0C16] border-[#3A0C16] shadow-xl shadow-[#3A0C16]/20 text-white' : 'bg-zinc-800/50 border-white/5 hover:bg-zinc-800 text-zinc-300 hover:text-white'}`}
                        >
                            <div className={`p-3 rounded-2xl mb-4 ${activeTool === 'photo' ? 'bg-white/10' : 'bg-zinc-700'}`}>
                                <Camera size={24} />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight mb-2">Photo Upload Visualizer</h3>
                            <p className={`text-sm ${activeTool === 'photo' ? 'text-white/80' : 'text-zinc-500'}`}>
                                Upload a photo of your own room and "try" different tile designs instantly.
                            </p>
                        </button>

                        <button 
                            onClick={() => setActiveTool('ar')}
                            className={`flex flex-col items-start p-6 rounded-3xl transition-all duration-300 text-left border ${activeTool === 'ar' ? 'bg-[#3A0C16] border-[#3A0C16] shadow-xl shadow-[#3A0C16]/20 text-white' : 'bg-zinc-800/50 border-white/5 hover:bg-zinc-800 text-zinc-300 hover:text-white'}`}
                        >
                            <div className={`p-3 rounded-2xl mb-4 ${activeTool === 'ar' ? 'bg-white/10' : 'bg-zinc-700'}`}>
                                <Smartphone size={24} />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight mb-2">Real-Time AR</h3>
                            <p className={`text-sm ${activeTool === 'ar' ? 'text-white/80' : 'text-zinc-500'}`}>
                                Immerse yourself. Reimagine every corner by capturing a room photo from your device.
                            </p>
                        </button>

                        <button 
                            onClick={() => setActiveTool('ai')}
                            className={`flex flex-col items-start p-6 rounded-3xl transition-all duration-300 text-left border ${activeTool === 'ai' ? 'bg-[#3A0C16] border-[#3A0C16] shadow-xl shadow-[#3A0C16]/20 text-white' : 'bg-zinc-800/50 border-white/5 hover:bg-zinc-800 text-zinc-300 hover:text-white'}`}
                        >
                            <div className={`p-3 rounded-2xl mb-4 ${activeTool === 'ai' ? 'bg-white/10' : 'bg-zinc-700'}`}>
                                <Sparkles size={24} />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight mb-2">AI 'Find Your Match'</h3>
                            <p className={`text-sm ${activeTool === 'ai' ? 'text-white/80' : 'text-zinc-500'}`}>
                                Upload an external inspiration image (e.g., from Pinterest) to find matching tiles in our catalog.
                            </p>
                        </button>
                    </div>

                    {/* Active Tool View */}
                    <div className="lg:col-span-2 relative bg-zinc-800/50 rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex flex-col items-center justify-center min-h-[400px]">
                        <AnimatePresence mode="wait">
                            
                            {activeTool === 'photo' && (
                                <motion.div 
                                    key="photo"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full flex flex-col items-center justify-center p-8"
                                >
                                    <div className="w-full max-w-lg aspect-video rounded-2xl border-2 border-dashed border-zinc-600 bg-zinc-800/30 flex flex-col items-center justify-center p-8 hover:bg-zinc-800/60 transition-colors cursor-pointer group">
                                        <div className="w-16 h-16 bg-zinc-700 group-hover:bg-[#3A0C16] rounded-full flex items-center justify-center text-white mb-4 transition-colors">
                                            <Upload size={28} />
                                        </div>
                                        <h4 className="text-white font-bold text-lg mb-1">Click to Upload Room Photo</h4>
                                        <p className="text-zinc-500 text-sm text-center">Supports JPG, PNG (Max 5MB)</p>
                                    </div>
                                </motion.div>
                            )}

                            {activeTool === 'ar' && (
                                <motion.div 
                                    key="ar"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full flex flex-col items-center justify-center p-8"
                                >
                                    <div className="relative w-full max-w-sm aspect-[9/16] md:aspect-[3/4] rounded-[2.5rem] border-[8px] border-zinc-800 bg-black overflow-hidden shadow-2xl flex flex-col items-center justify-center">
                                        <img src="/images/1livingroom.jpg" alt="AR Preview" className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm" />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-10 p-6 text-center">
                                            <Smartphone size={48} className="text-white mb-6 animate-bounce" />
                                            <h4 className="text-white font-bold text-xl mb-2">Scan QR to Launch AR</h4>
                                            <p className="text-zinc-300 text-sm mb-6">Experience our tiles in your real environment using your mobile device.</p>
                                            <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center shadow-lg">
                                                {/* Placeholder for QR Code */}
                                                <div className="w-24 h-24 bg-zinc-200 grid grid-cols-4 grid-rows-4 gap-1 p-1">
                                                    {Array.from({length: 16}).map((_, i) => (
                                                        <div key={i} className={`bg-zinc-800 ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-0'}`} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTool === 'ai' && (
                                <motion.div 
                                    key="ai"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full flex flex-col items-center justify-center p-8"
                                >
                                    <div className="w-full max-w-2xl h-full flex flex-col md:flex-row gap-6">
                                        
                                        <div className="flex-1 rounded-2xl border-2 border-dashed border-zinc-600 bg-zinc-800/30 flex flex-col items-center justify-center p-6 hover:bg-zinc-800/60 transition-colors cursor-pointer group">
                                            <div className="w-12 h-12 bg-zinc-700 group-hover:bg-[#3A0C16] rounded-full flex items-center justify-center text-white mb-4 transition-colors">
                                                <ImageIcon size={20} />
                                            </div>
                                            <h4 className="text-white font-bold text-center mb-1">Drag & Drop Inspiration</h4>
                                            <p className="text-zinc-500 text-xs text-center">e.g., from Pinterest or Magazines</p>
                                        </div>

                                        <div className="flex flex-col items-center justify-center px-4">
                                            <Sparkles className="text-zinc-500 hidden md:block" />
                                        </div>

                                        <div className="flex-1 rounded-2xl border border-white/5 bg-zinc-800 flex flex-col items-center justify-center p-6 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#3A0C16]/20 to-transparent pointer-events-none" />
                                            <div className="flex flex-col items-center opacity-50">
                                                <div className="grid grid-cols-2 gap-2 mb-4 w-24">
                                                    <div className="bg-zinc-700 aspect-square rounded-md" />
                                                    <div className="bg-zinc-700 aspect-square rounded-md" />
                                                    <div className="bg-zinc-700 aspect-square rounded-md" />
                                                    <div className="bg-zinc-700 aspect-square rounded-md" />
                                                </div>
                                                <p className="text-zinc-400 text-xs font-semibold text-center uppercase tracking-widest">
                                                    AI Matches Will Appear Here
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>
                            )}

                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
