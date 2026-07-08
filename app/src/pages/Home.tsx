import Hero from '../components/Hero';
import BrandIntro from '../components/BrandIntro';
import ExploreRange from '../components/ExploreRange';
import TileCustomizer from '../components/TileCustomizer';
import VirtualShowroom from '../components/VirtualShowroom';
import BrandStorytelling from '../components/BrandStorytelling';
import ProjectEstimators from '../components/ProjectEstimators';
import DesignInspiration from '../components/DesignInspiration';
import Catalogue from '../components/Catalogue';
import MidScrollWalkthrough from '../components/MidScrollWalkthrough';
import ContextualPreviewer from '../components/ContextualPreviewer';
import ProductDetailer from '../components/ProductDetailer';

export default function Home() {
  return (
    <main className="w-full relative z-20">
      <Hero />
      
      {/* The 3D Scroll Walkthrough immediately after hero */}
      <MidScrollWalkthrough />

      {/* Primary secondary flow. The trailing pb-0 prevents white void from exposing before the footer. */}
      <div className="w-full bg-zinc-50 min-h-screen pb-0 flex flex-col items-center justify-start relative z-30 pt-0">
           
           {/* Brand Intro */}
           <BrandIntro />

           {/* Manufacturing Video & Brand Storytelling */}
           <BrandStorytelling />

           {/* Interactive Contextual Previewer (Design on the fly) */}
           <ContextualPreviewer />

           {/* Micro 3D Product Detailer */}
           <ProductDetailer />

           {/* Virtual Showroom & Matterport Integration */}
           <VirtualShowroom />

           {/* Explore Categories */}
           <ExploreRange />

           {/* Design Inspiration Collections */}
           <DesignInspiration />

           {/* The Interactive Environmental Customizer & AR Upload */}
           <TileCustomizer />

           {/* Technical Utility and Calculation Tools */}
           <ProjectEstimators />

           {/* Catalogue Gallery */}
           <Catalogue />

      </div>
    </main>
  );
}
