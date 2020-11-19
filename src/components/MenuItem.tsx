import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { white, navyblueDark, navyblueLight } from '../config';

interface Props {
   name: string,
   path?: string,
   index: number,
   sticky?: boolean,

   toggleActive: (e: any) => void
}

function MenuItem(props: Props) {

   const { name, index, toggleActive, sticky } = props;

   // const active = name.toLocaleLowerCase() === activeSection.toLocaleLowerCase();
   const active = false;

   const variants = {
      open: {
        y: 0,
        opacity: 1,
      },
      closed: {
        y: -10,
        opacity: 0,
      },
      keep: {
         y: 0,
        opacity: 1,
      }
   };

   return (
      <Li className="li" variants={variants}>
         <A href={`#${name.toLowerCase()}`} className="li__a" 
            data-index={index} 
            active={active}
            sticky={(sticky as boolean)}
            onClick={toggleActive}
         >
            {name}
            <Span className="li__span"></Span>
         </A>
      </Li>
   )
}

const Li = styled(motion.li)`
   position: relative;
   margin: 0 20px 0 20px;
`;

const A = styled(motion.a)<{ active: boolean, sticky: boolean }>`
   font-size: 18px;
   font-weight: 600;
   text-decoration: none;
   color: ${props => props.active ? navyblueDark : props.sticky ? navyblueLight :  white};
   &:hover .li__span {
      border: 1px dashed #fff;
      width: 97%;
   }

   @media only screen and (max-width: 989px) {
      color: ${(props) => props.active ? navyblueDark :  navyblueLight};
      :hover { color: ${navyblueDark} }
   }
`;

const Span = styled.span`
   position: absolute;
   bottom: -10px;
   left: 0;
   display: block;
   width: 0;
   transition: .3s width;
`;

export default MenuItem
