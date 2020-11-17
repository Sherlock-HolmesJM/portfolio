import React, { useState } from 'react';

// import gsap from 'gsap';
// import scrollTrigger from 'gsap/ScrollTrigger';

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
    </div>
  );
}

export default App;
