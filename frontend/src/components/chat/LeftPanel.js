import React from 'react';
import { TfiWrite } from "react-icons/tfi";
import { RiChatNewLine } from "react-icons/ri";
import RightButton from './assets/RightButton';
import LeftButton from './assets/LeftButton';
const LeftPanel = () => {
  return (
    <div style={{
      overflow: 'auto',
      scrollbarWidth: 'none', /* Firefox */
      msOverflowStyle: 'none', /* IE and Edge */
    }} className="flex flex-col items-center p-4 bg-[#BBAC96] w-full h-full rounded-lg shadow-md">
      {/* Icon Section */}
      <div className='flex w-full justify-between'>
        <div className="p-2 flex items-center justify-center w-10 h-10 bg-[#C5882E] rounded-xl mb-4 ml-1 ">
          {/* <TfiWrite /> */}
          <LeftButton/>
        </div>
        <div className="p-2 flex items-center justify-center w-10 h-10 bg-white rounded-xl mb-4 mr-1">
          {/* <RiChatNewLine /> */}
          <RightButton/>
        </div>
      </div>
      {/* Text Area */}
      {/* <div className="w-full mb-4">
        <textarea
          className="w-full h-12 p-2 bg-white rounded-md shadow-inner focus:outline-none"
          placeholder="Write a comment..."
        ></textarea>
      </div> */}

      {/* Static Comment Section */}
      <div className="w-full p-2 bg-white rounded-md shadow-md">
        This comment goes for Ayush G.
      </div>
    </div>
  );
};

export default LeftPanel;
