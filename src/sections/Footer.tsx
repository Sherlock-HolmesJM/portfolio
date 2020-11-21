import React from 'react';
import styled from 'styled-components';
import { ImTwitter } from 'react-icons/im';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { FaTelegramPlane } from 'react-icons/fa';
// import { IoLogoWhatsapp } from 'react-icons/io';

import { colors } from '../config';

import logo from '../logo.svg';
import Aside from '../components/Aside';



interface Props {
   className?: string,
}

function Footer(props: Props) {
   const { className } = props;

   return (
      <FOOTER className={className} id="footer" >
         <Aside></Aside>

         <Main>
            <MainDIv className="footer__logoHolder"> 
               <img src={logo} alt="logo" />
            </MainDIv>

            <MainDIv className="footer__icons">
               <ImTwitter className="footer__icon" onClick={ () => window.location.href = 'https://twitter.com/justice_ugochi'} />
            </MainDIv>

            <MainDIv className="footer__emailHolder">
               <P>sherllyj191@gmail.com</P>
            </MainDIv>
         </Main>

         <Aside></Aside>
      </FOOTER>
   )
}

const FOOTER = styled.div`
   display: flex;
   min-height: 100vh;
   background: ${colors.orshblood};
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
      color: ${colors.purple};
      transition: all .5s ease-in-out;
   }
   .footer__icon:hover { 
      color: ${colors.navyblueDark};
      transform: rotate(-360deg);
   }
`;

const P = styled.p`
   font-size: 30px;
   font-weight: 400;
`;

export default Footer

