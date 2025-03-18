import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gradient-to-l from-[#d65609] to-[#ff6a00] pt-12 pb-8'>
      <div className="container">
        
        {/* 🔹 Grid Layout for Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          
          {/* 🔸 Brand Section */}
          <div className='space-y-6'>
            <h1 className='text-3xl font-bold text-white'>Orange Mint</h1>
            <p className='text-sm text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptates enim dolor quidem eaque! Quisquam quibusdam soluta pariatur eos corporis facilis, commodi ducimus eaque vel dicta temporibus, laborum repellat tenetur?
            </p>
          </div>

          {/* 🔸 Quick Links Section */}
          <div>
            <h1 className='text-3xl font-bold text-white mb-4'>Quick Links</h1>
            <ul className="grid grid-cols-2 gap-3 text-white">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Search Fruits</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* 🔸 Placeholder for Social Media / Extra Section */}
          <div className='text-white'>
            <h1 className='text-3xl font-bold mb-4'>Follow Us</h1>
            <p>Stay connected with us through social media.</p>
            {/* Social Media Icons Placeholder */}
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:opacity-75">🔵 Facebook</a>
              <a href="#" className="hover:opacity-75">🟣 Instagram</a>
              <a href="#" className="hover:opacity-75">🔷 Twitter</a>
            </div>
          </div>

        </div>
        
        {/* 🔹 Copyright Section */}
        <div className="text-center text-white text-sm mt-10 border-t border-white pt-4">
          © 2025 Orange Mint. All Rights Reserved.
        </div>

      </div>
    </div>
  );
}

export default Footer;
