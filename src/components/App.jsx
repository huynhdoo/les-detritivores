import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { projectsData, footerData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

function App() {
  const [projects, setProjects] = useState([]);
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setProjects([...projectsData]);
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ projects, footer }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
