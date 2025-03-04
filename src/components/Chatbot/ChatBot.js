import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    // Placeholder for AI response (you'll need to integrate with the backend)
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "AI response placeholder", sender: "bot" },
    ]);
  };

  return (
    <div>
      <h2>AI Chatbot</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
