import axios from 'axios';

export const TranslateToAny = async (text, from, to) => {
    try {
      if (from !== 'en') {
        const translateOptions = {
          method: 'POST',
          url: import.meta.env.VITE_TRANSLATE_API_URL,
          headers: {
            'x-rapidapi-key': import.meta.env.VITE_TRANSLATE_API_KEY,
            'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
            'Content-Type': 'application/json'
          },
          data: {
            q: text,
            source: from,
            target: to,
            format: 'text'
          }
        };
  
        const translateResponse = await axios.request(translateOptions);
        return translateResponse.data.data.translations[0].translatedText;
      } else {
        return text;
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
};



