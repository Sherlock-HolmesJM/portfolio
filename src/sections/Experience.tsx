import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { colors, mediaQueries } from '../config';

import Button from '../components/Button';
import SubHeader from '../components/SubHeader';
import Tween from '../components/Tween';
import Aside from '../components/Aside';

const texts = [
  "I've been working really hard to be amongst the best frontend web developers in the world. I really do love working with and bending my solution mindset around data. I love logic.",
  "I single-handedly engineered the development of the Rest API that powers the Guest page of the Result Management System. Yes, I'm awesome like.",
  "I enginnered the animation of this portfolio website you are on right now. It's cool, right?",
];

interface Props {
  className?: string;
}

function Experience(props: Props) {
  const { className } = props;

  const { inView, ref } = useInView({ triggerOnce: true });

  const variants = {
    animate: {
      transition: { staggerChildren: 0.8, delay: 0.5 },
    },
  };

  return (
    <EXPERIENCE id='experience' className={className}>
      <Aside></Aside>

      <Main>
        <SubHeader name='experience' caption='work experience' center />

        <motion.div
          className='experience__timeline'
          ref={ref}
          variants={variants}
          initial='initial'
          animate={inView ? 'animate' : ''}
        >
          <Tween
            text={texts[0]}
            job='Web Developer'
            company='self'
            index={1}
            period='2018 - 2020'
          />
          <Tween
            text={texts[1]}
            job='Rest API Developer'
            company='self'
            index={2}
            period='2019 - 2020'
            left
          />
          <Tween
            text={texts[2]}
            job='Web Animator'
            company='self'
            index={3}
            period='2020 - 2020'
          />
        </motion.div>

        <div className='experience__call'>
          <SubHeader
            color={colors.coolGray}
            caption='Have Any Project in Mind?'
          />
          <p>
            <em>Let me take care of implementation details for you.</em>
          </p>

          <Button
            className='experience__button'
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <a href='#footer' className='button__hireMe'>
              Hire Me!
            </a>
          </Button>
        </div>
      </Main>

      <Aside></Aside>
    </EXPERIENCE>
  );
}

const EXPERIENCE = styled.section`
  position: relative;
  background: ${colors.coolGray};
  display: flex;
  min-height: 100vh;
  min-width: 405px;
`;

const Main = styled.main`
  flex-basis: 90%;

  .experience__call {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${colors.navyblueDark};
    background-image: ${colors.bg_linear_grad};
    color: ${colors.coolGray};
    padding: 0 min(5%, 60px) 20px min(5%, 60px);
    border-radius: 14px;
    margin-top: 60px;
  }
  .experience__button {
    position: absolute;
    right: 60px;
    background: ${colors.coolGray};
    color: ${colors.navyblueDark};
  }

  @media only screen and (${mediaQueries.query1}) {
    .experience__button {
      position: static;
    }
  }
`;

export default Experience;
