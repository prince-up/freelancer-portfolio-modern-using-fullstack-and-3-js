"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "@/data";

const RecentProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="heading">
            Featured <span className="text-purple">Projects</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-base">
            A showcase of my recent work in full-stack development and system design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group h-full"
            >
              <div className="relative h-full rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20">
                
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:to-purple-600/5 transition-all duration-300" />

                {/* Content Container */}
                <div className="relative z-10 p-6 h-full flex flex-col gap-3">
                  
                  {/* Project Number */}
                  <motion.div
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-purple-600/30 text-purple-300 font-bold text-sm mb-4 border border-purple-500/50"
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    {idx + 1}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-3 group-hover:text-white/90 transition-colors duration-300">
                    {item.des}
                  </p>

                  {/* Presentation Points */}
                  <div className="space-y-2 min-h-[86px]">
                    {item.features.slice(0, 2).map((point, index) => (
                      <p
                        key={index}
                        className="text-xs text-white/75 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-purple-300 mt-[2px]">•</span>
                        <span>{point}</span>
                      </p>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-1">
                    <div className="flex flex-wrap gap-2">
                      {item.techStack.slice(0, 2).map((tech, i) => (
                        <motion.span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-full bg-purple-600/25 text-purple-200 border border-purple-500/40"
                          whileHover={{ scale: 1.08 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {item.techStack.length > 2 && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/60 border border-white/20">
                          +{item.techStack.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/10 my-2" />

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <motion.a
                      href={item.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-purple-300 bg-purple-600/20 border border-purple-500/40 hover:bg-purple-600/40 hover:border-purple-500/70 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub size={13} />
                      <span className="hidden sm:inline">Code</span>
                    </motion.a>

                    {item.liveLink !== item.githubLink && (
                      <motion.a
                        href={item.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-blue-300 bg-blue-600/20 border border-blue-500/40 hover:bg-blue-600/40 hover:border-blue-500/70 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt size={12} />
                        <span className="hidden sm:inline">Live</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/prince-up?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-lg border border-purple-500 text-purple-300 font-semibold hover:bg-purple-600/20 transition-all inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(168, 85, 247, 0.4)" }}
          >
            View All Projects
            <FaExternalLinkAlt size={15} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default RecentProjects;
