import React from 'react';
import MyIcon from './assets/logo';
const ChatArea = ({ messages }) => {
  return (
    <>
    
    <div style={{
      overflow: 'auto',
      scrollbarWidth: 'none', /* Firefox */
      msOverflowStyle: 'none', /* IE and Edge */
    }} className="flex-1 p-4 bg-white rounded-lg shadow-md overflow-auto">
    <div className='flex w-full items-start m-1'>
        <div className="flex items-center justify-center w-10 h-10mb-4 ml-1 ">
            <MyIcon/>
        </div>
        <div className="flex items-center justify-center text-center p-2">BUJJI</div>
    </div>
      {messages.map((msg, index) => (
        <div key={index} className={`p-2 rounded-lg mb-2 ${msg.isUser ? 'bg-[#C5882E] text-right self-start' : 'bg-[#BBAC96] self-end'}`}>
          {msg.text}
        </div>
      ))}
    </div>
    </>
  );
};

export default ChatArea;
