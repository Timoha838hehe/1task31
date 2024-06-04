import React, { useState, useRef } from 'react';

const MessageInput = ({ onSend }) => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    if (file) {
      onSend(username, file.name);
    } else {
      onSend(username, message);
    }
    setUsername('');
    setMessage('');
    fileInputRef.current.value = null;
  };

  return (
    <form onSubmit={handleSubmit} className="message-input">
      <div>
        <label>Ім'я користувача:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Повідомлення:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="3"
        ></textarea>
      </div>
      <div>
        <label>Прикріпити файл:</label>
        <input type="file" ref={fileInputRef} />
      </div>
      <button type="submit">Відправити</button>
    </form>
  );
};

export default MessageInput;
