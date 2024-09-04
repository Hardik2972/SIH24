import React from 'react';

const CommentCard = ({ comment, user }) => {
  return (
    <div className="p-4 bg-[#BBAC96] rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-2">
        <span className="font-bold text-gray-700">{user}</span>
      </div>
      <p className="text-gray-600">{comment}</p>
    </div>
  );
};

export default CommentCard;
