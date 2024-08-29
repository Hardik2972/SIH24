import React from 'react';
import Header from './Header';
import TicketSelection from './TicketSelection';
import CalendarAndTimings from './CalendarAndTimings';
import CartConfirmation from './CartConfirmation';

const MuseumBookingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-6 md:py-12">
        <TicketSelection />
        <CalendarAndTimings />
      </main>
      <CartConfirmation />
    </div>
  );
};

export default MuseumBookingPage;
