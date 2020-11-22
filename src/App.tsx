import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  return (
    <div className="App">
      <Header />

      <Home className="section" />

      <About className="section" />

      <Service className="section"/>

      <Portfolio className="section" />

      <Experience className="section" />

      <Footer className="section" />
    </div>
  );
}

export default App;
