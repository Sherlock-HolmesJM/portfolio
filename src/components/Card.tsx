import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import * as config from '../config';


interface Props {
   caption: string,
   text: string,
   Icon: any

}

const transition = 'all .5s ease-in-out;';

function Card(props: Props) {
   const { caption, Icon, text } = props;

   const variants = {
      inView: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.5
         }
      }, 
      initial: {
         opacity: 0,
         y: 100,
      }
   };

   return (
      <CARD className="card" variants={variants}>
         <IconDiv className="card__iconDiv">
            <Icon className="card__icon" />
         </IconDiv>

         <Caption className="card__caption">{caption}</Caption>

         <Text className="card__text">{text}</Text>
      </CARD>
   )
}

const CARD = styled(motion.div)`
   background: ${config.white};
   width: 280px;
   padding: 30px;
   margin: 10px;
   border: 3px dashed ${config.orshblood};
   border-radius: 10px;
   transition: ${transition};

   &:hover { 
      background: ${config.navyblueDark};
      color: ${config.white};
      border: 3px solid ${config.white};
   }

   &:hover .card__iconDiv {
      background: ${config.white};
      color: ${config.navyblueDark};
   }

   &:hover .card__caption, &:hover .card__text {
      color: ${config.white};
   }
`;

const IconDiv = styled.div`
   display: flex;
   justify-content: center;
   width: 80px;
   height: 80px;
   font-size: 46px;
   line-height: 40px;
   background: ${config.navyblueDark};
   color: ${config.white};
   text-align: center;
   border-radius: 30px;
   border-bottom-right-radius: 0px;
   transition: ${transition};

   .card__icon {
      width: 60%;
      height: 60%;
      align-self: center;
   }

`;

const Caption = styled.h2`
   color: ${config.navyblueLight};
   transition: ${transition};
`;

const Text = styled.p`
   color: ${config.orshblood};
   transition: ${transition};
   font-size: 18px;
   font-weight: 400px;
`;

export default Card
