import { useState } from 'react';
import Orange from '../Pictures/orange.png';
import Navbar from './Navbar';

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <main className="md:px-12 md:py-6 bg-[#d65609]">
      <section className="relative min-h-[650px] bg-gradient-to-r from-[#fb8f2a] to-[#ff6a00] w-full md:rounded-xl shadow-md">
        
        {/* Navbar */}
        <div className="container mx-auto max-w-screen-xl">
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[650px]">
          
          {/* Text Section */}
          <div className="text-white space-y-4 px-4">
            <h1 className="text-3xl pl-6 md:pl-14">01___________</h1>
            <h1 className="text-5xl font-bold uppercase text-shadow">A Healthy Fruit</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nam, cupiditate porro sunt omnis.</p>
            <div>
              <button className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-amber-600 duration-300 cursor-pointer">
                Shop Now
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div>
            <img 
              src={Orange} 
              alt="Not found" 
              className="relative img-shadow z-10 w-[300px] md:mx-[-20px] lg:w-[350px] lg:mx-[100px] "
            />
          </div>

          {/* Sidebar Placeholder */}
          <div className="md:hidden"></div>
        </div>

        {/* Large Text at Bottom */}
        <h1 className="text-center text-[80px] sm:text-[120px] md:text-[150px] xl:text-[180px] text-white uppercase font-bold absolute bottom-0 w-full z-0 text-shadow">
          Orange
        </h1>

        {/* Sidebar Toggle (Mobile Menu) */}
        {sidebar && (
          <div 
            className="absolute top-0 right-0 w-[200px] h-full bg-gradient-to-b from-[#fb8f2a] to-[#ff6a00] z-10 p-6"
            onClick={() => setSidebar(false)} // Closes sidebar when clicking outside
          >
            <ul className="text-white space-y-4 text-lg">
              <li><a href="#">Home</a></li>
              <li><a href="#">Where to find</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
