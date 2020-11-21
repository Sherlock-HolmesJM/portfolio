import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { colors, mediaQueries } from '../config';

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
         <div className="tween__text">{text}</div>
         <div className="tween__lineHolder">
            <div className="tween__line"></div>
            <div className="tween__index">{number}</div>
         </div>
         <div className="tween__header">
            <h3 className="tween__job">{job}</h3>
            <h4 className="tween__company"> <em>{company}</em> </h4>
            <div className="tween__period">{period}</div>
         </div>
      </Card>
   )
}

const Card = styled(motion.div)<{left: boolean | undefined}>`
   display: flex;
   flex-direction: ${props => props.left ? 'row-reverse' : 'row'};
   justify-content: space-between;
   font-size: 18px;
   font-weight: 600;
   color: ${colors.navyblueLight};

   &:hover .tween__text, 
   &:hover .tween__index { 
      color: ${colors.coolGray};
      background: ${colors.navyblueDark};
   }
   
   .tween__text {
      flex-basis: 44%;
      padding: 15px;
      border-radius: 10px;
      transition: all .5s ease-in-out;
   }

   .tween__header {
      flex-basis: 44%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: ${props => props.left ? 'right' : 'left'};
      padding: 15px;
      text-transform: capitalize;
   }
   .tween__job {
      margin: 0;
   }
   .tween__company {
      margin: 10px 0;
      color: ${colors.purple};
   }

   .tween__lineHolder {
      position: relative;
      flex-basis: 53px;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   .tween__line {
      position: absolute;
      background: ${colors.navyblueDark};
      width: 4px;
      min-height: 100%;
   }
   .tween__index {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 3px solid ${colors.navyblueDark};
      background: ${colors.coolGray};
      transition: all .5s ease-in-out;
      z-index: 1;
   }

   @media only screen and (${mediaQueries.query1}) {
      flex-direction: column;

      .tween__lineHolder {
         display: none;
      }
      .tween__header {
         order: -1;
         text-align: left;
      }
   }

`;

export default Tween
