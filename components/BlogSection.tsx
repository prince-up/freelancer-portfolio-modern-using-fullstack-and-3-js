import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

import { blogPosts } from "@/data";

const BlogSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="blog" className="py-20">
      <h1 className="heading">
        Notes on <span className="text-purple">projects and DSA</span>
      </h1>

      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        {blogPosts.map((post) => (
          <motion.a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noreferrer"
            className="group border border-white/10 rounded-2xl p-6 bg-black-100 hover:bg-black-200 transition overflow-hidden"
            variants={itemVariants}
            whileHover={{ y: -5, borderColor: "rgba(168, 85, 247, 0.5)" }}
          >
            <motion.span
              className="text-xs uppercase tracking-wider text-purple"
              whileHover={{ letterSpacing: "0.1em" }}
            >
              {post.tag}
            </motion.span>
            <h2 className="mt-3 text-xl font-bold text-white group-hover:text-purple transition">
              {post.title}
            </h2>
            <p className="mt-3 text-sm text-white-200">{post.excerpt}</p>
            <motion.div
              className="mt-6 flex items-center text-purple text-sm"
              whileHover={{ gap: "1rem" }}
            >
              Read more <FaLocationArrow className="ms-2" />
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default BlogSection;
