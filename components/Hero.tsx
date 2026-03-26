import { FaLocationArrow } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";

import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-36 md:pt-40 pb-20 flex items-center justify-center w-full">
      {/* Spotlight Backgrounds for a clean, premium look */}
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

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 md:px-10 text-center w-full">
        {/* Profile Image - Larger */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated rings */}
          <motion.div
            className="absolute -inset-8 rounded-full border-2 border-cyan-400/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -inset-4 rounded-full border border-blue-300/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-lg" />
          
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-cyan-400/50 shadow-[0_0_60px_rgba(0,217,255,0.4)] md:h-56 md:w-56">
            <Image
              src="/princeimm.jpeg"
              alt="Prince Yadav"
              fill
              priority
              sizes="(max-width: 768px) 192px, 224px"
              className="object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mb-4"
        >
          <TextGenerateEffect
            words="Prince Yadav"
            className="text-[40px] md:text-6xl lg:text-7xl font-bold font-serif !leading-tight tracking-wide"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        >
          MERN Stack Developer | Tech Enthusiast
        </motion.p>

        {/* Description - Larger */}
        <motion.p
          className="max-w-4xl text-base md:text-2xl text-white-200/90 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
        >
          Crafting innovative digital solutions with cutting-edge web technologies. Specializing in full-stack development, 3D graphics, and scalable systems.
        </motion.p>

        {/* Social Links - Larger */}
        <motion.div
          className="flex items-center gap-8 mb-12 justify-center flex-wrap"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        >
          <motion.a
            href="https://github.com/prince-up"
            target="_blank"
            rel="noreferrer"
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 blur transition-all" />
            <div className="relative bg-black/80 p-4 rounded-full border border-cyan-400/50 group-hover:border-cyan-400 transition">
              <FiGithub size={28} className="text-cyan-400" />
            </div>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/prince-yadav-4t/"
            target="_blank"
            rel="noreferrer"
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 blur transition-all" />
            <div className="relative bg-black/80 p-4 rounded-full border border-blue-400/50 group-hover:border-blue-400 transition">
              <FiLinkedin size={28} className="text-blue-400" />
            </div>
          </motion.a>
          <motion.a
            href="mailto:princeyadav76001@gmail.com"
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 blur transition-all" />
            <div className="relative bg-black/80 p-4 rounded-full border border-purple-400/50 group-hover:border-purple-400 transition">
              <FiMail size={28} className="text-purple-400" />
            </div>
          </motion.a>
          <motion.a
            href="https://x.com/prince__up"
            target="_blank"
            rel="noreferrer"
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 blur transition-all" />
            <div className="relative bg-black/80 p-4 rounded-full border border-cyan-400/50 group-hover:border-cyan-400 transition">
              <FiTwitter size={28} className="text-cyan-400" />
            </div>
          </motion.a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-6 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,217,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all border border-cyan-300/30"
          >
            Explore Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139,92,246,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full border-2 border-purple-500 text-white font-bold text-lg hover:bg-purple-500/10 transition-all"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-white-200/60 text-center">
            <div className="text-sm font-semibold mb-2">Scroll to explore</div>
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
