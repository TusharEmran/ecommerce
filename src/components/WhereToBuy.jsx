import React from 'react';
import Worldmap from '../Pictures/world-map.png';

const WhereToBuy = () => {
  return (
    <div className='container my-20 px-6 sm:px-0'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
        
        {/* 🟠 Text & Input Section */}
        <div className='space-y-6 text-center md:text-left w-full max-w-lg'>
          <h1 className='text-3xl md:text-4xl font-bold font-serif'>
            Where to buy our product?
          </h1>
          
          {/* 🔸 Input Fields */}
          <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
            <input 
              type="text" 
              placeholder='Country' 
              className='border border-gray-400 px-4 py-2 rounded-lg w-full sm:w-[48%]' 
            />
            <input 
              type="text" 
              placeholder='Zipcode' 
              className='border border-gray-400 px-4 py-2 rounded-lg w-full sm:w-[48%]' 
            />
          </div>

          {/* 🔸 Search Button */}
          <button className='bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition duration-300 w-full sm:w-auto'>
            Search
          </button>
        </div>

        {/* 🟠 World Map Image Section */}
        <div className='w-full flex justify-center'>
          <img 
            src={Worldmap} 
            alt='World Map' 
            className='max-w-[400px] md:max-w-[500px] w-full' 
          />
        </div>

      </div>
    </div>
  );
};

export default WhereToBuy;
