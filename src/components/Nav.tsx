import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Context } from '../context'

import MenuItem from './MenuItem';

interface Props { }

function Nav(props: Props) {

   const sections = useContext(Context).sections;

   const variants = {
      open: {
         opacity: 1,
         height: 150,
         transition: { staggerChildren: 0.07, stagger: 0.05 }
      },
      closed: {
         opacity: 0,
         height: 0,
         transition: { staggerChildren: 0.05, staggerDirection: -1, delay: 0.3 }
      },
      keep: {
         height: 20,
         opacity: 1,
      }
    };

   return (
      <Ul className="ul" variants={variants}>
         {sections.map((section, index) => <MenuItem key={index} name={section} />)}
      </Ul>
   )
}

const Ul = styled(motion.ul)`
   display: flex;
   justify-content: space-around;
   list-style-type: none;
   width: 500px;

   @media only screen and (max-width: 989px) {
      flex-direction: column;
      width: 100%;
      padding: 10px;
      transform: translateY(50px);
      margin: 0px -30px 0 -150px;
      background: #fff;
   }
`;

export default Nav
