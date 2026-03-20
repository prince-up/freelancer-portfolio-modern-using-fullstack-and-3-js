"use client";

import { FormEvent, useState } from "react";
import { FaLocationArrow, FaPhone, FaEnvelope } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus({ type: "success", message: "Message sent successfully! I'll reply soon." });
      setFormData({ name: "", email: "", message: "" });
      
      // Auto close form and clear message after 4 seconds
      setTimeout(() => {
        setIsFormOpen(false);
        setStatus(null);
      }, 4000);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit form right now. Try emailing directly?",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="w-full pt-20 pb-10 relative overflow-hidden" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-30"
        />
      </div>

      <div className="relative z-10">
        {/* Contact Section */}
        <motion.div
          className="max-w-5xl mx-auto px-4 mb-16"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="heading">
              Let&apos;s Work <span className="text-purple">Together!</span>
            </h2>
            <p className="text-white-200 mt-4 text-base md:text-lg">
              I&apos;m available for freelance projects, full-time roles, collaborations, and consultations.
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            {/* Freelancer Card */}
            <motion.div
              className="border border-purple/30 bg-black-200 rounded-2xl p-6 hover:border-purple/60 hover:bg-black-100 transition group"
              whileHover={{ y: -5 }}
            >
              <div className="text-purple text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-white mb-2 group-hover:text-purple transition">Freelancer Available</h3>
              <p className="text-white-200 text-sm">
                Open for freelance projects, startups, and custom development work.
              </p>
            </motion.div>

            {/* Email Card */}
            <motion.a
              href="mailto:princeyadav76001@gmail.com"
              className="border border-white/10 bg-black-200 rounded-2xl p-6 hover:border-purple/60 hover:bg-black-100 transition group"
              whileHover={{ y: -5 }}
            >
              <FaEnvelope className="text-purple text-2xl mb-3" />
              <h3 className="font-bold text-white mb-2 group-hover:text-purple transition">Email Me</h3>
              <p className="text-white-200 text-sm break-all">
                princeyadav76001@gmail.com
              </p>
            </motion.a>

            {/* Quick Chat Card */}
            <motion.div
              className="border border-white/10 bg-black-200 rounded-2xl p-6 hover:border-purple/60 hover:bg-black-100 transition group"
              whileHover={{ y: -5 }}
            >
              <FaPhone className="text-purple text-2xl mb-3" />
              <h3 className="font-bold text-white mb-2 group-hover:text-purple transition">Quick Start</h3>
              <p className="text-white-200 text-sm">
                Fill the form below to get started immediately
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="w-full"
          >
            {!isFormOpen ? (
              <motion.button
                onClick={() => {
                  setIsFormOpen(true);
                  setStatus(null);
                }}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple to-blue-500 hover:from-purple/80 hover:to-blue-600 text-white font-bold text-lg rounded-2xl transition transform hover:scale-105 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLocationArrow className="text-lg" />
                Send Me a Message
              </motion.button>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-black-200 to-black-100 border border-purple/20 rounded-3xl p-8 md:p-12"
              >
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-white">Send me a message</h3>
                  <motion.button
                    type="button"
                    onClick={() => {
                      setIsFormOpen(false);
                      setStatus(null);
                    }}
                    className="text-white-300 hover:text-white text-2xl"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ✕
                  </motion.button>
                </div>

                <div className="space-y-6">
                  {/* Name Input */}
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <label className="block text-white text-sm font-semibold mb-2">Your Name</label>
                    <motion.input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-black-300 border-2 border-black-300 text-white placeholder-white-300 outline-none transition"
                      whileFocus={{
                        borderColor: "rgba(168, 85, 247, 0.8)",
                        boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                      }}
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <label className="block text-white text-sm font-semibold mb-2">Your Email</label>
                    <motion.input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-black-300 border-2 border-black-300 text-white placeholder-white-300 outline-none transition"
                      whileFocus={{
                        borderColor: "rgba(168, 85, 247, 0.8)",
                        boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                      }}
                    />
                  </motion.div>

                  {/* Message Input */}
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <label className="block text-white text-sm font-semibold mb-2">Message</label>
                    <motion.textarea
                      name="message"
                      placeholder="Tell me about your project, timeline, budget, or let me know about collaboration opportunities..."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-black-300 border-2 border-black-300 text-white placeholder-white-300 outline-none resize-none transition"
                      whileFocus={{
                        borderColor: "rgba(168, 85, 247, 0.8)",
                        boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                      }}
                    />
                  </motion.div>

                  {/* Status Messages */}
                  <AnimatePresence>
                    {status && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`p-4 rounded-xl font-semibold text-sm flex items-center gap-2 ${
                          status.type === "success"
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : "bg-red-500/20 text-red-300 border border-red-500/30"
                        }`}
                      >
                        <span className="text-lg">
                          {status.type === "success" ? "✓" : "✕"}
                        </span>
                        {status.message}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-3 pt-6 justify-center"
                    whileHover={{ scale: 1.01 }}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-8 py-3 bg-gradient-to-r from-purple to-blue-500 hover:from-purple/80 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block animate-spin">⟳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaLocationArrow className="text-sm" />
                          Send Message
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      className="flex-1 px-8 py-3 border-2 border-white/20 hover:border-purple text-white font-bold rounded-xl transition"
                      onClick={() => setFormData({ name: "", email: "", message: "" })}
                    >
                      Clear
                    </button>
                  </motion.div>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="max-w-5xl mx-auto px-4 mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-2">Prince Yadav</h4>
              <p className="text-white-300 text-sm">Full Stack Developer & Freelancer</p>
              <p className="text-white-200 text-xs mt-1">© 2026. All rights reserved.</p>
            </div>

            <motion.div
              className="flex items-center gap-4"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socialMedia.map((info) => (
                <motion.a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex justify-center items-center rounded-full bg-black-200 border border-white/10 hover:border-purple hover:bg-purple/10 transition"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={info.img} alt="social" width={18} height={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
