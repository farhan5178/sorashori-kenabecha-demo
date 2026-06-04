import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { Package, Coffee, Droplet, Home as HomeIcon, Baby, ArrowRight, ShieldCheck, Truck, Clock, Store } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary-light py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl grid md:grid-cols-2 items-center gap-12 relative z-10">
            <div>
              <span className="text-primary-dark font-bold mb-4 inline-block tracking-wide">খুচরা বিক্রেতা ও সরবরাহকারীদের জন্য</span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-6">
                মধ্যস্বত্বভোগী ছাড়াই <br/> <span className="text-primary">সরাসরি কেনাবেচা</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-lg">
                সরাসরি সরবরাহকারীর কাছ থেকে পণ্য কিনুন। ন্যায্য মূল্য, সেরা মান এবং দ্রুত ডেলিভারি নিশ্চিত করুন।
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary btn-large">
                  পণ্য দেখুন <ArrowRight size={20} />
                </button>
                <button className="btn bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 btn-large shadow-sm">
                  নিবন্ধন করুন
                </button>
              </div>
            </div>
            <div className="relative h-96 flex justify-center items-center">
               <div className="absolute w-72 h-72 bg-primary rounded-full opacity-10 blur-3xl z-0"></div>
               <div className="card relative z-10 p-8 text-center border-2 border-primary/20 w-72">
                 <Store size={64} className="text-primary mx-auto mb-4" />
                 <h3 className="text-2xl font-bold mb-2 text-slate-800">আপনার ডিজিটাল দোকান</h3>
                 <p className="text-slate-500 font-medium">আজই শুরু করুন</p>
               </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 border-b border-slate-200 bg-white">
          <div className="container mx-auto px-4 max-w-7xl grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <ShieldCheck size={48} className="text-primary p-2 bg-primary-light rounded-lg" />
              <div>
                <h4 className="text-lg font-bold text-slate-800">১০০% খাঁটি পণ্য</h4>
                <p className="text-slate-500">সরাসরি উৎপাদকের কাছ থেকে</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Truck size={48} className="text-secondary p-2 bg-secondary-light rounded-lg" />
              <div>
                <h4 className="text-lg font-bold text-slate-800">দ্রুত ডেলিভারি</h4>
                <p className="text-slate-500">সারা দেশে ২৪-৪৮ ঘণ্টায়</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock size={48} className="text-amber-500 p-2 bg-amber-100 rounded-lg" />
              <div>
                <h4 className="text-lg font-bold text-slate-800">২৪/৭ কাস্টমার সাপোর্ট</h4>
                <p className="text-slate-500">যেকোন প্রয়োজনে আমরা আছি</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-3xl font-bold text-slate-800">জনপ্রিয় ক্যাটাগরি</h2>
              <button className="btn btn-outline py-2 text-sm">সব দেখুন</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <CategoryCard title="খাদ্যপণ্য" icon={Package} colorClass="text-emerald-500" bgClass="bg-emerald-100" />
              <CategoryCard title="পানীয়" icon={Coffee} colorClass="text-blue-500" bgClass="bg-blue-100" />
              <CategoryCard title="ব্যক্তিগত পরিচর্যা" icon={Droplet} colorClass="text-violet-500" bgClass="bg-violet-100" />
              <CategoryCard title="গৃহস্থালী পণ্য" icon={HomeIcon} colorClass="text-amber-500" bgClass="bg-amber-100" />
              <CategoryCard title="শিশুপণ্য" icon={Baby} colorClass="text-pink-500" bgClass="bg-pink-100" />
            </div>
          </div>
        </section>

        {/* Best Selling Products */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">বেস্ট সেলিং পণ্য</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <ProductCard title="ফ্রেশ সয়াবিন তেল - ৫ লিটার" price="৮০০" originalPrice="৮৫০" supplier="মেঘনা গ্রুপ" />
              <ProductCard title="রাঁধুনী হলুদ গুঁড়া - ২০০ গ্রাম" price="১১০" originalPrice="১২০" supplier="স্কয়ার ফুড" />
              <ProductCard title="ইস্পাহানি মির্জাপুর চা - ৫০০ গ্রাম" price="২২০" originalPrice="২৩৫" supplier="ইস্পাহানি লিমিটেড" />
              <ProductCard title="সার্ফ এক্সেল ওয়াশিং পাউডার - ১ কেজি" price="১৫০" originalPrice="১৬০" supplier="ইউনিলিভার বাংলাদেশ" />
              <ProductCard title="প্রাণ ম্যাংগো ফ্রুট ড্রিংক - ১ লিটার" price="৬০" supplier="প্রাণ-আরএফএল" />
              <ProductCard title="ডাবর আমলা হেয়ার অয়েল - ২০০ মিলি" price="১৪০" originalPrice="১৫০" supplier="ডাবর" />
              <ProductCard title="ম্যাগি নুডলস - ৮ প্যাক" price="১৪৫" supplier="নেস্লে বাংলাদেশ" />
              <ProductCard title="লাইফবয় সাবান - ১০০ গ্রাম" price="৪০" supplier="ইউনিলিভার বাংলাদেশ" />
            </div>
            <div className="text-center mt-12">
              <button className="btn btn-outline btn-large">আরও পণ্য দেখুন</button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Home;
