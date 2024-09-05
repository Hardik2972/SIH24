import React, { useState } from 'react';
// import CommentCard from './CommentCard';
import ChatInput from './ChatInput';
import ChatArea from './ChatArea';
// import ProductCard from './ProductCard';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
// import {TfiWrite} from 'react-icons/tfi';
import MyIcon from './assets/logo';
import { TranslateToAny } from '../../assets/helper';

const MainContainer = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (message) => {
    setMessages([...messages, { text: message, isUser: true }]);
    setLoading(true); // Start loading

    try {
      // Simulate API call for model response
      const response = await fetch('http://192.168.29.91:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "message": message }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const modelResponse = (
        <div className="flex">
          <div className='p-1 w-2%'><MyIcon className="p-2"/></div>
          <div className='w-98%'>
            {data.answer} 
          </div>
        </div>
      );

      // Update the message state with the model's response
      setMessages((prevMessages) => [...prevMessages, { text: modelResponse, isUser: false }]);
    } catch (error) {
      console.error('Error fetching model response:', error);
      setMessages((prevMessages) => [...prevMessages, { text: 'Network issues', isUser: false }]);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6 min-h-screen">
      <div className="flex flex-col w-full md:w-1/4">
        <LeftPanel />
      </div>
      {/* Middle Column: Main Chat Area and Input */}
      <div className="flex flex-col w-full md:w-2/4">
        <ChatArea messages={messages} />
        {loading ? (
          <div className="flex justify-center items-center p-4">Loading...</div>
        ) : (
          <ChatInput onSend={handleSend} />
        )}
      </div>
      {/* Right Column: Model Output */}
      <div className="flex flex-col w-full md:w-1/4">
        <RightPanel />
      </div>
    </div>
  );
};

export default MainContainer;
