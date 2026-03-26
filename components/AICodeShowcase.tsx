"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CodeLine {
  number: number;
  text: string;
  highlight?: boolean;
}

const AICodeShowcase = () => {
  const [highlightedLines, setHighlightedLines] = useState<number[]>([]);

  const codeLines: CodeLine[] = [
    { number: 1, text: "// AI-Powered Portfolio" },
    { number: 2, text: "function createPortfolio() {" },
    { number: 3, text: '  const developer = "Prince Yadav";' },
    { number: 4, text: '  const skills = ["React", "Node.js", "Three.js"];' },
    { number: 5, text: "  const passion = Infinity;" },
    { number: 6, text: "  return await buildAwesome(skills);" },
    { number: 7, text: "}" },
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setHighlightedLines([current % codeLines.length]);
      current++;
    }, 800);

    return () => clearInterval(interval);
  }, [codeLines.length]);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black-200 border border-cyan-300/30 rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-6 py-4 border-b border-cyan-300/20 flex items-center justify-between">
            <span className="text-white-200 font-mono text-sm">portfolio.ts</span>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500/70" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
              <div className="w-2 h-2 rounded-full bg-green-500/70" />
            </div>
          </div>

          {/* Code */}
          <div className="p-6 font-mono text-sm overflow-x-auto">
            {codeLines.map((line) => (
              <motion.div
                key={line.number}
                className={`flex gap-4 py-1 px-2 rounded transition ${
                  highlightedLines.includes(line.number)
                    ? "bg-cyan-500/20 border-l-2 border-cyan-400"
                    : "border-l-2 border-transparent hover:bg-black-300"
                }`}
              >
                <span className="text-white-200/50 w-6 text-right">{line.number}</span>
                <code className="flex-1">
                  <span className="text-green-400">
                    {line.text.match(/\/\/.*/)?.[0]}
                  </span>
                  <span className="text-cyan-300">
                    {line.text.replace(/\/\/.*/, "").match(/function|const|return|}/)?.[0]}
                  </span>
                  <span className="text-white-200">
                    {line.text
                      .replace(/\/\/.*/, "")
                      .replace(/function|const|return|}/, "")
                      .replace(/"/g, "")}
                  </span>
                  <span className="text-yellow-400">
                    {line.text.match(/"[^"]*"/g)?.[0]}
                  </span>
                </code>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-6 py-3 border-t border-cyan-300/20 bg-black-300/50">
            <p className="text-cyan-400 text-xs font-mono">
              $ npm run deploy
              <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-pulse" />
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-center text-white-200 text-sm"
        >
          <p>✨ Building extraordinary experiences with cutting-edge technology ✨</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AICodeShowcase;
