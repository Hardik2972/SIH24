import React, { useState } from 'react';
import { ColoredContainer } from './ColoredContainer';

const CalendarAndTimings = (props) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [totalPrice, setTotalPrice] = useState(1334.00); // Example total price
  const arr = [
    {
      time: "11:30 AM",
      seats: 30,
      prize: 300,
    },
    {
      time: "12:30 PM",
      seats: 0,
      prize: 300,
    },
    {
      time: "11:30 AM",
      seats: 3,
      prize: 300,
    },
  ];

  return (
    <div className="p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Calendar Section */}
        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">August 2024</h3>
          <div className="grid grid-cols-7 gap-2 text-center">
            {/* Weekdays */}
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
              <span key={day} className="text-gray-500">{day}</span>
            ))}
            {/* Example Dates */}
            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
              <button
                key={day}
                className={`py-2 rounded-lg ${day === 26 ? 'bg-green-500 text-white' : 'bg-gray-100'} hover:bg-green-200`}
              >
                {day}
                <br />
                ₹1200
              </button>
            ))}
          </div>
          <div className="text-center mt-2 text-gray-500 text-sm">
            Prices are Exclusive of GST, 18% Extra
          </div>
        </div>

        {/* Timing Section */}
        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Timmings</h3>
          <div className="space-y-2">
          {arr.map((obj) => (
          <ColoredContainer inside={obj} />
          ))}
          </div>

          {/* Summary Section */}
          <div className="mt-4 p-4 border-t">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">TOTAL</span>
              <span className="text-lg font-semibold">₹{totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-red-600 text-white py-2 mt-2 rounded-lg" onClick={() => props.pay()}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarAndTimings;
