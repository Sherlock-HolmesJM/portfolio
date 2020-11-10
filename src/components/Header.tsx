import React, { useState } from 'react';
import { motion, useCycle } from 'framer-motion';
import styled from 'styled-components';
import { MenuToggle } from './MenuToggle';
import log from '../logger';
import Nav from './Nav';
import logo from '../logo.svg';

interface Props { 
   matches: boolean,
}

function Header(props: Props) {
   const { matches } = props;

   const [isOpen, toggleOpen] = useCycle(false, true);
   const [sticky, setSticky] = useState(false);

   window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        if (sticky === false) {
           setSticky(true);
         }
      } else if (window.scrollY === 0) {
         setSticky(false);
      }
   });

   const logoInit = {
      y: -50,
      opacity: 0
   }

   const logoVariant = {
      y: 0,
      opacity: 1
   }

   return (
      <HeaderComp className={sticky ? 'header--sticky' : ''}
         initial={false}
         animate={!matches ? "keep" : isOpen ? "open" : "closed"}
         sticky={sticky}
         matches={matches}
      >
         <Div>
            <Img initial={logoInit} animate={logoVariant} src={logo} alt="logo" />
         </Div>

         <Nav sticky={sticky} />

         <MenuToggle toggle={() => toggleOpen() } />
      </HeaderComp>
   )
}

const HeaderComp = styled(motion.header)<{ sticky: boolean, matches: boolean }>`
   position: ${props => props.sticky ? 'sticky' : 'absolute'};
   top: 0;
   display: flex;
   justify-content: space-around;
   height: 100px;
   width: 100%;
   padding: 10px;
   transition: all .6s;
   z-index: 111;

   &.header--sticky {
      height: 50px;
      background: #fff;
      border-radius: 0px;
      box-shadow:   5px 5px 10px #d9d9d9, 
      -5px -5px 10px #ffffff;
   }

   @media only screen and (max-width: 989px) {
      justify-content: space-between;
      padding-left: 5%;
      padding-right: 8%;
   }
`;

const Div = styled.div`
   width: 150px;
`;

const Img = styled(motion.img)`
   // float: left;
   padding-top: 15px;
`;

export default Header;
