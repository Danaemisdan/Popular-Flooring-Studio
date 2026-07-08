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
  const location = useLocation();


  return (
    <nav className="sticky top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 bg-[#1a1a1a] text-white shadow-md">
      <div className="flex justify-between items-center w-full max-w-[1600px] mx-auto">
        
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
    </nav>
  );
}
