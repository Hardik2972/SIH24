import React from 'react';

const CartConfirmation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-between items-center md:px-12 md:py-6">
      <div className="text-lg font-semibold">Total: ₹1334.00</div>
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Confirm</button>
    </div>
  );
};

export default CartConfirmation;
