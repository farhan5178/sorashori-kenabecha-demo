import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Store, LogIn } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-primary' : 'text-slate-500 hover:text-primary';
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          <Store size={28} />
          <span>সরাসরি-কেনাবেচা</span>
        </Link>
        
        <nav className="flex gap-6">
          <Link to="/" className={`font-medium transition-colors ${isActive('/')}`}>হোম</Link>
          <Link to="/retailer-dashboard" className={`font-medium transition-colors ${isActive('/retailer-dashboard')}`}>রিটেইলার</Link>
          <Link to="/supplier-dashboard" className={`font-medium transition-colors ${isActive('/supplier-dashboard')}`}>সাপ্লায়ার</Link>
          <Link to="/admin-dashboard" className={`font-medium transition-colors ${isActive('/admin-dashboard')}`}>এডমিন</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="btn btn-outline py-2 px-4">
            <ShoppingCart size={20} />
            <span>কার্ট</span>
          </button>
          <button className="btn btn-primary py-2 px-4">
            <LogIn size={20} />
            <span>লগইন</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
