import { FaLocationArrow } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";

import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-28 md:pt-32">      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute left-[-12%] top-[22%] h-[480px] w-[480px] rounded-full bg-cyan-400/20 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute right-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[95px]"
        />
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-18%] right-[-6%] h-[520px] w-[520px] rounded-full bg-cyan-300/15 blur-[120px]"
        />
      </div>

      <motion.a
        href="/Prince_Yadav_Resume_ATS.txt"
        download="Prince_Yadav_Resume.txt"
        className="absolute right-2 top-7 z-20 hidden sm:block md:right-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <MagicButton
          title="View Resume"
          icon={<FaLocationArrow />}
          position="left"
          otherClasses="!bg-black-100"
        />
      </motion.a>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-2 pb-16 text-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute -inset-6 rounded-full border border-cyan-300/20" />
          <div className="absolute -inset-3 rounded-full border border-blue-300/25" />
          <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-blue-300/50 shadow-[0_0_40px_rgba(59,130,246,0.35)] md:h-40 md:w-40">
            <Image
              src="/princeimm.jpeg"
              alt="Prince Yadav"
              fill
              priority
              sizes="(max-width: 768px) 144px, 160px"
              className="object-cover object-center"
            />
          </div>
        </motion.div>

        <motion.h1
          className="mt-10 font-serif text-5xl font-bold leading-none text-white md:text-7xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          Prince Yadav
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-white-200 md:text-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          MERN Stack Developer | Tech Enthusiast
        </motion.p>

        <motion.p
          className="mt-4 max-w-3xl text-sm text-white-200/90 md:text-base"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Building robust and scalable web applications with MongoDB, Express.js, React.js, and Node.js. Solved 250+ LeetCode problems and actively open to impactful opportunities.
        </motion.p>

        <motion.div
          className="mt-8 flex items-center gap-6"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
        >
          <a
            href="https://github.com/prince-up"
            target="_blank"
            rel="noreferrer"
            className="text-white-200 transition hover:text-white"
            aria-label="Prince Yadav GitHub"
          >
            <FiGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/prince-yadav-4t/"
            target="_blank"
            rel="noreferrer"
            className="text-white-200 transition hover:text-white"
            aria-label="Prince Yadav LinkedIn"
          >
            <FiLinkedin size={32} />
          </a>
          <a
            href="mailto:princeyadav76001@gmail.com"
            className="text-white-200 transition hover:text-white"
            aria-label="Prince Yadav Email"
          >
            <FiMail size={32} />
          </a>
          <a
            href="https://x.com/prince__up"
            target="_blank"
            rel="noreferrer"
            className="text-white-200 transition hover:text-white"
            aria-label="Prince Yadav X"
          >
            <FiTwitter size={32} />
          </a>
        </motion.div>

        <motion.a
          href="#projects"
          className="mt-10 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          Explore Projects
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
