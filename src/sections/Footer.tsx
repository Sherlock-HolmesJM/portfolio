import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import { ImTwitter } from 'react-icons/im';
import { FaTelegramPlane } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import Nav from '../components/Nav';

interface Props {}

function Footer(props: Props) {
   const {} = props

   return (
      <FOOTER>
         <Aside></Aside>

         <Main>
            <MainDIv className="footer__logoHolder"> 
               <img src={logo} alt="logo" />
            </MainDIv>

            <MainDIv className="footer__icons">
               <ImTwitter />
               <FaTelegramPlane />
               <IoLogoWhatsapp />
            </MainDIv>

            <MainDIv className="footer__emailHolder">
               <p>sherllyj191@gmail.com</p>
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
`;

const Main = styled.main`
   flex-basis: 90%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const MainDIv = styled.div`
   
   .footer__logoHolder {
      margin: 20px 0;
   }
`;

const Aside = styled.aside`
   flex-basis: 10%;
`;

export default Footer
