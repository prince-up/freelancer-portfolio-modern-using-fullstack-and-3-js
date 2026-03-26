"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaStar, FaMedal, FaFire, FaAward, FaRocket } from "react-icons/fa";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  color: string;
  date?: string;
}

const AIAchievements = () => {
  const achievements: Achievement[] = [
    {
      id: "1",
      title: "Full Stack Master",
      description: "Proficiency in MERN Stack Technologies",
      icon: <FaMedal className="text-2xl" />,
      progress: 95,
      color: "from-cyan-400 to-blue-600",
      date: "2024",
    },
    {
      id: "2",
      title: "3D Graphics Wizard",
      description: "Advanced Three.js & WebGL Knowledge",
      icon: <FaRocket className="text-2xl" />,
      progress: 88,
      color: "from-purple-400 to-pink-600",
      date: "2024",
    },
    {
      id: "3",
      title: "Problem Solver",
      description: "15+ Complex Projects Delivered",
      icon: <FaTrophy className="text-2xl" />,
      progress: 100,
      color: "from-yellow-400 to-orange-600",
      date: "Ongoing",
    },
    {
      id: "4",
      title: "Innovation Leader",
      description: "Cutting-edge Technology Implementation",
      icon: <FaFire className="text-2xl" />,
      progress: 92,
      color: "from-red-400 to-orange-600",
      date: "2024",
    },
    {
      id: "5",
      title: "Code Excellence",
      description: "Clean, Scalable, Production-Ready Code",
      icon: <FaAward className="text-2xl" />,
      progress: 96,
      color: "from-green-400 to-teal-600",
      date: "Ongoing",
    },
    {
      id: "6",
      title: "Performance Expert",
      description: "Optimized Web Applications",
      icon: <FaStar className="text-2xl" />,
      progress: 90,
      color: "from-indigo-400 to-blue-600",
      date: "2024",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            🏆 AI-Unlocked Achievements
          </h2>
          <p className="text-white-200 text-lg max-w-2xl mx-auto">
            Earned through dedication, innovation, and continuous learning
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, idx) => (
            <motion.div key={achievement.id} variants={itemVariants}>
              <div className="group relative h-full overflow-hidden">
                {/* Glow background */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-20 rounded-xl blur transition-all duration-300`} />
                
                <div className="relative h-full bg-gradient-to-br from-slate-900/60 to-slate-950/80 backdrop-blur-xl border border-cyan-400/20 group-hover:border-cyan-400/50 rounded-xl p-6 transition-all duration-300">
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 rounded-xl transition duration-500`} />

                  {/* Decorative top glow */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-400 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition duration-300" />

                  <div className="relative z-10">
                    {/* Icon Container */}
                    <motion.div
                      className="mb-6 inline-flex"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} text-white shadow-[0_0_25px_rgba(0,217,255,0.3)] backdrop-blur-sm border border-white/20`}>
                        {achievement.icon}
                      </div>
                    </motion.div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                      {achievement.title}
                    </h3>
                    <p className="text-white-200/80 text-sm mb-6 leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Progress bar with animation */}
                    <div className="mb-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-white-200/70 font-semibold uppercase tracking-wide">Proficiency</span>
                        <span className={`text-sm font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.progress}%
                        </span>
                      </div>
                      <div className="h-2.5 bg-black/30 rounded-full overflow-hidden border border-cyan-500/20 relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${achievement.progress}%` }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.1 }}
                          className={`h-full bg-gradient-to-r ${achievement.color} relative shadow-[0_0_15px_rgba(0,217,255,0.4)]`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 animate-pulse" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Date badge */}
                    {achievement.date && (
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${achievement.color} bg-opacity-10 border border-cyan-400/30 rounded-lg text-xs text-white-200 font-semibold`}
                      >
                        ✓ {achievement.date}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-white-200/80 mb-6 font-medium">
            🌟 More achievements being unlocked constantly...
          </p>
          <div className="flex items-center justify-center gap-3">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                animate={{ y: [0, -8, 0] }}
                transition={{ delay: i * 0.1, duration: 1, repeat: Infinity }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIAchievements;
