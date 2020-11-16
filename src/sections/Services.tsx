import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import SubHeader from '../components/SubHeader';

const texts = [
   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quas odit quis voluptas, laborum dolor.',   
   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quas odit quis voluptas, laborum dolor.',    
];

interface Props {}

function Services(props: Props) {
   const {} = props

   return (
      <SERVICES>
         <Aside></Aside>

         <Main>
            <SubHeader name="Services" caption="Services I Provide" />

            <CardContainer>
               <Card />
            </CardContainer>
         </Main>

         <Aside></Aside>
      </SERVICES>
   )
}

const SERVICES = styled.section`
   display: flex;
`;

const Main = styled.main`
   flex-basis: 90%;
`;

const CardContainer = styled.div`
   display: flex;
   // flex-wrap: wrap;
`;

const Aside = styled.aside`
   flex-basis: 10%;
`;

export default Services
