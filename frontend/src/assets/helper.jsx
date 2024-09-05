import axios from 'axios';

export const TranslateToAny = async (text, from, to) => {
    try {
      // Check if translation is needed
      console.log(from, text);
      if (from !== 'en') {
        const formData = new FormData();
        formData.append('key', import.meta.env.VITE_TRANSLATE_API_KEY); 
        formData.append('sentence', text);
        formData.append('src_lang', from);
        formData.append('dest_lang', to);
  
        const translateResponse = await axios.post(import.meta.env.VITE_TRANSLATE_API_URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log(translateResponse.data.translated_text)

        return translateResponse.data.translated_text; 
      } else {
        return text; // No translation needed
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
};
