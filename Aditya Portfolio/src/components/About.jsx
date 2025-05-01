import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import SnowParticles from "./SnowParticle";
import ContactTerminal from "./ContactTerminal";

export default function About() {
  const [showToast, setShowToast] = useState(false);

  const handleSuccess = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Toast disappears after 3 seconds
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.name === "link_redirect") {
        window.open("mailto:ar4564@srmist.edu.in", "_blank");
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section
      id="About1"
      className="relative overflow-hidden min-h-screen bg-[#0B2447] px-4 py-16"
    >
      <SnowParticles />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Bot Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex items-center justify-center"
        >
          <iframe
            src="https://my.spline.design/happyrobotbutton-z223TCHWkFzxAoGzpR0Xgs7B/"
            frameBorder="0"
            allow="autoplay; fullscreen"
            title="Animated Robot"
            className="w-full h-full rounded-xl shadow-xl"
            style={{
              pointerEvents: "auto",
              background: "transparent",
            }}
          />
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card border border-[#2C74B3]/30 rounded-2xl p-8 shadow-2xl backdrop-blur-lg bg-black/40"
        >
          <motion.h2
            className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#00c6ff] to-[#2C74B3] text-transparent bg-clip-text"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            👋 About Me
          </motion.h2>

          <p className="text-white/90 text-lg leading-relaxed mb-4">
            I&#39;m <span className="text-[#5f9acf] font-semibold pulse-glow">Aditya Singh</span>, an aspiring AI Engineer passionate about building intelligent systems using <strong>Python</strong>, <strong>Machine Learning</strong>, <strong>Deep Learning</strong>, <strong>NLP</strong>, <strong>LLMs</strong>, and <strong>GenAI</strong>.
          </p>

          <p className="text-white/80 mb-6">
            🚀 I love creating models that solve real-world problems, automate tasks, and bring innovation through cutting-edge AI technologies. Constantly learning, evolving, and pushing the limits of what AI can do.
          </p>

          <hr className="my-6 border-[#2C74B3]/20" />

          <h2 className="text-2xl font-bold text-white mb-4">📬 Contact Me</h2>

          <div className="text-white mb-6 space-y-2">
            <p>📞 Phone: <span className="text-[#38BDF8] font-medium">9310821065</span></p>
            <p>✉️ Email: <span className="text-[#38BDF8] font-medium">ar4564@srmist.edu.in</span></p>
          </div>

          {/* Contact Terminal */}
          <ContactTerminal />

          {/* Button to trigger Toast */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleSuccess}
              className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-cyan-400/40 transition-all"
            >
              Send Message
            </button>
          </div>

          {/* Toast */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-green-600 text-white px-4 py-2 mt-4 text-sm rounded-lg text-center shadow-md"
              >
                ✅ Message sent successfully!
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  );
}
