import { FaLocationArrow } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { scale: 1.2, rotate: 5 },
  };

  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <motion.div
          className="max-w-[92vw] md:max-w-2xl lg:max-w-[62vw] flex flex-col items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span
            className="mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-[11px] md:text-xs uppercase tracking-[0.25em] text-blue-100 inline-block"
            variants={itemVariants}
          >
            Prince Yadav | B.Tech 3rd Year
          </motion.span>

          <motion.div variants={itemVariants}>
            <TextGenerateEffect
              words="I build modern web products that are fast, clean, and user-focused"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
          </motion.div>

          <motion.p
            className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-2xl text-white-200 max-w-3xl"
            variants={itemVariants}
          >
            Hi, I&apos;m Prince Yadav. I design and develop real-world full stack projects with Next.js, React, TypeScript, and modern UI systems.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-4"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#projects">
                <MagicButton
                  title="View my projects"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#contact">
                <MagicButton
                  title="Hire me"
                  icon={<FaLocationArrow />}
                  position="right"
                  otherClasses="!bg-black-100"
                />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-5"
            variants={containerVariants}
          >
            <motion.a
              href="https://github.com/prince-up"
              target="_blank"
              rel="noreferrer"
              className="text-white-200 hover:text-white transition-colors"
              aria-label="Prince Yadav GitHub"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/prince-yadav-4t/"
              target="_blank"
              rel="noreferrer"
              className="text-white-200 hover:text-white transition-colors"
              aria-label="Prince Yadav LinkedIn"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <FiLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://x.com/prince__up"
              target="_blank"
              rel="noreferrer"
              className="text-white-200 hover:text-white transition-colors"
              aria-label="Prince Yadav X"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <FiTwitter size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
