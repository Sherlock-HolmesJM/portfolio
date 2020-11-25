import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { colors } from '../config';

interface Props {
  id?: string;
  value: number;
  skill: string;
}

function Range(props: Props) {
  const { id, value, skill } = props;
  const [rate, setRate] = useState({ value: 0 });

  const childId = 'bar' + Math.round(Math.random() * value);

  useEffect(() => {
    gsap.defaults({ ease: 'bounce', duration: 5 });

    const trigger = {
      trigger: `#${childId}`,
      start: 'top 90%',
      toggleActions: 'play pause resume complete',
    };

    const target = { value: 0 };

    gsap.to(target, {
      scrollTrigger: trigger,
      value,
      roundProps: 'value',
      onUpdate: () => setRate({ value: target.value }),
    });

    gsap.to(`#${childId}`, {
      scrollTrigger: trigger,
      width: `${value}%`,
    });
  }, []);

  return (
    <Skill id={id}>
      <Div>{skill}</Div>

      <SkillbarContainer>
        <Skillbar id={childId} value={value}>
          <SkillbarCap />
        </Skillbar>
        <SkillPercentage>{rate.value}%</SkillPercentage>
      </SkillbarContainer>
    </Skill>
  );
}

const Skill = styled.div`
  width: 100%;
  margin: 20px 0;
  color: ${colors.purple};
`;

const Div = styled.div`
  margin: 0 0 10px 0;
`;

const SkillbarContainer = styled.div`
  position: relative;
  background: ${colors.purple};
  width: 100%;
  height: 9px;
`;

const Skillbar = styled.div<{ value: string | number }>`
  position: absolute;
  top: 0;
  height: 9px;
  width: 0;
  // width: ${(prop) => prop.value}%; gsap handles this part
  background-color: ${colors.navyblueDark};
  border-radius: 15px;
`;

const SkillbarCap = styled.div`
  position: absolute;
  top: -50%;
  right: 0;
  height: 14px;
  width: 3px;
  background-color: ${colors.coolGray};
  border: 2px solid ${colors.navyblueDark};
`;

const SkillPercentage = styled.span`
  position: absolute;
  top: -25px;
  right: 5px;
`;

export default Range;
