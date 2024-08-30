import React from 'react';
import ProductCard from './ProductCard';
const RightPanel = () => {
  return (
    <div style={{
        overflow: 'auto',
        scrollbarWidth: 'none', /* Firefox */
        msOverflowStyle: 'none', /* IE and Edge */
      }} className="flex flex-col items-center p-4 bg-[#BBAC96] w-full h-full rounded-lg shadow-md">
      {/* <div className="flex flex-col w-full md:w-1/4"> */}
        <ProductCard
          title="DINO Museum"
          description="This is my suggestion, you should visit this. It has ..."
          image="path_to_image"  // Replace with the actual image path
          price="₹199"
        />
        
        
      {/* </div> */}
    </div>
  );
};

export default RightPanel;
