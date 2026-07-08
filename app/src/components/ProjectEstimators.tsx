import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, PenTool, DollarSign } from 'lucide-react';

const TABS = [
  { id: 'tile', label: 'Tile Calculator', icon: Calculator, description: 'Determine the number of tiles required based on area dimensions.' },
  { id: 'cost', label: 'Area & Cost Estimator', icon: DollarSign, description: 'Convert measurements and calculate project budgeting.' },
  { id: 'paint', label: 'Paint Calculator', icon: PenTool, description: 'Estimate paint requirements to coordinate with tile selections.' },
];

export default function ProjectEstimators() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  // State for Tile Calculator
  const [tileLength, setTileLength] = useState('');
  const [tileWidth, setTileWidth] = useState('');
  const [roomLength, setRoomLength] = useState('');
  const [roomWidth, setRoomWidth] = useState('');
  const [tileResult, setTileResult] = useState<number | null>(null);

  // State for Cost Estimator
  const [costArea, setCostArea] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [costResult, setCostResult] = useState<number | null>(null);

  // State for Paint Calculator
  const [paintArea, setPaintArea] = useState('');
  const [paintResult, setPaintResult] = useState<number | null>(null);

  const calculateTiles = () => {
    if (tileLength && tileWidth && roomLength && roomWidth) {
      const roomAreaSqFt = parseFloat(roomLength) * parseFloat(roomWidth);
      const tileAreaSqFt = (parseFloat(tileLength) * parseFloat(tileWidth)) / 144; // inches to sq ft
      if (tileAreaSqFt > 0) {
        setTileResult(Math.ceil(roomAreaSqFt / tileAreaSqFt));
      }
    }
  };

  const calculateCost = () => {
    if (costArea && costPrice) {
      setCostResult(parseFloat(costArea) * parseFloat(costPrice));
    }
  };

  const calculatePaint = () => {
    if (paintArea) {
      // Assuming 1 gallon covers approx 350 sq ft
      setPaintResult(Math.ceil(parseFloat(paintArea) / 350));
    }
  };

  return (
    <section className="w-full py-32 bg-zinc-50 relative z-30">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4"
          >
            Technical Utility & Calculators
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 font-medium tracking-wide max-w-2xl"
          >
            Plan your design project with precision. Our functional calculators assist with project planning and budgeting.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Tabs Menu */}
          <div className="w-full md:w-1/3 flex flex-col gap-2">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  // Reset results when switching tabs
                  setTileResult(null);
                  setCostResult(null);
                  setPaintResult(null);
                }}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left ${activeTab === tab.id ? 'bg-[#3A0C16] text-white shadow-xl shadow-[#3A0C16]/20' : 'bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 border border-zinc-200'}`}
              >
                <tab.icon size={24} className={activeTab === tab.id ? "text-white" : "text-zinc-400"} />
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wider">{tab.label}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* Calculator Interfaces */}
          <div className="w-full md:w-2/3 bg-white border border-zinc-200 rounded-[2rem] p-8 md:p-12 shadow-2xl min-h-[450px] flex flex-col">
            <AnimatePresence mode="wait">
              {activeTab === 'tile' && (
                <motion.div
                  key="tile"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-zinc-100 rounded-xl">
                      <Calculator size={32} className="text-[#3A0C16]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-zinc-900">Tile Calculator</h3>
                      <p className="text-zinc-500 font-medium mt-1">Determine the number of tiles required.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Room Length (ft)</label>
                      <input type="number" value={roomLength} onChange={e => setRoomLength(e.target.value)} placeholder="e.g. 15" className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-[#3A0C16] transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Room Width (ft)</label>
                      <input type="number" value={roomWidth} onChange={e => setRoomWidth(e.target.value)} placeholder="e.g. 10" className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-[#3A0C16] transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Tile Length (inches)</label>
                      <input type="number" value={tileLength} onChange={e => setTileLength(e.target.value)} placeholder="e.g. 24" className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-[#3A0C16] transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Tile Width (inches)</label>
                      <input type="number" value={tileWidth} onChange={e => setTileWidth(e.target.value)} placeholder="e.g. 24" className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-[#3A0C16] transition-all" />
                    </div>
                  </div>
                  
                  {tileResult !== null && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 bg-zinc-100 rounded-xl text-center">
                      <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Total Tiles Needed</p>
                      <p className="text-4xl font-extrabold text-[#3A0C16] mt-1">{tileResult} <span className="text-lg text-zinc-900">tiles</span></p>
                      <p className="text-xs text-zinc-400 mt-2">*Includes a standard 10% overage recommendation.</p>
                    </motion.div>
                  )}

                  <div className="mt-auto pt-8">
                    <button onClick={calculateTiles} className="w-full bg-[#3A0C16] text-white py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-[#501321] transition-colors shadow-lg shadow-[#3A0C16]/20">
                      Calculate
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'cost' && (
                <motion.div
                  key="cost"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-zinc-100 rounded-xl">
                      <DollarSign size={32} className="text-[#3A0C16]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-zinc-900">Area & Cost Estimator</h3>
                      <p className="text-zinc-500 font-medium mt-1">Estimate total material cost based on coverage.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 mt-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Total Area (sq. ft)</label>
                      <input type="number" value={costArea} onChange={e => setCostArea(e.target.value)} placeholder="e.g. 500" className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-[#3A0C16] transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Price per sq. ft (₹)</label>
                      <input type="number" value={costPrice} onChange={e => setCostPrice(e.target.value)} placeholder="e.g. 120" className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-[#3A0C16] transition-all" />
                    </div>
                  </div>
                  
                  {costResult !== null && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 bg-zinc-100 rounded-xl text-center">
                      <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Estimated Cost</p>
                      <p className="text-4xl font-extrabold text-[#3A0C16] mt-1">₹{costResult.toLocaleString()}</p>
                    </motion.div>
                  )}

                  <div className="mt-auto pt-8">
                    <button onClick={calculateCost} className="w-full bg-[#3A0C16] text-white py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-[#501321] transition-colors shadow-lg shadow-[#3A0C16]/20">
                      Estimate Cost
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'paint' && (
                <motion.div
                  key="paint"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-zinc-100 rounded-xl">
                      <PenTool size={32} className="text-[#3A0C16]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-zinc-900">Paint Calculator</h3>
                      <p className="text-zinc-500 font-medium mt-1">Calculate gallons of paint needed.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 mt-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Wall Area (sq. ft)</label>
                      <input type="number" value={paintArea} onChange={e => setPaintArea(e.target.value)} placeholder="e.g. 1200" className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-[#3A0C16] transition-all" />
                    </div>
                  </div>
                  
                  {paintResult !== null && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 bg-zinc-100 rounded-xl text-center">
                      <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Paint Required</p>
                      <p className="text-4xl font-extrabold text-[#3A0C16] mt-1">{paintResult} <span className="text-lg text-zinc-900">Gallons</span></p>
                      <p className="text-xs text-zinc-400 mt-2">*Based on 350 sq.ft per gallon coverage.</p>
                    </motion.div>
                  )}

                  <div className="mt-auto pt-8">
                    <button onClick={calculatePaint} className="w-full bg-[#3A0C16] text-white py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-[#501321] transition-colors shadow-lg shadow-[#3A0C16]/20">
                      Calculate Paint
                    </button>
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
