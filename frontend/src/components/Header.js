import React from 'react';

const Header = () => {
  return (
    <header
      className="shadow-md py-4 px-6 h-[35vh] md:px-12 flex justify-between items-center"
      style={{
        backgroundImage: `url('/RectangleBackground.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.7)', // Darken the background image
      }}
    >

      {/* Overlay for effect */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5))',
        }}
      ></div>


      {/* Content overlaid */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12">
        <div className="text-white font-bold text-lg md:text-sm">
          <img
            src="/Group.png"
            alt="Museum of Illusions Logo"
            className="h-48 md:h-32 mb-4"
          />
          <div className="flex justify-center">
            <div className="text-left">
            <p className="text-slate-600">New Delhi</p>
            <p className="w-80">A Block, 30-33 1st Floor, Rajiv Chowk, Connaught Place, Delhi-110001, India</p>
            </div>

            <div className="text-left">
            <p className="text-sm md:text-base mt-2">Monday - Sunday</p>
            <p className="text-slate-700">10:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 mr-[-48px] z-50">
        <div className="bg-[#4AB425] py-4 px-3 rounded-l-lg shadow-md text-[#FFFFFF]">
          4.2 REVIEWS
        </div>
        <div className="bg-black py-4 px-3 rounded-l-lg shadow-md text-[#FFFFFF]">
          6 PHOTOS
        </div>
      </div>
      
      <div className="absolute bottom-4 right-16 bg-[#F0EBEB] text-black py-1 px-3 rounded-lg shadow-md z-50">
        Prices are Exclusive of GST, 18% Extra
      </div>
    </header>
  );
};

export default Header;
