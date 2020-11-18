import React from 'react';
import styled from 'styled-components';

import * as config from '../config';

import Button from '../components/Button';
import SubHeader from '../components/SubHeader';




interface Props {
   className?: string,
   ref?: any,
}

function Experience(props: Props) {
   const { className, ref } = props;

   return (
      <EXPERIENCE id="experience" className={className} ref={ref}>
         <Aside></Aside>

         <Main>
            <MainDiv>
               <SubHeader color={config.white} caption="Have Any Project in Mind?" />
               <p>
                  <em>Let me take care of the implementation details for you.</em>
               </p>
            </MainDiv>

            <MainDiv2>
               <Button className="experience__button">Hire Me!</Button>
            </MainDiv2>
         </Main>

         <Aside></Aside>
      </EXPERIENCE>
   )
}

const EXPERIENCE = styled.section`
   position: relative;
   display: flex;
`;

const Main = styled.main`
   flex-basis: 90%;
   display: flex;
   justify-content: space-between;
   background: ${config.navyblueDark};
   color: ${config.white};
   padding: 10px 60px;
   border-radius: 14px;
   height: 200px;
`;

const MainDiv = styled.div`
   flex-basis: 50%;
   display: flex;
   flex-direction: column;
   // justify-content: center;

   p { 
      font-size: 18px;
   }
`;

const MainDiv2 = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   .experience__button {
      background: ${config.white};
      color: ${config.navyblueDark};
   }
`;

const Aside = styled.aside`
   flex-basis: 10%;
`;

export default Experience
