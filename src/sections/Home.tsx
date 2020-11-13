import React, { useCallback } from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll } from 'framer-motion';
import log from '../logger';
import hero from '../images/hero.png';
import { color3, color5 } from '../config';

interface Props {
   matches: boolean
}

function Home(props: Props) {
   const { matches } = props;

   const ref = useCallback(node => {
      if (node) log(node.offsetTop);
   }, []);

   const mainDivVariants = {
      end: {
         transition: { staggerChildren: 0.25 }
      }
   };

   const mainDiv1ItemVariantts = {
      start: { 
         opacity: 0,
         y: 50,
      },
      end: {
         opacity: 1,
         y: 0,
         transition: { duration: 2 }
      }
   };

   const heroVariants = {
      start: { 
         x: 100,
         opacity: 0,
      },
      end: {
         x: 0,
         opacity: 1,
         transition: { duration: 2 }
      }
   }

   return (
      <HomeComp ref={ref} matches={matches}>
         <AsideDiv></AsideDiv>
         <MainDiv>
            <MainDivItem1 variants={mainDivVariants} initial="start" animate="end">
               <H3 variants={mainDiv1ItemVariantts}>Hello I'm</H3>
               <H2 variants={mainDiv1ItemVariantts}>Justice Ugochukwu</H2>

               <P2 variants={mainDiv1ItemVariantts}>Freelance Web Developer</P2>

               <P1 variants={mainDiv1ItemVariantts}>
                  I have {}
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
               </P1>

               <Button variants={mainDiv1ItemVariantts}>Hire Me</Button>
            </MainDivItem1>
            <MainDivItem2>
               <Hero src={hero} alt="hero" variants={heroVariants} initial="start" animate="end" />
            </MainDivItem2>
         </MainDiv>
         <AsideDiv></AsideDiv>
      </HomeComp>
   )
}

const linear_grad = 'linear-gradient(70deg, rgba(246,245,241,1) 50%, rgba(22,165,150,1) 50%, rgba(22,165,150,1) 100%)';

const HomeComp = styled(motion.div)<Props>`
   display: flex;
   color: ${color5};
   background: ${({ matches }) => matches ? 'rgb(246,245,241)' : linear_grad};
   background-repeat: no-repeat;
   box-sizing: border-box;
`;

const MainDiv = styled.div`
   flex-basis: 90%;
   display: flex;
   justify-content: center;

   @media only screen and (max-width: 989px) {
      flex-direction: column;
   }
`;

const MainDivItem1 = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding-top: 80px;

   * {
      margin: 0;
   }
`;

const H3 = styled(motion.h3)`
   color: ${color3};
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
   margin-top: 15px;
`;

const P2 = styled(motion.p)`
   font-size: 18px;
   font-weight: 500;
   margin-top: 15px;
`;

const Button = styled(motion.button)`
   font-family: 'Montserat' sans-serif;
   font-size: 15px;
   padding: 10px;
   color: #fff;
   background: ${color3};
   outline: none;
   border: none;
   border-radius: 5px;
   width: 120px;
   height: 50px;
   margin-top: 15px;

   :hover { cursor: pointer; }
`;

const MainDivItem2 = styled.div`
   padding-bottom: 0;
   margin-bottom: 0;
`;

const Hero = styled(motion.img)`
   margin-top: 100px;
   margin-bottom: 0;
   width: 550px;
`;

const AsideDiv = styled.div`
   flex-basis: 10%;
`

export default Home
