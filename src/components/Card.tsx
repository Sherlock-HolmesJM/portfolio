import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { colors } from '../config';

interface Props {
  caption: string;
  text: string;
  Icon: any;
}

const transition = 'all .5s ease-in-out;';

function Card(props: Props) {
  const { caption, Icon, text } = props;

  const variants = {
    inView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    initial: {
      opacity: 0,
      y: 100,
    },
  };

  return (
    <CARD className='card' variants={variants}>
      <div className='card__iconDiv'>
        <Icon className='card__icon' />
      </div>

      <h2 className='card__caption'>{caption}</h2>

      <p className='card__text'>{text}</p>
    </CARD>
  );
}

const CARD = styled(motion.div)`
  background: ${colors.coolGray};
  width: 280px;
  padding: min(5%, 30px);
  margin: 10px;
  border: 3px dashed ${colors.orshblood};
  border-radius: 10px;
  transition: ${transition};

  &:hover {
    background: ${colors.navyblueDark};
    color: ${colors.coolGray};
    border: 3px solid ${colors.coolGray};
  }
  &:hover .card__iconDiv {
    background: ${colors.coolGray};
    color: ${colors.navyblueDark};
  }
  &:hover .card__caption,
  &:hover .card__text {
    color: ${colors.coolGray};
  }

  .card__iconDiv {
    display: flex;
    justify-content: center;
    width: 80px;
    height: 80px;
    font-size: 46px;
    line-height: 40px;
    background: ${colors.navyblueDark};
    color: ${colors.coolGray};
    text-align: center;
    border-radius: 30px;
    border-bottom-right-radius: 0px;
    transition: ${transition};
  }
  .card__icon {
    width: 60%;
    height: 60%;
    align-self: center;
  }
  .card__caption {
    color: ${colors.navyblueLight};
    transition: ${transition};
  }
  .card__text {
    color: ${colors.orshblood};
    transition: ${transition};
    font-size: 18px;
    font-weight: 400px;
  }
`;

export default Card;
