import React from 'react';
import styled from 'styled-components';
import aboutHero from '../images/about_hero.png';
import Range from '../components/Range';
import SubHeader from '../components/SubHeader';
import * as config from '../config';

interface Props {}

function About(props: Props) {
   // const {} = props

   return (
      <ABOUT>
         <Aside></Aside>

         <Main>
            <MainDiv1>
                  <HeroFrame></HeroFrame>
                  <HeroFrame2></HeroFrame2>
                  <Hero src={aboutHero} alt="about_hero" />
            </MainDiv1>

            <MainDiv2>
                  <SubHeader name="About" caption="Why Should You Hire Me?"/>

                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae doloremque ex perferendis quo in quia, porro nemo. Enim magni consectetur asperiores dicta recusandae est, ut facilis, iste, molestias vitae ab similique culpa velit neque ea a corporis ipsa accusantium.
                  </p>
                  
                  <Range skill="JavaScript" value="80" />
                  <Range skill="ReactJS" value="75" />
                  <Range skill="NodeJS" value="88" />
                  <Range skill="HTML5/CSS3" value="80" />
                  <Range skill="Web Animation" value="65" />
                  <Range skill="Firebase/Heroku/Netlify" value="70" />
                  <Range skill="Git/GitHub" value="76" />
            </MainDiv2>
         </Main>

         <Aside></Aside>
      </ABOUT>
   )
}

const ABOUT = styled.div`
   display: flex;
`;

const Main = styled.main`
   flex-basis: 90%;
   display: flex;
`;

const MainDiv1 = styled.div`
   flex-basis: 70%;
   position: relative;
`;
const HeroFrame = styled.div`
   position: absolute;
   bottom: 33px;
   border: 14px solid ${config.color3};
   border-top: none;
   width: 350px;
   height: 380px;
   z-index: -111;
`;
const HeroFrame2 = styled(HeroFrame)`
   height: 412px;
   width: 360px;
   border: none;
   border-top: 14px solid ${config.color3};
   border-left: 14px solid ${config.color3};
   transform: skewY(10deg);
`;
const Hero = styled.img`
   width: 500px;
`;

const MainDiv2 = styled.div`
   flex-basis: 30%;

   p { 
      color: ${config.color4}
   }
`;

const Aside = styled.aside`
   flex-basis: 10%;
`;

export default About
