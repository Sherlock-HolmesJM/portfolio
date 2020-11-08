import React, { useCallback } from 'react';
import './App.css';
import Header from './components/Header';
// import log from './logger';
// import Particles from './particles/particles.min.js';

function App() {

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



  return (
    <div className="App">
      <Header />

      {/* <canvas ref={canvas} className="background"></canvas> */}
    </div>
  );
}

export default App;
