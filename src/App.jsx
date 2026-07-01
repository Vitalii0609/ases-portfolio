import React, { useState } from 'react';
import HomePage from './HomePage';
import CatalogPage from './Catalog';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); 
  // Зберігаємо стать, яку обрав користувач на головній сторінці
  const [selectedGender, setSelectedGender] = useState('all'); 

  const handleNavigation = (page, gender = 'all') => {
    setSelectedGender(gender);
    setCurrentPage(page);
  };

  return (
    <div className="selection:bg-blue-600 selection:text-white">
      {currentPage === 'home' ? (
        <HomePage onNavigate={handleNavigation} />
      ) : (
        <CatalogPage onNavigate={handleNavigation} initialGender={selectedGender} />
      )}
    </div>
  );
}
