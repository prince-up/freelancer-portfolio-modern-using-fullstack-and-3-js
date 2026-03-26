"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TerminalLine {
  id: string;
  type: "command" | "output" | "prompt";
  content: string;
  delay?: number;
}

const AITerminalCommands: Record<string, string> = {
  "whoami": "prince-yadav@portfolio ~/",
  "ls -la": "projects/  skills.txt  experience.md  contact.json",
  "cat skills.txt": "MERN Stack, Node.js, React.js, Next.js, TypeScript, Tailwind CSS, Three.js, MongoDB, Express",
  "git log --oneline": "Latest: AI-powered portfolio integration, 3D hero section, advanced animations",
  "npm run deploy": "[✓] Building portfolio... [✓] Optimizing assets... [✓] Deployed to production!",
  "curl --help": "Interested? Connect: github.com/prince-up | linkedin.com/in/prince-yadav-4t/",
  "help": "Available commands: whoami, ls -la, cat skills.txt, git log, npm run deploy, curl --help",
  "clear": "",
};

const AITerminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { id: "1", type: "prompt", content: "> Interactive AI Terminal - Prince Yadav's Portfolio" },
    { id: "2", type: "output", content: "Type a command to explore... (help for available commands)" },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const executeCommand = (command: string) => {
    if (!command.trim()) return;

    const newId = Date.now().toString();
    const response = AITerminalCommands[command.toLowerCase()] || "Command not found. Type 'help' for available commands.";

    setLines((prev) => [
      ...prev,
      { id: newId, type: "command", content: `$ ${command}` },
      { id: newId + "a", type: "output", content: response },
    ]);

    setCommandHistory((prev) => [...prev, command]);
    setInput("");
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Interactive AI Terminal
          </h2>
          <p className="text-white-200 mt-3">Explore Prince&apos;s portfolio through an immersive terminal interface</p>
        </div>

        <div className="bg-black-200 border border-cyan-300/30 rounded-xl overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-6 py-4 flex items-center gap-3 border-b border-cyan-300/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition" />
              <div className="w-3 h-3 rounded-full bg-green-500/70 hover:bg-green-500 transition" />
            </div>
            <span className="text-white-200 text-sm ml-2">Terminal Session</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm h-96 overflow-y-auto space-y-3 bg-black-300/50">
            {lines.map((line) => (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`${
                  line.type === "command"
                    ? "text-cyan-400"
                    : line.type === "prompt"
                      ? "text-green-400 font-bold"
                      : "text-white-200"
                }`}
              >
                {line.type === "command" && <span>{line.content}</span>}
                {line.type === "output" && <span className="block pl-4 text-white-100">{line.content}</span>}
                {line.type === "prompt" && <span className="text-yellow-400">{line.content}</span>}
              </motion.div>
            ))}
          </div>

          {/* Terminal Input */}
          <div className="border-t border-cyan-300/20 px-6 py-4 bg-black-300/50 flex items-center gap-2">
            <span className="text-green-400 font-mono">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter command..."
              className="flex-1 bg-transparent text-white outline-none font-mono placeholder-white-200/40 caret-cyan-400"
              autoFocus
            />
            <span className="w-2 h-5 bg-cyan-400 animate-pulse" />
          </div>
        </div>

        <div className="mt-6 text-center text-white-200 text-sm">
          <p>💡 Try: help, whoami, ls -la, cat skills.txt, git log, npm run deploy</p>
        </div>
      </motion.div>
    </section>
  );
};

export default AITerminal;
