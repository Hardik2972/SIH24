import React, { useState, useEffect } from "react";
import { Client } from "@gradio/client";

const ImageChatComponent = () => {
  const [result, setResult] = useState(null); // State to store the API result
  const [selectedImage, setSelectedImage] = useState(null);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);

  useEffect(() => {
    // Async function to call the API on page load
    const fetchApiData = async () => {
      try {
        // Initialize the client
        const client = new Client("openbmb/MiniCPM-Llama3-V-2_5");
        
        // Call the API
        const result = await client.predict({
          api_name: "/lambda"
        });
        
        // Set the result to state
        setResult(result);
        console.log(result); // For debugging purposes
      } catch (error) {
        console.error("Error calling the API:", error);
      }
    };

    fetchApiData(); // Call the async function
  }, []); // Empty dependency array ensures this runs only once on component mount

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    try {
      const client = new Client("openbmb/MiniCPM-Llama3-V-2_5");

      // Step 1: Upload the image
      await client.predict("/upload_img", {
        image: file,
        _chatbot: [],  // Initial chatbot context (empty for now)
      });

      // Step 2: Send a follow-up query after image upload
      const result = await client.predict("/request", {
        _question: "hi is this guy smart",
        _chat_bot: [["", "Image uploaded successfully, you can talk to me now"]],
      });

      // Step 3: Further interactions with the chatbot
      const finalResult = await client.predict("/respond", {
        _chat_bot: [
          ["", "Image uploaded successfully, you can talk to me now"],
          ["hi is this guy smart", null],
        ],
        params_form: null,
        num_beams: "Sampling",  // Ensure this value is correct according to the API spec
        repetition_penalty: 3,
        repetition_penalty_2: 1.2,
        top_p: 1.05,
        top_k: 0.8,
        temperature: 100,
      });

      // Set the response state with the final chatbot response
      setResponse(finalResult.data);
    } catch (error) {
      console.error("Error communicating with the model:", error);
    }
  };

  return (
    <div>
      <h2>Upload an Image and Chat with the Model</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      <br />
      {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected" />}
      <br />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type your message here"
      />
      <button onClick={handleImageUpload}>Submit</button>
      {response && (
        <div>
          <h3>Model Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {result && (
        <div>
          <h3>Initial API Response:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ImageChatComponent;
