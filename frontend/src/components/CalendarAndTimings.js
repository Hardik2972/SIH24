import React from 'react';

const CalendarAndTimings = () => {
  return (
    <div className="p-6 md:p-12">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Timings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Select Date</h3>
          <div className="flex items-center justify-between">
            {/* Date picker */}
            <input type="date" className="border rounded px-3 py-2 w-full" />
          </div>
        </div>
        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Select Timing</h3>
          <div className="flex flex-col space-y-2">
            <button className="flex justify-between bg-green-200 p-3 rounded-lg">
              <span>11:30 AM</span>
              <span>60 Seats</span>
              <span>₹1000</span>
            </button>
            <button className="flex justify-between bg-red-200 p-3 rounded-lg">
              <span>11:30 AM</span>
              <span>Sold Out</span>
              <span>₹1000</span>
            </button>
            {/* Add more timing buttons similarly */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarAndTimings;
