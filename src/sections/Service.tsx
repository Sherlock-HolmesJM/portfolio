import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AiFillApi } from 'react-icons/ai';
import { FaCode } from 'react-icons/fa';
import { MdSlowMotionVideo } from 'react-icons/md';

import { colors } from '../config';

import Card from '../components/Card';
import SubHeader from '../components/SubHeader';
import Aside from '../components/Aside';



const captions = ['Frontend Development', 'Rest API Development', 'Web Animation'];

const icons = [FaCode, AiFillApi, MdSlowMotionVideo];

const texts = [
   'With JavaScript, React, HTML5, CSS3, Rest API, Netlify | Firebase, Web Animation, GitHub.',
   'With NodeJS, Express, Heroku, GitHub.',
   'With Framer Motion, GSAP, ScrollTrigger, CSS3.',
];


interface Props {
   className?: string,
}

function Service(props: Props) {
   const { className } = props;

   const { ref, inView } = useInView({
      triggerOnce: true
   });

   const variants = {
      inView: {
         transition: { 
            staggerChildren: 0.09
         }
      }
   }

   return (
      <SERVICES id="services" className={className}>
         <Aside></Aside>

         <Main>
            <SubHeader name="Services" caption="Services I Provide" center />

            <CardContainer ref={ref} variants={variants} initial="initial" animate={inView ? "inView" : ""}>
               { captions.map((caption, i) => <Card key={i} caption={caption} Icon={icons[i]} text={texts[i]}/>)}
            </CardContainer>
         </Main>

         <Aside></Aside>
      </SERVICES>
   )
}

const SERVICES = styled.section`
   display: flex;
   background: ${colors.orshblood};
   min-height: 100vh;
`;

const Main = styled.main`
   flex-basis: 90%;
`;

const CardContainer = styled(motion.div)`
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   margin: 20px 0;
`;

export default Service
