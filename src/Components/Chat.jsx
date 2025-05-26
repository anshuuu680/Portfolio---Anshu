import React, { useState, useRef, useEffect } from "react";

const ChatBox = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "bot",
      text: "Hi! I’m Anshu Bot. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const container = messagesEndRef.current?.parentNode;
    if (!container) return;

    const isNearBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight <
      100;

    if (isNearBottom) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, from: "user", text: input.trim() },
    ]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          from: "bot",
          text: "Thanks for your message! Anshu Bot is here to assist you.",
        },
      ]);
    }, 1500);
  };

  return (
    <div
      className="flex flex-col w-full max-w-md h-[90vh] md:h-[600px] mx-auto
        rounded-3xl border border-gray-800
        shadow-[0_8px_24px_rgba(0,0,0,0.9)]
        backdrop-blur-lg
        overflow-hidden
        font-sans
        relative
        bg-gradient-to-br
        from-black
        via-gray-900
        to-gray-950"
      style={{
        boxShadow:
          "inset 0 1px 1px rgba(255,255,255,0.05), inset 0 -1px 3px rgba(0,0,0,0.95), 0 10px 20px rgba(0,0,0,0.95)",
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close chat"
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-300 transition"
        style={{ fontSize: "1.5rem", fontWeight: "bold" }}
      >
        &times;
      </button>

      <div
        className="absolute top-0 left-0 w-full h-14 pointer-events-none rounded-t-3xl"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 85%)",
          filter: "blur(14px)",
          mixBlendMode: "screen",
          zIndex: 2,
        }}
      />

      <div className="flex items-center gap-4 p-5 border-b border-gray-700 bg-gradient-to-r from-gray-900 via-black to-gray-900 z-10">
        <img
          src="./public/avatar.png"
          alt="Anshu Bot Avatar"
          className="w-14 h-14 rounded-full border-2 border-gray-700 shadow-lg"
        />
        <div>
          <h2 className="text-gray-300 font-semibold text-xl tracking-wide select-none">
            Anshu Bot
          </h2>
          <p className="text-gray-500 text-sm select-none">
            Your friendly assistant
          </p>
        </div>
      </div>

      <div
        className="flex-1 px-6 py-5 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 bg-black bg-opacity-90 flex flex-col"
        style={{ scrollBehavior: "smooth" }}
      >
        {messages.map(({ id, from, text }) => (
          <div
            key={id}
            className={`max-w-[75%] px-5 py-3 rounded-2xl break-words whitespace-pre-wrap shadow-lg
              ${
                from === "user"
                  ? "bg-gradient-to-r from-gray-700 to-gray-900 text-gray-100 self-end rounded-tr-none"
                  : "bg-gradient-to-r from-gray-900 to-gray-800 text-gray-400 self-start rounded-tl-none"
              }
            `}
            style={{ alignSelf: from === "user" ? "flex-end" : "flex-start" }}
          >
            {text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="flex gap-3 border-t border-gray-700 p-5 bg-gradient-to-r from-gray-900 via-black to-gray-900"
      >
        <input
          type="text"
          className="flex-1 rounded-lg bg-gray-900 bg-opacity-95 text-gray-300 placeholder-gray-600 px-5 py-3
            focus:outline-none focus:ring-2 focus:ring-gray-600 transition-shadow"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Message input"
          spellCheck={false}
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-gray-700 hover:bg-gray-800 text-gray-300 font-semibold px-6 rounded-lg transition-shadow"
          aria-label="Send message"
        >
          Send
        </button>
      </form>
    </div>
  );
};

const ChatToggle = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div>
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="w-fit h-fit rounded-lg px-4 py-2 border border-gray-700 bg-[linear-gradient(135deg,_rgba(0,123,255,0.2),_rgba(0,0,0,0.1))]
          flex gap-2 items-center backdrop-blur-md text-blue-400 font-semibold"
          aria-label="Open chat"
        >
                    <span className="font-md">Chat with my bot </span>
        </button>
      )}

      {showChat && <ChatBox onClose={() => setShowChat(false)} />}
    </div>
  );
};

export default ChatToggle;
