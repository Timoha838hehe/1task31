import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import MessageInput from './MessageInput';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (username, message) => {
    const newMessage = {
      id: messages.length + 1,
      username,
      message,
      date: new Date()
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            username={msg.username}
            message={msg.message}
            date={msg.date}
          />
        ))}
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default Chat;
