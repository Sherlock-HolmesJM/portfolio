import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiFillApi } from 'react-icons/ai';
import { FaCode } from 'react-icons/fa';
import { MdSlowMotionVideo } from 'react-icons/md';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import * as config from '../config';

import Card from '../components/Card';
import SubHeader from '../components/SubHeader';



const captions = ['Frontend Development', 'Rest API Development', 'Web Animation'];

const icons = [FaCode, AiFillApi, MdSlowMotionVideo];

const texts = [
   'With JavaScript, React, HTML5, CSS3, Rest API, Netlify | Firebase, Web Animation, GitHub.',
   'With NodeJS, Express, Heroku, GitHub.',
   'With Framer Motion, GSAP, ScrollTrigger, CSS3.',
];


interface Props {
   className?: string,
   ref?: any,
}

function Service(props: Props) {
   const { className, ref } = props;

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray('.card').forEach(child => {
         
         gsap.from((child as gsap.TweenTarget), {
            y: 100,
            opacity: 0,
            duration: 0.1
         });
         
         gsap.to((child as gsap.TweenTarget), {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5
         });

      });

   });

   return (
      <SERVICES id="services" className={className} ref={ref}>
         <Aside></Aside>

         <Main>
            <SubHeader name="Services" caption="Services I Provide" center />

            <CardContainer>
               { captions.map((caption, i) => <Card key={i} caption={caption} Icon={icons[i]} text={texts[i]}/>)}
            </CardContainer>
         </Main>

         <Aside></Aside>
      </SERVICES>
   )
}

const SERVICES = styled.section`
   display: flex;
   background: ${config.orshblood};
`;

const Main = styled.main`
   flex-basis: 90%;
`;

const CardContainer = styled.div`
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   margin: 20px 0;
`;

const Aside = styled.aside`
   flex-basis: 10%;
`;

export default Service
