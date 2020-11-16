import React from 'react';
import styled from 'styled-components';
import * as config from '../config';

interface Props {
   id?: string,
   className?: string,
   value: number | string,
   skill: string
}

function Range(props: Props) {
   const { id, value, skill } = props

   return (
      <Container id={id}>
         <Div>
            {skill}
         </Div>

         <SkillbarContainer>
            <Skillbar value={value}>
               <SkillbarCap />
            </Skillbar> 
            <SkillPercentage>{value}%</SkillPercentage>
         </SkillbarContainer>
      </Container>
   )
}

const Container = styled.div`
   // width: 600px;
   width: 100%;
   margin: 10px 0;
   border-radius: 15px;
   color: ${config.color5};
`;

const Div = styled.div`
   margin: 0 0 10px 0;
`;

const SkillbarContainer = styled.div`
   position: relative;
   background: ${config.color2};
   width: 550px;
   height: 9px;
`;

const Skillbar = styled.div<{ value: string | number}>`
   position: absolute;
   top: 0;
   height: 9px;
   width: ${prop => prop.value}%;
   background-color: ${config.color3};
   border-radius: 15px;
`;

const SkillbarCap = styled.div`
   position: absolute;
   top: -50%;
   right: 0;
   height: 14px;
   width: 3px;
   background-color: ${config.color1};
   border: 2px solid ${config.color3};
`;

const SkillPercentage = styled.span`
   position: absolute;
   top: -25px;
   right: 5px;
`;

export default Range
