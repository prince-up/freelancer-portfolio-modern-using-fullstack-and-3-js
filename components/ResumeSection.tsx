import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Resume</span>
      </h1>

      <motion.div
        className="mt-10 rounded-2xl border border-white/10 bg-black-100 p-6 md:p-10 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          borderColor: "rgba(168, 85, 247, 0.5)",
          boxShadow: "0 8px 32px rgba(168, 85, 247, 0.1)",
        }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p
          className="text-white-200 text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Download my latest 1-page ATS-friendly resume. I update it regularly
          with new projects, certifications, and skills.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href="/Prince_Yadav_Resume_ATS.txt"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(168, 85, 247, 0.5)",
              boxShadow: "0 4px 20px rgba(168, 85, 247, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div whileHover={{ y: -2 }}>
              <FaDownload />
            </motion.div>
            Download Resume
          </motion.a>
          <motion.span
            className="text-xs text-white-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            File: 1-page ATS format
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
