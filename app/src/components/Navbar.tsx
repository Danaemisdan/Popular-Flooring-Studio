import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT US', path: '/about' },
  { name: 'TILES', path: '/tiles' },
  { name: 'SANITARY WARE', path: '/sanitary-ware' },
  { name: 'SHOP BY COLLECTION', path: '/collections' },
  { name: 'SHOP BY CATEGORY', path: '/categories' },
  { name: 'CATALOGUE', path: '/catalogue' },
  { name: 'EXPORT', path: '/export' },
  { name: 'CONTACT US', path: '/contact' },
];

export default function Navbar() {
  const { scrollYProgress, scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    const progress = scrollYProgress.get();
    
    // Hide when scrolling down, show when scrolling up
    if (progress > 0.90 || (latest > previous && latest > 150)) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Check if we are on a dark page background (like Home hero) or a light placeholder page
  const isHomePage = location.pathname === '/';

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-colors duration-300 py-4 ${isHomePage ? 'glass' : 'bg-zinc-950 border-b border-white/10'}`}
    >
      <div className="flex justify-between items-center w-full">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-white font-extrabold tracking-widest uppercase text-xl">
            Studio
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-6 text-[10px] 2xl:text-xs font-bold tracking-widest uppercase">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`transition-colors py-2 ${location.pathname === link.path ? 'text-white border-b border-white' : 'text-zinc-400 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Trigger */}
        <button className="xl:hidden text-white">
          <Menu size={24} strokeWidth={1.5} />
        </button>

      </div>
    </motion.nav>
  );
}
