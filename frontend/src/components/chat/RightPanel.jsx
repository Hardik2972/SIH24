import React from 'react';
import ProductCard from './ProductCard';
import image from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
const RightPanel = () => {
  return (
    <div style={{
        overflow: 'auto',
        scrollbarWidth: 'none', /* Firefox */
        msOverflowStyle: 'none', /* IE and Edge */
      }} className="flex flex-col items-center p-4 bg-[#BBAC96] w-full h-full rounded-lg shadow-md">
      {/* <div className="flex flex-col w-full md:w-1/4"> */}
        <ProductCard
          title="Elephant Museum"
          description="Step into history at our museum and witness the ancient marvels up close!..."
          image={image}  // Replace with the actual image path
          price="₹199"
        />
        <ProductCard
          title="National Museum"
          description="Discover the artistry of ancient civilizations at our museum! ..."
          image={image2}  // Replace with the actual image path
          price="₹2000"
        />
        
        
      {/* </div> */}
    </div>
  );
};

export default RightPanel;
