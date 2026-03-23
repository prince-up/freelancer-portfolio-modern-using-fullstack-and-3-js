"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#000319] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <motion.div
           animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-[0px] opacity-40 mix-blend-screen"
          style={{
            backgroundImage: `repeating-linear-gradient(100deg, #000319 0%, #172554 15%, #4c1d95 35%, #000319 50%)`,
            backgroundSize: "400% 400%",
            filter: "blur(40px)",
          }}
        />
        
        {/* Animated Orbs */}
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute left-[10%] top-[20%] h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 60, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute right-[10%] top-[10%] h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[0%] right-[30%] h-[550px] w-[550px] rounded-full bg-cyan-400/20 blur-[130px]"
        />
      </div>
      
      {/* Mesh grid overlay / Stars */}
      <div className="absolute inset-0 z-10 opacity-30 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
    </div>
  );
}
