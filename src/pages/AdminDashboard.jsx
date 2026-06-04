import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, CheckSquare, Activity, BarChart2, Settings } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex flex-col md:flex-row flex-1 max-w-7xl mx-auto w-full">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-slate-900 text-white md:min-h-full">
          <div className="p-6 border-b border-slate-700">
            <h3 className="text-xl font-bold">সিস্টেম এডমিন</h3>
            <p className="text-slate-400 text-sm">নিয়ন্ত্রণ প্যানেল</p>
          </div>
          <nav className="flex md:flex-col overflow-x-auto p-4 gap-2">
            <button 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'users' ? 'bg-primary text-white' : 'text-slate-400 hover:bg-slate-800'}`}
              onClick={() => setActiveTab('users')}
            >
              <Users size={20} />
              ব্যবহারকারী ব্যবস্থাপনা
            </button>
            <button 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'approvals' ? 'bg-primary text-white' : 'text-slate-400 hover:bg-slate-800'}`}
              onClick={() => setActiveTab('approvals')}
            >
              <CheckSquare size={20} />
              পণ্য অনুমোদন
            </button>
            <button 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'monitoring' ? 'bg-primary text-white' : 'text-slate-400 hover:bg-slate-800'}`}
              onClick={() => setActiveTab('monitoring')}
            >
              <Activity size={20} />
              অর্ডার পর্যবেক্ষণ
            </button>
            <button 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'reports' ? 'bg-primary text-white' : 'text-slate-400 hover:bg-slate-800'}`}
              onClick={() => setActiveTab('reports')}
            >
              <BarChart2 size={20} />
              রিপোর্ট ও বিশ্লেষণ
            </button>
            <button 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'settings' ? 'bg-primary text-white' : 'text-slate-400 hover:bg-slate-800'}`}
              onClick={() => setActiveTab('settings')}
            >
              <Settings size={20} />
              সিস্টেম সেটিংস
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">
              {activeTab === 'users' && 'ব্যবহারকারী ব্যবস্থাপনা'}
              {activeTab === 'approvals' && 'পণ্য অনুমোদন'}
              {activeTab === 'monitoring' && 'অর্ডার পর্যবেক্ষণ'}
              {activeTab === 'reports' && 'রিপোর্ট ও বিশ্লেষণ'}
              {activeTab === 'settings' && 'সিস্টেম সেটিংস'}
            </h2>
          </div>

          {activeTab === 'users' && (
            <div className="card !p-0 overflow-hidden border border-slate-200">
              <div className="p-4 bg-white border-b border-slate-200 flex justify-between items-center">
                <input type="text" placeholder="ব্যবহারকারী খুঁজুন..." className="px-4 py-2 border border-slate-300 rounded-lg outline-none focus:border-primary w-64" />
                <button className="btn btn-primary">নতুন এডমিন যোগ করুন</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="p-4 font-semibold text-slate-700">নাম</th>
                      <th className="p-4 font-semibold text-slate-700">ধরন</th>
                      <th className="p-4 font-semibold text-slate-700">যোগদানের তারিখ</th>
                      <th className="p-4 font-semibold text-slate-700">স্ট্যাটাস</th>
                      <th className="p-4 font-semibold text-slate-700">অ্যাকশন</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="p-4">
                        <div className="font-medium text-slate-900">রহিম স্টোর</div>
                        <div className="text-sm text-slate-500">rahim@example.com</div>
                      </td>
                      <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">রিটেইলার</span></td>
                      <td className="p-4 text-slate-600">১০ মে, ২০২৬</td>
                      <td className="p-4"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-medium">সক্রিয়</span></td>
                      <td className="p-4">
                        <button className="text-primary hover:underline text-sm font-medium mr-3">এডিট</button>
                        <button className="text-red-500 hover:underline text-sm font-medium">ব্লক</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4">
                        <div className="font-medium text-slate-900">মেঘনা গ্রুপ</div>
                        <div className="text-sm text-slate-500">meghna@example.com</div>
                      </td>
                      <td className="p-4"><span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium">সাপ্লায়ার</span></td>
                      <td className="p-4 text-slate-600">১৫ মার্চ, ২০২৬</td>
                      <td className="p-4"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-medium">সক্রিয়</span></td>
                      <td className="p-4">
                        <button className="text-primary hover:underline text-sm font-medium mr-3">এডিট</button>
                        <button className="text-red-500 hover:underline text-sm font-medium">ব্লক</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab !== 'users' && (
            <div className="card flex flex-col items-center justify-center min-h-[400px] text-slate-400">
              <Settings size={64} className="mb-4 opacity-50" />
              <p className="text-lg">এই মডিউলটি বর্তমানে ডেভেলপমেন্টে আছে</p>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
