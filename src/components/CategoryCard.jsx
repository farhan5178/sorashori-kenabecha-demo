import React from 'react';

const CategoryCard = ({ title, icon: Icon, colorClass = 'text-primary', bgClass = 'bg-primary-light' }) => {
  return (
    <div className="card flex flex-col items-center justify-center p-8 cursor-pointer text-center group">
      <div className={`${bgClass} p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200`}>
        <Icon size={32} className={colorClass} />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  );
};

export default CategoryCard;
