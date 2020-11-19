import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

import MenuItem from './MenuItem';

interface Props { 
   sticky?: boolean,
   activeId?: string,
 }

function Nav(props: Props) {
   const { sticky } = props;
   
   const [activeSection, setActiveSection] = useState('');
   const items = ['Home', 'About', 'Services', 'Portfolio', 'Experience'];

   const toggleActive = (e: any) => {
      const index = parseInt(e.target.dataset.index);
      setActiveSection(items[index]);
   };

   const variants = {
      open: {
         // display: 'block',
         opacity: 1,
         height: 150,
         transition: { staggerChildren: 0.07, stagger: 0.05 }
      },
      closed: {
         // display: 'none',
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
