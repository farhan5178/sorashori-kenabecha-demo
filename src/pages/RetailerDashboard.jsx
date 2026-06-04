import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Package, ShoppingCart, Heart, Clock, CreditCard } from 'lucide-react';

const RetailerDashboard = () => {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex flex-col md:flex-row flex-1 max-w-7xl mx-auto w-full">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white border-r border-slate-200 md:min-h-full">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-800">রহিম স্টোর</h3>
            <p className="text-slate-500 text-sm">রিটেইলার ড্যাশবোর্ড</p>
          </div>
          <nav className="flex md:flex-col overflow-x-auto p-4 gap-2">
            <button 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'orders' ? 'bg-primary-light text-primary-dark' : 'text-slate-600 hover:bg-slate-100'}`}
              onClick={() => setActiveTab('orders')}
            >
              <Package size={20} />
              আমার অর্ডার
            </button>
            <button 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'cart' ? 'bg-primary-light text-primary-dark' : 'text-slate-600 hover:bg-slate-100'}`}
              onClick={() => setActiveTab('cart')}
            >
              <ShoppingCart size={20} />
              আমার কার্ট
            </button>
            <button 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'wishlist' ? 'bg-primary-light text-primary-dark' : 'text-slate-600 hover:bg-slate-100'}`}
              onClick={() => setActiveTab('wishlist')}
            >
              <Heart size={20} />
              পছন্দের পণ্য
            </button>
            <button 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'history' ? 'bg-primary-light text-primary-dark' : 'text-slate-600 hover:bg-slate-100'}`}
              onClick={() => setActiveTab('history')}
            >
              <Clock size={20} />
              অর্ডার ইতিহাস
            </button>
            <button 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'payments' ? 'bg-primary-light text-primary-dark' : 'text-slate-600 hover:bg-slate-100'}`}
              onClick={() => setActiveTab('payments')}
            >
              <CreditCard size={20} />
              পেমেন্ট হিস্টোরি
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">
              {activeTab === 'orders' && 'আমার অর্ডার'}
              {activeTab === 'cart' && 'আমার কার্ট'}
              {activeTab === 'wishlist' && 'পছন্দের পণ্য'}
              {activeTab === 'history' && 'অর্ডার ইতিহাস'}
              {activeTab === 'payments' && 'পেমেন্ট হিস্টোরি'}
            </h2>
          </div>

          {activeTab === 'orders' && (
            <div className="card !p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="p-4 font-semibold text-slate-700">অর্ডার আইডি</th>
                      <th className="p-4 font-semibold text-slate-700">তারিখ</th>
                      <th className="p-4 font-semibold text-slate-700">পরিমাণ</th>
                      <th className="p-4 font-semibold text-slate-700">স্ট্যাটাস</th>
                      <th className="p-4 font-semibold text-slate-700">অ্যাকশন</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium text-slate-900">#ORD-001</td>
                      <td className="p-4 text-slate-600">০৪ জুন, ২০২৬</td>
                      <td className="p-4 text-slate-900 font-medium">৳৩,৪৫০</td>
                      <td className="p-4">
                        <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">প্রক্রিয়াধীন</span>
                      </td>
                      <td className="p-4">
                        <button className="text-primary hover:text-primary-dark font-medium">বিস্তারিত</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium text-slate-900">#ORD-002</td>
                      <td className="p-4 text-slate-600">০১ জুন, ২০২৬</td>
                      <td className="p-4 text-slate-900 font-medium">৳১,২০০</td>
                      <td className="p-4">
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">ডেলিভারি সম্পন্ন</span>
                      </td>
                      <td className="p-4">
                        <button className="text-primary hover:text-primary-dark font-medium">বিস্তারিত</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab !== 'orders' && (
            <div className="card flex flex-col items-center justify-center min-h-[400px] text-slate-400">
              <Package size={64} className="mb-4 opacity-50" />
              <p className="text-lg">এই বিভাগে কোনো তথ্য নেই</p>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default RetailerDashboard;
