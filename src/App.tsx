import React, { useState } from 'react';
// import { useViewportScroll } from 'framer-motion';
// import log from './logger';
// import gsap from 'gsap';
// import scrollTrigger from 'gsap/ScrollTrigger';
// import Particles from './particles/particles.min.js';
// import { Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Service from './sections/Service';
import Experience from './sections/Experience';
import Footer from './sections/Footer';

function App() {

  // const scrollView = useViewportScroll();

  // log(scrollView);

  // const canvas = useCallback(node => {
  
  //   if (node) {
  //     Particles.init({
  //       selector: '.background',
  //       connectParticles: true,
  //       color: '#16a596',
  //       responsive: [
  //         {
  //           breakpoint: 989,
  //           options: {
  //             maxParticles: 30
  //           }
  //         }
  //       ]
  //     })
  //   }

  // }, []);

  const mediaQuery = window.matchMedia('(max-width: 989px)');
  const [matches, setMatches] = useState(mediaQuery.matches);

  mediaQuery.addEventListener('change', () => {
    if (matches !== mediaQuery.matches) setMatches(mediaQuery.matches);
  });

  return (
    <div className="App">
      <Header id="header" matches={matches} />

      <Home id="home" matches={matches} />

      <About id="about" />

      <Service id="services" />

      <Portfolio id="portfolio" />

      <Experience id="experience" />

      <Footer />
      {/* <canvas ref={canvas} className="background"></canvas> */}
    </div>
  );
}

export default App;
