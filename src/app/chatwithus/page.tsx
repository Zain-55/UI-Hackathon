"use client";

import { useState } from "react";
import Header from "../components/Header";
import { MessageCircle, X } from "lucide-react";

const FakeChat = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to toggle chat popup

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: input },
        { sender: "bot", text: "My Name is Zain, I'm here to help!" },
      ]);
      setInput("");
    }
  };

  return (
    <div>
      <Header />

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div
          className="fixed bottom-16 right-4 w-80 max-w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50 transition-all"
          style={{
            height: "400px",
            minWidth: "280px",
          }}
        >
          {/* Chat Messages */}
          <div className="flex-1 overflow-auto p-4 bg-gray-100 h-[320px]">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === "bot" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg ${
                      message.sender === "bot" ? "bg-blue-200" : "bg-green-200"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input Field */}
          <div className="flex items-center p-4 bg-gray-200">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="w-full px-4 py-2 border rounded-lg"
            />
            <button
              onClick={handleSend}
              className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FakeChat;
