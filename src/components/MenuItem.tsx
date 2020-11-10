import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import log from '../logger';

interface Props {
   name: string,
   path?: string,
   active: boolean,
   index: number,
   sticky: boolean,

   toggleActive: (e: any) => void
}

function MenuItem(props: Props) {
   
   const { name, active, index, toggleActive, sticky } = props;

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
         <A href="./#" className="li__a" 
            data-index={index} 
            active={active}
            sticky={sticky}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
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
`;

const A = styled(motion.a)<{ active: boolean, sticky: boolean }>`
   font-weight: bold;
   text-decoration: none;
   color: ${props => props.active ? '#16a596' : props.sticky ? '#4c4c4c' :  '#fff'};
   &:hover .li__span {
      border: 1px dashed #fff;
      width: 97%;
   }

   @media only screen and (max-width: 989px) {
      color: ${(props) => props.active ? '#16a596' :  '#4c4c4c'};
      :hover { color: #16a596; }
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
