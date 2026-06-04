import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Package, TrendingUp, Users, DollarSign, LayoutDashboard } from 'lucide-react';

const SupplierDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex flex-col md:flex-row flex-1 max-w-7xl mx-auto w-full">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white border-r border-slate-200 md:min-h-full">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-800">মেঘনা গ্রুপ</h3>
            <p className="text-slate-500 text-sm">সাপ্লায়ার ড্যাশবোর্ড</p>
          </div>
          <nav className="flex md:flex-col overflow-x-auto p-4 gap-2">
            <button 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'dashboard' ? 'bg-secondary-light text-secondary-dark' : 'text-slate-600 hover:bg-slate-100'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <LayoutDashboard size={20} />
              ওভারভিউ
            </button>
            <button 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'products' ? 'bg-secondary-light text-secondary-dark' : 'text-slate-600 hover:bg-slate-100'}`}
              onClick={() => setActiveTab('products')}
            >
              <Package size={20} />
              পণ্য ব্যবস্থাপনা
            </button>
            <button 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'orders' ? 'bg-secondary-light text-secondary-dark' : 'text-slate-600 hover:bg-slate-100'}`}
              onClick={() => setActiveTab('orders')}
            >
              <Users size={20} />
              অর্ডার ব্যবস্থাপনা
            </button>
            <button 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'sales' ? 'bg-secondary-light text-secondary-dark' : 'text-slate-600 hover:bg-slate-100'}`}
              onClick={() => setActiveTab('sales')}
            >
              <TrendingUp size={20} />
              বিক্রয় বিশ্লেষণ
            </button>
            <button 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'revenue' ? 'bg-secondary-light text-secondary-dark' : 'text-slate-600 hover:bg-slate-100'}`}
              onClick={() => setActiveTab('revenue')}
            >
              <DollarSign size={20} />
              আয়ের প্রতিবেদন
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">
              {activeTab === 'dashboard' && 'সাপ্লায়ার ওভারভিউ'}
              {activeTab === 'products' && 'পণ্য ব্যবস্থাপনা'}
              {activeTab === 'orders' && 'অর্ডার ব্যবস্থাপনা'}
              {activeTab === 'sales' && 'বিক্রয় বিশ্লেষণ'}
              {activeTab === 'revenue' && 'আয়ের প্রতিবেদন'}
            </h2>
            {activeTab === 'products' && (
              <button className="btn btn-secondary">নতুন পণ্য যোগ করুন</button>
            )}
          </div>

          {activeTab === 'dashboard' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="card !p-6 flex items-center gap-4 border-l-4 border-secondary">
                <div className="p-3 bg-secondary-light rounded-full text-secondary-dark">
                  <DollarSign size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">মোট আয়</p>
                  <h4 className="text-2xl font-bold text-slate-800">৳১২,৫০,০০০</h4>
                </div>
              </div>
              <div className="card !p-6 flex items-center gap-4 border-l-4 border-emerald-500">
                <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
                  <Package size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">মোট পণ্য</p>
                  <h4 className="text-2xl font-bold text-slate-800">৪৫ টি</h4>
                </div>
              </div>
              <div className="card !p-6 flex items-center gap-4 border-l-4 border-amber-500">
                <div className="p-3 bg-amber-100 rounded-full text-amber-600">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">নতুন অর্ডার</p>
                  <h4 className="text-2xl font-bold text-slate-800">১২ টি</h4>
                </div>
              </div>
              <div className="card !p-6 flex items-center gap-4 border-l-4 border-purple-500">
                <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">বিক্রয় বৃদ্ধি</p>
                  <h4 className="text-2xl font-bold text-slate-800">+১৫%</h4>
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'dashboard' && (
            <div className="card flex flex-col items-center justify-center min-h-[400px] text-slate-400">
              <LayoutDashboard size={64} className="mb-4 opacity-50" />
              <p className="text-lg">এই বিভাগে ডেটা লোড হচ্ছে...</p>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default SupplierDashboard;
