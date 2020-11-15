import React from 'react';
import styled from 'styled-components';
import aboutHero from '../images/about_hero.png';
import Range from '../components/Range';
import { color3 } from '../config';

interface Props {}

function About(props: Props) {
   // const {} = props

   return (
      <ABOUT>
         <Aside></Aside>

         <Main>
            <MainDiv>
               <HeroFrame>
                  <Hero src={aboutHero} alt="about_hero" />
               </HeroFrame>
            </MainDiv>

            <MainDiv>
                  <h3>About</h3>
                  <h2>Why Should You Hire Me?</h2>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae doloremque ex perferendis quo in quia, porro nemo. Enim magni consectetur asperiores dicta recusandae est, ut facilis, iste, molestias vitae ab similique culpa velit neque ea a corporis ipsa accusantium.
                  </p>
                  
                  <Range skill="JavaScript" value="80" />
                  <Range skill="ReactJS" value="75" />
                  <Range skill="NodeJS" value="88" />
                  <Range skill="HTML5/CSS3" value="80" />
                  <Range skill="Web Animation" value="78" />
                  <Range skill="Firebase/Heroku/Netlify" value="70" />
                  <Range skill="Git/GitHub" value="76" />
            </MainDiv>
         </Main>

         <Aside></Aside>
      </ABOUT>
   )
}

const ABOUT = styled.div`

`;

const Main = styled.main`
   display: flex;
`;

const MainDiv = styled.div`

`;

const HeroFrame = styled.div`
   border: 3px solid ${color3};
`;

const Hero = styled.img`

`;

const Aside = styled.aside`

`;

export default About
