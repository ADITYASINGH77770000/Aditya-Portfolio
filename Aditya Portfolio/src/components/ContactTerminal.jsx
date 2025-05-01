import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactTerminal() {
  const formRef = useRef(null);
  const [outputLines, setOutputLines] = useState([]);
  const [startedPush, setStartedPush] = useState(false);
  const [isPushing, setIsPushing] = useState(false);
  const [showOutput, setShowOutput] = useState(false); // New state to control visibility

  const handlePush = async () => {
    setStartedPush(true);
    setShowOutput(true);
    setOutputLines(["$ git push origin message-to-raghav"]);

    const fakeOutput = [
      "Enumerating objects: 3, done.",
      "Counting objects: 100% (3/3), done.",
      "Compressing objects: 100% (2/2), done.",
      "Writing objects: 100% (3/3), 1.23 KiB | 1.23 MiB/s, done.",
      "To: raghav.dev",
      "✅ Message sent successfully!",
    ];

    setIsPushing(true);

    for (let i = 0; i < fakeOutput.length; i++) {
      await new Promise((res) => setTimeout(res, 800)); // Typing delay
      setOutputLines((prev) => [...prev, fakeOutput[i]]);
    }

    setTimeout(() => {
      setIsPushing(false);

      // After 3 seconds, fade out
      setTimeout(() => {
        setShowOutput(false); // triggers AnimatePresence exit
        setTimeout(() => {
          setStartedPush(false);
          setOutputLines([]);
        }, 500); // extra 0.5s after fade-out animation
      }, 3000);

    }, fakeOutput.length * 500 + 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    fetch("https://formspree.io/f/mgvageav", {
      method: "POST",
      body: formData,
    });

    setTimeout(() => formRef.current.reset(), 100);
    handlePush();
  };

  return (
    <div className="relative bg-black/30 backdrop-blur-xl border border-[#2C74B3]/40 rounded-2xl p-6 shadow-2xl transition-all hover:shadow-[0_0_30px_#2C74B3]">

      {/* Title */}
      <p className="text-green-400 mb-6 text-lg flex items-center gap-2">
        <span className="animate-pulse text-green-400">$</span>
        <span className="typewriter">Let's make this commit count.</span>
      </p>

      {/* Contact Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        method="POST"
        target="dummyFrame"
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#84ccf7] font-mono">
            $ git config --global user.name
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            className="bg-[#0B2447] border border-[#2C74B3]/40 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#2C74B3] placeholder-gray-400/80 font-sans"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#84ccf7] font-mono">
            $ git config --global user.email
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="bg-[#0B2447] border border-[#2C74B3]/40 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#2C74B3] placeholder-gray-400/80 font-sans"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#84ccf7] font-mono">
            $ echo "your message" &gt; message.txt
          </label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Write your message..."
            className="bg-[#0B2447] border border-[#2C74B3]/40 text-white px-4 py-2 rounded-md resize-none focus:outline-none focus:border-[#2C74B3] placeholder-gray-400/80 font-sans"
          />
        </div>

        {/* Push Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={isPushing}
          className="w-full bg-gradient-to-r from-[#00c6ff] to-[#2C74B3] text-white font-semibold py-3 rounded-lg transition-all shadow-md hover:shadow-[0_0_20px_#2C74B3] font-mono disabled:opacity-50 disabled:cursor-not-allowed"
        >
          🚀 git push origin message-to-Aditya
        </motion.button>

        <iframe name="dummyFrame" style={{ display: "none" }} />
      </form>

      {/* Terminal Output */}
      <AnimatePresence>
        {startedPush && showOutput && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 bg-[#000000]/40 text-green-400 text-sm font-mono px-4 py-3 rounded-md border border-[#2C74B3]/20 shadow-inner"
          >
            {outputLines.map((line, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.2 }}
                className={
                  line.includes("✅")
                    ? "text-green-300 font-semibold"
                    : "text-green-400"
                }
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
