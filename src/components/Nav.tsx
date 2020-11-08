import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';

interface Props {}

function Nav(props: Props) {
   // const {} = props
   
   const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Experience'];

   const variants = {
      open: {
         translateY: 50,
         height: '150px',
         opacity: 1,
        transition: { staggerChildren: 0.07, stagger: 0.05 }
      },
      closed: {
         translateY: 0,
         height: '100px',
         opacity: 0,
        transition: { staggerChildren: 0.05, staggerDirection: -1, stagger: 0.03, delay: 0.2 }
      },
      keep: { 
         translateY: 0,
         height: '20px',
         opacity: 1,
      }
    };

   return (
      <Ul className="ul" variants={variants}>
         {menuItems.map((item, index) => <MenuItem key={index} name={item} />)}
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
      height: 150px;
      padding: 10px;
      margin: 0px -30px 0 -150px;
      background: #fff;
   }
`;

export default Nav
