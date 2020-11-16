import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import SubHeader from '../components/SubHeader';
import { AiFillApi } from 'react-icons/ai';
import { FaCode } from 'react-icons/fa';
import { MdSlowMotionVideo } from 'react-icons/md';
import * as config from '../config';

const captions = ['Frontend Development', 'Rest API Development', 'Web Animation'];

const icons = [FaCode, AiFillApi, MdSlowMotionVideo];

const texts = [
   'With JavaScript, React, HTML5, CSS3, Rest API, Netlify | Firebase, Web Animation, GitHub.',
   'With NodeJS, Express, Heroku, GitHub.',
   'With Framer Motion, GSAP, ScrollTrigger, CSS3.',
];


interface Props {}

function Service(props: Props) {
   // const {} = props

   return (
      <SERVICES>
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
   margin: 20px 0;
   background: ${config.color2};
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
