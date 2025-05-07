import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const footerVariants = {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.footer 
      className='bg-gradient-to-l from-[#d65609] to-[#ff6a00] pt-12 pb-8'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        
        {/* Grid Layout for Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Brand Section */}
          <motion.div 
            className='space-y-6'
            variants={itemVariants}
          >
            <h1 className='text-3xl font-bold text-white font-serif tracking-tight'>Orange Mint</h1>
            <p className='text-sm text-white/90 leading-relaxed'>
              Fresh from our orchards to your table. We specialize in delivering the juiciest, most flavorful oranges straight from nature's bounty. Our commitment to quality ensures every fruit is packed with vitamins and sunshine.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-xs">🍊</span>
              </div>
              <span className="text-white/80 text-sm">Certified Organic</span>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            variants={itemVariants}
          >
            <h1 className='text-xl font-bold text-white mb-4 uppercase tracking-wider'>Quick Links</h1>
            <ul className="grid grid-cols-2 gap-3 text-white/90">
              {['Home', 'Products', 'Recipes', 'About Us', 'Contact', 'FAQ'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href="#" 
                    className="hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <span className="mr-1">•</span> {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media Section */}
          <motion.div 
            className='text-white'
            variants={itemVariants}
          >
            <h1 className='text-xl font-bold mb-4 uppercase tracking-wider'>Connect With Us</h1>
            <p className='text-white/90 mb-4 text-sm'>Join our community for fresh updates and special offers.</p>
            
            <div className="flex space-x-4 mt-2">
              {[
                { icon: <FaFacebook className="text-xl" />, name: "Facebook" },
                { icon: <FaInstagram className="text-xl" />, name: "Instagram" },
                { icon: <FaTwitter className="text-xl" />, name: "Twitter" },
                { icon: <FaYoutube className="text-xl" />, name: "YouTube" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="hover:text-white text-white/80 transition-colors duration-200"
                  whileHover={{ y: -3 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-white mb-2">NEWSLETTER SIGNUP</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 text-sm bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-white rounded-l"
                />
                <button className="bg-white text-orange-600 px-3 py-2 text-sm font-medium rounded-r hover:bg-white/90 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Copyright Section */}
        <motion.div 
          className="text-center text-white/70 text-xs mt-10 border-t border-white/20 pt-6 max-w-6xl mx-auto"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div>© {new Date().getFullYear()} Orange Mint. All Rights Reserved.</div>
            <div className="mt-2 sm:mt-0 flex space-x-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;