import React, { useState, useContext } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";
import { TranslateToAny } from '../../assets/helper';
import { LanguageContext } from '../../context/LanguageContext';

const API_URL = import.meta.env.VITE_TRANSLATE_API_URL; 
const API_KEY = import.meta.env.VITE_TRANSLATE_API_KEY; 

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('');
  
  const { language, imageUrl, setImageUrl,imageUploaded, setImageUploaded } = useContext(LanguageContext);

  const handleSend = async () => {
    if (message.trim() || imageUploaded) {
      try {
        let translatedMessage = message;
        if (message.trim()) {
          translatedMessage = await TranslateToAny(message, language, 'en');
        }
        console.log(language, translatedMessage);
        if (translatedMessage !== null || imageUploaded) {
          onSend(translatedMessage);
          setMessage('');
          setImageUrl(null);  // Clear the image URL after sending
          setImageUploaded(false);
        } else {
          console.error('Failed to translate message');
        }
      } catch (error) {
        console.error('Error translating message:', error);
      }
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file); // Create a URL from the image file
      setImageUrl(url); // Store the image URL in useState

      const formData = new FormData();
      formData.append('image', file);

      setImageUploaded(true);
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
        <input
          type="file"
          onChange={handleImageUpload}
          className="ml-2"
        />
        <button onClick={handleSend} className="ml-2 p-2 text-blue-500 hover:text-blue-700">
          <FaArrowCircleUp size={30} />
        </button>
      </div>
      {imageUploaded && <p className="text-green-500">Image uploaded successfully!</p>}
      
    </>
  );
};

export default ChatInput;
