import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { colors, mediaQueries } from '../config';

import aboutHero from '../images/undraw_dev_productivity.webp';
import Range from '../components/Range';
import SubHeader from '../components/SubHeader';
import Aside from '../components/Aside';



interface Props {
   className?: string,
}

function About(props: Props) {
   const { className } = props;

   useEffect(() => {

      gsap.defaults({ 
         ease: 'circ',
         duration: 2.5
      })

      const trigger = (el: string) => ({
         trigger: el,
         toggleActions: 'play pause resume complete',
      });
      
      gsap.from('.about__maindiv1', {
         scrollTrigger: trigger('.about__maindiv1'),
         opacity: 0,
         x: 100
      });
      
      gsap.from('.about__maindiv2', {
         scrollTrigger: trigger('.about__maindiv2'),
         opacity: 0,
         x: -100
      });

   }, []);

   return (
      <ABOUT id="about" className={className}>
         <Aside></Aside>

         <Main>
            <MainDiv1 className="about__maindiv1">
                  <HeroFrame className="about__frame1"></HeroFrame>
                  <HeroFrame2 className="about__frame2"></HeroFrame2>
                  <Hero src={aboutHero} alt="about_hero" />
            </MainDiv1>

            <MainDiv2 className="about__maindiv2">
                  <SubHeader name="About" caption="Why Hire Me?"/>
                  
                  <Range skill="JavaScript" value={80} />
                  <Range skill="ReactJS (with Redux...)" value={85} />
                  <Range skill="NodeJS (with Express...)" value={78} />
                  <Range skill="HTML5/CSS3" value={82} />
                  <Range skill="Web Hosting/Backend" value={80} />
                  <Range skill="Web Animation" value={70} />
            </MainDiv2>
         </Main>

         <Aside></Aside>
      </ABOUT>
   )
}

const ABOUT = styled.div`
   display: flex;
   background: ${colors.coolGray};
   min-height: 100vh;
`;

const Main = styled.main`
   flex-basis: 90%;
   display: flex;
   justify-content: space-between;

   @media only screen and (${mediaQueries.query1}) {
      flex-direction: column;
      align-items: center;
   }
`;

const MainDiv1 = styled.div`
   position: relative;
   display: flex;
   justify-content: center;
   width: 400px;
   height: 500px;
   margin-bottom: 20px; // for media query match
`;
const HeroFrame = styled.div`
   position: absolute;
   bottom: 0;
   border: 14px solid ${colors.navyblueDark};
   border-top: none;
   width: 350px;
   height: 305px;
`;
const HeroFrame2 = styled(HeroFrame)`
   height: 350px;
   width: 364px;
   border: none;
   border-top: 14px solid ${colors.navyblueDark};
   border-left: 14px solid ${colors.navyblueDark};
   transform: skewY(10deg);
`;
const Hero = styled.img`
   position: absolute;
   top: 20px;
   width: 400px;
   height: 500px;
`;

const MainDiv2 = styled.div`
   flex-basis: 50%;

   @media only screen and (${mediaQueries.query1}) {
      width: 100%;
   }
`;

export default About
