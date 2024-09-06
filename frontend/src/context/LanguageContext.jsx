import React, { createContext, useState } from 'react';

// Create the context
export const LanguageContext = createContext();

// Create the provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  return (
    <LanguageContext.Provider value={{ language, setLanguage ,imageUrl,setImageUrl,imageUploaded,setImageUploaded}}>
      {children}
    </LanguageContext.Provider>
  );
};
