import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

import finno from "../assets/finno.png";
import assistant from "../assets/assistant.png";
import BrainWave from "../assets/BrainWave.png";
import scraper from "../assets/scraper.png";
import Converter from "../assets/Converter.png";

const projects = [
  {
    title: "BrainWave",
    subtitle: "AI-Powered Education Platform",
    year: "2025",
    description:
      "BrainWeb is an AI-powered educational platform that provides code generation, Q&A, summaries, and personalized learning tools in one interface.",
    image: BrainWave,
    github: "https://github.com/ADITYASINGH77770000/BrainWave",
    tech: ["Gemini API", "Python", "Streamlit", "Sqlite3"],
    color: "#00FF00",
  },
  {
    title: "AI Assistant",
    subtitle: "Conversational LLM-Based Agent",
    year: "2025",
    description:
      "A powerful AI assistant using Gemini API for natural conversations, task automation, and semantic search.",
    demo: "https://huggingface.co/spaces/Aditya7777/AI-Assistant",
    github:
      "https://github.com/ADITYASINGH77770000/LLM/tree/main/LLM%20Projects/AI%20Assistant",
    image: assistant,
    tech: ["Python", "Gen AI", "Gemini API", "Gradio"],
    color: "#9C27B0",
  },
  {
    title: "Finnovix Bot",
    subtitle: "Finance Assistant",
    year: "2025",
    description:
      "Finnovix is an advanced financial analytics and prediction platform designed to provide intelligent insights into the stock market.",
    demo: "https://finnovix-bot-4.onrender.com/",
    github: "https://github.com/ADITYASINGH77770000/Finance-Bot",
    image: finno,
    tech: ["Python", "LSTM", "Deep Learning", "Plotly"],
    color: "#FF7F50",
  },
  {
    title: "Web Scraper",
    subtitle: "Web Scraping Tool",
    year: "2025",
    description:
      "This Streamlit app scrapes any website URL, analyzes its content using Gemini AI, and generates a concise, insightful summary report.",
    demo: "https://huggingface.co/spaces/Aditya7777/Web-Scraper",
    github:
      "https://github.com/ADITYASINGH77770000/LLM/tree/main/LLM%20Projects/Web-Scraper",
    image: scraper,
    tech: ["Streamlit", "Python", "Gemini API", "BeautifulSoup"],
    color: "#0066FF",
  },
  {
    title: "Code Converter",
    subtitle: "Code Conversion Tool",
    year: "2025",
    description:
      "This tool converts code from one programming language to another using Gemini AI, making it easier for developers to switch languages.",
    demo: "https://huggingface.co/spaces/Aditya7777/Code-Converter",
    github:
      "https://github.com/ADITYASINGH77770000/LLM/tree/main/LLM%20Projects/Code%20Converter",
    image: Converter,
    tech: ["Gen AI", "Python", "Gemini API", "Gradio"],
    color: "#FF4500",
  },
];

export default function Projects() {
  return (
    <section id="Projects" className="bg-[#0B2447] text-white px-6 py-24 min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl sm:text-6xl pulse-glow font-bold mb-20 relative flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff]"
      >
        My Projects

        {/* Glow underline */}
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-[3px] w-32 bg-gradient-to-r from-[#00c6ff] via-[#2C74B3] to-[#00c6ff] blur-sm animate-pulse rounded-full" />
        <span className="absolute -bottom-6 left-1/2 w-40 h-6 blur-[40px] opacity-40 rounded-full -translate-x-1/2 bg-[#00c6ff]" />
      </motion.h2>

      <div className="space-y-20 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <Tilt
            key={project.title}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.03}
            transitionSpeed={700}
            glareEnable={true}
            glareColor={project.color}
            glareMaxOpacity={0.15}
            className="rounded-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:shadow-2xl group transition-transform duration-300 hover:scale-[1.01]"
            >
              {/* Glow bar */}
              <div
                className="absolute left-0 top-0 h-full w-1.5 rounded-tr-lg rounded-br-lg animate-pulse"
                style={{ backgroundColor: project.color }}
              />

              {/* Glow aura */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 blur-[90px] rounded-2xl -z-10"
                style={{ backgroundColor: project.color }}
              />

              {/* Card content */}
              <div className="relative z-10 p-6 sm:p-10 flex flex-col lg:flex-row gap-10 items-center">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-3xl font-bold text-white">{project.title}</h3>
                  <p
                    className="text-sm sm:text-base font-semibold mb-4"
                    style={{ color: project.color }}
                  >
                    {project.subtitle} - {project.year}
                  </p>
                  <p className="text-white/90 mb-5 text-sm sm:text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs sm:text-sm rounded-full font-medium border"
                        style={{
                          color: project.color,
                          borderColor: `${project.color}60`,
                          backgroundColor: `${project.color}10`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6 text-lg">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 hover:text-cyan-400"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 hover:text-cyan-400"
                    >
                      <FaGithub /> Source Code
                    </a>
                  </div>
                </div>

                <div
                  className="w-full lg:w-[450px] aspect-video overflow-hidden rounded-xl shadow-lg cursor-pointer"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain w-full h-full rounded-xl"
                    style={{ objectPosition: "top center" }}
                  />
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
