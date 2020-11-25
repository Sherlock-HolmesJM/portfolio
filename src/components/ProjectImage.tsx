import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

import portfolioImg from '../images/portfolio.png';
import beachImg from '../images/beachResort.png';
import dbImg from '../images/dashboard.png';

interface Props {
  nextValues: [number, number];
}

function ProjectImage(props: Props) {
  const { nextValues } = props;

  const images = [portfolioImg, beachImg, dbImg];

  const [[next, direction], setPage] = useState([1, 1]);

  const index = wrap(0, images.length, next);

  const paginate = (newDirection: number) => {
    setPage([next + newDirection, newDirection]);
  };

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  useEffect(() => {
    setPage(nextValues);
  }, [nextValues]);

  const threshHold = 1000;

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? threshHold : -threshHold,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.2 },
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? threshHold : -threshHold,
        opacity: 0,
        transition: { duration: 0.2 },
      };
    },
  };

  return (
    <AnimatePresence custom={direction}>
      <Img
        key={images[index]}
        className='img'
        src={images[index]}
        alt='project'
        variants={variants}
        custom={direction}
        initial='enter'
        animate='center'
        exit='exit'
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < threshHold) paginate(1);
          else paginate(-1);
        }}
      />
    </AnimatePresence>
  );
}

const Img = styled(motion.img)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 12px;
`;

export default ProjectImage;
