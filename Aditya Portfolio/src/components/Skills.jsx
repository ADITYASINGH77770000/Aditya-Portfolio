import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  DiMongodb, DiNodejs, DiPython, DiJava, DiReact
} from 'react-icons/di';
import {
   SiCplusplus, SiTypescript, SiNextdotjs,
  SiTailwindcss, SiC, SiFirebase, SiAppwrite, SiClerk
} from 'react-icons/si';
import { BiData } from 'react-icons/bi';
import SnowParticles from './SnowParticle';

const skills = [
  {
    name: 'NLP',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
        alt="PyTorch"
        className="w-10 sm:w-16"
      />
    ),
  },
  {
    name: 'Pandas',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
        alt="Pandas"
        className="w-10 sm:w-16"
      />
    ),
  },
  {
    name: 'NumPy',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
        alt="NumPy"
        className="w-10 sm:w-16"
      />
    ),
  },
  {
    name: 'MATLAB',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg"
        alt="MATLAB"
        className="w-10 sm:w-16"
      />
    ),
  },
  
  {
    name: 'GitHub',
    icon: <i className="devicon-github-original colored text-3xl sm:text-7xl" />,
  },
  {
    name: 'MongoDB',
    icon: <DiMongodb className="text-3xl sm:text-6xl text-[#47A248]" />,
  },
  {
    name: 'Deep Learning',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
        alt="TensorFlow"
        className="w-10 sm:w-16"
      />
    ),
  },
  {
    name: 'Streamlit',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg"
        alt="Streamlit"
        className="w-10 sm:w-16"
      />
    ),
  },
  
  {
    name: 'Machine Learning',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
        alt="Scikit-learn"
        className="w-10 sm:w-16"
      />
    ),
  },
  
  {
    name: 'Computer Vision',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg"
        alt="OpenCV"
        className="w-10 sm:w-16"
      />
    ),
  },
  
  {
    name: 'Plotly',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg"
        alt="Plotly"
        className="w-10 sm:w-16"
      />
    ),
  },
  
  {
    name: 'MySQL',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
        alt="MySQL"
        className="w-10 sm:w-16"
      />
    ),
  },
  {
    name: 'Google Cloud',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
        alt="Google Cloud"
        className="w-10 sm:w-16"
      />
    ),
  },
  {
    name: 'Gen AI',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg"
        alt="OpenAI"
        className="w-10 sm:w-16"
      />
    ),
  },
  {
    name: 'Fast API',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
        alt="FastAPI"
        className="w-10 sm:w-16"
       />
    ),
  },
  {
    name: 'Python',
    icon: <DiPython className="text-3xl sm:text-6xl text-[#3776AB]" />,
  },
  
  {
    name: 'SQL',
    icon: <BiData className="text-3xl sm:text-6xl text-[#00758F]" />,
  },
];

export default function Skills() {
  return (
    <section id="Skills" className="relative py-20 px-6 min-h-screen overflow-hidden bg-[#0B2447] text-white">
      <SnowParticles />

      <div className="max-w-7xl w-full mx-auto px-4">
        <motion.h2
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className=" text-3xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-transparent bg-clip-text pulse-glow"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill) => {
            const SkillItem = () => {
              const ref = useRef(null);
              const isInView = useInView(ref, { margin: '-50px 0px', amount: 0.5 });

              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex flex-col items-center justify-center p-4 h-[120px] w-[100px] sm:h-[160px] sm:w-[220px] rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:shadow-cyan-500/20 transition-all overflow-hidden"
                >
                  <div className="absolute w-40 h-40 bg-cyan-500/10 blur-[80px] opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10" />

                  <motion.div
                    className="mb-3 transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_currentColor]"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {skill.icon}
                  </motion.div>

                  <h3 className="text-md font-semibold text-white/80 group-hover:text-white transition-colors text-center">
                    {skill.name}
                  </h3>

                  <div ref={ref} className="w-full h-1 mt-2 bg-[#205295]/20 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ scaleX: isInView ? 1 : 0 }}
                      initial={{ scaleX: 0 }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                      className="h-full  bg-gradient-to-r from-[#00c6ff] to-[#0072ff] origin-left"
                    />
                  </div>
                </motion.div>
              );
            };

            return <SkillItem key={skill.name} />;
          })}
        </div>
      </div>
    </section>
  );
}
