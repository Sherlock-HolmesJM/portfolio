import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
   src: any,
   alt: string,
   name: string,
   category: string,
   direction?: number
}

function ProjectImage(props: Props) {
   const { src, alt, name, category, direction } = props;

   const num = 300;

   const variants = {
      enter: (direction: number) => ({ 
         x: direction > 0 ? num : -num,
         opacity: 0,
      }),
      center: {
         x: 0,
         opacity: 1,
      },
      exit: (direction: number) => ({
         x: direction > 0 ? num : -num,
         opacity: 0
      })
   };

   return (
         <Div variants={variants} custom={direction} initial="enter" animate="center" exit="exit"
               transition={{x: { type: 'spring', stiffness: 300, damping: 30}, opacity: { duration: 0.2}}}
         >
            <Img src={src} alt={alt} />
            <H3>{name}</H3>
            <P>{category}</P>
         </Div>
   )
}

const Div = styled(motion.div)`
   position: relative;
   margin: 10px;
`;

const Img = styled.img`
   width: 350px;
   height: 300px;
`;

const H3 = styled.h3`
   position: absolute;
   bottom: 20px;
   left: 5px;
`;

const P = styled.p`
   position: absolute;
   bottom: -5px;
   left: 5px;
`;

export default ProjectImage
