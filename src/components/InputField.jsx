import React, { useState } from 'react';
import '../styles/InputField.scss';

const InputField = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <form className="input-field" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type a message..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default InputField;
