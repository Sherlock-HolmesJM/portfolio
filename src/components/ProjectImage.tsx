import React from 'react'
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
   src: any,
   alt: string,
   name: string,
   category: string,
   direction?: number,
}

function ProjectImage(props: Props) {
   const { src, alt, name, category, direction } = props;

   // const num = 1000;

   const variants = {
      enter: (direction: number) => {
        return {
          x: direction > 0 ? 1000 : -1000,
          opacity: 0
        };
      },
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
      },
      exit: (direction: number) => {
        return {
          zIndex: 0,
          x: direction < 0 ? 1000 : -1000,
          opacity: 0
        };
      }
    };

   return (
         <Div>
            <AnimatePresence initial={false} custom={direction}>
               <motion.img 
                  className="img"
                  src={src} 
                  alt={alt} 
                  variants={variants} 
                  custom={direction} 
                  initial="enter" 
                  animate="center" 
                  exit="exit"
                  transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                     }}
               />
            </AnimatePresence>
         </Div>
   )
}

const Div = styled(motion.div)`
   margin: 10px;
   width: 100%;

   .img {
      height: 400px;
      width: 100%;
   }
`;

export default ProjectImage
