import React from 'react';
import { motion } from 'framer-motion';
import Worldmap from '../Pictures/world-map.png';

const WhereToBuy = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const mapVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: 0.3
      }
    },
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.div 
      className='container my-20 px-6 sm:px-0'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
        
        {/* Text & Input Section */}
        <motion.div 
          className='space-y-6 text-center md:text-left w-full max-w-lg'
          variants={containerVariants}
        >
          <motion.h1 
            className='text-3xl md:text-4xl font-bold font-serif text-gray-800'
            variants={itemVariants}
          >
            Where to buy our product?
          </motion.h1>
          
          {/* Input Fields */}
          <motion.div 
            className='flex flex-col sm:flex-row sm:items-center gap-4'
            variants={itemVariants}
          >
            <motion.input 
              type="text" 
              placeholder='Country' 
              className='border border-gray-300 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input 
              type="text" 
              placeholder='Zipcode' 
              className='border border-gray-300 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>

          {/* Search Button */}
          <motion.button 
            className='bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition duration-300 w-full sm:w-auto font-medium'
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Search Locations
          </motion.button>
        </motion.div>

        {/* World Map Image Section */}
        <motion.div 
          className='w-full flex justify-center'
          variants={mapVariants}
          whileHover="hover"
        >
          <motion.img 
            src={Worldmap} 
            alt='World Map showing our distribution network' 
            className='max-w-[400px] md:max-w-[500px] w-full drop-shadow-lg'
            initial="hidden"
            animate="visible"
          />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default WhereToBuy;