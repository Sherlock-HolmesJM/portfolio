import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { colors, mediaQueries } from '../config';

import hero from '../images/solution_mindset.webp';
import Button from '../components/Button';
import Aside from '../components/Aside';



interface Props {
   matches: boolean,
   className?: string,
}

function Home(props: Props) {
   const { matches, className } = props;

   useEffect(() => {
      const tl = gsap.timeline({
         defaults: { 
            ease: 'circ'
         }
      });

      // gsap.utils.toArray('.tween').forEach((child) => {
      //    tl.from((child as gsap.TweenTarget), {
      //       y: 30,
      //       opacity: 0
      //    });
      // });

      // tl.from('#hero', {
      //    opacity: 1,
      //    scale: 0,
      // })
      // .to('#hero', {
      //    scale: 1,
      //    opacity: 1
      // }, '+=0.5');

      // ScrollTrigger.create({ 
      //    trigger: '#home',
      //    animation: tl,
      //    toggleActions: 'play pause resume complete',
      // });
   }, []);

   return (
      <HomeComp id="home" className={className} matches={matches}>
         <Aside></Aside>

         <MainDiv>
            <MainDivItem1 className="home__item1" initial="start" animate="end">
               <H3 className="tween">Hello I'm</H3>
               <H2 className="tween">Justice Ugochukwu</H2>

               <P2 className="tween">Freelance Web Developer</P2>

               <P1 className="tween">
                  <code> Solution mindset </code>
               </P1>

               <Button className="tween" whileTap={{scale: 0.90}} whileHover={{scale: 1.05}}> 
                  <a href="#footer" className="home__hireMe">Hire Me</a> 
               </Button>
            </MainDivItem1>

            <Hero className="home__hero" src={hero} id="hero" alt="hero" initial="start" animate="end" />
         </MainDiv>

         <Aside></Aside>
      </HomeComp>
   )
}

const linear_grad = `linear-gradient(70deg, ${colors.orshblood} 50%, ${colors.navyblueDark} 50%, ${colors.navyblueDark} 100%)`;

const HomeComp = styled(motion.div)<Props>`
   display: flex;
   color: ${colors.yellow};
   background: ${({ matches }) => matches ? colors.orshblood : linear_grad};
   background-repeat: no-repeat;
   min-height: 100vh;
`;

const MainDiv = styled.div`
   flex-basis: 90%;
   display: flex;
   justify-content: center;

   @media only screen and (${mediaQueries.query1}) {
      flex-direction: column;

      .home__hero {
         display: none;
      }
   }
`;

const MainDivItem1 = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding-top: 30%;

   .home__hireMe {
      color: ${colors.yellow};
   }

   * {
      margin: 0;
   }
`;

const H3 = styled(motion.h3)`
   color: ${colors.navyblueDark};
   font-size: 30px;
   font-weight: 600;
   letter-spacing: 4px;
`;

const H2 = styled(motion.h2)`
   font-family: 'Montserat' sans-serif;
   font-size: 50px;
   font-weight: 700;
   margin-top: 5px;
`;

const P1 = styled(motion.p)`
   font-size: 16px;
   line-height: 26px;
   margin: 15px 0;
`;

const P2 = styled(motion.p)`
   font-size: 18px;
   font-weight: 500;
   margin-top: 15px;
`;

const Hero = styled(motion.img)`
   width: 600px;
   height: 590px;
   opacity: 0;
   transform: translateY(94px);
`;

export default Home
