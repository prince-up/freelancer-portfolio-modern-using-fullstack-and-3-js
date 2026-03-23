import { motion } from "framer-motion";

const whoIAmPoints = [
  "👋 Hello, I'm Prince, a dedicated MERN stack developer with a passion for building robust and scalable web applications. With solid expertise in MongoDB, Express.js, React.js, and Node.js, I thrive on creating seamless user experiences and solving complex technical challenges.",
  "🌐 Beyond the MERN stack, I bring in-depth knowledge of database management systems including MySQL and PostgreSQL, ensuring efficient data handling and optimization. My proficiency extends to C++ for algorithmic problem-solving, and I have solved over 250+ problems on LeetCode, sharpening my skills in data structures and algorithms.",
  "🛠️ Leveraging Git for version control, I collaborate effectively with teams to deliver high-quality software solutions. I thrive in dynamic environments where innovation and continuous learning are encouraged.",
  "🎓 Currently seeking opportunities to contribute my technical skills and creativity to a forward-thinking organization. Let's connect to explore how I can add value.",
];

const WhoIAm = () => {
  return (
    <section className="relative py-20">
      <motion.div
        className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-br from-black-200/70 via-black-100/80 to-black-200/70 p-6 shadow-[0_12px_48px_rgba(5,8,30,0.45)] md:p-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blue-100">About</p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Who I Am</h2>
          </div>
          <span className="rounded-full border border-purple/40 bg-purple/10 px-4 py-1 text-xs uppercase tracking-[0.15em] text-purple">
            MERN + DSA
          </span>
        </div>

        <div className="space-y-4">
          {whoIAmPoints.map((point, index) => (
            <motion.p
              key={index}
              className="rounded-2xl border border-white/10 bg-black-100/55 p-4 text-sm leading-relaxed text-white-200 md:text-base"
              initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              {point}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhoIAm;
