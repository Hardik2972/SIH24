import React from 'react';

const TicketSelection = () => {
  return (
    <div className="p-6 md:p-12">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Prizes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">ADULT</h3>
          <p className="text-gray-500">12 Yrs and above (Carry ID proof)</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold">₹600</span>
            <input type="number" min="1" className="w-12 border rounded text-center" />
          </div>
        </div>
        {/* Repeat the above block for each ticket type */}
      </div>
    </div>
  );
};

export default TicketSelection;
