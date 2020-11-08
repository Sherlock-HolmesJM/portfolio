import React, { useState } from 'react';
import { motion } from 'framer-motion';
//@ts-ignore
import styled from 'styled-components';
import log from '../logger';

interface Props {
   name: string,
   path?: string,
}

function MenuItem(props: Props) {
   
   const { name } = props;

   const toggleActive = (e: any) => { e.target.classList.toggle('li__a--active'); };

   const variants = {
      open: {
        y: 0,
        opacity: 1,
      },
      closed: {
        y: -12,
        opacity: 0,
      },
      keep: { 
         y: 0,
        opacity: 1,
      }
   };

   return (
      <Li className="li"
         variants={variants}
      >
         <A href="./#" className="li__a" onClick={toggleActive}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
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

const A = styled(motion.a)`
   font-weight: bold;
   text-decoration: none;
   color: #fff;
   :hover .li__span {
      border: 1px dashed #fff;
      width: 97%;
   }
   .li__a--active {
      color: #16a596;
   }

   @media only screen and (max-width: 989px) {
      color: #4c4c4c;
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
