import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [sidebar, setSidebar] = React.useState(false);

  return (
    <div className="w-full text-white z-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-4xl font-bold uppercase px-3">
            Orange <span className="font-normal text-2xl">Mint</span>
          </h1>

          {/* Links - Shown only on larger screens (md and above) */}
          <ul className="hidden md:flex md:space-x-6 px-3 text-xl">
            <li><a href="#" className="hover:text-orange-300 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-orange-300 transition-colors">Where to find</a></li>
            <li><a href="#" className="hover:text-orange-300 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-orange-300 transition-colors">About</a></li>
          </ul>

          {/* Mobile Menu Icon - Shown only on small screens */}
          <div 
            onClick={() => setSidebar(!sidebar)} 
            className="md:hidden cursor-pointer z-20 px-3"
          >
            <Menu size={32} />
          </div>
        </div>
      </div>
      
      {/* Mobile Sidebar Menu */}
      {sidebar && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-30 md:hidden">
          <div className="bg-gray-800 h-full w-64 p-5 transform transition-transform duration-300">
            <div className="flex justify-end">
              <button 
                onClick={() => setSidebar(false)}
                className="text-white text-xl"
              >
                ✕
              </button>
            </div>
            <ul className="mt-8 space-y-4 text-xl">
              <li><a href="#" className="block py-2 hover:text-orange-300 transition-colors">Home</a></li>
              <li><a href="#" className="block py-2 hover:text-orange-300 transition-colors">Where to find</a></li>
              <li><a href="#" className="block py-2 hover:text-orange-300 transition-colors">Contact</a></li>
              <li><a href="#" className="block py-2 hover:text-orange-300 transition-colors">About</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;