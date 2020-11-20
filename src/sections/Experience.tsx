import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import * as config from '../config';

import Button from '../components/Button';
import SubHeader from '../components/SubHeader';
import Tween from '../components/Tween';


const texts = ["I've been working really hard to be amongst the best frontend web developers in the world. I really do love working with and bending my solution mindset around data. I love logic"];



interface Props {
   className?: string,
}

function Experience(props: Props) {
   const { className } = props;

   const { inView, ref } = useInView({ triggerOnce: true });

   const variants = {
      animate: {
         transition: { staggerChildren: 0.8, delay: 0.5 }
      }
   }

   return (
      <EXPERIENCE id="experience" className={className}>
         <Aside></Aside>

         <Main>
            <SubHeader name="experience" caption="work experience" center />

            <motion.div className="experience__timeline" ref={ref} variants={variants} 
                        initial="initial" animate={inView ? 'animate' : ''}>
               <Tween text={texts[0]} job="Web Developer" company="self" index={1} period="2018 - 2020" />
               <Tween text={texts[0]} job="Rest API Developer" company="self" index={2} period="2019 - 2020" left />
               <Tween text={texts[0]} job="Web Animator" company="self" index={3} period="2020 - 2020" />
            </motion.div>

            <div className="experience__call">
               <MainDiv>
                  <SubHeader color={config.coolGray} caption="Have Any Project in Mind?" />
                  <p>
                     <em>Let me take care of implementation details for you.</em>
                  </p>
               </MainDiv>

               <MainDiv2>
                  <Button className="experience__button">
                     <a href="./#footer">Hire me!</a>
                  </Button>
               </MainDiv2>
            </div>
         </Main>

         <Aside></Aside>
      </EXPERIENCE>
   )
}

const EXPERIENCE = styled.section`
   position: relative;
   background: ${config.coolGray};
   display: flex;
   min-height: 100vh;
`;

const Main = styled.main`
   flex-basis: 90%;
   
   .experience__call {
      display: flex;
      justify-content: space-between;
      background: ${config.navyblueDark};
      color: ${config.coolGray};
      padding: 10px 60px;
      border-radius: 14px;
      height: 200px;
      margin-top: 60px;
   }
`;

const MainDiv = styled.div`
   flex-basis: 50%;
   display: flex;
   flex-direction: column;
   // justify-content: center;

   p { 
      font-size: 18px;
   }
`;

const MainDiv2 = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   .experience__button {
      background: ${config.coolGray};
      color: ${config.navyblueDark};
   }
`;

const Aside = styled.aside`
   flex-basis: 10%;
`;

export default Experience
