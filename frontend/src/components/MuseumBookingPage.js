import React, { useState } from 'react';
import Header from './Header';
import Payment from './Payment';
import TicketSelection from './TicketSelection';
import CalendarAndTimings from './CalendarAndTimings';

const MuseumBookingPage = () => {
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(false);

  function openPayment(){
    setIsPaymentVisible((prev) => {
      return !prev;
    });
  }

  function openDateSelction(){
    setSelectedDate((prev) => {
      return !prev;
    });
  }

  return (
    <>
      <div className={`bg-gray-100 ${isPaymentVisible ? 'filter blur-md' : ''}`}>
        <div className="hidden sm:block">
          <Header />
          <main className="flex justify-center">
            <TicketSelection />
            <CalendarAndTimings pay={openPayment} />
          </main>
        </div>

        <div className="block sm:hidden">
          {selectedDate? 
            <div className="flex flex-col items-center">
              <div className="bg-[#F0EBEB] w-full text-black py-3 px-3 shadow-md z-50" onClick={()=>openDateSelction()}>
                back
              </div>

              <div className="mt-6 max-w-80 py-1 px-3 bg-[#F0EBEB] text-center text-black rounded-lg shadow-md z-50">
                Prices are Exclusive of GST, 18% Extra
              </div>

              <CalendarAndTimings pay={openPayment} />
            </div>
            :
            <>
              <Header />
              <main className="flex justify-center">
                <TicketSelection date={openDateSelction} />
              </main>
            </>
          }
        </div>
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
