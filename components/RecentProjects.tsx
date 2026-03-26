"use client";

import { FaGithub, FaExternalLinkAlt, FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="heading flex items-center justify-center gap-4">
            Top <span className="text-purple group-hover:text-cyan-400 transition-colors">Star Rated</span> Projects
            <motion.span 
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⭐
            </motion.span>
          </h1>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-base">
            Exploring highly-rated open source contributions and production-grade implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-32 gap-x-12 mt-20 md:mt-24 px-4">
          {projects.map((item) => (
            <motion.div
              layout
              key={item.id}
              className="flex items-center justify-center w-full min-h-[45rem] md:min-h-[50rem] relative"
            >
              <PinContainer
                title="View Repository"
                href={item.githubLink}
              >
                <div className="flex flex-col w-[90vw] sm:w-[480px] lg:w-[450px] xl:w-[500px] rounded-2xl overflow-hidden p-4 transition-all bg-[#04071d] border border-white/5">
                  <div className="relative flex items-center justify-center w-full overflow-hidden h-[25vh] lg:h-[30vh] mb-6 rounded-2xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-[#13162D]/50 drop-shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 z-0" />
                    <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover opacity-60 z-0" />
                    <img
                      src={item.img}
                      alt="cover"
                      className="z-10 absolute bottom-0 max-h-[90%] transform group-hover/pin:scale-105 transition-transform duration-500 will-change-transform"
                    />
                  </div>

                  <h1 className="font-bold text-xl md:text-2xl text-white tracking-wide line-clamp-1 drop-shadow-md">
                    {item.title}
                  </h1>

                  <p className="font-light text-sm md:text-base text-purple-200/80 mt-2 mb-4 min-h-20 leading-relaxed italic">
                    {item.des}
                  </p>

                  {/* Case Study Deep Dive */}
                  <div className="space-y-4 mb-6 text-sm">
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                      <p className="text-red-300 font-bold mb-1">Challenge:</p>
                      <p className="text-white/70">{item.challenge}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                      <p className="text-green-300 font-bold mb-1">Solution:</p>
                      <p className="text-white/70">{item.solution}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                      <p className="text-cyan-300 font-bold mb-1">Impact:</p>
                      <p className="text-white/70">{item.impact}</p>
                    </div>
                  </div>

                  {/* Professional Quality Badges */}
                  <div className="flex gap-2 mb-6">
                    <span className="px-2 py-1 rounded-md bg-green-500/10 border border-green-500/30 text-[10px] text-green-400 font-bold uppercase tracking-tighter">100% Test Coverage</span>
                    <span className="px-2 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-[10px] text-blue-400 font-bold uppercase tracking-tighter">CI/CD Validated</span>
                    <span className="px-2 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-[10px] text-purple-400 font-bold uppercase tracking-tighter">Clean Code Verified</span>
                  </div>

                  {/* Architecture & Demo CTAs */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    <a 
                      href={item.githubLink}
                      target="_blank"
                      className="flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white hover:bg-white/10 transition-colors"
                    >
                      📐 Architecture
                    </a>
                    <a 
                      href={item.liveLink}
                      target="_blank"
                      className="flex items-center justify-center gap-2 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                    >
                      🎬 Video Demo
                    </a>
                  </div>

                  <div className="flex items-center justify-between mt-auto border-t border-white/5 pt-4">
                    <div className="flex items-center -space-x-3">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={icon}
                          className="border border-white/20 rounded-full bg-black/60 backdrop-blur-md w-8 h-8 md:w-10 md:h-10 flex justify-center items-center shadow-lg hover:z-50 hover:scale-110 transition-transform cursor-pointer"
                        >
                           <img src={icon} alt={`tech-${index}`} className="p-2 w-full h-full object-contain" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center gap-2 group cursor-pointer transition-colors hover:text-cyan-400">
                      <p className="flex text-sm md:text-base font-semibold text-purple-300 group-hover:text-cyan-400 transition-colors">
                        Live Site
                      </p>
                      <FaLocationArrow className="text-purple-300 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={12} />
                    </div>
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </div>

        {/* Open Source Contribution Section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Open Source <span className="text-cyan-400">Impact</span></h2>
            <p className="text-white-200/60">Community contributions and collaborative engineering</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { project: "MERN Stack Blueprint", impact: "Optimized build scripts for 500+ developers.", icon: "🛠️" },
              { project: "UI Component Library", impact: "Engineered 3 high-performance Framer Motion components.", icon: "🎨" }
            ].map((contrib, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <span className="text-4xl">{contrib.icon}</span>
                <div>
                  <h4 className="font-bold text-white text-lg">{contrib.project}</h4>
                  <p className="text-white-200/60">{contrib.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          className="flex justify-center mt-20"
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
            View Full Repository Portfolio
            <FaExternalLinkAlt size={15} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default RecentProjects;
