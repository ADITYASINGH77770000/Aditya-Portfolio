import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Seperation from './components/Seperation'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievment from "./components/Achievment.jsx";
import SnowParticles from './components/SnowParticle.jsx'
import SmoothScroll from './components/LenisScroll.jsx'

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-gradient1'>

      <Header />
      <SmoothScroll>
        <section id='Home'>
          {/* <Particle /> */}
          <Hero />
        </section>

        <section id='Technologies'>
          <Skills />
        </section>

        <Seperation />

        <section id='Projects'>
          <SnowParticles />
          <Projects />
        </section>

        <Seperation />

        <section id='About'>
          <About />
        </section>

        {/* ✅ New Achievements Section */}
        <Seperation />
        <section id='Achievements'>
          <Achievment />
        </section>

      </SmoothScroll>

      <Footer />
    </div>
  );
}

export default App;