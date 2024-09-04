import React, { useState } from 'react';

const PaymentComponent = (props) => {
  const [adultTickets, setAdultTickets] = useState(1);
  const [childTickets, setChildTickets] = useState(1);
  const [coupon, setCoupon] = useState(-50);  // Example coupon value
  const [taxes, setTaxes] = useState(125);   // Example taxes value
  const [donation, setDonation] = useState(3); // Example donation value
  const ticketPrice = 600;
  
  const handleIncrement = (setter) => setter(prev => prev + 1);
  const handleDecrement = (setter) => setter(prev => (prev > 1 ? prev - 1 : 1));

  const totalPrice = (adultTickets + childTickets) * ticketPrice + taxes + donation + coupon;

  return (
    <div className="bg-[#FFFFFF] p-6 md:p-12 border-2 border-gray-300 rounded-lg max-w-lg mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mt-[-10px] mb-8">
        <h3 className="text-lg font-bold">
          Tickets for <span className="text-green-600">10:30 AM</span> on <span>26th August 2024</span>
        </h3>
        <button className="text-xl font-bold text-red-600" onClick={() => props.pay()}>✕</button>
      </div>

      {/* Ticket Selection */}
      <div className="space-y-4 mb-4">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-lg font-semibold">Adult Ticket</h4>
            <span>₹ 600</span>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handleDecrement(setAdultTickets)}
              className="px-3 py-1 border border-gray-300 rounded-l-lg bg-gray-200"
            >
              -
            </button>
            <input
              type="text"
              value={adultTickets}
              readOnly
              className="w-12 border-t border-b text-center"
            />
            <button
              onClick={() => handleIncrement(setAdultTickets)}
              className="px-3 py-1 border border-gray-300 rounded-r-lg bg-gray-200"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-lg font-semibold">Child Ticket</h4>
            <span>₹ 600</span>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handleDecrement(setChildTickets)}
              className="px-3 py-1 border border-gray-300 rounded-l-lg bg-gray-200"
            >
              -
            </button>
            <input
              type="text"
              value={childTickets}
              readOnly
              className="w-12 border-t border-b text-center"
            />
            <button
              onClick={() => handleIncrement(setChildTickets)}
              className="px-3 py-1 border border-gray-300 rounded-r-lg bg-gray-200"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Offers */}
      <div className="border-t border-b py-4 mb-4">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold">Offers</h4>
          <button className="text-red-600 text-sm">View offers</button>
        </div>
        <p className="text-sm text-gray-600">Save ₹50.70 with code TU_TO_GYA</p>
        <input
          type="text"
          placeholder="Select a promo code"
          className="w-full border rounded-lg px-3 py-2 mt-2"
        />
      </div>

      {/* Summary */}
      <div className="border rounded-lg p-4 bg-gray-100 mb-4">
        <div className="flex justify-between items-center mb-2">
          <span>Ticket Total</span>
          <span>₹{(adultTickets + childTickets) * ticketPrice}.00</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span>Coupon/Offer</span>
          <span className="text-red-600">₹{coupon}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span>Taxes</span>
          <span>₹{taxes}.00</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span>Donate ₹3 to Feeding India Foundation</span>
          <button className="text-red-600 text-sm">Add</button>
        </div>
        <div className="flex justify-between items-center text-xl font-bold">
          <span>Grand Total</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Acceptance and Payment */}
      <div className="space-y-4">
        <div>
          <input type="checkbox" id="accept" className="mr-2" />
          <label htmlFor="accept" className="text-sm">
            I accept the{' '}
            <a href="#" className="text-red-600 underline">
              cancellation policy
            </a>{' '}
            and{' '}
            <a href="#" className="text-red-600 underline">
              booking terms
            </a>{' '}
            for this booking.
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 border p-2 rounded-lg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Google_Pay_Logo.svg" alt="Google Pay" className="w-6 h-6" />
            <span>Google Pay</span>
          </button>
        </div>
        <button className="w-full bg-red-600 text-white py-3 rounded-lg text-lg font-bold">
          ₹{totalPrice.toFixed(2)} Book Now
        </button>
      </div>
    </div>
  );
};

export default PaymentComponent;
