import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';
import log from '../logger';

interface Props { 
   sticky: boolean,
 }

function Nav(props: Props) {
   const { sticky } = props;
   
   const [itemsState, setItemsState] = useState([false, false, false, false, false, false]);
   const items = ['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Experience'];

   const toggleActive = (e: any) => {
      const index = parseInt(e.target.dataset.index);
      const tempState = [false, false, false, false, false, false];
      tempState[index] = index === 0 ? false : true;

      setItemsState([...tempState]);
   };

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
         {items.map((item, index) => <MenuItem key={index} 
                                               index={index} 
                                               active={itemsState[index]} 
                                               name={item}
                                               sticky={sticky}
                                               toggleActive={toggleActive} />)}
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
