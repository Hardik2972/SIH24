import React, { useState, useContext } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";
import { TranslateToAny } from '../../assets/helper';
import { LanguageContext } from '../../context/LanguageContext';

const API_URL = import.meta.env.VITE_TRANSLATE_API_URL; 
const API_KEY = import.meta.env.VITE_TRANSLATE_API_KEY; 

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('');
  const { language } = useContext(LanguageContext);
 
  const handleSend = async () => {
    if (message.trim()) {
      try {
        const translatedMessage = await TranslateToAny(message, language, 'en');
        // console.log(language, translatedMessage)
        if (translatedMessage !== null) {
          onSend(translatedMessage);
          setMessage('');
        } else {
          console.error('Failed to translate message');
        }
      } catch (error) {
        console.error('Error translating message:', error);
      }
    }
  };

  return (
    <>
      <div className="flex items-center p-2 bg-white border-t border-gray-300 rounded-lg mt-1 shadow-sm">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg"
        />
        <button onClick={handleSend} className="ml-2 p-2 text-blue-500 hover:text-blue-700">
          <FaArrowCircleUp size={30} />
        </button>
      </div>
    </>
  );
};

export default ChatInput;
