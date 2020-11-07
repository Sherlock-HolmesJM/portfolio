import React, { useState } from 'react';
import './Header.css';
// @ts-ignore
import anime from 'animejs/lib/anime.es';
import { VscMenu, VscClose } from 'react-icons/vsc';
import logo from '../logo.svg'
import log from '../logger';

interface Props {  }

function Header(props: Props) {
   const [sticky, setSticky] = useState(false);
   let showNavAnime: any;

   const displayEl = (el: string) => (document.querySelector(el) as HTMLElement).style.display = 'block';
   const hideEl = (el: string) => (document.querySelector(el) as HTMLElement).style.display = 'none';

   window.addEventListener('scroll', () => {
      if (window.scrollY === 2 || window.scrollY === 10) {
        if (!sticky) setSticky(true);
      } else if (window.scrollY === 0) {
         setSticky(false);
      }
   });

   const showNav =  () => {

      showNavAnime = anime({
         targets: '.header__ul',
         translateY: 70,
         duration: 1000,
         easing: 'spring(1, 80, 10, 0)',
         begin: () => { displayEl('.header__ul'); }
       });


       showNavAnime.finished.then(() => {
         hideEl('.header__menu');
         displayEl('.header__close');
       });

   };

   const closeNav = () => {

      showNavAnime.play();

      showNavAnime.finished.then(() => {
         showNavAnime.reverse();

         showNavAnime.finished.then(() => {
            hideEl('.header__ul');
            hideEl('.header__close');
            displayEl('.header__menu');
         })
      });

   };

   return (
      <header className={`header ${sticky ? 'header--sticky' : ''} `}>
         <div className="header__logoDiv">
            <img src={logo} alt="logo" className="header__logo"/>
         </div>

         <ul className={`header__ul`}>
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

         <div className="header__menuDiv">
            <VscMenu className={`header__menu `} onClick={() => showNav() }/>
            <VscClose className={`header__close `} onClick={() => closeNav()}/>
         </div>
      </header>
   )
}

export default Header;
