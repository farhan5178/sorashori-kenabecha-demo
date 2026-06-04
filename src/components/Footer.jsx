
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-4 max-w-7xl grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">সরাসরি-কেনাবেচা</h3>
          <p className="text-slate-400">মধ্যস্বত্বভোগী ছাড়াই সরাসরি কেনাবেচা। আমরা নিশ্চিত করি সেরা মানের পণ্য এবং দ্রুত ডেলিভারি।</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">প্রয়োজনীয় লিংক</h3>
          <ul className="text-slate-400">
            <li className="mb-2"><a href="#" className="hover:text-primary transition-colors">আমাদের সম্পর্কে</a></li>
            <li className="mb-2"><a href="#" className="hover:text-primary transition-colors">যোগাযোগ</a></li>
            <li className="mb-2"><a href="#" className="hover:text-primary transition-colors">শর্তাবলী</a></li>
            <li className="mb-2"><a href="#" className="hover:text-primary transition-colors">গোপনীয়তা নীতি</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">অ্যাপ ডাউনলোড করুন</h3>
          <p className="text-slate-400 mb-4">আমাদের মোবাইল অ্যাপ দিয়ে সহজে অর্ডার করুন।</p>
          <div className="flex gap-4">
            <button className="btn btn-primary">Play Store</button>
            <button className="btn bg-transparent border border-white text-white hover:bg-slate-800">App Store</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-7xl border-t border-slate-700 mt-8 pt-6 text-center text-slate-400">
        <p>&copy; 2026 সরাসরি-কেনাবেচা। সর্বস্বত্ব সংরক্ষিত।</p>
      </div>
    </footer>
  );
};

export default Footer;
