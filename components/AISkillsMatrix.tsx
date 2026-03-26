"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiThreedotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql,
  SiGit, SiDocker 
} from "react-icons/si";
import { FaCogs } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Architecture",
    description: "Building immersive client-side experiences and highly responsive user interfaces.",
    skills: [
      { name: "React.js", icon: SiReact, hoverColor: "group-hover:text-[#61DAFB]", border: "group-hover:border-[#61DAFB]/50" },
      { name: "Next.js", icon: SiNextdotjs, hoverColor: "group-hover:text-white", border: "group-hover:border-white/50" },
      { name: "TypeScript", icon: SiTypescript, hoverColor: "group-hover:text-[#3178C6]", border: "group-hover:border-[#3178C6]/50" },
      { name: "Tailwind CSS", icon: SiTailwindcss, hoverColor: "group-hover:text-[#06B6D4]", border: "group-hover:border-[#06B6D4]/50" },
      { name: "Three.js", icon: SiThreedotjs, hoverColor: "group-hover:text-white", border: "group-hover:border-white/50" },
    ]
  },
  {
    title: "Backend Engineering",
    description: "Designing scalable server architectures, robust APIs, and optimized databases.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, hoverColor: "group-hover:text-[#339933]", border: "group-hover:border-[#339933]/50" },
      { name: "Express.js", icon: SiExpress, hoverColor: "group-hover:text-white", border: "group-hover:border-white/50" },
      { name: "MongoDB", icon: SiMongodb, hoverColor: "group-hover:text-[#47A248]", border: "group-hover:border-[#47A248]/50" },
      { name: "PostgreSQL", icon: SiPostgresql, hoverColor: "group-hover:text-[#4169E1]", border: "group-hover:border-[#4169E1]/50" },
      { name: "GraphQL", icon: SiGraphql, hoverColor: "group-hover:text-[#E10098]", border: "group-hover:border-[#E10098]/50" },
    ]
  },
  {
    title: "DevOps & Tooling",
    description: "Ensuring efficient deployment pipelines, containerization, and version control.",
    skills: [
      { name: "Git", icon: SiGit, hoverColor: "group-hover:text-[#F05032]", border: "group-hover:border-[#F05032]/50" },
      { name: "Docker", icon: SiDocker, hoverColor: "group-hover:text-[#2496ED]", border: "group-hover:border-[#2496ED]/50" },
      { name: "CI / CD", icon: FaCogs, hoverColor: "group-hover:text-cyan-400", border: "group-hover:border-cyan-400/50" },
    ]
  }
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
          <p className="text-white-200 text-lg max-w-2xl mx-auto">
            A comprehensive overview of the modern technologies, frameworks, and architectural tools I leverage to engineer premium software.
          </p>
        </motion.div>

        {/* Categories Layout */}
        <div className="space-y-16">
          {skillCategories.map((category, catIdx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              viewport={{ once: true }}
              className="bg-black-200/50 border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
            >
              <div className="mb-10 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-white-200/70">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-10">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.05 * idx }}
                    viewport={{ once: true }}
                    className={`group flex flex-col items-center justify-center space-y-4`}
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-black-300 border border-white/10 flex items-center justify-center transition-all duration-300 shadow-lg group-hover:-translate-y-2 group-hover:shadow-2xl ${skill.border}`}>
                      <skill.icon className={`text-4xl text-white-200 transition-colors duration-300 ${skill.hoverColor}`} />
                    </div>
                    <span className={`text-sm font-medium text-white-200 tracking-wide transition-colors duration-300 ${skill.hoverColor}`}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
