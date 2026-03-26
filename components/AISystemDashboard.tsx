"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SystemStatus {
  name: string;
  status: "online" | "processing" | "optimized";
  value: number;
  color: string;
}

const AISystemDashboard = () => {
  const [systemStatus, setSystemStatus] = useState<SystemStatus[]>([
    {
      name: "Portfolio Engine",
      status: "online",
      value: 100,
      color: "from-green-400 to-emerald-600",
    },
    {
      name: "AI Chat System",
      status: "online",
      value: 98,
      color: "from-cyan-400 to-blue-600",
    },
    {
      name: "Code Analyzer",
      status: "processing",
      value: 85,
      color: "from-purple-400 to-pink-600",
    },
    {
      name: "3D Renderer",
      status: "optimized",
      value: 100,
      color: "from-red-400 to-orange-600",
    },
    {
      name: "Performance Cache",
      status: "online",
      value: 94,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Data Processing",
      status: "optimized",
      value: 99,
      color: "from-indigo-400 to-purple-600",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStatus((prev) =>
        prev.map((item) => ({
          ...item,
          value: Math.min(
            100,
            item.value + Math.random() * 2 - 0.5 + (item.status === "processing" ? 3 : 0)
          ),
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              AI System Status
            </h2>
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          </div>
          <p className="text-white-200 text-lg">
            Real-time portfolio infrastructure monitoring
          </p>
        </motion.div>

        {/* Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {systemStatus.map((system, idx) => (
            <motion.div
              key={system.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative bg-black-200 border border-cyan-300/30 rounded-lg p-6 hover:border-cyan-300/60 transition overflow-hidden"
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${system.color} opacity-0 group-hover:opacity-5 transition`} />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold">{system.name}</h3>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        system.status === "online"
                          ? "bg-green-400 animate-pulse"
                          : system.status === "processing"
                            ? "bg-yellow-400 animate-bounce"
                            : "bg-cyan-400 animate-pulse"
                      }`}
                    />
                    <span className="text-xs text-white-300 capitalize">
                      {system.status}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="h-8 bg-black-300 rounded-lg overflow-hidden border border-white/10 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${system.value}%` }}
                      transition={{ duration: 0.3 }}
                      className={`h-full bg-gradient-to-r ${system.color} flex items-center justify-end pr-2`}
                    >
                      <span className="text-xs font-bold text-black drop-shadow">
                        {Math.round(system.value)}%
                      </span>
                    </motion.div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-pulse" />
                  </div>
                </div>

                {/* Status indicators */}
                <div className="flex gap-2 text-xs text-white-300">
                  <span>
                    ✓ {system.status === "processing" ? "Optimizing..." : "Operational"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-black-200 to-black-300 border border-cyan-300/30 rounded-xl p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400">100%</div>
              <div className="text-xs text-white-200">Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">
                {Math.round(
                  systemStatus.reduce((acc, s) => acc + s.value, 0) /
                    systemStatus.length
                )}
                %
              </div>
              <div className="text-xs text-white-200">Avg Performance</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-xs text-white-200">Availability</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">Live</div>
              <div className="text-xs text-white-200">Status</div>
            </div>
          </div>
        </motion.div>

        {/* Footer message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-white-200 text-sm font-mono">
            [SYSTEM INITIALIZED] Artificial Intelligence assistant ready for queries
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AISystemDashboard;
