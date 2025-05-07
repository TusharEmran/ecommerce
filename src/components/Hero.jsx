import { useState } from 'react';
import { motion } from 'framer-motion';
import Orange from '../Pictures/orange.png';
import Navbar from './Navbar';

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);

  // Floating background elements variants
  const floatingElements = Array(8).fill().map((_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 2,
    rotate: Math.random() * 360
  }));

  return (
    <main className="md:px-12 md:py-6 bg-[#d65609] overflow-hidden">
      <section className="relative min-h-[650px] bg-gradient-to-r from-[#fb8f2a] to-[#ff6a00] w-full md:rounded-xl shadow-md">
        
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingElements.map((element) => (
            <motion.div
              key={element.id}
              className="absolute rounded-full opacity-10"
              style={{
                width: `${element.size}px`,
                height: `${element.size}px`,
                left: `${element.x}%`,
                top: `${element.y}%`,
                background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                transform: `rotate(${element.rotate}deg)`
              }}
              animate={{
                y: [0, -20, 0, 10, 0],
                x: [0, 10, -5, 0],
                opacity: [0.1, 0.15, 0.1],
                rotate: element.rotate + 360
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                delay: element.delay
              }}
            />
          ))}
        </div>

        {/* Navbar */}
        <div className="container mx-auto max-w-screen-xl relative z-10">
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[650px] relative z-10">
          
          {/* Text Section */}
          <motion.div 
            className="text-white space-y-4 px-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl pl-6 md:pl-14">01___________</h1>
            <motion.h1 
              className="text-5xl font-bold uppercase text-shadow"
              whileHover={{ scale: 1.02 }}
            >
              A Healthy Fruit
            </motion.h1>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nam, cupiditate porro sunt omnis.</p>
            <motion.button 
              className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-amber-600 duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
          </motion.div>

          {/* Image Section - Static but with subtle hover effect */}
          <div>
            <motion.img 
              src={Orange} 
              alt="Fresh orange" 
              className="relative img-shadow z-10 w-[300px] md:mx-[-20px] lg:w-[350px] lg:mx-[100px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
            />
          </div>

          <div className="md:hidden"></div>
        </div>

        {/* Large Text at Bottom */}
        <motion.h1 
          className="text-center text-[80px] sm:text-[120px] md:text-[150px] xl:text-[180px] text-white uppercase font-bold absolute bottom-0 w-full z-0 opacity-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.2 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Orange
        </motion.h1>

        {/* Sidebar */}
        {sidebar && (
          <motion.div 
            className="absolute top-0 right-0 w-[200px] h-full bg-gradient-to-b from-[#fb8f2a] to-[#ff6a00] z-20 p-6"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            exit={{ x: 200 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ul className="text-white space-y-4 text-lg">
              {["Home", "Where to find", "Contact", "About"].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a href="#">{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;