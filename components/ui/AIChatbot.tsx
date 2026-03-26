"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend } from "react-icons/fi";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const AIResponses: Record<string, string> = {
  "hi|hello|hey": "Hey there! 👋 I'm Prince's AI assistant. Ask me anything about his work, skills, or experience!",
  "skills|what can you do": "I specialize in MERN stack development (MongoDB, Express, React, Node.js). I'm also skilled in Next.js, TypeScript, Tailwind CSS, Three.js for 3D, and full-stack web development.",
  "experience|work": "I'm a B.Tech 3rd year student and freelance Full Stack Developer. I've worked on various projects using modern web technologies and love building scalable, interactive web applications.",
  "projects": "Check out the projects section! I've built everything from 3D interactive portfolios to full-stack applications. Each one is designed with cutting-edge tech.",
  "contact|hire|email": "Interested in working together? Reach out via LinkedIn (linkedin.com/in/prince-yadav-4t) or GitHub (github.com/prince-up). Let's create something amazing!",
  "github": "Check out my GitHub: github.com/prince-up - you'll find all my projects and contributions there!",
  "linkedin": "Connect with me on LinkedIn: linkedin.com/in/prince-yadav-4t/ - I share updates about my latest projects and learning journey.",
  "default": "That's a great question! For more details, feel free to explore the portfolio or reach out via the contact section. 🚀",
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey! 👋 I'm Prince's AI assistant. Ask me anything about his work, skills, or experience!",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    for (const [keywords, response] of Object.entries(AIResponses)) {
      const keywordArray = keywords.split("|");
      if (keywordArray.some((keyword) => lowerMessage.includes(keyword))) {
        return response;
      }
    }

    return AIResponses.default;
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI thinking
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(input),
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 w-96 h-[500px] bg-gradient-to-b from-black-200 to-black-300 border border-cyan-300/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-4 border-b border-cyan-300/20 flex justify-between items-center">
              <div>
                <h3 className="text-white font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  AI Assistant
                </h3>
                <p className="text-white-200 text-xs">Ask about Prince</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white-200 hover:text-white transition"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-cyan-500/30 text-white border border-cyan-400/50"
                        : "bg-blue-500/20 text-white-100 border border-blue-400/30"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-cyan-300/20 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me something..."
                className="flex-1 bg-black-100 border border-cyan-300/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-300/60 transition"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className="bg-cyan-500/30 hover:bg-cyan-500/50 border border-cyan-400/50 text-white p-2 rounded-lg transition disabled:opacity-50"
              >
                <FiSend size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition flex items-center justify-center group"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-50 blur transition" />
        <FiMessageSquare size={24} className="relative z-10" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-cyan-300 rounded-full animate-pulse" />
      </motion.button>
    </div>
  );
};

export default AIChatbot;
