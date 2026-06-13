
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import "./App.css";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">codenova Portfolio</h1>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero">

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <h2 className="hero-title">
            Hi, I'm <span>Akash</span>
          </h2>

          <p className="hero-text">
            Frontend Developer | React Developer | UI Designer
          </p>

          <button className="hero-btn">
            Explore My Work
          </button>

        </motion.div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="skills">

        <h2 className="section-title">
          Skills
        </h2>

        <div className="skills-container">

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="skill-card"
          >
            <FaHtml5 className="skill-icon" />
            <h3>HTML</h3>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="skill-card"
          >
            <FaCss3Alt className="skill-icon" />
            <h3>CSS</h3>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="skill-card"
          >
            <FaJs className="skill-icon" />
            <h3>JavaScript</h3>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="skill-card"
          >
            <FaReact className="skill-icon" />
            <h3>React</h3>
          </motion.div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">

        <h2 className="section-title">
          Projects
        </h2>

        <div className="project-container">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="project-card"
          >
            <h3>Portfolio Website</h3>
            <p>
              Responsive portfolio using React and modern UI.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="project-card"
          >
            <h3>Weather App</h3>
            <p>
              Live weather app using API integration.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="project-card"
          >
            <h3>Todo App</h3>
            <p>
              Task manager with local storage support.
            </p>
          </motion.div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">

        <h2 className="section-title">
          Contact Me
        </h2>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="social-icons">
          <FaGithub />
          <FaLinkedin />
          <FaInstagram />
        </div>

        <p>
          © 2026 code nova Portfolio | All Rights Reserved
        </p>

      </footer>

    </div>
  );
}

export default App;

