import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaRegLightbulb, FaRocket, FaBriefcase } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
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
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl transform rotate-6" />
            <div className="relative bg-black-200 border border-white/10 rounded-2xl p-8 backdrop-blur-xl aspect-square flex flex-col items-center justify-center space-y-8 overflow-hidden">
              
              {/* Decorative background grid */}
              <div className="absolute inset-0 opacity-20 bg-[url('/b4.svg')] bg-cover mix-blend-screen" />
              
              {/* Interactive tech elements */}
              <div className="relative z-10 p-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30">
                <FaLaptopCode className="text-6xl text-cyan-400" />
              </div>
              
              <div className="relative z-10 text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-cyan-100 uppercase tracking-wider">Available for Opportunities</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Prince Yadav</h3>
                <p className="text-white-200/80">B.Tech 3rd Year • Software Engineer</p>
              </div>

            </div>
          </motion.div>

          {/* Right Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="prose prose-lg prose-invert text-white-200/90 leading-relaxed font-light">
              <p className="text-xl text-white/90">
                Hi, I&apos;m <strong className="font-bold text-cyan-300">Prince Yadav</strong>, a passionate software engineer completely focused on building practical, high-performance web projects from the ground up.
              </p>
              <p>
                As a tech enthusiast with a strong interest in full-stack engineering, I specialize in transforming complex business problems into elegant, scalable digital solutions. I am extremely comfortable moving through both frontend aesthetics and deeply optimized backend architectures.
              </p>
              <p>
                Currently, my primary focus revolves around building responsive, highly dynamic applications utilizing <strong className="font-semibold text-white">Next.js, React, and TypeScript</strong> alongside robust Node.js pipelines. I strongly believe in continuous learning, constantly exploring edge-technologies to improve my technical arsenal.
              </p>
            </div>

            {/* Quick Stats/Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors">
                <FaRocket className="text-2xl text-purple-400 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg">Full-Stack Capability</h4>
                  <p className="text-sm text-white-200/70">Expertise spanning UI/UX creation to database modeling and API architecture.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                <FaBriefcase className="text-2xl text-blue-400 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg">Open to Work</h4>
                  <p className="text-sm text-white-200/70">Actively seeking collaborations, internships, and challenging freelance opportunities.</p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-6">
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(0,217,255,0.3)]">
                Connect With Me
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
