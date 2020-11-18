import React, { useCallback } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../logo.svg';
import { ImTwitter } from 'react-icons/im';
// import { FaTelegramPlane } from 'react-icons/fa';
// import { IoLogoWhatsapp } from 'react-icons/io';

import * as config from '../config';

import Nav from '../components/Nav';



interface Props {
   className?: string,
}

function Footer(props: Props) {
   const { className } = props;

   gsap.registerPlugin(ScrollTrigger);

   return (
      <FOOTER className={className} >
         <Aside></Aside>

         <Main>
            <MainDIv className="footer__logoHolder"> 
               <img src={logo} alt="logo" />
            </MainDIv>

            <MainDIv className="footer__icons">
               <ImTwitter className="footer__icon" />
            </MainDIv>

            <MainDIv className="footer__emailHolder">
               <P>sherllyj191@gmail.com</P>
            </MainDIv>
            
            <MainDIv className="footer__navHolder">
               <Nav sticky={true} />
            </MainDIv>
         </Main>

         <Aside></Aside>
      </FOOTER>
   )
}

const FOOTER = styled.div`
   display: flex;
   min-height: 100vh;
   background: ${config.orshblood};
`;

const Main = styled.main`
   flex-basis: 90%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const MainDIv = styled.div`
   
   &.footer__logoHolder {
      margin: 20px 0;
   }

   .footer__icon {
      width: 50px;
      height: 50px;
      color: ${config.purple};
      transition: color .5s ease-in-out;
   }
   .footer__icon:hover { 
      color: ${config.navyblueDark};
   }
`;

const P = styled.p`
   font-size: 30px;
   font-weight: 400;
`;

const Aside = styled.aside`
   flex-basis: 10%;
`;

export default Footer

