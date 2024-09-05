import React, { useState } from 'react';

const TicketSelection = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="p-6 flex-1 w-[60%] max-w-md mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Prizes</h2>
      <div className="space-y-8 flex flex-col justify-center">
        <div className="border p-4 rounded-lg shadow-md bg-gradient-to-r from-[#C58321] to-[#A85F09] text-white">
          <h3 className="text-lg font-semibold">ADULT</h3>
          <p className="text-sm">12 Years and above (Please carry ID proof)</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold">₹ 600</span>
            <div className="flex items-center">
              <button
                onClick={handleDecrement}
                className="px-2 py-1 border border-gray-300 rounded-l-lg bg-white text-black"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 border-t border-b text-center"
              />
              <button
                onClick={handleIncrement}
                className="px-2 py-1 border border-gray-300 rounded-r-lg bg-white text-black"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="border p-4 rounded-lg shadow-md bg-gradient-to-r from-[#C58321] to-[#A85F09] text-white">
          <h3 className="text-lg font-semibold">ADULT</h3>
          <p className="text-sm">12 Years and above (Please carry ID proof)</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold">₹ 600</span>
            <div className="flex items-center">
              <button
                onClick={handleDecrement}
                className="px-2 py-1 border border-gray-300 rounded-l-lg bg-white text-black"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 border-t border-b text-center"
              />
              <button
                onClick={handleIncrement}
                className="px-2 py-1 border border-gray-300 rounded-r-lg bg-white text-black"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="border p-4 rounded-lg shadow-md bg-gradient-to-r from-[#C58321] to-[#A85F09] text-white">
          <h3 className="text-lg font-semibold">ADULT</h3>
          <p className="text-sm">12 Years and above (Please carry ID proof)</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold">₹ 600</span>
            <div className="flex items-center">
              <button
                onClick={handleDecrement}
                className="px-2 py-1 border border-gray-300 rounded-l-lg bg-white text-black"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 border-t border-b text-center"
              />
              <button
                onClick={handleIncrement}
                className="px-2 py-1 border border-gray-300 rounded-r-lg bg-white text-black"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button className="w-full bg-red-600 text-white py-2 mt-2 rounded-lg block sm:hidden" onClick={() => props.date()}>
          Select Date
        </button>
      </div>
    </div>
  );
};

export default TicketSelection;
