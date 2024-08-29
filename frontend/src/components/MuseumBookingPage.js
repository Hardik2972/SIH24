import React, { useState } from 'react';
import Header from './Header';
import Payment from './Payment';
import TicketSelection from './TicketSelection';
import CalendarAndTimings from './CalendarAndTimings';

const MuseumBookingPage = () => {
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  function openPayment(){
    console.log("called")
    setIsPaymentVisible((prev) => {
      return !prev;
    });
  }

  return (
    <>
      <div className={`bg-gray-100 ${isPaymentVisible ? 'filter blur-md' : ''}`}>
        <Header />
        <main className="flex justify-center">
          <TicketSelection />
          <CalendarAndTimings pay={openPayment} />
        </main>
      </div>

      {isPaymentVisible && (
        <div className="absolute z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center h-[140vh]">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Payment pay={openPayment} />
          </div>
        </div>
      )}
    </>
  );
};

export default MuseumBookingPage;
