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
          background: 'linear-gradient(to top right, rgba(255, 255, 255, 1) 10%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      ></div>


      {/* Content overlaid */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12">
        <div className="text-white font-bold text-lg md:text-3xl">
          <img
            src="/Group.png"
            alt="Museum of Illusions Logo"
            className="h-16 md:h-20 mb-4"
          />
          <p>New Delhi</p>
          <p>A Block, 30-33 1st Floor, Rajiv Chowk, Connaught Place, New Delhi, Delhi 110001, India</p>
          <p className="text-sm md:text-base mt-2">Monday - Sunday | 10:00 AM - 9:00 PM</p>
        </div>
        <div className="absolute top-4 right-4 flex space-x-4">
          <div className="bg-green-500 text-white py-1 px-3 rounded-lg shadow-md">
            4.2 REVIEWS
          </div>
          <div className="bg-black text-white py-1 px-3 rounded-lg shadow-md">
            6 PHOTOS
          </div>
        </div>
        <div className="absolute bottom-4 right-4 bg-white bg-opacity-50 text-black py-1 px-3 rounded-lg shadow-md">
          Prices are Exclusive of GST, 18% Extra
        </div>
      </div>
    </header>
  );
};

export default Header;
