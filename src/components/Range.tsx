import React from 'react';
import styled from 'styled-components';
import { color1, color2, color3 } from '../config';

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
   width: 600px;
   margin: 10px;
   border-radius: 15px;
`;

const Div = styled.div`
   margin: 0 0 10px 0;
`;

const SkillbarContainer = styled.div`
   position: relative;
   background: ${color2};
   width: 600px;
   height: 9px;
`;

const Skillbar = styled.div<{ value: string | number}>`
   position: absolute;
   top: 0;
   height: 9px;
   width: ${prop => prop.value}%;
   background-color: ${color3};
   border-radius: 15px;
`;

const SkillbarCap = styled.div`
   position: absolute;
   top: -50%;
   right: 0;
   height: 14px;
   width: 3px;
   background-color: ${color1};
   border: 2px solid ${color3};
`;

const SkillPercentage = styled.span`
   position: absolute;
   top: -25px;
   right: 5px;
`;

export default Range
