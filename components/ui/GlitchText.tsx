"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = "",
  intensity = "medium",
}) => {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      },
      intensity === "high" ? 2000 : intensity === "medium" ? 4000 : 6000
    );

    return () => clearInterval(interval);
  }, [intensity]);

  const glitchOffset =
    intensity === "high" ? 8 : intensity === "medium" ? 4 : 2;

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Original text */}
      <span className="relative z-10 block">{text}</span>

      {/* Glitch layers */}
      {glitchActive && (
        <>
          <motion.span
            className="absolute top-0 left-0 z-20 text-cyan-400 opacity-80"
            initial={{ x: 0 }}
            animate={{ x: glitchOffset }}
            transition={{ duration: 0.1 }}
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 z-20 text-blue-500 opacity-60"
            initial={{ x: 0 }}
            animate={{ x: -glitchOffset }}
            transition={{ duration: 0.1, delay: 0.05 }}
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  );
};

export default GlitchText;
