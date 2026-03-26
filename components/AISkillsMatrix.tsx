"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiThreedotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql,
  SiGit, SiDocker, SiFramer, SiGreensock, SiRedux, SiPrisma
} from "react-icons/si";
import { FaCogs } from "react-icons/fa";

const allSkills = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Three.js", icon: SiThreedotjs, color: "#FFFFFF" },
  { name: "Framer Motion", icon: SiFramer, color: "#FF0055" },
  { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "CI / CD", icon: FaCogs, color: "#00D9FF" },
];

const TechnicalSkills = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-white-200 text-lg max-w-3xl mx-auto">
            A unified suite of modern technologies and architectural tools I leverage to engineer premium software solutions.
          </p>
        </motion.div>

        {/* Unified Skills Grid */}
        <div className="bg-black-200/50 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 gap-y-12">
            {allSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * idx }}
                viewport={{ once: true }}
                className={`group flex flex-col items-center justify-center space-y-4`}
              >
                <div 
                  className="w-20 h-20 rounded-2xl bg-black-300 border border-white/10 flex items-center justify-center transition-all duration-300 shadow-lg group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:bg-white/5"
                  style={{ 
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = skill.color + '50';
                    e.currentTarget.style.boxShadow = `0 10px 30px -10px ${skill.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <skill.icon 
                    className="text-4xl transition-all duration-300 opacity-80 group-hover:opacity-100" 
                    style={{ color: skill.color }} 
                  />
                </div>
                <span 
                  className="text-sm font-medium text-white-200 tracking-wide text-center transition-colors duration-300"
                  style={{ color: skill.color === "#FFFFFF" ? "#E0E8FF" : skill.color + 'CC' }}
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
