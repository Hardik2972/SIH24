import React, { useState } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center p-2 bg-white border-t border border-gray-300 rounded-lg mt-1">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 p-1"
      />
      <button onClick={handleSend} >
        <FaArrowCircleUp  size ={30}/>
      </button>
    </div>
  );
};

export default ChatInput;
