import React, { useState } from 'react';
import CommentCard from './CommentCard';
import ChatInput from './ChatInput';
import ChatArea from './ChatArea';
import ProductCard from './ProductCard';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import {TfiWrite} from 'react-icons/tfi';
import MyIcon from './assets/logo';
const MainContainer = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    setMessages([...messages, { text: message, isUser: true }]);
    // Simulate model response
    const modelResponse = "Model's response to " + message;
    setMessages((prevMessages) => [...prevMessages, { text: modelResponse, isUser: false }]);
  };

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6 min-h-screen">
      {/* Left Column: Comments */}
      {/* <div className="flex flex-col w-full md:w-1/4">
        <CommentCard
          user="BUJJI"
          comment="Wo design nahi banane deta ruk, usko esa UI bna ke de ki bkl wo kal se kabhi pareshan na kare..."
        />
      </div> */}
      <div className="flex flex-col w-full md:w-1/4">
        <LeftPanel />
      </div>
      {/* Middle Column: Main Chat Area and Input */}
      <div className="flex flex-col w-full md:w-2/4">
        
        <ChatArea messages={messages} />
        <ChatInput onSend={handleSend} />
      </div>
      
      {/* Right Column: Model Output */}
      <div className="flex flex-col w-full md:w-1/4">
        <RightPanel />
      </div>
    </div>
  );
};

export default MainContainer;
