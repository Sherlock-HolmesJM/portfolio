import React, { useCallback, useState } from 'react';
import { useViewportScroll } from 'framer-motion';
import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/About';
import log from './logger';
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import './App.css';
// import Particles from './particles/particles.min.js';

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
      <Header matches={matches} />

      <Home matches={matches} />

      <About />
      {/* <canvas ref={canvas} className="background"></canvas> */}
    </div>
  );
}

export default App;
