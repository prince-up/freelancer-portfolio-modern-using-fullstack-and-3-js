"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface NeuralNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const NeuralNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Create neural nodes
    const nodes: NeuralNode[] = [];
    const nodeCount = 12;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        radius: Math.random() * 2 + 2,
      });
    }

    let animationId: number;

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, width, height);

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x - node.radius < 0 || node.x + node.radius > width)
          node.vx *= -1;
        if (node.y - node.radius < 0 || node.y + node.radius > height)
          node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(node.radius, Math.min(width - node.radius, node.x));
        node.y = Math.max(node.radius, Math.min(height - node.radius, node.y));

        // Draw node with glow
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 3
        );
        gradient.addColorStop(0, "rgba(34, 211, 238, 0.8)");
        gradient.addColorStop(1, "rgba(34, 211, 238, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(
          node.x - node.radius * 3,
          node.y - node.radius * 3,
          node.radius * 6,
          node.radius * 6
        );

        // Draw node core
        ctx.fillStyle = "rgba(34, 211, 238, 1)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      ctx.strokeStyle = "rgba(34, 211, 238, 0.15)";
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.globalAlpha = 1 - distance / 200;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-64 rounded-xl border border-cyan-300/20"
      width={800}
      height={320}
    />
  );
};

interface StatItem {
  label: string;
  value: string;
  icon: string;
}

const AIInsights = () => {
  const stats: StatItem[] = [
    { label: "Projects Completed", value: "15+", icon: "🚀" },
    { label: "Years Experience", value: "3+", icon: "📅" },
    { label: "Happy Clients", value: "10+", icon: "😊" },
    { label: "Technologies", value: "20+", icon: "⚙️" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
            AI Neural Insights
          </h2>
          <p className="text-white-200 text-lg max-w-2xl mx-auto">
            Advanced analytics and intelligence powered by neural networks
          </p>
        </motion.div>

        {/* Neural Network Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 rounded-xl overflow-hidden border border-cyan-400/30 bg-black/40 backdrop-blur-sm p-6"
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
            <NeuralNetwork />
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
            >
              {/* Glow background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 rounded-lg blur transition-all duration-300" />
              
              <div className="relative bg-gradient-to-br from-slate-900/60 to-slate-950/80 backdrop-blur-xl border border-cyan-400/30 group-hover:border-cyan-400/60 rounded-lg p-6 text-center transition-all duration-300 h-full flex flex-col justify-center overflow-hidden">
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                <motion.div
                  className="text-5xl mb-4 relative z-10"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.icon}
                </motion.div>
                
                <motion.div
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 relative z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                
                <div className="text-white-200/80 text-sm font-medium relative z-10">
                  {stat.label}
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AIInsights;
