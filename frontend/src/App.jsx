import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VQA from './components/ImageUpload';
import MuseumBookingPage from './components/MuseumBookingPage';
import MainContainer from './components/chat/MainContainer';
import Home from './components/Home/home';

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<MuseumBookingPage />} />
      <Route path="/bot" element={<MainContainer />} />
      <Route path="/vqa" element={<VQA />} />
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
