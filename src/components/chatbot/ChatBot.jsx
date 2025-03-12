import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./ChatBot.css";

const socket = io("http://localhost:5000"); // Connect to the backend

function ChatBot() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isJoined, setIsJoined] = useState(false);

  // Load chat history when component mounts
  useEffect(() => {
    socket.on("previousMessages", (history) => {
      setMessages(history);
    });

    // Listen for incoming chat messages
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Cleanup on unmount
    return () => {
      socket.off("previousMessages");
      socket.off("chat message");
    };
  }, []);

  const joinChat = (e) => {
    e.preventDefault();
    if (username.trim()) {
      socket.emit("join", username); // Send username to server
      setIsJoined(true); // Mark the user as joined
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("chat message", message); // Send message to server
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <div className="chat-container bg-pattern ">
      <div className="bg-overlay"></div>
      {!isJoined ? (
        <center>
          <div className="join-screen">
            <h2 className="text-[40px] font-bold">
              Enter your username to join the chat
            </h2>
            <form className="form-1" onSubmit={joinChat}>
              <input
                className=""
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <pre> </pre>
              <button
                className="btn-join px-4 py-2 font-semibold text-white"
                type="submit"
              >
                Join Chat
              </button>
            </form>
          </div>
        </center>
      ) : (
        // chating page show send and recieve data
        <div className="chat-screen">
          <div className="chat-window">
            {messages.map((msg, index) => (
              <div key={index} className="chat-message">
                <strong className="message-1">{msg.username}: </strong>{" "}
                <span className="back">{msg.message}</span>
              </div>
            ))}
          </div>
          <center>
            <form onSubmit={sendMessage} className="chat-form">
              <input
                className="input-2"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="btn-2" type="submit">
                Send
              </button>
            </form>
          </center>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
