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

          {/* Live Text Resume Preview */}
          <motion.div
            className="mt-12 w-full bg-[#050510]/80 rounded-2xl border border-white/10 p-6 md:p-8 overflow-y-auto max-h-[500px] text-left shadow-inner relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="sticky top-0 float-right bg-purple-500/20 text-purple-200 text-xs px-3 py-1 rounded-full border border-purple-500/30 backdrop-blur-md">
              ATS TEXT PREVIEW
            </div>
            <pre className="text-white-200/70 font-mono text-xs md:text-sm whitespace-pre-wrap leading-relaxed mt-4">
{`Prince Yadav
LinkedIn: linkedin.com/in/prince-yadav-4t/
GitHub: https://github.com/prince-up
Email: princeyadav76001@gmail.com
Mobile: +91-7986614646

SKILLS
- Languages: C++, JavaScript, Typescript
- Frameworks: HTML and CSS, NodeJS, ExpressJS, ReactJS
- Tools/Platforms: MySQL, MongoDB, Postman, Firebase, Docker
- Skills: Data Structures and Algorithms, DBMS, Computer Networks, Operating system, Leadership, Adaptability

PROJECTS
DeployFlow (Dec 25' - Jan' 26)
- Built a CI/CD automation system to trigger and monitor Jenkins pipelines for GitHub repositories.
- Developed secure Node.js + Express APIs for pipeline execution and status management.
- Automated build/deploy processes, improving DevOps efficiency and deployment speed.
- Delivered a scalable, user-centric CI/CD dashboard that simplifies Jenkins pipeline execution and monitoring for GitHub projects, reducing manual overhead and accelerating continuous integration.
- Tech: Node.js, Express.js, React, Vite, Tailwind CSS, Jenkins, GitHub.

Online Assessment System (Aug' 25 - Nov' 25)
- Engineered a full-stack web application designed for quiz creation and management; implemented real-time score tracking and reporting features that enhanced user engagement.
- Implemented user authentication and secure session management using JWT, achieving 99.8% session stability.
- Designed a responsive and user-friendly interface using React.js and Tailwind CSS, enhancing user satisfaction.
- Developed a scalable online assessment system with dynamic quiz management, real-time score tracking, secure authentication, and automated email notifications.
- Tech: MongoDB, Express.js, React.js, Node.js, Tailwind CSS, JWT

TRAINING
Summer Training in MERN Stack at Cipher School (Jun' 25 - Jul' 25)
- Created responsive and dynamic web applications using React for front-end development.
- Designed robust and scalable APIs with NodeJS and Express for efficient server-side logic.
- Utilized MongoDB for efficient data storage and retrieval, ensuring seamless back-end integration.
- Applied best practices for authentication and authorization, enhancing application security.

CERTIFICATES
- Next.js Development | GFG (Jan' 26)
- AI foundation associate | ORACLE (Sep' 25)
- DSA training | ProgrammingPathshala (Aug' 25)
- React Native Mobile App Development | GFG (Jul' 25)

ACHIEVEMENTS
- Solved 300+ DSA problems on LeetCode.
- Earned a 5-star rating in C++, DSA, on HackerRank.
- Successfully completed the LeetCode 100 Days of Code challenge and earned the DCC March badge, highlighting a commitment to ongoing learning and practice.

EDUCATION
Lovely Professional University (Punjab, India)
Bachelor of Technology - Computer Science and Engineering; CGPA: 6.5 (Since Aug' 23)

Smt Ramrati Senior Secondary School (U.P, India)
Intermediate; Percentage: 72 (Apr' 21 - Mar' 22)

Amrit Public School (U.P, India)
Matriculation; Percentage: 70 (Apr' 19 - Mar' 20)`}
            </pre>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default ResumeSection;
