import React from 'react';
import { Bell, User } from 'lucide-react';

const Header = ({ title, subtitle, variant = 'light' }) => {
  const isDark = variant === 'dark';
  
  return (
    <header className={`bg-indigo-600 text-white px-6 pt-10 pb-8 flex justify-between items-center sticky top-0 z-20 shadow-sm`}>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Start Parking</h1>
      </div>
    </header>
  );
};

export default Header;
