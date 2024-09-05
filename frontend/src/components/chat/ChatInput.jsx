import React, { useState } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";
import LanguageDropdown from '../LanguageDropdown';
import axios from 'axios';

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('');
  const [language, setLanguage] = useState('');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    console.log(`Selected language: ${selectedLanguage}`);
  };

  const detectAndTranslateToEnglish = async (text) => {
    try {
      if (language !== 'en') {
        const translateOptions = {
          method: 'POST',
          url: import.meta.env.VITE_TRANSLATE_API_URL,
          headers: {
            'x-rapidapi-key': import.meta.env.VITE_TRANSLATE_API_KEY,
            'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
            'Content-Type': 'application/json'
          },
          data: {
            q: text,
            source: language,
            target: 'en',
            format: 'text'
          }
        };
  
        const translateResponse = await axios.request(translateOptions);
        return translateResponse.data.data.translations[0].translatedText;
      } else {
        return text;
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  const handleSend = async () => {
    if (message.trim()) {
      const translatedMessage = await detectAndTranslateToEnglish(message);
      // console.log(translatedMessage);

      if (translatedMessage !== null) {
        onSend(translatedMessage, message);
        setMessage('');
      }
    }
  };

  return (
    <>
    <div className="flex items-center p-2 bg-white border-t border border-gray-300 rounded-lg mt-1">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 p-1"
      />
      <button onClick={handleSend}>
        <FaArrowCircleUp size={30} />
      </button>
    </div>

    <div className="p-4">
      <h1>Select Your Preferred Language</h1>
      <LanguageDropdown selectedLanguage={language} onLanguageChange={handleLanguageChange} />
    </div>
    </>
  );
};

export default ChatInput;
