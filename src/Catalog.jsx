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
    colors: ['#71717a', '#111111'],
    isPopular: true,
    isSale: false
  },
  {
    id: 'm2',
    name: 'Boxy Heavyweight Tee',
    price: 32,
    gender: 'men',
    category: 'shirts',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800',
    colors: ['#111111', '#f4f4f5'],
    isPopular: false,
    isSale: true
  },
  {
    id: 'm3',
    name: 'Tailored Tech Joggers',
    price: 58,
    gender: 'men',
    category: 'pants',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800',
    colors: ['#27272a', '#71717a'],
    isPopular: true,
    isSale: false
  },
  {
    id: 'm4',
    name: 'Canvas Worker Jacket',
    price: 89,
    gender: 'men',
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800',
    colors: ['#7c2d12', '#27272a'],
    isPopular: false,
    isSale: false
  },
  {
    id: 'm5',
    name: 'Classic White Base Layer',
    price: 28,
    gender: 'men',
    category: 'shirts',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800',
    colors: ['#f4f4f5'],
    isPopular: false,
    isSale: true
  },
  {
    id: 'm6',
    name: 'Minimalist Denim Jeans',
    price: 55,
    gender: 'men',
    category: 'pants',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800',
    colors: ['#1e3a8a', '#111111'],
    isPopular: true,
    isSale: false
  },
  {
    id: 'm7',
    name: 'Studio Leather Sneakers',
    price: 120,
    gender: 'men',
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800',
    colors: ['#f4f4f5', '#a1a1aa'],
    isPopular: true,
    isSale: false
  },
  {
    id: 'm8',
    name: 'Premium Canvas Loafers',
    price: 95,
    gender: 'men',
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800',
    colors: ['#71717a', '#27272a'],
    isPopular: false,
    isSale: true
  },

  /* ————— WOMEN'S PRODUCTS ————— */
  {
    id: 'w1',
    name: 'Ribbed Knit Top',
    price: 26,
    gender: 'women',
    category: 'shirts',
    image: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=800',
    colors: ['#71717a', '#f4f4f5'],
    isPopular: false,
    isSale: true
  },
  {
    id: 'w2',
    name: 'Luxury Over-Sized Crewneck',
    price: 64,
    gender: 'women',
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800',
    colors: ['#f4f4f5', '#111111'],
    isPopular: true,
    isSale: false
  },
  {
    id: 'w3',
    name: 'Linen Wide-Leg Trousers',
    price: 52,
    gender: 'women',
    category: 'pants',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800',
    colors: ['#e4e4e7', '#27272a'],
    isPopular: false,
    isSale: false
  },
  {
    id: 'w4',
    name: 'Minimalist Cotton Blouse',
    price: 75,
    gender: 'women',
    category: 'shirts',
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800',
    colors: ['#a1a1aa', '#f4f4f5'],
    isPopular: true,
    isSale: true
  },
  {
    id: 'w5',
    name: 'Peach Studio Tee',
    price: 38,
    gender: 'women',
    category: 'shirts',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800',
    colors: ['#f4f4f5'],
    isPopular: false,
    isSale: false
  },
  {
    id: 'w6',
    name: 'Minimalist Studio Dress',
    price: 70,
    gender: 'women',
    category: 'pants',
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=800',
    colors: ['#111111', '#a1a1aa'],
    isPopular: true,
    isSale: false
  },
  {
    id: 'w7',
    name: 'Minimalist Leather Mules',
    price: 110,
    gender: 'women',
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800',
    colors: ['#d4d4d8', '#27272a'],
    isPopular: false,
    isSale: false
  },
  {
    id: 'w8',
    name: 'Suede Urban Sneakers',
    price: 130,
    gender: 'women',
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800',
    colors: ['#e4e4e7', '#71717a'],
    isPopular: true,
    isSale: true
  }
];

