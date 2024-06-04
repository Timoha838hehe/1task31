import React from 'react';

const ChatMessage = ({ username, message, date }) => {
  return (
    <div className="chat-message">
      <div><strong>{username}</strong> <span>({new Date(date).toLocaleString()})</span></div>
      <div>{message}</div>
      <hr />
    </div>
  );
};

export default ChatMessage;
