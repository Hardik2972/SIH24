import React from 'react';

const SuggestionBox = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Suggestion 🍎"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded">Submit</button>
    </div>
  );
};

export default SuggestionBox;
