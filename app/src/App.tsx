import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Splash from './components/Splash';
import Lenis from '@studio-freight/lenis';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Tiles from './pages/Tiles';
import SanitaryWare from './pages/SanitaryWare';
import ShopByCollection from './pages/ShopByCollection';
import ShopByCategory from './pages/ShopByCategory';
import CataloguePage from './pages/CataloguePage';
import Export from './pages/Export';
import Contact from './pages/Contact';

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    // Only show splash if it hasn't been shown in this window session
    return !sessionStorage.getItem('splashShown');
  });
  const [lenisRef, setLenisRef] = useState<Lenis | null>(null);
  const location = useLocation();

  // Initialize Lenis exactly once
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    setLenisRef(lenis);
    let frameId: number;

    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  // Manage Lenis state securely
  useEffect(() => {
    if (lenisRef) {
      if (showSplash) {
        lenisRef.stop();
      } else {
        lenisRef.start();
      }
    }
  }, [showSplash, lenisRef]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('splashShown', 'true');
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-zinc-50 min-h-screen select-none text-zinc-900">
      {showSplash && <Splash onComplete={handleSplashComplete} />}
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tiles" element={<Tiles />} />
        <Route path="/sanitary-ware" element={<SanitaryWare />} />
        <Route path="/collections" element={<ShopByCollection />} />
        <Route path="/categories" element={<ShopByCategory />} />
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route path="/export" element={<Export />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
