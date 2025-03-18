import React from 'react';
import LunchDiningIcon from '@mui/icons-material/LunchDining';

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <div className="w-full text-white z-20">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold uppercase px-3">
            Orange <span className="font-normal text-2xl">Mint</span>
          </h1>

          {/* 🛠 Links - Shown only on larger screens (md and above) */}
          <ul className="hidden md:flex md:space-x-6 px-3 text-xl">
            <li><a href="#">Home</a></li>
            <li><a href="#">Where to find</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
          </ul>

          {/* 🛠 Mobile Menu Icon - Shown only on small screens */}
          <div 
            onClick={() => setSidebar(!sidebar)} 
            className="md:hidden absolute top-2 right-2 cursor-pointer z-20"
          >
            <LunchDiningIcon className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
