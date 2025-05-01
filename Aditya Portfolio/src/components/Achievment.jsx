import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import internship from "../assets/internship.png";
import intern from "../assets/intern.png";

const achievements = [
  {
    title: "LLM Engineering Certificate",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-bddff00a-317a-4a58-913e-144953a1fe9a.jpg",
    description: "Credential for Advance LLM engineering skills.",
  },
  {
    title: "Data Science Internship Certificate",
    image: internship,
    description: "Worked as a Data Science Intern where I gained hands-on experience in data analysis, visualization, and predictive modeling.",
  },
  {
    title: "Data Science Intern Certificate",
    image: intern,
    description: "Hands-on internship focused on data analysis, visualization, and machine learning model development using Python.",
  },
];

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="Achievements"
      className="py-20 px-6 bg-[#0B2447] text-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#00c6ff] to-[#2C74B3] text-transparent bg-clip-text"
        >
          🏆 Achievements & Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card border border-[#2C74B3]/40 rounded-xl p-4 shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(item.image)} // 👈 Open modal
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-md mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-[#00c6ff]">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 👇 Modal View for Full Image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Certificate"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-3xl w-full max-h-[90vh] rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
