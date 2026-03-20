import { motion } from "framer-motion";

const GitHubStats = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="github" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">GitHub stats</span>
      </h1>

      <motion.div
        className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="rounded-2xl border border-white/10 p-4 bg-black-100 overflow-hidden"
          variants={cardVariants}
          whileHover={{
            borderColor: "rgba(168, 85, 247, 0.5)",
            boxShadow: "0 8px 32px rgba(168, 85, 247, 0.1)",
          }}
        >
          <motion.img
            src="https://github-readme-stats.vercel.app/api?username=prince-up&show_icons=true&theme=tokyonight&hide_border=true"
            alt="Prince Yadav GitHub stats"
            className="w-full rounded-xl"
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>

        <motion.div
          className="rounded-2xl border border-white/10 p-4 bg-black-100 overflow-hidden"
          variants={cardVariants}
          whileHover={{
            borderColor: "rgba(168, 85, 247, 0.5)",
            boxShadow: "0 8px 32px rgba(168, 85, 247, 0.1)",
          }}
        >
          <motion.img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=prince-up&layout=compact&theme=tokyonight&hide_border=true"
            alt="Prince Yadav top languages"
            className="w-full rounded-xl"
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="https://github.com/prince-up?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
          whileHover={{
            borderColor: "rgba(168, 85, 247, 0.5)",
            scale: 1.05,
            boxShadow: "0 4px 20px rgba(168, 85, 247, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Explore all repositories
        </motion.a>
      </motion.div>
    </section>
  );
};

export default GitHubStats;
