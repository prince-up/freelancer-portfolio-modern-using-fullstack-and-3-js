import { motion } from "framer-motion";
import { FiGithub, FiStar, FiGitBranch, FiMessageCircle, FiTrendingUp } from "react-icons/fi";
import { BiCodeBlock } from "react-icons/bi";

const GitHubStats = () => {
  const stats = [
    { label: "Total Stars Earned", value: "42", icon: FiStar, color: "from-yellow-400 to-orange-500" },
    { label: "Total Contributions", value: "276", icon: FiTrendingUp, color: "from-green-400 to-emerald-500" },
    { label: "Total Repositories", value: "45", icon: FiGitBranch, color: "from-blue-400 to-cyan-500" },
    { label: "Public Issues", value: "4", icon: FiMessageCircle, color: "from-pink-400 to-rose-500" },
  ];

  const topLanguages = [
    { name: "JavaScript", percentage: 42.5, color: "#f1e05a" },
    { name: "TypeScript", percentage: 28.3, color: "#3178c6" },
    { name: "HTML/CSS", percentage: 18.2, color: "#e34c26" },
    { name: "Node.js", percentage: 11.0, color: "#339933" },
  ];

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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="github" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">GitHub stats</span>
      </h1>

      {/* Main Stats Grid */}
      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              className={`rounded-2xl p-6 bg-gradient-to-br ${stat.color} bg-opacity-5 border border-white/10 backdrop-blur-sm overflow-hidden group`}
              variants={cardVariants}
              whileHover={{
                borderColor: "rgba(168, 85, 247, 0.5)",
                boxShadow: "0 8px 32px rgba(168, 85, 247, 0.15)",
                scale: 1.05,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-white/40">GitHub</span>
              </div>
              <motion.div
                className="text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">{stat.label}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Languages & Repository Stats */}
      <motion.div
        className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Top Languages */}
        <motion.div
          className="rounded-2xl border border-white/10 p-8 bg-black-100 backdrop-blur-md"
          variants={cardVariants}
          whileHover={{
            borderColor: "rgba(168, 85, 247, 0.5)",
            boxShadow: "0 8px 32px rgba(168, 85, 247, 0.1)",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-purple/20">
              <BiCodeBlock className="w-5 h-5 text-purple" />
            </div>
            <h3 className="text-lg font-bold text-white">Top Languages</h3>
          </div>
          
          <div className="space-y-4">
            {topLanguages.map((lang, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-sm text-white/80">{lang.name}</span>
                  </div>
                  <span className="text-xs text-white/50">{lang.percentage}%</span>
                </div>
                <motion.div
                  className="h-2 bg-white/10 rounded-full overflow-hidden"
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${lang.color}, rgba(168, 85, 247, 0.5))`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.1 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Stats Cards */}
        <div className="space-y-6">
          <motion.div
            className="rounded-2xl border border-white/10 p-6 bg-black-100 overflow-hidden"
            variants={cardVariants}
            whileHover={{
              borderColor: "rgba(168, 85, 247, 0.5)",
              boxShadow: "0 8px 32px rgba(168, 85, 247, 0.1)",
            }}
          >
            <div className="mb-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-purple/30 blur-md"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                  />
                  <img src="/git.svg" alt="GitHub logo" className="relative z-10 h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Full Profile Stats</p>
                  <p className="text-xs text-white/60">Live stats for prince-up</p>
                </div>
              </div>
              <FiGithub className="h-5 w-5 text-white/70" />
            </div>

            <motion.img
              src="https://github-readme-stats.vercel.app/api?username=prince-up&show_icons=true&theme=tokyonight&hide_border=true&count_private=true"
              alt="Prince Yadav GitHub stats"
              className="w-full rounded-xl"
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>

          {/* Trohpy / Top Repos */}
          <motion.div
            className="rounded-2xl border border-white/10 p-6 bg-black-100 overflow-hidden"
            variants={cardVariants}
            whileHover={{
              borderColor: "rgba(168, 85, 247, 0.5)",
              boxShadow: "0 8px 32px rgba(168, 85, 247, 0.1)",
            }}
          >
            <motion.img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=prince-up&layout=compact&theme=tokyonight&hide_border=true"
              alt="Prince Yadav Top Languages"
              className="w-full rounded-xl"
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="https://github.com/prince-up?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="group px-8 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition flex items-center gap-2"
          whileHover={{
            borderColor: "rgba(168, 85, 247, 0.5)",
            scale: 1.05,
            boxShadow: "0 4px 20px rgba(168, 85, 247, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <FiGithub className="w-5 h-5" />
          Explore all repositories
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default GitHubStats;
