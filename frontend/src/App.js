import { useState } from 'react'
import ProfileDiv from './components/profile/ProfileDiv.jsx'
import './App.css';
import AdminDiv from './components/profile/AdminDiv.jsx'
import MuseumBookingPage from './components/MuseumBookingPage';
import MainContainer from './components/chat/MainContainer';

// function App() {
//   return (
//     <div>
//       {/* <MuseumBookingPage /> */}
//       <MainContainer/>
//     </div>
//   );
// }

// function App()
// {

//   return (
//     <>
//       <ProfileDiv />
//     </>
//   )
// }

function App() {
  return (
    <div>

      <AdminDiv/>
    </div>
  );
}

export default App;
