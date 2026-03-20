import { motion } from "framer-motion";
import { certifications } from "@/data";

const CertificationsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="certifications" className="py-20">
      <h1 className="heading">
        Certifications <span className="text-purple">and Courses</span>
      </h1>

      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        {certifications.map((item) => (
          <motion.div
            key={item.id}
            className="rounded-2xl border border-white/10 bg-black-100 p-5 hover:border-purple/50 transition-colors"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 8px 32px rgba(168, 85, 247, 0.15)",
              borderColor: "rgba(168, 85, 247, 0.5)",
            }}
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="text-4xl flex-shrink-0"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {item.icon}
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-3">
                  <motion.span
                    className="text-xs uppercase tracking-wide text-purple"
                    whileHover={{ letterSpacing: "0.1em" }}
                  >
                    {item.category}
                  </motion.span>
                  <span className="text-xs text-white-200">{item.date}</span>
                </div>
                <h3 className="mt-2 text-base md:text-lg font-semibold text-white line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white-200">{item.issuer}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
