import React from 'react';

export default function HomePage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans flex flex-col">
      {/* HEADER */}
      <header className="border-b border-zinc-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div onClick={() => onNavigate('home')} className="text-2xl font-black tracking-[0.3em] text-zinc-950 cursor-pointer">
            ASES
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wider uppercase">
            <button onClick={() => onNavigate('catalog', 'all')} className="hover:text-blue-600 transition-colors uppercase tracking-wider text-sm font-bold">
              Catalog
            </button>
            <button onClick={() => onNavigate('catalog', 'men')} className="hover:text-blue-600 transition-colors text-zinc-500 uppercase tracking-wider text-xs">Men</button>
            <button onClick={() => onNavigate('catalog', 'women')} className="hover:text-blue-600 transition-colors text-zinc-500 uppercase tracking-wider text-xs">Women</button>
          </nav>
          <div className="relative cursor-pointer group">
            <span className="text-sm font-medium tracking-wider uppercase group-hover:text-blue-600 transition-colors">
              Cart (0)
            </span>
          </div>
        </div>
      </header>

      {/* MAIN: SPLIT SCREEN */}
      <main className="flex-1 flex flex-col md:flex-row min-h-[calc(100vh-4rem)]">
        
        {/* WOMEN SECTION */}
        <div className="relative flex-1 group overflow-hidden border-b md:border-b-0 md:border-r border-zinc-200 flex items-center justify-center bg-zinc-100">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000')] bg-cover bg-center filter grayscale contrast-115 mix-blend-multiply opacity-50 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
          <div className="relative z-10 text-center px-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase mb-4 text-zinc-950">
              Women <br /> Capsule
            </h2>
            <button onClick={() => onNavigate('catalog', 'women')} className="px-8 py-4 bg-zinc-950 text-white font-bold text-xs tracking-widest uppercase hover:bg-blue-600 transition-colors duration-300 shadow-lg">
              Shop Women
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>

        {/* MEN SECTION */}
        <div className="relative flex-1 group overflow-hidden flex items-center justify-center bg-zinc-50">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000')] bg-cover bg-center filter grayscale contrast-115 mix-blend-multiply opacity-50 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
          <div className="relative z-10 text-center px-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase mb-4 text-zinc-950">
              Men <br /> Essence
            </h2>
            <button onClick={() => onNavigate('catalog', 'men')} className="px-8 py-4 bg-zinc-950 text-white font-bold text-xs tracking-widest uppercase hover:bg-blue-600 transition-colors duration-300 shadow-lg">
              Shop Men
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>

      </main>
    </div>
  );
}