export default function Catalog({ onNavigate, initialGender }) {
  const [genderFilter, setGenderFilter] = useState(initialGender || 'all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  /* СТАНИ ДЛЯ ОФОРМЛЕННЯ ЗАМОВЛЕННЯ (CHECKOUT) */
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderNumber, setOrderNumber] = useState('');
  const [shippingForm, setShippingForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: ''
  });

  const [flyingItems, setFlyingItems] = useState([]);
  const [isCartJiggling, setIsCartJiggling] = useState(false);

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'hoodies', name: 'Hoodies & Knits' },
    { id: 'shirts', name: 'T-Shirts & Tops' },
    { id: 'pants', name: 'Pants & Joggers' },
    { id: 'shoes', name: 'Shoes & Footwear' }
  ];

  const addToCart = (product, event) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    if (event && event.clientX) {
      const newItem = {
        id: Date.now(),
        x: event.clientX,
        y: event.clientY,
        image: product.image
      };
      setFlyingItems((prev) => [...prev, newItem]);

      setTimeout(() => {
        setFlyingItems((prev) => prev.filter((i) => i.id !== newItem.id));
      }, 650);

      setTimeout(() => {
        setIsCartJiggling(true);
      }, 500);
      setTimeout(() => {
        setIsCartJiggling(false);
      }, 850);
    }
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
    const matchStatus = statusFilter === 'all' || 
                        (statusFilter === 'popular' && product.isPopular) || 
                        (statusFilter === 'sale' && product.isSale);
    return matchGender && matchCategory && matchStatus;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'high-to-low') return b.price - a.price;
    if (sortBy === 'low-to-high') return a.price - b.price;
    return 0;
  });

  /* ОБРОБКА ДАНИХ CHECKOUT ФОРМИ */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingForm(prev => ({ ...prev, [name]: value }));
  };

  const handleOpenCheckout = () => {
    setIsCartOpen(false);
    setCheckoutStep(1);
    setIsCheckoutOpen(true);
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (checkoutStep === 1) {
      setCheckoutStep(2);
    } else if (checkoutStep === 2) {
      // Генеруємо фейковий номер замовлення
      const generatedId = 'AS-' + Math.floor(100000 + Math.random() * 900000);
      setOrderNumber(generatedId);
      setCheckoutStep(3);
    }
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
    if (checkoutStep === 3) {
      setCart([]); // очищаємо кошик після успішного замовлення
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#111111] font-sans relative antialiased">
      
      {/* СТИЛІ ДЛЯ АНІМАЦІЙ */}
      <style>{`
        @keyframes flyToCart {
          0% {
            transform: translate(calc(var(--start-x) - 20px), calc(var(--start-y) - 20px)) scale(1) rotate(0deg);
            opacity: 1;
          }
          40% {
            transform: translate(calc(var(--start-x) + (100vw - var(--start-x)) * 0.35), calc(var(--start-y) - 120px)) scale(0.7) rotate(140deg);
            opacity: 0.9;
          }
          100% {
            transform: translate(calc(100vw - 60px), 25px) scale(0.05) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes jiggle {
          0%, 100% { transform: scale(1); }
          30% { transform: scale(1.25) rotate(-8deg); }
          60% { transform: scale(1.25) rotate(8deg); }
        }
        .animate-fly-item {
          animation: flyToCart 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .animate-jiggle-cart {
          animation: jiggle 0.35s ease-in-out;
        }
      `}</style>

      {/* HEADER НАВІГАЦІЯ */}
      <header className="sticky top-0 z-40 bg-[#fcfcfc]/80 backdrop-blur-md border-b border-zinc-100 px-6 py-4 flex justify-between items-center">
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="p-2 -ml-2 hover:opacity-60 transition-opacity"
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <div onClick={() => onNavigate('home')} className="cursor-pointer group">
            <h1 className="text-xl font-bold tracking-widest uppercase group-hover:text-blue-600 transition-colors">ASES STUDIO</h1>
            <p className="text-[10px] text-zinc-400 tracking-wider uppercase mt-0.5">Back to Home</p>
          </div>
        </div>

        <div className={`flex items-center gap-3 transition-transform ${isCartJiggling ? 'animate-jiggle-cart' : ''}`}>
          {totalCartPrice > 0 && (
            <span className="text-xs font-semibold text-zinc-700 tracking-wide bg-zinc-100 px-2.5 py-1 rounded-md">
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

      {/* РОЗДІЛ ФІЛЬТРІВ ТА СОРТУВАННЯ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col gap-4 mb-12 border-b border-zinc-100 pb-6">
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            
            <div className="flex flex-wrap gap-3">
              <div className="flex gap-1.5 bg-zinc-100 p-1 rounded-lg">
                {['all', 'men', 'women'].map((g) => (
                  <button
                    key={g}
                    onClick={() => setGenderFilter(g)}
                    className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all ${
                      genderFilter === g ? 'bg-white text-black shadow-sm' : 'text-zinc-500 hover:text-black'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>

              <div className="flex gap-1.5 bg-zinc-100 p-1 rounded-lg">
                {[
                  { id: 'all', name: 'All Collection' },
                  { id: 'popular', name: 'Popular' },
                  { id: 'sale', name: 'Sale' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setStatusFilter(s.id)}
                    className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all ${
                      statusFilter === s.id ? 'bg-white text-black shadow-sm' : 'text-zinc-500 hover:text-black'
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="self-start lg:self-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-zinc-100 border-none text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-lg text-zinc-700 outline-none cursor-pointer focus:ring-1 focus:ring-black"
              >
                <option value="default">Default Sorting</option>
                <option value="high-to-low">Price: High to Low</option>
                <option value="low-to-high">Price: Low to High</option>
              </select>
            </div>

          </div>

          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 mt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-4 py-1.5 text-xs font-medium whitespace-nowrap rounded-full border transition-all ${
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
          {sortedProducts.map((product) => (
            <div key={product.id} className="group relative flex flex-col justify-between">
              <div>
                <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-zinc-100 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[9px] uppercase tracking-widest font-bold text-zinc-700 px-2.5 py-1 rounded-md shadow-sm border border-black/5">
                    {product.gender}
                  </span>

                  {product.isSale && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md shadow-sm">
                      Sale
                    </span>
                  )}
                  {product.isPopular && !product.isSale && (
                    <span className="absolute top-3 right-3 bg-black text-white text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md shadow-sm">
                      Popular
                    </span>
                  )}
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
                onClick={(e) => addToCart(product, e)}
                className="mt-4 w-full bg-zinc-900 text-white text-xs font-medium py-3 rounded-lg hover:bg-black active:scale-95 transition-all uppercase tracking-wider shadow-sm"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* ВИСУВНЕ МЕНЮ ЗЛІВА */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute inset-y-0 left-0 max-w-full flex pr-10">
            <div className="w-screen max-w-xs bg-white shadow-2xl flex flex-col justify-between transform transition-transform">
              
              <div>
                <div className="px-6 py-5 border-b border-zinc-100 flex justify-between items-center">
                  <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-400">Studio Navigation</h2>
                  <button onClick={() => setIsMenuOpen(false)} className="p-1 hover:opacity-60">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="px-6 py-8 flex flex-col gap-6">
                  <a href="#contacts" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold text-zinc-800 hover:text-blue-600 transition-colors uppercase tracking-wider block border-b border-zinc-50 pb-2">Contacts</a>
                  <a href="#delivery" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold text-zinc-800 hover:text-blue-600 transition-colors uppercase tracking-wider block border-b border-zinc-50 pb-2">Delivery Terms</a>
                  <a href="#gift-cards" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold text-zinc-800 hover:text-blue-600 transition-colors uppercase tracking-wider block border-b border-zinc-50 pb-2">Gift Certificates</a>
                </div>
              </div>

              <div className="px-6 py-6 border-t border-zinc-100 text-center">
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest">© 2026 ASES STUDIO</p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ВИСУВНИЙ КОШИК ПРАВОРУЧ */}
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
                  {/* ВІДКРИТТЯ МОДАЛКИ CHECKOUT */}
                  <button 
                    onClick={handleOpenCheckout}
                    className="w-full bg-black text-white py-3.5 text-xs font-semibold rounded-xl tracking-widest uppercase hover:opacity-90 transition-opacity"
                  >
                    Checkout Now
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* ІНТЕРАКТИВНЕ ВІКНО ОФОРМЛЕННЯ ЗАМОВЛЕННЯ (CHECKOUT MODAL) */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={handleCloseCheckout} />
          
          <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Шапка Модалки */}
            <div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <div>
                <h3 className="text-base font-bold tracking-wider uppercase">Checkout</h3>
                {checkoutStep < 3 && <p className="text-[11px] text-zinc-400 mt-0.5">Step {checkoutStep} of 2</p>}
              </div>
              <button onClick={handleCloseCheckout} className="p-1 hover:opacity-60 text-zinc-400 hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Контент Модалки з внутрішнім скролом */}
            <div className="p-6 overflow-y-auto flex-1">
              
              {/* КРОК 1: ДАНІ ДОСТАВКИ */}
              {checkoutStep === 1 && (
                <form onSubmit={handleNextStep} className="space-y-4">
                  <h4 className="text-xs font-bold uppercase text-zinc-400 tracking-wider mb-2">Shipping Information</h4>
                  
                  <div>
                    <label className="text-xs font-semibold text-zinc-600 uppercase tracking-wide block">Full Name</label>
                    <input 
                      type="text" name="fullName" required 
                      value={shippingForm.fullName} onChange={handleInputChange}
                      placeholder="John Doe"
                      className="mt-1 w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2.5 text-sm outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-zinc-600 uppercase tracking-wide block">Email Address</label>
                      <input 
                        type="email" name="email" required 
                        value={shippingForm.email} onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="mt-1 w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2.5 text-sm outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-zinc-600 uppercase tracking-wide block">Phone Number</label>
                      <input 
                        type="tel" name="phone" required 
                        value={shippingForm.phone} onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="mt-1 w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2.5 text-sm outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-600 uppercase tracking-wide block">Street Address</label>
                    <input 
                      type="text" name="address" required 
                      value={shippingForm.address} onChange={handleInputChange}
                      placeholder="123 Studio Street, Apt 4B"
                      className="mt-1 w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2.5 text-sm outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-600 uppercase tracking-wide block">City</label>
                    <input 
                      type="text" name="city" required 
                      value={shippingForm.city} onChange={handleInputChange}
                      placeholder="New York"
                      className="mt-1 w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2.5 text-sm outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-black text-white text-xs font-semibold py-3.5 rounded-xl uppercase tracking-widest mt-6 hover:opacity-90 active:scale-[0.99] transition-all"
                  >
                    Continue to Payment
                  </button>
                </form>
              )}

              {/* КРОК 2: МЕТОД ОПЛАТИ */}
              {checkoutStep === 2 && (
                <form onSubmit={handleNextStep} className="space-y-5">
                  <h4 className="text-xs font-bold uppercase text-zinc-400 tracking-wider mb-2">Payment Method</h4>
                  
                  {/* Перемикач методів */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 border rounded-xl flex flex-col items-center gap-2 transition-all ${
                        paymentMethod === 'card' ? 'border-black bg-zinc-50 font-semibold' : 'border-zinc-200 text-zinc-500'
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                      </svg>
                      <span className="text-xs">Credit Card</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-3 border rounded-xl flex flex-col items-center gap-2 transition-all ${
                        paymentMethod === 'cod' ? 'border-black bg-zinc-50 font-semibold' : 'border-zinc-200 text-zinc-500'
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-.446-.26-.835-.63-1.013l-1.637-2.973A1.125 1.125 0 0 0 18 6.75h-2.25m3 4.5H16.5m-3-4.5V4.5A2.25 2.25 0 0 0 11.25 2.25h-9M10.5 2.25v12a2.25 2.25 0 0 0 2.25 2.25H21" />
                      </svg>
                      <span className="text-xs">Pay on Delivery</span>
                    </button>
                  </div>

                  {/* Поля для карти */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-3 pt-2">
                      <div>
                        <label className="text-xs font-semibold text-zinc-600 uppercase tracking-wide block">Card Number</label>
                        <input 
                          type="text" required maxLength="19" placeholder="•••• •••• •••• ••••"
                          className="mt-1 w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2.5 text-sm outline-none focus:border-black transition-colors"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-semibold text-zinc-600 uppercase tracking-wide block">Expiry Date</label>
                          <input 
                            type="text" required maxLength="5" placeholder="MM/YY"
                            className="mt-1 w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2.5 text-sm outline-none focus:border-black transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-zinc-600 uppercase tracking-wide block">CVC / CVV</label>
                          <input 
                            type="password" required maxLength="3" placeholder="•••"
                            className="mt-1 w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2.5 text-sm outline-none focus:border-black transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'cod' && (
                    <div className="p-4 bg-zinc-50 rounded-xl text-xs text-zinc-500 leading-relaxed border border-dashed border-zinc-200">
                      You will pay for your order in cash or via terminal directly to the courier upon receipt. Additional processing fees may apply depending on your location.
                    </div>
                  )}

                  {/* Сума замовлення та кнопка завершення */}
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">Total Amount:</span>
                    <span className="text-lg font-bold">${totalCartPrice}.00</span>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-black text-white text-xs font-semibold py-3.5 rounded-xl uppercase tracking-widest hover:opacity-90 active:scale-[0.99] transition-all"
                  >
                    Place Order (${totalCartPrice}.00)
                  </button>
                </form>
              )}

              {/* КРОК 3: УСПІШНЕ ЗАВЕРШЕННЯ */}
              {checkoutStep === 3 && (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-zinc-900 text-white rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold tracking-tight">Order Placed Successfully!</h4>
                    <p className="text-xs text-zinc-400 mt-1">Thank you for your purchase, {shippingForm.fullName}.</p>
                  </div>

                  <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 max-w-xs mx-auto text-left space-y-1.5">
                    <p className="text-xs font-medium text-zinc-600">Order Number: <span className="text-black font-bold tracking-wide">{orderNumber}</span></p>
                    <p className="text-xs font-medium text-zinc-600">Delivery to: <span className="text-black">{shippingForm.city}, {shippingForm.address}</span></p>
                    <p className="text-xs font-medium text-zinc-600">Status: <span className="text-blue-600 font-semibold">Processing</span></p>
                  </div>

                  <p className="text-[11px] text-zinc-400 max-w-xs mx-auto">
                    A confirmation email has been sent to <span className="text-zinc-700 font-medium">{shippingForm.email}</span> with tracking information.
                  </p>

                  <button 
                    onClick={handleCloseCheckout}
                    className="w-full bg-zinc-900 text-white text-xs font-semibold py-3.5 rounded-xl uppercase tracking-widest hover:bg-black transition-all pt-3"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* ДИНАМІЧНИЙ РЕНДЕР ЛІТАЮЧИХ ЕЛЕМЕНТІВ */}
      {flyingItems.map((item) => (
        <div
          key={item.id}
          className="fixed pointer-events-none z-50 w-11 h-11 rounded-full border border-white bg-zinc-200 shadow-xl overflow-hidden animate-fly-item"
          style={{
            '--start-x': `${item.x}px`,
            '--start-y': `${item.y}px`,
            left: 0,
            top: 0,
          }}
        >
          <img src={item.image} alt="flying asset" className="w-full h-full object-cover" />
        </div>
      ))}

    </div>
  );
}
