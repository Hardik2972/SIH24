import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MuseumBookingPage from './components/MuseumBookingPage';
import MainContainer from './components/chat/MainContainer';
import Home from './components/Home/home';
import ImageUploadComponent from './components/Image';
function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<MuseumBookingPage />} />
      <Route path="/gpt" element={<MainContainer />} />
      <Route path="/image" element={<ImageUploadComponent />} />
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
