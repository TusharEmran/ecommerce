import React from 'react';
import Fruits1 from '../Pictures/Fruits1.webp';
import Fruits2 from '../Pictures/Fruits2.png';
import Fruits3 from '../Pictures/Fruits3.png';

const MenuData = [
  {
    id: 1,
    image: Fruits1,
    title: "Fresh Fruits",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, atque.",
    aosDelay: "300",
  },
  {
    id: 2,
    image: Fruits2,
    title: "Fresh Fruits",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, atque.",
    aosDelay: "500",
  },
  {
    id: 3,
    image: Fruits3,
    title: "Orange Juice",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, atque.",
    aosDelay: "700",
  },
];

const Menu = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Title Section */}
      <div className="flex justify-center my-10">
        <div className="text-center z-10">
          <h1 className="text-3xl font-bold text-[#413e3e]">
            Orange <span className="text-2xl font-normal text-[#fb8f2a]">Juice</span>
          </h1>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {MenuData.map((item) => (
          <div 
            key={item.id} 
            data-aos="fade-up" 
            data-aos-delay={item.aosDelay} 
            className="text-center space-y-4 text-[#333]">
            
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full max-w-[250px] mx-auto transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
            />
            
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p className="text-gray-700">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
