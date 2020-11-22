import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { MenuToggle } from './MenuToggle';
import Nav from './Nav';
import logo from '../logo.svg';
import Aside from '../components/Aside';

import { Context } from '../context';
import { colors } from '../config';

interface Props {}

function Header(props: Props) {
   const { isOpen, matches, sticky } = useContext(Context);

   const logoVariants = {
      start: {
         scale: 0
      },
      stop: {
         scale: 1,
         transition: { duration: 1 }
      }
   }

   return (
      <HeaderComp id="header" sticky={sticky} initial={false}
                  animate={!matches ? "keep" : isOpen ? "open" : "closed"}>

         <Aside></Aside>
         
         <Main>
            <Div>
               <Img variants={logoVariants} initial="start" animate="stop" src={logo} alt="logo" />
            </Div>

            <Nav />

            <MenuToggle />
         </Main>

         <Aside></Aside>
      
      </HeaderComp>
   )
}

const HeaderComp = styled(motion.header)<{ sticky: boolean}>`
   position: ${props => props.sticky ? 'sticky' : 'absolute'};
   top: 0;
   display: flex;
   height: 47px;
   width: 100%;
   background: ${props => props.sticky ? colors.coolGray : colors.transparent};
   z-index: 111;
`;

const Div = styled.div`
   width: 150px;
`;

const Img = styled(motion.img)`
   padding-top: 15px;
`;

const Main = styled.main`
   flex-basis: 90%;
   display: flex;
   justify-content: space-between;
`;

export default Header;
