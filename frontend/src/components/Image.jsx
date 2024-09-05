import React, { useState } from "react";
import { Client } from "@gradio/client";

const ImageUploadComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false); // To track if image is uploaded
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [chatBotHistory, setChatBotHistory] = useState([["Hello!", null]]);
  const [answer, setAnswer] = useState(null);

  // Function to handle file upload
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setSelectedImage(file); // Set the uploaded file as selectedImage
    setImageUploaded(false); // Reset the image uploaded flag when a new file is selected
  };

  // Function to call the Gradio API to upload the image
  const uploadImageToGradio = async () => {
    if (!selectedImage) {
      setError("Please upload an image first!");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      // Convert the uploaded image to a blob
      const exampleImage = await selectedImage.arrayBuffer();
      const imageBlob = new Blob([exampleImage]);

      // Connect to Gradio API and send the uploaded image
      const client = await Client.connect("openbmb/MiniCPM-Llama3-V-2_5");
      const response = await client.predict("/upload_img", {
        image: imageBlob,
        _chatbot: chatBotHistory, // Send the chatbot history
      });

      setResult(response.data); // Set the result
      setChatBotHistory([...chatBotHistory, ["Image uploaded", "Image has been successfully uploaded"]]); // Add an actual message instead of null
      setImageUploaded(true); // Set the flag to true after successful upload
    } catch (err) {
      setError("Error uploading image or fetching data from Gradio API");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Function to call /request API to add user question
  const submitQuestion = async () => {
    if (!imageUploaded) {
      setError("Please upload an image first!");
      return;
    }

    if (!question) {
      setError("Please enter a question.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const client = await Client.connect("openbmb/MiniCPM-Llama3-V-2_5");
      const response = await client.predict("/request", {
        _question: question,
        _chat_bot: chatBotHistory,
      });

      setChatBotHistory([...chatBotHistory, [question, "Question submitted to the model"]]); // Update chatbot history with question
    } catch (err) {
      setError("Error submitting the question.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Function to call /respond API to get the answer
  const getAnswerFromModel = async () => {
    setLoading(true);
    setError(null);

    try {
      const client = await Client.connect("openbmb/MiniCPM-Llama3-V-2_5");
      const response = await client.predict("/respond", {
        _chat_bot: chatBotHistory,
        params_form: "Beam Search",
        num_beams: 0,
        repetition_penalty: 0,
        repetition_penalty_2: 0,
        top_p: 0,
        top_k: 0,
        temperature: 0,
      });

      setAnswer(response.data); // Set the answer from the model
      setChatBotHistory([...chatBotHistory, ["Model Answer", response.data]]); // Add the answer to the history
    } catch (err) {
      setError("Error fetching the answer from the model.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Image Upload and Question Answering</h1>

      {/* Image upload input */}
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={uploadImageToGradio} disabled={!selectedImage || loading}>
        {loading ? "Processing..." : "Upload Image"}
      </button>

      {/* Error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display result */}
      {result && (
        <div>
          <h2>Result from Gradio API:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}

      {/* Display selected image preview */}
      {selectedImage && (
        <div>
          <h3>Selected Image Preview:</h3>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
        </div>
      )}

      {/* Input for question */}
      <div>
        <h3>Ask a Question:</h3>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question"
        />
        <button onClick={submitQuestion} disabled={loading || !question || !imageUploaded}>
          Submit Question
        </button>
      </div>

      {/* Fetch model's answer */}
      <div>
        <button onClick={getAnswerFromModel} disabled={loading || !chatBotHistory.length}>
          {loading ? "Fetching Answer..." : "Get Answer"}
        </button>
      </div>

      {/* Display the model's answer */}
      {answer && (
        <div>
          <h3>Model's Answer:</h3>
          <pre>{JSON.stringify(answer, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ImageUploadComponent;
