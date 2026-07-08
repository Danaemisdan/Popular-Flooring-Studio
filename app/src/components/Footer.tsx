export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-t from-black via-[#0a0a0a] to-zinc-950 flex flex-col items-center justify-between relative z-50 overflow-hidden min-h-[60vh] pt-32 pb-12">
            {/* Elegant glass-like reflection line to separate from above customizer */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Micro typography floating centrally */}
            <div className="flex flex-col items-center gap-4 text-white/50 text-xs tracking-[0.4em] uppercase font-bold relative z-20 mb-20">
                <p>Designed for Architectural Brilliance</p>
                <p>&copy; {new Date().getFullYear()} Popular Flooring Studio</p>
            </div>
            
            {/* Premium, sharp logo securely anchored to the baseline */}
            <div className="relative w-full flex justify-center z-10 px-6">
                <img 
                    src="/images/logo_professional.svg" 
                    alt="Popular Flooring Studio Logo" 
                    className="w-[70vw] md:w-[40vw] max-w-[600px] h-auto object-contain drop-shadow-[0_-5px_30px_rgba(255,255,255,0.08)] opacity-100"
                    style={{ filter: 'brightness(0) invert(1) opacity(0.95)' }} 
                />
            </div>
            
            {/* Top Ambient Vignette masking the entrance */}
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-0"></div>
        </footer>
    );
}
