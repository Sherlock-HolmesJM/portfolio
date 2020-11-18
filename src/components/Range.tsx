import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import * as config from '../config';

interface Props {
   id?: string,
   value: number,
   skill: string
}

function Range(props: Props) {

   const { id, value, skill } = props;
   const [rate, setRate] = useState({ value: 0 });

   const childId = 'bar' + Math.round((Math.random() * value));

   useEffect(() => {

      gsap.defaults({ ease: 'circ', duration: 5 });

      const trigger = {
         trigger: `#${childId}`,
         start: 'top 90%',
         toggleActions: 'play pause resume complete',
      };

      const target = { value: 0 };

      gsap.to(target, {
         ScrollTrigger: trigger,
         value,
         roundProps: 'value',
         onUpdate: () => setRate({ value: target.value })
      });

      gsap.to(`#${childId}`, {
         ScrollTrigger: trigger,
         width: `${value}%`,
      });

   }, [value]);

   return (
      <Skill id={id}>
         <Div>
            {skill}
         </Div>

         <SkillbarContainer>
            <Skillbar id={childId} value={value}>
               <SkillbarCap />
            </Skillbar> 
            <SkillPercentage>{rate.value}%</SkillPercentage>
         </SkillbarContainer>
      </Skill>
   )
}

const Skill = styled.div`
   // width: 600px;
   width: 100%;
   margin: 20px 0;
   border-radius: 15px;
   color: ${config.purple};
`;

const Div = styled.div`
   margin: 0 0 10px 0;
`;

const SkillbarContainer = styled.div`
   position: relative;
   background: ${config.purple};
   width: 550px;
   height: 9px;
`;

const Skillbar = styled.div<{ value: string | number}>`
   position: absolute;
   top: 0;
   height: 9px;
   width: 0;
   // width: ${prop => prop.value}%; gsap handles this part
   background-color: ${config.navyblueDark};
   border-radius: 15px;
`;

const SkillbarCap = styled.div`
   position: absolute;
   top: -50%;
   right: 0;
   height: 14px;
   width: 3px;
   background-color: ${config.white};
   border: 2px solid ${config.navyblueDark};
`;

const SkillPercentage = styled.span`
   position: absolute;
   top: -25px;
   right: 5px;
`;

export default Range
