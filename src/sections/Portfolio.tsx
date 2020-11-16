import React from 'react';
import styled from 'styled-components';

interface Props {}

function Portfolio(props: Props) {
   // const {} = props

   return (
      <PORTFOLIO>

         <Aside></Aside>

         <Main>
            <div>
               
            </div>
         </Main>

         <Aside></Aside>

      </PORTFOLIO>
   )
}

const PORTFOLIO = styled.section`

`;

const Main = styled.main`
   flex-basis: 90%;
`;

const Aside = styled.aside`
   flex-basis: 10%;
`;

export default Portfolio