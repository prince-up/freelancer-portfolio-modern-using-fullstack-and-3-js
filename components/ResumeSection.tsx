import { FaDownload, FaFilePdf } from "react-icons/fa6";
import { motion } from "framer-motion";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Resume</span>
      </h1>

      <motion.div
        className="mt-10 rounded-3xl border border-purple/30 bg-gradient-to-br from-black-200 to-black-100 p-8 md:p-12 overflow-hidden relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          borderColor: "rgba(168, 85, 247, 0.6)",
          boxShadow: "0 12px 48px rgba(168, 85, 247, 0.15)",
        }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple/5 to-blue/5 pointer-events-none" />

        <div className="relative z-10">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-white-200 text-base md:text-lg leading-relaxed">
              📄 Download my latest <span className="text-purple font-semibold">1-page ATS-friendly resume</span>. I update it regularly with new projects, certifications, and skills.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="/Prince_Yadav_Resume_ATS.txt"
              download="Prince_Yadav_Resume.txt"
              className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple to-blue-500 hover:from-purple/85 hover:to-blue-600 text-white font-bold text-lg transition transform hover:scale-105"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 8px 32px rgba(168, 85, 247, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div whileHover={{ y: -2, rotate: -10 }}>
                <FaDownload size={18} />
              </motion.div>
              Download Resume (TXT)
            </motion.a>

            <motion.span
              className="text-sm text-white-200 bg-black-300 px-4 py-2 rounded-lg border border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-purple font-semibold">ATS</span> Format • Ready for job applications
            </motion.span>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div whileHover={{ y: -3 }} className="group">
              <div className="text-purple text-3xl mb-2 group-hover:scale-110 transition">✨</div>
              <p className="font-semibold text-white">One Page</p>
              <p className="text-white-200 text-sm">Concise and impactful</p>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} className="group">
              <div className="text-blue-400 text-3xl mb-2 group-hover:scale-110 transition">🛡️</div>
              <p className="font-semibold text-white">ATS Optimized</p>
              <p className="text-white-200 text-sm">Passes all scanners</p>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} className="group">
              <div className="text-purple text-3xl mb-2 group-hover:scale-110 transition">🔄</div>
              <p className="font-semibold text-white">Updated Weekly</p>
              <p className="text-white-200 text-sm">Latest projects included</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
