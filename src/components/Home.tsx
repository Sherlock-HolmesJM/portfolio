import React, { useCallback } from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll } from 'framer-motion';
import log from '../logger';
import hero from '../hero.png';

interface Props {
   matches: boolean
}

function Home(props: Props) {
   const { matches } = props;

   const ref = useCallback(node => {
      if (node) log(node.offsetTop);
   }, []);

   return (
      <HomeComp ref={ref} matches={matches}>
         <Div1>
            <h3>Hello I'm</h3>
            <h1>John Smith</h1>

            <p>Professional Freelance Web Developer</p>

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>

            <button>Hire Me</button>
         </Div1>

         <Div2>
            <Img src={hero} alt="hero" />
         </Div2>
      </HomeComp>
   )
}

const linear_grad = 'linear-gradient(70deg, rgba(246,245,241,1) 50%, rgba(22,165,150,1) 50%, rgba(22,165,150,1) 100%)';

const HomeComp = styled(motion.div)<Props>`
   overflow: hidden;
   display: flex;
   background: ${({ matches }) => matches ? 'rgb(246,245,241)' : linear_grad};
   background-repeat: no-repeat;
   height: 110vh;
`;

const Div1 = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   flex-basis: 50%;
`;

const Div2 = styled(Div1)`
   flex-basis: 50%;
   justify-content: flex-end;
`;

const Img = styled.img`
   margin-top: 500px;
   width: 450px;
`;



export default Home
