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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 mt-10 md:mt-16 sm:px-4">
          {projects.map((item) => (
            <motion.div
              layout
              key={item.id}
              className="flex items-center justify-center w-full min-h-[30rem] md:min-h-[35rem]"
            >
              <PinContainer
                title="Visit Live Site"
                href={item.liveLink}
              >
                <div className="flex flex-col w-[80vw] sm:w-[480px] max-w-full lg:max-w-[500px] rounded-2xl overflow-hidden p-2 transition-all">
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

                  <p className="font-light text-sm md:text-base text-purple-200/80 mt-2 mb-6 min-h-20 leading-relaxed">
                    {item.des}
                  </p>

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
