import React, { useState } from 'react';
import './Header.css';
import logo from '../logo.svg';
import { MenuToggle } from './MenuToggle';
import { motion, useCycle } from 'framer-motion';
import Nav from './Nav';
import log from '../logger';

interface Props { }

function Header(props: Props) {

   const [isOpen, toggleOpen] = useCycle(false, true);
   const [sticky, setSticky] = useState(false);

   window.addEventListener('scroll', () => {
      if (window.scrollY === 2 || window.scrollY === 10) {
        if (!sticky) setSticky(true);
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

   const mediaQuery = window.matchMedia('(max-width: 989px)');
   const [matches, setMatches] = useState(mediaQuery.matches);

   mediaQuery.addEventListener('change', e => { if (matches !== e.matches) setMatches(e.matches) });

   return (
      <motion.header className={`header ${sticky ? 'header--sticky' : ''} `}
         initial={false}
         animate={!matches ? "keep" : isOpen ? "open" : "closed"}
      >
         <div className="header__logoDiv">
            <motion.img initial={logoInit} animate={logoVariant} src={logo} alt="logo" className="header__logo"/>
         </div>

         <Nav />

         <MenuToggle toggle={() => toggleOpen() } />
      </motion.header>
   )
}

export default Header;
