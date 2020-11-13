import React from 'react';
import styled from 'styled-components';

interface Props {}

function About(props: Props) {
   const {} = props

   return (
      <ABOUT>
         <Aside></Aside>
         <Main></Main>
         <Aside></Aside>
      </ABOUT>
   )
}

const ABOUT = styled.div`

`;

const Main = styled.main`

`;

const Aside = styled.aside`

`;

export default About
