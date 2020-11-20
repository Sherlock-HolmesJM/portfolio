import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import * as config from '../config';

interface Props {
   left?: boolean,
   text: string,
   period: string,
   company: string,
   job: string,
   index: number
}

function Tween(props: Props) {
   const { left, text, index, period, job, company } = props

   const [height, setHeight] = useState(0);

   const number = index < 10 ? '0' + index : index;

   const variants = {
      animate: {
         opacity: 1,
         type: 'spring',
         transition: {
            duration: 1
         }
      },
      initial: {
         opacity: 0
      }
   };

   return (
      <Card left={left} variants={variants}>
         <div className="tlcard__text">{text}</div>
         <div className="tlcard__lineHolder">
            <div className="tlcard__line"></div>
            <div className="tlcard__index">{number}</div>
         </div>
         <div className="tlcard__header">
            <h3 className="tlcard__job">{job}</h3>
            <h4 className="tlcard__company"> <em>{company}</em> </h4>
            <div className="tlcard__period">{period}</div>
         </div>
      </Card>
   )
}

const Card = styled(motion.div)<{left: boolean | undefined}>`
   display: flex;
   ${props => props.left ? 'flex-direction: row-reverse' : ''};
   justify-content: space-between;
   font-size: 18px;
   font-weight: 600;
   color: ${config.navyblueLight};

   &:hover .tlcard__text, 
   &:hover .tlcard__index { 
      color: ${config.coolGray};
      background: ${config.navyblueDark};
   }
   
   .tlcard__text {
      flex-basis: 44%;
      padding: 15px;
      border-radius: 10px;
      transition: all .5s ease-in-out;
   }

   .tlcard__header {
      flex-basis: 44%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: ${props => props.left ? 'right' : 'left'};
      padding: 15px;
      text-transform: capitalize;
   }
   .tlcard__job {
      margin: 0;
   }
   .tlcard__company {
      margin: 10px 0;
      color: ${config.purple};
   }


   .tlcard__lineHolder {
      flex-basis: 53px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100%;
   }
   .tlcard__line {
      position: absolute;
      top: 0px;
      left: 48%;
      background: ${config.navyblueDark};
      width: 3px;
      min-height: 100%;
   }
   .tlcard__index {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 3px solid ${config.navyblueDark};
      background: ${config.coolGray};
      transition: all .5s ease-in-out;
      z-index: 111;
   }

`;

export default Tween
