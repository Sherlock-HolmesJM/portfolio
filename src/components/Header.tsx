import React, { useState } from 'react';
import './Header.css';
import logo from '../logo.svg'
import log from '../logger';

interface Props {  }

function Header(props: Props) {
   const [sticky, setSticky] = useState(false);
   // const { } = Props;

   window.addEventListener('scroll', () => {
      if (window.scrollY === 2 || window.scrollY === 10) {
        if (!sticky) setSticky(true);
      } else if (window.scrollY === 0) {
         setSticky(false);
      }
   });

   log('Sticky: ', sticky);

   return (
      <header className={`header ${sticky ? 'header--sticky' : ''} `}>
         <div className="header__logoDiv">
            <img src={logo} alt="logo" className="header__logo"/>
         </div>

         <ul className="header__ul">
            <li className="header__li">
               <a href="./#" className="header__a">
                  Home
                  <span className="header__span"></span>
               </a>
            </li>
            <li className="header__li">
               <a href="./#" className="header__a">
                  About
                  <span className="header__span"></span>
               </a>
            </li>
            <li className="header__li">
               <a href="./#" className="header__a">
                  Services
                  <span className="header__span"></span>
               </a>
            </li>
            <li className="header__li">
               <a href="./#" className="header__a">
                  Portfolio
                  <span className="header__span"></span>
               </a>
            </li>
            <li className="header__li">
               <a href="./#" className="header__a">
                  Pricing
                  <span className="header__span"></span>
               </a>
            </li>
            <li className="header__li">
               <a href="./#" className="header__a">
                  Experience
                  <span className="header__span"></span>
               </a>
            </li>
         </ul>
      </header>
   )
}

export default Header
