import React, { useState } from 'react';

const MOCK_PRODUCTS = [
  /* ————— MEN'S PRODUCTS ————— */
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
  {
    id: 'm7',
    name: 'Studio Leather Sneakers',
    price: 120,
    gender: 'men',
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800',
    colors: ['#f4f4f5', '#a1a1aa']
  },
  {
    id: 'm8',
    name: 'Premium Canvas Loafers',
    price: 95,
    gender: 'men',
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800',
    colors: ['#71717a', '#27272a']
  },

  /* ————— WOMEN'S PRODUCTS ————— */
  {
    id: 'w1',
    name: 'Ribbed Knit Top',
    price: 26,
    gender: 'women',
    category: 'shirts',
    image: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=800',
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
  },
  {
    id: 'w7',
    name: 'Minimalist Leather Mules',
    price: 110,
    gender: 'women',
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800',
    colors: ['#d4d4d8', '#27272a']
  },
  {
    id: 'w8',
    name: 'Suede Urban Sneakers',
    price: 130,
    gender: 'women',
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800',
    colors: ['#e4e4e7', '#71717a']
  }
];

export default function Catalog() {
  const [genderFilter, setGenderFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'hoodies', name: 'Hoodies & Knits' },
    { id: 'shirts', name: 'T-Shirts & Tops' },
    { id: 'pants', name: 'Pants & Joggers' },
    { id: 'shoes', name: 'Shoes & Footwear' }
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    // ВИПРАВЛЕНО: Рядок відриття кошика видалено, тепер він не вискакує сам!
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          const newQty = item.quantity + amount;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchGender = genderFilter === 'all' || product.gender === genderFilter;
    const matchCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchGender && matchCategory;
  });

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#111111] font-sans relative antialiased">
      
      {/* HEADER НАВІГАЦІЯ */}
      <header className="sticky top-0 z-40 bg-[#fcfcfc]/80 backdrop-blur-md border-b border-zinc-100 px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold tracking-widest uppercase">ASES STUDIO</h1>
          <p className="text-[10px] text-zinc-400 tracking-wider uppercase mt-0.5">Premium Essentials</p>
        </div>

        {/* БЛОК КОРЗИНИ ЗО ЗО КМУЛЯТИВНИМ ЦІННИКОМ */}
        <div className="flex items-center gap-3">
          {totalCartPrice > 0 && (
            <span className="text-xs font-semibold text-zinc-700 tracking-wide bg-zinc-100 px-2.5 py-1 rounded-md transition-all duration-300">
              ${totalCartPrice}.00
            </span>
          )}
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 flex items-center gap-2 hover:opacity-70 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {totalCartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#111111] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-medium">
                {totalCartItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* МЕНЮ ФІЛЬТРІВ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12 border-b border-zinc-100 pb-6">
          <div className="flex gap-2 bg-zinc-100 p-1 rounded-lg self-start">
            {['all', 'men', 'women'].map((g) => (
              <button
                key={g}
                onClick={() => setGenderFilter(g)}
                className={`px-4 py-1.5 text-xs font-medium uppercase tracking-wider rounded-md transition-all ${
                  genderFilter === g ? 'bg-white text-black shadow-sm' : 'text-zinc-500 hover:text-black'
                }`}
              >
                {g === 'all' ? 'All' : g}
              </button>
            ))}
          </div>

          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-4 py-1.5 text-xs whitespace-nowrap rounded-full border transition-all ${
                  categoryFilter === cat.id
                    ? 'border-black bg-black text-white'
                    : 'border-zinc-200 text-zinc-600 hover:border-black'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* СІТКА ТОВАРІВ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative flex flex-col justify-between">
              <div>
                <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-zinc-100 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[9px] uppercase tracking-widest font-semibold text-zinc-700 px-2.5 py-1 rounded-md shadow-sm border border-black/5">
                    {product.gender}
                  </span>
                </div>
                <div className="mt-4 flex justify-between items-start gap-2">
                  <div>
                    <h3 className="text-sm font-medium text-zinc-800">{product.name}</h3>
                    <div className="flex gap-1.5 mt-2">
                      {product.colors.map((c, i) => (
                        <span key={i} className="w-3 h-3 rounded-full border border-black/10 shadow-inner" style={{ backgroundColor: c }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-[#111111]">${product.price}.00</p>
                </div>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-zinc-900 text-white text-xs font-medium py-3 rounded-lg hover:bg-black transition-colors uppercase tracking-wider shadow-sm"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* ВИСУВНИЙ КОШИК */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity" onClick={() => setIsCartOpen(false)} />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
              
              <div className="px-6 py-5 border-b border-zinc-100 flex justify-between items-center">
                <h2 className="text-base font-semibold tracking-wider uppercase">Your Cart ({totalCartItems})</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-1 hover:opacity-60">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-zinc-100">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-zinc-400 py-12">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 mb-3 text-zinc-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <p className="text-sm">Your cart is completely empty</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex py-4 gap-4 items-center">
                      <img src={item.image} alt={item.name} className="w-16 h-20 object-cover rounded-lg bg-zinc-50 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="text-xs font-medium text-zinc-800 line-clamp-1">{item.name}</h4>
                        <p className="text-xs font-semibold text-zinc-900 mt-1">${item.price * item.quantity}.00</p>
                        
                        <div className="flex items-center gap-2 mt-2">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 border border-zinc-200 rounded flex items-center justify-center text-xs hover:bg-zinc-50">-</button>
                          <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 border border-zinc-200 rounded flex items-center justify-center text-xs hover:bg-zinc-50">+</button>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-zinc-400 hover:text-red-500 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="px-6 py-6 border-t border-zinc-100 bg-zinc-50">
                  <div className="flex justify-between text-sm font-medium text-zinc-900 mb-4">
                    <span>Subtotal</span>
                    <span className="font-bold">${totalCartPrice}.00</span>
                  </div>
                  <button className="w-full bg-black text-white py-3.5 text-xs font-semibold rounded-xl tracking-widest uppercase hover:opacity-90 transition-opacity">
                    Checkout Now
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

