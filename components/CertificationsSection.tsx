import { motion } from "framer-motion";
import { certifications } from "@/data";
import { useState } from "react";

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

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
            className="rounded-2xl border border-white/10 bg-black-100 p-5 hover:border-purple/50 transition-colors cursor-pointer"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 8px 32px rgba(168, 85, 247, 0.15)",
              borderColor: "rgba(168, 85, 247, 0.5)",
            }}
            onClick={() => setSelectedCert(item.image || null)}
          >
            <div className="space-y-4">
              {item.image && (
                <div className="overflow-hidden rounded-xl border border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 md:h-48 object-cover object-top"
                  />
                </div>
              )}

              <div className="flex items-center justify-between gap-3">
                <motion.span
                  className="text-xs uppercase tracking-wide text-purple"
                  whileHover={{ letterSpacing: "0.1em" }}
                >
                  {item.category}
                </motion.span>
                <span className="text-xs text-white-200">{item.date}</span>
              </div>

              <h3 className="text-base md:text-lg font-semibold text-white line-clamp-2">
                {item.title}
              </h3>
              <p className="text-sm text-white-200">{item.issuer}</p>
              <p className="text-xs text-purple/70">Click card to view full certificate →</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-black-100 rounded-2xl border border-white/10 p-4 max-w-2xl w-full max-h-[90vh] overflow-auto"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="mb-4 text-white/70 hover:text-white text-lg font-bold"
            >
              ✕ Close
            </button>
            <img
              src={selectedCert}
              alt="Certificate"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default CertificationsSection;
