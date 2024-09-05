import React, { useEffect, useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';


const LanguageSelectorWithGoogleTranslate = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    };

    const initGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', includedLanguages: 'en,pa,fr,mr,hi,es,de,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
          'google_translate_element'
        );
      }
    };

    if (!window.google || !window.google.translate) {
      addGoogleTranslateScript();
      window.googleTranslateElementInit = initGoogleTranslate;
    } else {
      initGoogleTranslate();
    }

    // Monitor changes to detect language selection
    const observer = new MutationObserver(() => {
      const detectedLang = document.documentElement.lang || 'en'; // Fallback to 'en'
      if (detectedLang !== language) {
        setLanguage(detectedLang);
        console.log(`Detected language: ${detectedLang}`);
      }
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    return () => {
      observer.disconnect();
    };
  }, [language]);

  return (
    <div>
      <div id="google_translate_element"></div>
    </div>
  );
};

export default LanguageSelectorWithGoogleTranslate;
