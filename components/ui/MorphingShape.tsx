"use client";

import React, { useEffect, useRef } from "react";

interface MorphingShapeProps {
  className?: string;
  colors?: string[];
}

const MorphingShape: React.FC<MorphingShapeProps> = ({
  className = "",
  colors = ["rgba(34, 211, 238, 0.3)", "rgba(59, 130, 246, 0.3)", "rgba(139, 92, 246, 0.3)"],
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const path = svg.querySelector("path");
    if (!path) return;

    // Animate the path morphing
    const animate = () => {
      const time = Date.now() / 5000;
      const points = [];

      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 50 + 30 * Math.sin(time + i) * Math.cos(time * 0.7);
        const x = 100 + radius * Math.cos(angle);
        const y = 100 + radius * Math.sin(angle);
        points.push(`${x},${y}`);
      }

      const pathData = `M ${points.join(" L ")} Z`;
      path.setAttribute("d", pathData);

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <svg
      ref={svgRef}
      className={`absolute blur-3xl ${className}`}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="morphGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={colors[0]} />
          <stop offset="50%" stopColor={colors[1]} />
          <stop offset="100%" stopColor={colors[2]} />
        </linearGradient>
      </defs>
      <path
        d="M 100,50 L 150,80 L 130,130 L 70,130 L 50,80 Z"
        fill="url(#morphGradient)"
        strokeWidth="0"
      />
    </svg>
  );
};

export default MorphingShape;
