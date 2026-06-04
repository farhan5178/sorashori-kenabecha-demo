import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ title, price, originalPrice, image, supplier }) => {
  return (
    <div className="card flex flex-col h-full">
      <div className="h-40 bg-slate-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-slate-400">ছবি</span>
        )}
      </div>
      <div className="flex-1 flex flex-col">
        <p className="text-sm text-slate-500 mb-1">{supplier}</p>
        <h3 className="text-lg font-bold mb-2 flex-1">{title}</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-primary">৳{price}</span>
          {originalPrice && (
            <span className="text-sm line-through text-slate-400">৳{originalPrice}</span>
          )}
        </div>
        <button className="btn btn-primary w-full py-2">
          <ShoppingCart size={18} />
          কার্টে যোগ করুন
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
