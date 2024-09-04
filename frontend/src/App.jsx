import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MuseumBookingPage from './components/MuseumBookingPage';
import MainContainer from './components/chat/MainContainer';
import Home from './components/Home/home';

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<MuseumBookingPage />} />
      <Route path="/gpt" element={<MainContainer />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

export default App;
