import React from 'react';
import styled from 'styled-components';
import * as config from '../config';
import Button from '../components/Button';
import SubHeader from '../components/SubHeader';

interface Props {
   id?: string,
}

function Experience(props: Props) {
   const { id } = props

   return (
      <EXPERIENCE id={id}>
         <Aside></Aside>

         <Main>
            <MainDiv>
               <SubHeader color={config.color1} caption="Have Any Project in Mind?" />
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
   display: flex;
`;

const Main = styled.main`
   flex-basis: 90%;
   display: flex;
   justify-content: space-between;
   background: ${config.color3};
   color: ${config.color1};
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
      background: ${config.color1};
      color: ${config.color3};
   }
`;

const Aside = styled.aside`
   flex-basis: 10%;
`;

export default Experience
