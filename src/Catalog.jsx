import React, { useState, useEffect } from 'react';

const MOCK_PRODUCTS = [
  /* ================= MEN'S PRODUCTS (STRICTLY APPAREL) ================= */
  {
    id: 'm1',
    name: 'Oversized Heavy Hoodie',
    price: 65,
    gender: 'men',
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800',
    colors: ['#71717a', '#111111']
  },
  {
    id: 'm2',
    name: 'Boxy Heavyweight Tee',
    price: 32,
    gender: 'men',
    category: 'shirts',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800',
    colors: ['#111111', '#f4f4f5']
  },
  {
    id: 'm3',
    name: 'Tailored Tech Joggers',
    price: 58,
    gender: 'men',
    category: 'pants',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800',
    colors: ['#27272a', '#71717a']
  },
  {
    id: 'm4',
    name: 'Canvas Worker Jacket',
    price: 89,
    gender: 'men',
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800',
    colors: ['#7c2d12', '#27272a']
  },
  {
    id: 'm5',
    name: 'Classic White Base Layer',
    price: 28,
    gender: 'men',
    category: 'shirts',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800',
    colors: ['#f4f4f5']
  },
  {
    id: 'm6',
    name: 'Minimalist Denim Jeans',
    price: 55,
    gender: 'men',
    category: 'pants',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800',
    colors: ['#1e3a8a', '#111111']
  },

  /* ================= WOMEN'S PRODUCTS (STRICTLY APPAREL) ================= */
  {
    id: 'w1',
    name: 'Ribbed Knit Top',
    price: 26,
    gender: 'women',
    category: 'shirts',
    image: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=800', // ВИПРАВЛЕНО: 100% робоче студійне фото трикотажного топу (флет-лей)
    colors: ['#71717a', '#f4f4f5']
  },
  {
    id: 'w2',
    name: 'Luxury Over-Sized Crewneck',
    price: 64,
    gender: 'women',
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800',
    colors: ['#f4f4f5', '#111111']
  },
  {
    id: 'w3',
    name: 'Linen Wide-Leg Trousers',
    price: 52,
    gender: 'women',
    category: 'pants',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800',
    colors: ['#e4e4e7', '#27272a']
  },
  {
    id: 'w4',
    name: 'Minimalist Cotton Blouse',
    price: 75,
    gender: 'women',
    category: 'shirts',
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800',
    colors: ['#a1a1aa', '#f4f4f5']
  },
  {
    id: 'w5',
    name: 'Peach Studio Tee',
    price: 38,
    gender: 'women',
    category: 'shirts',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800',
    colors: ['#f4f4f5']
  },
  {
    id: 'w6',
    name: 'Minimalist Studio Dress',
    price: 70,
    gender: 'women',
    category: 'pants',
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=800',
    colors: ['#111111', '#a1a1aa']
  }
];
export default function CatalogPage({ onNavigate, initialGender }) {
  const [activeGender, setActiveGender] = useState(initialGender);
  const [activeCategory, setActiveCategory] = useState('all');

  // Синхронізуємо стан, якщо стать перемикається зовні
  useEffect(() => {
    setActiveGender(initialGender);
    setActiveCategory('all'); 
  }, [initialGender]);

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchGender = activeGender === 'all' || product.gender === activeGender;
    const matchCategory = activeCategory === 'all' || product.category === activeCategory;
    return matchGender && matchCategory;
  });

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans pb-16">
      <div className="max-w-7xl mx-auto px-4 pt-6">
        
        {/* BACK TO HOME */}
        <button onClick={() => onNavigate('home')} className="mb-6 text-xs font-bold tracking-widest uppercase text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">
          ← Back to Home
        </button>
        
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-black tracking-tight uppercase text-zinc-950">
            {activeGender === 'all' ? 'Full Catalog' : `${activeGender} Collection`}
          </h1>
          <p className="text-xs tracking-widest text-zinc-400 uppercase mt-1">
            ASES Drop 01 / Premium Essentials
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-6 mb-8">
          {/* Gender Filter Buttons */}
          <div className="flex bg-zinc-200/60 p-1 rounded-lg border border-zinc-200">
            {['all', 'men', 'women'].map((gender) => (
              <button
                key={gender}
                onClick={() => {
                  setActiveGender(gender);
                  setActiveCategory('all');
                }}
                className={`px-5 py-2 text-xs font-bold tracking-widest uppercase rounded-md transition-all duration-200 ${
                  activeGender === gender
                    ? 'bg-zinc-950 text-white shadow-md'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                {gender === 'all' ? 'All' : gender}
              </button>
            ))}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'hoodies', label: 'Hoodies & Knits' },
              { id: 'shirts', label: 'T-Shirts & Tops' },
              { id: 'pants', label: 'Pants & Joggers' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold border tracking-wide rounded-full transition-all ${
                  activeCategory === cat.id
                    ? 'border-blue-600 bg-blue-50 text-blue-600 font-bold'
                    : 'border-zinc-300 bg-white text-zinc-600 hover:border-zinc-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative flex flex-col bg-white border border-zinc-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                
                <div className="relative aspect-[3/4] bg-zinc-50 overflow-hidden border-b border-zinc-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover filter contrast-[1.01] group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] font-black tracking-widest uppercase px-2 py-1 border border-zinc-200 rounded text-zinc-800">
                    {product.gender}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-bold text-base text-zinc-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-zinc-950 font-black text-lg mt-1">
                      ${product.price}.00
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <div className="flex space-x-1.5">
                      {product.colors.map((color, idx) => (
                        <span
                          key={idx}
                          style={{ backgroundColor: color }}
                          className="w-3 h-3 rounded-full border border-zinc-300 block cursor-pointer hover:scale-125 transition-transform"
                        />
                      ))}
                    </div>
                    <button className="text-xs font-bold tracking-wider uppercase text-zinc-400 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                      View →
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-zinc-300">
            <p className="text-zinc-400 font-medium">No items found.</p>
          </div>
        )}

      </div>
    </div>
  );
}
