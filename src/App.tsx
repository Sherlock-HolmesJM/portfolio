import React, { useState, useRef, useEffect, useCallback } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import log from './logger';

import './App.css';

import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Service from './sections/Service';
import Experience from './sections/Experience';
import Footer from './sections/Footer';

function App() {

  gsap.registerPlugin(ScrollTrigger);

  const mediaQuery = window.matchMedia('(max-width: 989px)');
  const [matches, setMatches] = useState(mediaQuery.matches);

  mediaQuery.addEventListener('change', () => {
    if (matches !== mediaQuery.matches) setMatches(mediaQuery.matches);
  });

  // useEffect(() => {

  //   gsap.utils.toArray('.section').forEach((child) => {
  //     ScrollTrigger.create({ 
  //       trigger: child as Element,
  //       scrub: true,
  //       pin: true,
  //       pinSpacing: false,
  //     })
  //   });

  // }, []);

  return (
    <div className="App">
      <Header matches={matches} />

      <Home className="section" matches={matches} />

      <About className="section" />

      <Service className="section"/>

      <Portfolio className="section" />

      <Experience className="section" />

      <Footer className="section" />
    </div>
  );
}

export default App;
