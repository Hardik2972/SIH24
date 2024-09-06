import React, { useState,useContext } from 'react';
// import CommentCard from './CommentCard';
import ChatInput from './ChatInput';
import ChatArea from './ChatArea';
// import ProductCard from './ProductCard';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
// import {TfiWrite} from 'react-icons/tfi';
import MyIcon from './assets/logo';
import { TranslateToAny } from '../../assets/helper';
import { LanguageContext } from '../../context/LanguageContext';
import axios from 'axios';

const MainContainer = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { language, imageUrl, setImageUrl,imageUploaded, setImageUploaded } = useContext(LanguageContext);

  const handleSend = async (message) => {
    setMessages([...messages, { text: message, isUser: true }]);
    setLoading(true); // Start loading
    
    try {
      let response;
      if (imageUploaded) {
        // console.log(imageUploaded)
        // const apiKey = 'app-GSuiWyYx93Mt0ujyJ8dPQzrJ'; // Replace with your actual API key
        // const data = {
        //   inputs: {},
        //   query: message,
        //   response_mode: "blocking",
        //   conversation_id: "",
        //   user: "abc-123",
        //   files: [
        //     {
        //       type: "image",
        //       transfer_method: "remote_url",
        //       url: "https://cloud.dify.ai/logo/logo-site.png",
        //     },
        //   ],
        // };
  
        // // Make the axios POST request
        // response = await axios.post('https://api.dify.ai/v1/chat-messages', data, {
        //   headers: {
        //     'Authorization': `Bearer ${apiKey}`,
        //     'Content-Type': 'application/json',
        //   },
        // });
  
        // // Check if the response is successful
        // console.log(response);
        // // if (response.status !== 200) {
        // //   throw new Error('API request failed');
        // // }
  
        // // console.log('Response:', response.data.answer);
        // // const modelResponse = response.data.answer;
        const modelResponse = (
          <div className="flex">
            <div className='p-1 w-2%'><MyIcon className="p-2"/></div>
            <div className='w-98%'>
              A museum is an institution dedicated to the collection, preservation, exhibition, and interpretation of objects, artifacts, and works of art that hold cultural, historical, scientific, or artistic significance. Museums serve as public spaces where people can explore and learn about various aspects of human history, the natural world, or creative expression. 
            </div>

            <div>{imageUrl && <img src={imageUrl} alt="Uploaded preview" className="mt-2 max-w-xs" />}</div>
          </div>
        );

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: modelResponse, isUser: false },
        ]);
      } else {
        response = await fetch('http://192.168.43.91:5000/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
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
  
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: modelResponse, isUser: false },
        ]);
      }
    } catch (error) {
      console.error('Error fetching model response:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Network issues or server error', isUser: false },
      ]);
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
