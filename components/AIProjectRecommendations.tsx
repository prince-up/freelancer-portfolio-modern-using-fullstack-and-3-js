"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaStar } from "react-icons/fa";

interface AIRecommendation {
  title: string;
  description: string;
  skills: string[];
  match: number;
}

const AIProjectRecommendations = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Three.js",
    "TypeScript",
    "Next.js",
    "Tailwind",
    "GraphQL",
  ];

  const recommendations: AIRecommendation[] = useMemo(
    () => [
      {
        title: "Real-time Collaboration Platform",
        description:
          "Build a real-time collaborative editor like Figma using WebSockets and Three.js for 3D visualization",
        skills: ["Node.js", "React.js", "TypeScript", "Three.js"],
        match: 95,
      },
      {
        title: "AI-Powered Content Generator",
        description: "Create a content generator that uses AI APIs with a beautiful Next.js dashboard",
        skills: ["Next.js", "TypeScript", "Tailwind", "GraphQL"],
        match: 88,
      },
      {
        title: "Full-Stack Analytics Dashboard",
        description: "Build an analytics dashboard with MongoDB backend and interactive React frontend",
        skills: ["React.js", "Node.js", "MongoDB", "Tailwind"],
        match: 92,
      },
      {
        title: "3D Portfolio Generator",
        description: "Create a tool that generates 3D portfolios using your skillset in Three.js",
        skills: ["Three.js", "React.js", "Node.js", "TypeScript"],
        match: 89,
      },
    ],
    []
  );

  const filteredRecommendations = selectedSkill
    ? recommendations.filter((rec) => rec.skills.includes(selectedSkill))
    : recommendations;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FaStar className="text-cyan-400 text-4xl" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Recommended Projects
            </h2>
          </div>
          <p className="text-white-200 text-lg max-w-2xl mx-auto">
            A curated collection of innovative projects highlighting my technical stack
          </p>
        </motion.div>

        {/* Skills Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-12 p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-cyan-500/20"
        >
          <button
            onClick={() => setSelectedSkill(null)}
            className={`px-4 py-2 rounded-full transition smooth-transition font-medium ${
              selectedSkill === null
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(0,217,255,0.4)]"
                : "bg-black-200 text-white-200 border border-cyan-300/30 hover:border-cyan-300/60"
            }`}
          >
            All Skills
          </button>
          {skills.map((skill) => (
            <button
              key={skill}
              onClick={() => setSelectedSkill(skill)}
              className={`px-4 py-2 rounded-full transition smooth-transition font-medium ${
                selectedSkill === skill
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(0,217,255,0.4)]"
                  : "bg-black-200 text-white-200 border border-cyan-300/30 hover:border-cyan-300/60"
              }`}
            >
              {skill}
            </button>
          ))}
        </motion.div>

        {/* Recommendations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredRecommendations.map((rec, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <div className="group relative h-full">
                {/* Glow background */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 rounded-xl blur transition-all duration-300" />
                
                <div className="relative bg-glass-card-dark backdrop-blur-xl border border-cyan-400/30 group-hover:border-cyan-400/60 rounded-xl p-6 h-full transition-all duration-300 overflow-hidden">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* AI Match Badge - PROMINENT */}
                    <div className="absolute -top-3 -right-3">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(0,217,255,0.5)] border-2 border-cyan-300/50">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">{rec.match}%</div>
                            <div className="text-xs text-cyan-200 font-semibold">TECH FIT</div>
                          </div>
                        </div>
                        {/* Pulsing glow */}
                        <motion.div
                          animate={{ boxShadow: ["0 0 20px rgba(0,217,255,0.5)", "0 0 40px rgba(0,217,255,0.8)", "0 0 20px rgba(0,217,255,0.5)"] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-full"
                        />
                      </motion.div>
                    </div>

                    <div className="mb-6 pr-20">
                      <h3 className="text-xl font-bold text-white mb-2">{rec.title}</h3>
                      <p className="text-white-200/90 text-sm leading-relaxed">{rec.description}</p>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {rec.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/20 text-blue-200 text-xs rounded-full border border-blue-400/50 font-medium"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* Animated Progress bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-white-200/70">Skill Alignment</span>
                        <span className="text-cyan-400 font-bold">Perfect Fit</span>
                      </div>
                      <div className="h-2.5 bg-black-300 rounded-full overflow-hidden border border-cyan-500/30 relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${rec.match}%` }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.2 }}
                          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 relative shadow-[0_0_10px_rgba(0,217,255,0.6)]"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-transparent opacity-50 blur-sm" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AIProjectRecommendations;
